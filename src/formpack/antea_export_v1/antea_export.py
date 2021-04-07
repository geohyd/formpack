# coding: utf-8

import io
import os
import uuid
import requests
import shutil
import json
from subprocess import call
from io import BytesIO
from PIL import Image

class IAnteaExport(object):
    def __init__(self, formPack, settings, submissions, xform_id, token, user, export_type):
        self.formPack = formPack
        self.settings = settings
        self.submissions = submissions
        self.xform_id = xform_id
        self.form_id = None
        self.token = token
        self.user = user
        self.export_type = export_type
        self.exportPath = "/srv/kobo/scripts/exportantea/{}".format(export_type)
        self.imageQuality = 'download_large_url' #('download_url';'download_large_url';'download_medium_url';'download_small_url')
        

    def init_folder(self, rootPath):
        """
        Init a new working folder with uuid
        :param rootPath: the root path
        :return: the path of new directory
        """
        myUuid = str(uuid.uuid4())
        tmpFolder = u'{}/{}'.format(
            rootPath,
            myUuid
        )
        os.mkdir(tmpFolder)
        path = u'{}/images'.format(tmpFolder)
        os.mkdir(path)
        path = u'{}/images/metadata'.format(tmpFolder)
        os.mkdir(path)
        return tmpFolder


    def get_form_id(self):
        """
        Return the formid of the current form
        :return: formid
        """
        headers = {'Authorization': 'token %s' % (self.token)}
        # https://survea.geo-hyd.net/kc/api/v1/forms?format=json
        form_url = u'{}/api/v1/forms'.format(
            self.settings.KOBOCAT_URL
        )
        resp = requests.get(form_url, headers=headers)
        for form in resp.json():
            if form["id_string"] == self.xform_id:
                return form["formid"]
        raise Exception('xform_id {} does not have a form_id in kobocat'.format(self.xform_id))

    def get_data(self, form_id):
        """
        Download json data from survea api
        :param form_id: the form_id
        """
        url = u'{}/api/v1/data/{}?format=json'.format(
            self.settings.KOBOCAT_URL,
            form_id
        )
        headers = {'Authorization': 'token %s' % (self.token)}
        req = requests.get(url, headers=headers)
        if not req.ok:
            raise Exception('Cannot get data form kobocat api form id : {}'.format(form_id))
        return req.json()


    def _fixUrlBug(self, url):
        """
        since Survea updated, there are two type of url attachment ....
        Harmonizes all url
        :param url: attachment url from data
        """
        if self.settings.KOBOCAT_URL not in url:
            fixUrl = self.settings.KOBOCAT_URL + url
            fixUrl = fixUrl.replace("geo-hyd.net/kc/media/",
                              "geo-hyd.net/kc/kc/media/original?media_file=")
        else:
            fixUrl = url
        return fixUrl

    def get_media(self, json_data, exportPath, quality = 'download_large_url'):
        """
        Download the attchement media of a Survea JSON dataSet
        :param json_data: Survea JSON dataSet
        :param exportPath: The saving path attchement
        :param quality: [optionnal] quality of result image ('download_url';'download_large_url';'download_medium_url';'download_small_url')
        """
        headers = {'Authorization': 'token %s' % (self.token)}
        for sub in json_data:
            for att in sub['_attachments']:
                fileName = att['filename'].split("/")[-1]
                if quality in att:
                    url = self._fixUrlBug(att[quality])
                else:
                    url = self._fixUrlBug(att['download_url'])
                dest = u'{}/{}'.format(exportPath, fileName)
                img = requests.get(url, headers=headers)
                if img.ok:
                #     pilImage = Image.open(BytesIO(img.content))
                #     pilImage.save(dest, quality=quality)
                #     pilImage.close()
                    with open(dest, 'wb') as handler:
                        handler.write(img.content)

    def get_metadata(self, form_id, exportPath):
        """
        Download the metadata files if exist in the /images/metadata directory
        :param form_id: the form_id
        :param exportPath: The saving path attchement
        """
        try:
            headers = {'Authorization': 'token %s' % (self.token)}
            url = u'{}/api/v1/forms/{}?format=json'.format(
                self.settings.KOBOCAT_URL,
                form_id
            )
            form_resp = requests.get(url, headers=headers)
            if form_resp.ok and "metadata" in form_resp.json() :
                for metadata in form_resp.json()["metadata"] :
                    if metadata["data_type"] == "media":
                        id = metadata["id"]
                        filename = metadata["data_value"]
                        url = "{}/api/v1/metadata/{}.{}".format(self.settings.KOBOCAT_URL, id, filename.split(".")[-1])
                        dest = "{}/{}".format(exportPath, filename)
                        if url:
                            img = requests.get(url, headers=headers)
                            if img.ok:
                                # pilImage = Image.open(BytesIO(img.content))
                                # pilImage.save(dest, quality=quality)
                                with open(dest, 'wb') as handler:
                                    handler.write(img.content)
        except Exception as e:
            print("Cannot download metadata for form_id {}".format(form_id))


    def write_xlsx_data(self, filePath):
        """
        Write the form data in XLSX file
        :param filePath: the XLSX file destination
        """
        self.formPack.to_xlsx(filePath, self.submissions)

    def write_json_data(self, filePath):
        """
        Write the form data in JSON file
        :param filePath: the JSON file destination
        :return:
        """
        jsonData = self.formPack.to_json(self.submissions)
        with io.open(filePath, 'w', encoding='utf8') as json_file:
            json_file.write(json.dumps(jsonData, ensure_ascii=False))

    """ def standardExecuteTemplate(self):
        print("Got to execute NODEJS")
        sciprtPath = "{}/index.js".format(self.exportPath)
        templatePath = u'{}/{}'.format(self.tmpFolder, self.templateFileName)
        jsonDataPath = self.json_path
        imagePath = u'{}/images'.format(self.tmpFolder)
        command = ["n", "use", "10.16.0", sciprtPath, "-t", templatePath, "-d", jsonDataPath, "-i", imagePath]
        print(" ".join(command))
        call(command) """

    def standard_init(self, rootPath, getmedia = True):
        self.tmpFolder = self.init_folder(rootPath)
        self.form_id = self.get_form_id()
        self.data = self.get_data(self.form_id)
        if getmedia:
            self.get_media(self.data, u"{}/images".format(self.tmpFolder), self.imageQuality)
            self.get_metadata(self.form_id, u"{}/images/metadata".format(self.tmpFolder))
        self.json_path = u'{}/data.json'.format(self.tmpFolder)
        self.write_json_data(self.json_path)
        return self.tmpFolder

    """ def standard_init(self, rootPath, templateFilePath):
        self.tmpFolder = self.init_folder(rootPath)
        shutil.copy2(templateFilePath, self.tmpFolder)
        self.form_id = self.get_form_id()
        self.data = self.get_data(self.form_id)
        self.get_media(self.data, u"{}/images".format(self.tmpFolder))
        self.get_metadata(self.form_id, u"{}/images/metadata".format(self.tmpFolder))
        self.xlsx_path = u'{}/data.xlsx'.format(self.tmpFolder)
        self.json_path = u'{}/data.json'.format(self.tmpFolder)
        # self.write_xlsx_data(self.xlsx_path)
        self.write_json_data(self.json_path)
        return self.tmpFolder """

    # TODO : You MUST impletmented this method
    # TODO : This method as called at the start of process
    # TODO : you need to return the final xlsx path
    def compute(self):
        raise Exception("Not implemented")

    # TODO : You MUST impletmented this method
    # This method must return the absolute path of final resultat
    # The sub process read this temp file as binary file and copy in the final export file
    def get_final_file_path(self):
        raise Exception("Not implemented")

    # TODO : This method as called at the end of process
    # You can delete all the temp files here and some what else
    def finish(self):
        print("not implemented")