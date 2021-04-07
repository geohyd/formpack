# coding: utf-8

import shutil
from .antea_export_xlsx import AnteaExportXSLX
import os
from .carto_export import utils_point
import json

class AnteaExport(AnteaExportXSLX):

    #Cette init ne fait que appeler super. Il ne sert donc à rien et pourrait être supprimé
    #On le conserve pour l'exmple
    def __init__(self, formPack, settings, submissions, xform_id, token, user, export_type):
        #Call super class for init object
        AnteaExportXSLX.__init__(self, formPack, settings, submissions, xform_id, token, user, export_type)
        self.imageQuality = 'download_medium_url'

    def export_carto(self, json_path):
        """
        Export the map
        :param json_path: path to the json data
        """
        exportCarto = u'{}/images/carto'.format(self.tmp_folder)
        json = self.getJson(json_path)
        for element in json:
            try:
                feature_point = self.create_point_from_json(element, "_GENERAL-LOCALISATION")
                webMapPoint = utils_point.WebMapPoint(feature_point)
                self.export_webmap(webMapPoint, exportCarto, "regard_{}.png".format(element["_index"]))
                #
                # feature_point = self.create_point_from_json(element, "_GENERAL-LOCALISATION")
                # self.export_carto_point(feature_point, exportCarto, "regard_{}.png".format(element["_index"]))
            except Exception as e:
                print("Error on create map %s - %s" %(element["_index"], e))


    # TODO : You MUST impletmented this method
    # TODO : This method as called at the start of process
    # TODO : you need to return the final xlsx path
    def compute(self):
        self.tmp_folder = self.standard_init(self.exportPath, self.template)
        try:
            self.export_carto(self.json_path)
        except Exception as e:
            print("Error on create map ", e)
        self.standard_execute_template()

    # TODO : You MUST impletmented this method
    # This method must return the absolute path of final resultat
    # The sub process read this temp file as binary file and copy in the final export file
    def get_final_file_path(self):
        return u'{}/{}'.format(self.tmp_folder, self.templateFileName)

    #TODO : This method as called at the end of process
    #You can delete all the files here
    def finish(self):
        shutil.rmtree(self.tmp_folder)
        # print("RMTREE disable")
