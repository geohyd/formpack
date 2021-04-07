//node index.js -t template.xlsx -d data.json [-i imageFolder] [--prod]

const Templator = require("templator");
const fs = require('fs');
var argv = require('yargs').argv;
const utils = require('./utils');

let rawdata = fs.readFileSync(argv.d);
var jsonContent = JSON.parse(rawdata);

//Excel's Sheet namming. If namingSheet is null, json element index is use
var namingSheet = (element) => {
    return element["_index"] + "-" + element["IDENTIFICATION-POINT_FINAL"].replace("'", "_")
};

//var namingSheet = null;

var template = argv.t;

if(! argv.prod){
	var tmptemplate = template.replace(".xlsx", "_export.xlsx");
	fs.copyFileSync(template, tmptemplate);
	template = tmptemplate;
}

utils.formatting(jsonContent)


/*
//Fully option's example
var option = {
	templateFilePath : template,
	jsonContent : jsonContent,
	imageRootPath : argv.i,
	fixCopySheet : true,
	imageRatio : 4, //pour diviser les tailles d'image. TODO : Code à revoir pour que le ratio soit un pourcentage
	exportBySheet : true,
	templateSheetName : 'ANTEA_TEMPLATE',
	namingSheet : namingSheet,
	pageBreak : [81] //Pour ajouter des sauts de pages. Tableau de numéro de lignes
}
*/

var option = {
	templateFilePath : template,
	jsonContent : jsonContent,
	imageRootPath : argv.i,
	fixCopySheet : true,
	exportBySheet : true,
	imageRatio : 30,
	templateSheetName : 'ANTEA_TEMPLATE',
	namingSheet : namingSheet,
	subsituteAllTableRow : true,
	pushDownPageBreakOnTableSubstitution : true,
	/*resiezImage : {
		w : 1000,
		h : null,
		quality : 60
	}*/
}

var templator = new Templator(option);
templator.generate();