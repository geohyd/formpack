# coding: utf-8

import shutil
from .antea_export import IAnteaExport
from tempfile import NamedTemporaryFile
import os
#NEED PANDAS
import pandas as pd
import pandas.io.formats.excel

class AnteaExport(IAnteaExport):

    def __init__(self, formPack, settings, submissions, xform_id, token, user, export_type):
        #Call super class for init object
        IAnteaExport.__init__(self, formPack, settings, submissions, xform_id, token, user, export_type)
        self.final_export_dict = []
        self.max_nesteed_group = 20

    def falt_array(self, submit):
        """
        Transform a dict to a flat object
        :param submit: A root dict
        :return: the flat result and True if it contains another dict
        """
        export_submit = {}
        find_list = False
        for key in submit:
            if isinstance(submit[key], list):
                for index, value in enumerate(submit[key]):
                    if isinstance(value, dict):
                        for i, (k, v) in enumerate(value.items()):
                            export_submit["%s_%s_%s" % (key, index, k)] = v
                            find_list = True
                    else:
                        export_submit[key] = submit[key]
            else:
                export_submit[key] = submit[key]
        return export_submit, find_list

    # TODO : You MUST impletmented this method
    # TODO : This method as called at the start of process
    # TODO : you need to return the final xlsx path
    def compute(self):
        """
        Flating the submition while there is a nesteed dict.
        If nesteed dict bigger than self.max_nesteed_group, stop flating - for security
        """
        nesteed_group = 0
        jsonData = self.formPack.to_json(self.submissions)
        for submit in jsonData:
            export_submit, repeat = self.falt_array(submit)
            while repeat and nesteed_group <= self.max_nesteed_group:
                export_submit, repeat = self.falt_array(export_submit)
                nesteed_group += 1
            self.final_export_dict.append(export_submit)

    # TODO : You MUST impletmented this method
    # This method must return the absolute path of final resultat
    # The sub process read this temp file as binary file and copy in the final export file
    def get_final_file_path(self):
        """
        Create a tempory xlsx file and write the result in Excel format with pandas
        :return: the tempory file path
        """
        self.temp_file = NamedTemporaryFile(suffix='.xlsx')
        # pd.io.formats.excel.ExcelFormatter.header_style = None
        pd.io.formats.excel.ExcelFormatter.header_style = None
        df = pd.DataFrame(self.final_export_dict)
        df.to_excel(self.temp_file.name,  sheet_name="SURVEA_FLAT_EXCEL", index=False)
        return u'{}'.format(self.temp_file.name)

    #TODO : This method as called at the end of process
    #You can delete all the files here
    def finish(self):
        """
        Close the temp file for delete it
        :return:
        """
        self.temp_file.close()
        #print("RMTREE disable")
