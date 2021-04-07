# coding: utf-8

import shutil
from .antea_export_xlsx import AnteaExportXSLX
import os
from .mappea_utils import utils_point
import json

class AnteaExport(AnteaExportXSLX):

    #Cette init ne fait que appeler super. Il ne sert donc à rien et pourrait être supprimé
    #On le conserve pour l'exmple
    def __init__(self, formPack, settings, submissions, xform_id, token, user, export_type):
        #Call super class for init object
        AnteaExportXSLX.__init__(self, formPack, settings, submissions, xform_id, token, user, export_type)
        self.imageQuality = 'download_medium_url'

    def getJson(self, json_path):
        with open(json_path) as json_file:
            data = json.load(json_file)
        return data

    def getAllCoord(self, json):
        coords = []
        for element in json:
            if "_GENERAL-LOCALISATION_latitude" not in element \
                    or "_GENERAL-LOCALISATION_longitude" not in element  \
                    or element["_GENERAL-LOCALISATION_latitude"] is None \
                    or element["_GENERAL-LOCALISATION_latitude"] == '' \
                    or element["_GENERAL-LOCALISATION_longitude"] is None \
                    or element["_GENERAL-LOCALISATION_longitude"] == '':
                continue
            coord = {}
            coord["lat"] = element["_GENERAL-LOCALISATION_latitude"]
            coord["lon"] = element["_GENERAL-LOCALISATION_longitude"]

            coord["epsg"] = "4326"
            coord["id"] = str(element["_index"])
            coord["name"] = element["GENERAL-NUM_REGARD"]
            coords.append(coord)
        return coords

    def export_carto(self, json_path):
        exportCarto = u'{}/images/carto'.format(self.tmpFolder)
        if not os.path.exists(exportCarto):
            try:
                os.mkdir(exportCarto)
            except OSError:
                print("Creation of the directory %s failed" % exportCarto)
        coords = self.getAllCoord(self.getJson(json_path))
        features = []
        for coord in coords:
            objectId = utils_point.createPoint(coord)
            if objectId:
                features.append({
                    "objectId": objectId,
                    "coord": coord
                })
        for feature in features:
            try:
                binary_image = utils_point.exportMap(feature)
                if binary_image:
                    with open("{}/regard_{}.png".format(exportCarto, feature["coord"]["id"]), 'wb') as f:
                        f.write(binary_image)
            except Exception:
                print("Error for export a map : ", feature)
            utils_point.deletePoint(feature)

    # TODO : You MUST impletmented this method
    # TODO : This method as called at the start of process
    # TODO : you need to return the final xlsx path
    def compute(self):
        self.tmpFolder = self.standard_init(self.exportPath, self.template)
        try:
            self.export_carto(self.json_path)
        except Exception as e:
            print("Error on create map ", e)
        self.standardExecuteTemplate()

    # TODO : You MUST impletmented this method
    # This method must return the absolute path of final resultat
    # The sub process read this temp file as binary file and copy in the final export file
    def get_final_file_path(self):
        return u'{}/{}'.format(self.tmpFolder, self.templateFileName)

    #TODO : This method as called at the end of process
    #You can delete all the files here
    def finish(self):
        shutil.rmtree(self.tmpFolder)
        # print("RMTREE disable")
