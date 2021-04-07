//node index.js -t template.xlsx -d data.json [-i imageFolder] [--prod]

const Templator = require("templator");
const fs = require('fs');
var path = require('path');
var argv = require('yargs').argv;
const utils = require('./utils');

let rawdata = fs.readFileSync(argv.d);
jsonContent = JSON.parse(rawdata);


var namingSheet = (element) => {
    return element["_index"] + "-" + element["GENERAL-NUM_REGARD"].replace("'", "_")
};

var template = argv.t;
if(! argv.prod){
	var tmptemplate = template.replace(".xlsx", "_export.xlsx");
	fs.copyFileSync(template, tmptemplate);
	template = tmptemplate;
}

utils.formatting(jsonContent)

var promises = utils.createBranchImages(jsonContent, path.dirname(argv.d) + "/images");

Promise.all(promises).then(response => {
	var option = {
		templateFilePath : template,
		jsonContent : jsonContent,
		imageRootPath : argv.i,
		fixCopySheet : true,
		//imageRatio : 4,
		exportBySheet : true,
		templateSheetName : 'ANTEA_TEMPLATE',
		namingSheet : namingSheet,
		pageBreak : [81],
		subsituteAllTableRow : true,
		pushDownPageBreakOnTableSubstitution : true,
	}

	var templator = new Templator(option);
	templator.generate();
});