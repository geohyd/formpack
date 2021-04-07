//node index_AG.js -t template_GP_Agri.xlsx -d data_DA.json [-i imageFolder] [--prod]
//node index_AG.js -t template_GP_Agri.xlsx -d data_DA_complet.json [-i imageFolder] [--prod]

//node index_AG.js -t template_Agri.xlsx -d DATA_3_enquetes.json
//node index_AG.js -t Template_Agri_avec_T_Bilan.xlsx -d DATA_3_enquetes.json

var XlsxTemplate = require('xlsx-template');

const fs = require('fs');
var argv = require('yargs').argv;
const utils = require('./utils');

let rawdata = fs.readFileSync(argv.d);
var jsonContent = JSON.parse(rawdata);

//On conserve la méthode de copie du fichier excel template, mais elle ne sert plus vraiment dans cet exemple V2
var template = argv.t;
if(! argv.prod){
	var tmptemplate = template.replace(".xlsx", "_export.xlsx");
	fs.copyFileSync(template, tmptemplate);
	template = tmptemplate;
}

//On continue de faire notre formating comme on le souhaite
var res = utils.formatting(jsonContent)
//console.log(res)

// Voir si nécéssaire d'extraire les autres tables 

var res_GP1 = utils.formatting_GP1(jsonContent)
var res_GP2 = utils.formatting_GP2(jsonContent)
var res_GP3 = utils.formatting_GP3(jsonContent)
var res_GP4 = utils.formatting_GP4(jsonContent)
var res_GP5 = utils.formatting_GP5(jsonContent)
var res_GP6 = utils.formatting_GP6(jsonContent)
var res_GP7 = utils.formatting_GP7(jsonContent)
var res_GP8 = utils.formatting_GP8(jsonContent)
// console.log(res_GP8)
/*
nb = 0
res_GP8["data_GP8"].forEach(element => {
	nb++
});
console.log( "Nombre d'enreg GP8 : " + nb)
*/
var option = {
	templateFilePath : template,
	jsonContent : jsonContent,
	imageRootPath : argv.i,
	fixCopySheet : true,
	exportBySheet : true,
	templateSheetName : 'ANTEA_TEMPLATE',
    namingSheet : null, //Je met cette option à null, je pourrait la supprimer aussi
    // namingExcel : namingExcel, //J'ajoute aux options le nouveau namingExcel
	substituteAllTableRow : true,
}

// Je lit mon fichier Excel Template; dans xlsx_data, la données excel binaire
fs.readFile(option.templateFilePath, function(err, xlsx_data) {
    //J'instancie un objet directement via la lib XlsxTemplate; je n'utilise plus TEMPLATOR (pour le moment)
	var t = new XlsxTemplate(xlsx_data, option);
	
	//Je substitue toutes les feuilles que je souhaite avec ma soumission en cours.
	t.substitute("T_DONNEES", res);
	t.substitute("TABLEAU_1", res_GP1);
	t.substitute("TABLEAU_2", res_GP2);
	t.substitute("TABLEAU_3", res_GP3);
	t.substitute("TABLEAU_4", res_GP4);
	t.substitute("TABLEAU_5", res_GP5);
	t.substitute("TABLEAU_6", res_GP6);
	t.substitute("TABLEAU_7", res_GP7);
	t.substitute("TABLEAU_8", res_GP8);

	//Je génère le nouveau excel
	var newData = t.generate();
	//J'écris le nouveau excel dans le fichier 'templateFileName'
	fs.writeFileSync(template, newData, 'binary');

});