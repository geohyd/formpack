//node index.js -t template.xlsx -d data.json [-i imageFolder] [--prod]

const XlsxTemplate = require("xlsx-template");
const fs = require('fs');
var argv = require('yargs').argv;
const utils = require('./utils');

let rawdata = fs.readFileSync(argv.d);
var jsonContent = JSON.parse(rawdata);


var template = argv.t;

if(! argv.prod){
	var tmptemplate = template.replace(".xlsx", "_export.xlsx");
	fs.copyFileSync(template, tmptemplate);
	template = tmptemplate;
}

utils.formatting(jsonContent)

let data = fs.readFileSync(template);
var t = new XlsxTemplate(data);
t.substitute("ANTEA_LABO", jsonContent);
var newData = t.generate();
fs.writeFileSync(template, newData, 'binary');
