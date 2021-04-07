//node index.js -t template.xlsx -d data.json [-i imageFolder] [--prod]

const Templator = require("templator");
const fs = require('fs');
var argv = require('yargs').argv;
const utils = require('./utils');

let rawdata = fs.readFileSync(argv.d);
jsonContent = JSON.parse(rawdata);


var namingSheet = (element) => {
	if ('INFO_GENERAL-INFO_GENERAL-PR_NOM_OTHER' in element &&  element['INFO_GENERAL-INFO_GENERAL-PR_NOM_OTHER'] != ""){
		var PR_NOM_FINAL = element['INFO_GENERAL-INFO_GENERAL-PR_NOM_OTHER'];
	}else{
		var PR_NOM_FINAL = element['INFO_GENERAL-INFO_GENERAL-PR_NOM'];
	}
    return element["_index"] + "-" + PR_NOM_FINAL.replace("'", "_")
};

var template = argv.t;
if(! argv.prod){
	var tmptemplate = template.replace(".xlsx", "_export.xlsx");
	fs.copyFileSync(template, tmptemplate);
	template = tmptemplate;
}

utils.formatting(jsonContent)

var option = {
	templateFilePath : template,
	jsonContent : jsonContent,
	imageRootPath : argv.i,
	fixCopySheet : true,
	imageRatio : 4,
	exportBySheet : true,
	templateSheetName : 'ANTEA_TEMPLATE',
	namingSheet : namingSheet,
	pageBreak : [81],
	subsituteAllTableRow : true,
	pushDownPageBreakOnTableSubstitution : true,
}


var templator = new Templator(option);
templator.generate();
