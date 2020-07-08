# coding: utf-8

import uuid
import os
# from shutil import copy2
import requests
from subprocess import call
import shutil
from .antea_export import IAnteaExport

class AnteaExport(IAnteaExport):

    def __init__(self, formPack, settings, submissions, xform_id, token, user, export_type):
        #Call super class for init object
        IAnteaExport.__init__(self, formPack, settings, submissions, xform_id, token, user, export_type)
        #And override some code
        self.exportPath = "/srv/kobo/scripts/exportantea/fichesol"
        self.templateFileName = "template.xlsx"
        self.template = u"{}/{}".format(self.exportPath, self.templateFileName)
        self.data = None
        self.urls = {}
        # <KOBOCAT_URL>/<USER>/exports/<FORM_ID>/zip/new
        media_url = u'{}/{}/exports/{}/zip/new'.format(
            settings.KOBOCAT_URL,
            self.user,
            self.xform_id
        )
        # https://survea.geo-hyd.net/kc/api/v1/forms?format=json
        form_url = u'{}/api/v1/forms'.format(
            settings.KOBOCAT_URL
        )
        self.urls["media"] = media_url
        self.urls["forms"] = form_url

    def get_form_id(self):
        headers = {'Authorization': 'token %s' % (self.token)}
        resp = requests.get(self.urls["forms"], headers=headers)
        for form in resp.json():
            if form["id_string"] == self.xform_id:
                self.form_id = form["formid"]
                break
        if self.form_id == None:
            raise Exception('xform {}_id does not have a form_id in kobocat'.format(xform_id))

    def get_data(self):
        """
        Download json data from survea api
        Data contains attachment url files (images)
        """
        url = u'{}/api/v1/data/{}?format=json'.format(
            self.settings.KOBOCAT_URL,
            self.form_id
        )
        headers = {'Authorization': 'token %s' % (self.token)}
        req = requests.get(url, headers=headers)
        if not req.ok:
            raise Exception('Cannot get data form kobocat api form id : {}'.format(self.form_id))
        self.data = req.json()

    def _fixUrlBug(self, url):
        """
        since Survea updated, there are two type of url attachment ....
        Harmonizes all url
        :param url: attachment url from data
        """
        if self.settings.KOBOCAT_URL not in url:
            fixUrl = self.settings.KOBOCAT_URL + url
            fixUrl = fixUrl.replace("https://survea.geo-hyd.net/kc/media/",
                              "https://survea.geo-hyd.net/kc/kc/media/original?media_file=")
        else:
            fixUrl = url
        return fixUrl

    def get_media(self):
        headers = {'Authorization': 'token %s' % (self.token)}
        self.total = 0
        for sub in self.data:
            for att in sub['_attachments']:
                fileName = att['filename'].split("/")[-1]
                url = self._fixUrlBug(att['download_url'])
                dest = u'{}/images/{}'.format(self.tmpFolder, fileName)
                img = requests.get(url, headers=headers)
                if img.ok:
                    with open(dest, 'wb') as handler:
                        handler.write(img.content)

    def init_folder(self):
        myUuid = str(uuid.uuid4())
        self.tmpFolder = u'{}/{}'.format(
            self.exportPath,
            myUuid
        )
        os.mkdir(self.tmpFolder)
        path = u'{}/images'.format(
            self.tmpFolder
        )
        os.mkdir(path)
        shutil.copy2(self.template, self.tmpFolder)

    def write_xlsx_data(self):
        self.xlsx_path = u'{}/data.xlsx'.format(self.tmpFolder)
        self.formPack.to_xlsx(self.xlsx_path, self.submissions)

    def executeTemplate(self):
        print("Got to execute NODEJS")
        sciprtPath = "/srv/kobo/scripts/exportantea/fichesol/bin/main.js"
        templatePath = u'{}/{}'.format(self.tmpFolder, self.templateFileName)
        excelDataPath = self.xlsx_path
        imagePath = u'{}/images'.format(self.tmpFolder)
        command = ["n", "use", "10.16.0", sciprtPath, "-t", templatePath, "-d", excelDataPath, "-i", imagePath]
        print(" ".join(command))
        call(command)


    # TODO : You MUST impletmented this method
    # TODO : This method as called at the start of process
    # TODO : you need to return the final xlsx path
    def compute(self):
        self.init_folder()
        self.get_form_id()
        self.get_data()
        self.get_media()
        self.write_xlsx_data()
        self.executeTemplate()

    # TODO : You MUST impletmented this method
    # This method must return the absolute path of final resultat
    # The sub process read this temp file as binary file and copy in the final export file
    def get_final_file_path(self):
        return u'{}/{}'.format(self.tmpFolder, self.templateFileName)

    #TODO : This method as called at the end of process
    #You can delete all the files here
    def finish(self):
        shutil.rmtree(self.tmpFolder)
