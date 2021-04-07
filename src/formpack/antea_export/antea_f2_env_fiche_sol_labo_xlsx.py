# coding: utf-8

import shutil
from .antea_export_xlsx import AnteaExportXSLX

class AnteaExport(AnteaExportXSLX):

    #Cette init ne fait que appeler super. Il ne sert donc à rien et pourrait être supprimé
    #On le conserve pour l'exmple
    def __init__(self, formPack, settings, submissions, xform_id, token, user, export_type):
        #Call super class for init object
        AnteaExportXSLX.__init__(self, formPack, settings, submissions, xform_id, token, user, export_type)


    # TODO : You MUST impletmented this method
    # TODO : This method as called at the start of process
    # TODO : you need to return the final xlsx path
    def compute(self):
        self.tmp_folder = self.standard_init(self.exportPath, False)
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
