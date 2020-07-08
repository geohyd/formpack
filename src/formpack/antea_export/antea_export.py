# coding: utf-8

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