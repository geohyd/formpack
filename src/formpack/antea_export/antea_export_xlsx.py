# coding: utf-8

import shutil
from .antea_export import IAnteaExport
from subprocess import call

class AnteaExportXSLX(IAnteaExport):
    def __init__(self, formPack, settings, submissions, xform_id, token, user, export_type):
        #Call super class for init object
        IAnteaExport.__init__(self, formPack, settings, submissions, xform_id, token, user, export_type)
        self.templateFileName = "template.xlsx"
        self.template = u"{}/{}".format(self.exportPath, self.templateFileName)
        self.imageQuality = 'download_medium_url'

    def standard_init(self, rootPath, getmedia=True):
        """
        Override the standard init for Excel export
        :param rootPath: the root path
        :param getmedia: If True, download all the media, images, metadata. Default True
        :return: the Path to working folder
        """
        tmp_folder = IAnteaExport.standard_init(self, rootPath, getmedia)
        shutil.copy2(self.template, tmp_folder)
        return tmp_folder

    def standard_execute_template(self, tmp_folder = None, json_path = None):
        if tmp_folder is None and self.tmp_folder is not None:
            tmp_folder = self.tmp_folder
        if tmp_folder is None:
            raise Exception("No temp_folder working directory is set for standardExecuteTemplate")
        if json_path is None and self.json_path is not None:
            json_path = self.json_path
        if json_path is None:
            raise Exception("No json_path is set for standardExecuteTemplate")
        print("Got to execute NODEJS")
        sciprtPath = "{}/index.js".format(self.exportPath)
        templatePath = u'{}/{}'.format(tmp_folder, self.templateFileName)
        imagePath = u'{}/images'.format(tmp_folder)
        command = ["n", "use", "10.16.0", sciprtPath, "-t", templatePath, "-d", json_path, "-i", imagePath, "--prod"]
        # command = ["node", sciprtPath, "-t", templatePath, "-d", json_path, "-i", imagePath, "--prod"]
        print(" ".join(command))
        call(command)



