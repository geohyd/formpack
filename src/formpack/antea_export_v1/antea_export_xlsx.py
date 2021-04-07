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

    def standardExecuteTemplate(self):
        print("Got to execute NODEJS")
        sciprtPath = "{}/index.js".format(self.exportPath)
        templatePath = u'{}/{}'.format(self.tmpFolder, self.templateFileName)
        jsonDataPath = self.json_path
        imagePath = u'{}/images'.format(self.tmpFolder)
        command = ["n", "use", "10.16.0", sciprtPath, "-t", templatePath, "-d", jsonDataPath, "-i", imagePath, "--prod"]
        # command = ["node", sciprtPath, "-t", templatePath, "-d", jsonDataPath, "-i", imagePath, "--prod"]
        print(" ".join(command))
        call(command)



    def standard_init(self, rootPath, templateFilePath):
        print("IANTEAEXPORTXLSX rootPath: ", rootPath)
        IAnteaExport.standard_init(self, rootPath)
        # self.tmpFolder = self.init_folder(rootPath)
        shutil.copy2(templateFilePath, self.tmpFolder)
        # self.form_id = self.get_form_id()
        # self.data = self.get_data(self.form_id)
        # self.get_media(self.data, u"{}/images".format(self.tmpFolder))
        # self.get_metadata(self.form_id, u"{}/images/metadata".format(self.tmpFolder))
        # self.xlsx_path = u'{}/data.xlsx'.format(self.tmpFolder)
        # self.json_path = u'{}/data.json'.format(self.tmpFolder)
        # self.write_xlsx_data(self.xlsx_path)
        # self.write_json_data(self.json_path)
        return self.tmpFolder