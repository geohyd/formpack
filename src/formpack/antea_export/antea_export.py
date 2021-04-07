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
try:
    from carto_export import utils_point
except Exception as e:
    try:
        from .carto_export import utils_point
    except Exception as e:
        print("import ERROR carto_export import utils_point")


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
        self.exportPath = "{}/scripts/{}".format(os.path.dirname(os.path.abspath(__file__)), export_type)
        self.imageQuality = 'download_large_url'  # ('download_url';'download_large_url';'download_medium_url';'download_small_url')

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
        path = u'{}/images/carto'.format(tmpFolder)
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

    def get_media(self, json_data, exportPath, quality='download_large_url'):
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
            if form_resp.ok and "metadata" in form_resp.json():
                for metadata in form_resp.json()["metadata"]:
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
                                # pilImage.close()
                                with open(dest, 'wb') as handler:
                                    handler.write(img.content)
        except Exception as e:
            print("Cannot download metadata for form_id {}".format(form_id))

    def create_point_from_json(self, json_element, key):
        lat_key = key + "_latitude"
        lon_key = key + "_longitude"
        if lat_key not in json_element \
            or lon_key not in json_element \
            or json_element[lat_key] is None \
            or json_element[lon_key] is None \
            or json_element[lat_key] == "" \
            or json_element[lon_key] == "":
            return None
        point = {"epsg": 4326, "x": json_element[lon_key], "y": json_element[lat_key]}
        return point

    def __save_carto(self, webmap, dst_path, filename):
        binary_image = webmap.export_map()
        if binary_image:
            with open("{}/{}".format(dst_path, filename), 'wb') as f:
                f.write(binary_image)
                return True
        return False

    def export_webmap(self, webmap, dst_path, filename):
        try:
            save_ok = self.__save_carto(webmap, dst_path, filename)
            if not save_ok:
                print("Error on create point %s and with filename %s ; retry once" % (point, filename))
                save_ok = self.__save_carto(webmap, dst_path, filename)
                if not save_ok:
                    print("Double Error on create point ; stop")
        except Exception:
            print("Error for export a map. Filename : %s" %(filename))

    # DEPRECATED
    def export_carto_point(self, point, dst_path, filename, option={}):
        """
        Export a map with point to the destination file : dst_path/filename
        Override option map with option
        :param point: a point object point = {x=.., y =.., epsg=...}. 4326 is used as default epsg if not set
        :param dst_path: path of destination file
        :param filename: name of result file
        :param option: override mapExport option
        :return:
        """
        if not os.path.exists(dst_path):
            try:
                os.mkdir(dst_path)
            except OSError:
                print("Creation of the directory %s failed" % dst_path)
                return
        if "epsg" not in point or point["epsg"] == "":
            point["epsg"] = 4326
        try:
            binary_image = utils_point.export_map_point(point)
            if binary_image:
                with open("{}/{}".format(dst_path, filename), 'wb') as f:
                    f.write(binary_image)
            else:
                print("Error on create point %s and with filename %s ; retry once" %(point, filename))
                binary_image = utils_point.export_map_point(point)
                if binary_image:
                    with open("{}/{}".format(dst_path, filename), 'wb') as f:
                        f.write(binary_image)
                else:
                    print("Double Error on create point ; stop")
        except Exception:
            print("Error for export a map. Filename : %s" %(filename))



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

    def getJson(self, json_path):
        with open(json_path) as json_file:
            data = json.load(json_file)
        return data

    def standard_init(self, rootPath, getmedia=True):
        """
        Make a standard init folder working folder and download all files (json data, images, metadata, etc.)
        :param rootPath: the root path
        :param getmedia: If True, download all the media, images, metadata. Default True
        :return: the Path to working folder
        """
        self.tmp_folder = self.init_folder(rootPath)
        self.form_id = self.get_form_id()
        self.data = self.get_data(self.form_id)
        if getmedia:
            self.get_media(self.data, u"{}/images".format(self.tmp_folder), self.imageQuality)
            self.get_metadata(self.form_id, u"{}/images/metadata".format(self.tmp_folder))
        self.json_path = u'{}/data.json'.format(self.tmp_folder)
        self.write_json_data(self.json_path)
        return self.tmp_folder

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