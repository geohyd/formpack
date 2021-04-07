# coding: utf-8

import shutil
from .antea_export_xlsx import AnteaExportXSLX
import os
from .carto_export import utils_point
import json
import shutil
import time

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
        exportCarto = u'{}/images'.format(self.tmp_folder)
        json = self.getJson(json_path)
        for element in json:
            try:
                feature_point = self.create_point_from_json(element, "_F0-LOCALISATION_LOCALISATION_POINT")
                webMapPoint1 = utils_point.WebMapPoint(feature_point, 4000)
                webMapPoint1.set_basemap(utils_point.settings.Basemap.NAVIGATION)
                self.export_webmap(webMapPoint1, exportCarto, "{}_carte1.png".format(element["_id"]))
                webMapPoint2 = utils_point.WebMapPoint(feature_point)
                self.export_webmap(webMapPoint2, exportCarto, "{}_carte2.png".format(element["_id"]))
                # self.export_carto_point(feature_point, exportCarto, "{}_carte1.png".format(element["_id"]))
                # self.export_carto_point(feature_point, exportCarto, "{}_carte2.png".format(element["_id"]))
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
        export_zip = self.tmp_folder + "/export"
        dir_name = self.tmp_folder + "/export/"
        shutil.make_archive(export_zip, 'zip', dir_name)
        return export_zip + ".zip"
        # return u'{}/{}'.format(self.tmp_folder, self.templateFileName)

    #TODO : This method as called at the end of process
    #You can delete all the files here
    def finish(self):
        shutil.rmtree(self.tmp_folder)
        # print("RMTREE disable")
