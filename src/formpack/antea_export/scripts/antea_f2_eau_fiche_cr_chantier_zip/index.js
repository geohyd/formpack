//node index_CR.js -t Template_CR_Chantier.xlsx -d data_CR.json [-i imageFolder] [--prod]
// Test saisie flavien : node index_CR.js -t Template_CR_Chantier.xlsx -d Forage_ARVIC_NORD_Pts1.json 
// Test CR avancement trAvaux - planning : node index_CR.js -t Template_CR_Chantier.xlsx -d Data_CR_Avt_planning.json 
// Test CHAMPS FOND PLAN : node index_CR.js -t Template_CR_Chantier.xlsx -d Data_CR_gestion_fond_plan.json 
// Test CR photos et docs : node index_CR.js -t Template_CR_Chantier.xlsx -d Data_CR_Photos_docs.json -i C:\DVPT_Geo_Hyd\Survea\Extraction\Extraction_variables\CR_Chantier\Exemple_photo
// Test Flavien : node index_CR.js -t Template_CR_Chantier.xlsx -d Forage_ARVIC_NORD.json


//const Templator = require("templator");

// Z:\DRI\SURVEA\03-Atelier\FC\CR_Chantier

var XlsxTemplate = require('xlsx-template');

const fs = require('fs');
var argv = require('yargs').argv;
const utils = require('./utils');
var path = require("path");

let rawdata = fs.readFileSync(argv.d);
var jsonContent = JSON.parse(rawdata);

var template = argv.t;
var template_export = "";		// Nom du fichier d'export : un fichier par soumission => nommé dans la boucle des soumissions
var rep_export = "/export/" ;		// répertoire de stockage des fichiers résultats

// test existence du répertoire : création si besoin
var rep = "" ;
if(! argv.prod){
	// en local => répertoire de travail
	rep = process.cwd() ;
}
else{
	// en prod, le fichier template contient le chemin absolu => on récupère le répertoire
	rep = require('path').dirname(template);
}
console.log("URL : " + rep);
rep_export = rep + rep_export
	
fs.stat(rep_export, function(err) {
    if (!err) {
        // console.log("Répertoire existe : " + rep_export);
    }
    else if (err.code === 'ENOENT') {
		console.log("Répertoire n'existe pas : " + rep_export);
		// on le créé
		
		fs.mkdir(rep_export,function(e){
			if(!e || (e && e.code === "EEXIST")){
			} 
			else {
				// erreur création => par défaut dans le répertoire courant
				console.log(e);
				rep_export = "" ;
			}
		});
    }
});

if(! argv.prod){
	var tmptemplate = template.replace(".xlsx", "_export.xlsx");
	fs.copyFileSync(template, tmptemplate);
	template = tmptemplate;
}

//On continue de faire notre formating comme on le souhaite
utils.formatting(jsonContent)		// => modification du jsonContent initial
//console.log(jsonContent)

// Table des données pour les N paliers : un enreg par palier
var res_palier = utils.formatting_Palier(jsonContent)		
//console.log(res_palier)

// voir si on a besoin d'une autre structure (gestion des GP) hors du jsonContent initial
// var res = utils.formatting(jsonContent)		
// var res_GP1 = utils.formatting_GP1(jsonContent)


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
	pageBreak : [81], //Pour ajouter des sauts de pages. Tableau de numéro de lignes
	subsituteAllTableRow : true, //copie toute la ligne lors d'une ${table:...}
	pushDownPageBreakOnTableSubstitution : true, //Décalle le fin de page lors d'un ${table:...}
}
*/
var option = {
	templateFilePath : template,
	jsonContent : jsonContent,
	imageRootPath : argv.i,
	fixCopySheet : true,
	exportBySheet : true,
	templateSheetName : 'ANTEA_TEMPLATE',
    namingSheet : null, //Je met cette option Ã  null, je pourrait la supprimer aussi
    // namingExcel : namingExcel, //J'ajoute aux options le nouveau namingExcel
	substituteAllTableRow : true,
}

// 16/11/2020 : mise en place extraction multi fichiers : un fichier par soumission dans un répertoire "\Export\"
// La liste des fichiers générés sera ensuite zippée (python) et mise à disposition en téléchargement
// On inverse les deux boucles :
//   - parcours des soumissions (elements du Json)
//   - création d'un fichier par soumission
		
var nb_palier_elt = 0
var nb_tot_palier = res_palier.data_Palier.length
console.log("Nb tot paliers : " + nb_tot_palier)
// Traitement de la ou des soumissions => Nb elements dans jsonContent
nb_rapport = jsonContent.length
console.log("Nb rapports : " + nb_rapport)
var NUM_PALIER_MAX = 4		// Nb feuilles vierges dans le template pour gérer les paliers => les paliers avec un numéro supérieur ne sont pas extraits

jsonContent.forEach((element,index) => {
	//var index = i;
	//var element = jsonContent[i];
	// voir si on traite toutes les soumissions => un fichier export par soumission => construire le nom du fichier à partir d'un champ 
	// => Dans boucle de traitement du jsonContent : pour chaque element
	//      copier template -> fichier export de l'element, 
	//      ouvrir export, 
	//      remplacer les champs, 
	//      sauver et fermer export
	// => déplacer le traitement du fichier dans cette boucle : fs.readFile( .... fs.writeFileSync(
	// 16/11/2020 : un fichier par soumission => Excel Template; dans xlsx_data, la données excel binaire
	fs.readFile(option.templateFilePath, function(err, xlsx_data) {
		//J'instancie un objet directement via la lib XlsxTemplate; je n'utilise plus TEMPLATOR (pour le moment)
		var t = new XlsxTemplate(xlsx_data, option);
		// 17/11/2020 : gestion des onglets en fonction des sous formulaires activés (F0-INTERVENTION_TYPE : choix multiple)
		// "F0-INTERVENTION_TYPE/SUIVI_AVANCEMENT_TRAVAUX": "1",
		// "F0-INTERVENTION_TYPE/SUIVI_POMPAGE_DVPT_AIRLIFT": "0"
		// "F0-INTERVENTION_TYPE/FICHE_POMPAGE_PALIERS": "0",
		// "F0-INTERVENTION_TYPE/FICHE_FORAGE": "0",
		// "F0-INTERVENTION_TYPE/FICHE_POMPAGE_LONGUE_DUREE": "0",
		var delete_sheets = [];
		// 18/11/2020 : récupération des échelles pour les fond de plan : global IGN (1/25000 par défaut) et précis IGN ou photo aérienne (1/2000 par défaut)
		// => ajout de deux champs entiers dans le formulaire
		if (element["F0-LOCALISATION_ECHELLE_CARTO_IGN"]){
			echelle_IGN_global = element["F0-LOCALISATION_ECHELLE_CARTO_IGN"]
		}
		else{
			echelle_IGN_global = 0
		}
		if (element["F0-LOCALISATION_ECHELLE_ZOOM_POINT"]){
			echelle_zoom_point = element["F0-LOCALISATION_ECHELLE_ZOOM_POINT"]
		}
		else{
			echelle_zoom_point = 0
		}
		if (element["F0-LOCALISATION_TYPE_ZOOM_POINT"]){
			// select one => "IGN" ou "Photo aérienne"
			type_zoom_point = element["F0-LOCALISATION_TYPE_ZOOM_POINT"]
		}
		else{
			type_zoom_point = ""
		}
		longitude = parseFloat(element["COORD_LONGITUDE"]) 
		latitude = parseFloat(element["COORD_LATITUDE"]) 
		/*console.log("Echelle carto IGN globale : " + echelle_IGN_global )
		console.log("Type image pour zoom point : " + type_zoom_point)
		console.log("Echelle carto zoom point : " + echelle_zoom_point)
		console.log("Longitude : " + longitude)
		console.log("Latitude : " + latitude)*/
		// ajout des champs images pour les cartes : générés avant le rapport en utilisant le champ "_id" de l'élément
		//    _id + "_carte1.png"	=> 25000
		//    _id + "_carte2.png"	=> zoom
		element["F0-FOND_PLAN_IGN_GLOBAL"] = element["_id"] + "_carte1.png"
		element["F0-FOND_PLAN_ZOOM"] = element["_id"] + "_carte2.png"
		console.log("Fond de plan global : " + element["F0-FOND_PLAN_IGN_GLOBAL"])
		console.log("Fond de plan zoom : " + element["F0-FOND_PLAN_ZOOM"] )

		// Onglets généraux :
		t.substitute("Informations générales", element);

		if (element["F0-INTERVENTION_TYPE/SUIVI_AVANCEMENT_TRAVAUX"] == "1"){
			// ---------------------------------------------------------------
			// Partie Compte rendu avancement travaux et planning prévisionnel
			// ---------------------------------------------------------------
			// 18/11/2020 : Mofification du formulaire : Un seul group Repeat (F1-GP_GLOBAL_LISTE) par compte rendu avec 2 GR imbriqués pour la liste de photos et la liste de documents
			// Les groupes imbriqués ont été traités => X photos et X documents resdescendus dans la structure F1-GP_GLOBAL_LISTE
			// => on créé un onglet par compte rendu : copie onglet modèle, remplacement avec CR en cours
			nomf_modele = "CR_avancement_des_travaux"
			nom_GP = "F1-GP_GLOBAL_LISTE"
			if (element[nom_GP]) {
				element[nom_GP].forEach((GP,index_GP)=>{
					// console.log(GP)
					// copie de l'onglet modèle
					nomf_CR = nomf_modele + "_" + index_GP
					t.copySheet(nomf_modele,nomf_CR, false)
					// rempacement des infos du CR courant (GP) dans la copie
					t.substitute(nomf_CR, GP);
				})
			}
			// effacement de l'onglet modèle
			delete_sheets.push(nomf_modele)
			if (false){
				// Mise à plat des données du CR chantier On extrait les infos durée et description dans des tables standard => liste des avancements de travaux et planning prévisionnels
				// dans deux tables de l'onglet "CR_Extraction"
				t.substitute("CR_Extraction", element);
				// Voir organisation pour fiche CR de chantier : Group repeat => 1 enreg par fiche ?
				// Fiche standard pour avancement de travaux : onglet "CR_avancement_des_travaux" : relation entre les enregs des 4 group repeat ?
				// Ajout d'un champ date de la données dans les 4 groupes => extraction à partir de ce champ pour créer	 une fiche ? 
				// t.substitute("CR_avancement_des_travaux", element);
				// ---------------------------------------------------------------
			}
		}
		else {
			// suppression onglet
			//t.deleteSheet("CR_Extraction")
			console.log("Effacement fiche CR chantier" )
			delete_sheets.push("CR_avancement_des_travaux")
		}
		if (element["F0-INTERVENTION_TYPE/FICHE_FORAGE"] == "1"){
			t.substitute("Forage_exécuté", element);
		}
		else {
			// suppression onglet
			//t.deleteSheet("Forage_exécuté")
			delete_sheets.push("Forage_exécuté")
			console.log("Effacement fiche forage" )
		}
		if (element["F0-INTERVENTION_TYPE/FICHE_POMPAGE_PALIERS"] == "1"){
			t.substitute("Fiche_Pompage_paliers_synthese", element);
			// Liste des paliers : Init dans la fonction de gestion des paliers (init de res_paliers)
			nb_palier_elt = element["NB_PALIER"]
			num_p_max = 0
			console.log("Nb palier : " + nb_palier_elt + " pour soumission " + index)
			if (nb_palier_elt > 0){
				// parcours des paliers pour la soumission
				// ["NUM_PALIER"] = N° du palier dans le formulaire	
				// Parcours des paliers : extraction palier [0] -> "Fiche_Pompage_paliers_N1"
				for (index_P=0;index_P<nb_tot_palier;index_P++)
				{   // utiliser ["NUM_PALIER"], extraire les paliers par élement, un fichier par élément
					line = res_palier.data_Palier[index_P]
					if (line["IND_ENREG"] = index){
						// dans soumission en cours
						num_p = line["NUM_PALIER"]
						if ( num_p > num_p_max )
						{
							num_p_max = num_p
						}
						niv = line["NIVEAU_DEPART"]
						
						console.log("Palier : " + num_p + " niveau " + niv)

						// var nomf = "Fiche_Pompage_paliers_N" + (index_P+1)
						if ( num_p > 0 && num_p <= NUM_PALIER_MAX ){
							var nomf = "Fiche_Pompage_paliers_N" + (num_p)
							t.substitute(nomf,res_palier.data_Palier[index_P] );
						}
						else{
							console.log("N° de palier non géré : " + num_p)
						}
					}
				}
			}
		}
		else {
			num_p_max = 0
			// suppression onglets
			// t.deleteSheet("Fiche_Pompage_paliers_synthese")
			delete_sheets.push("Fiche_Pompage_paliers_synthese")
			console.log("Effacement fiche pompage palier" )
		}
		// suppression des feuilles palier non utilisées : de (num_p_max+1) à NUM_PALIER_MAX
		for (index_P=num_p_max+1;index_P<=NUM_PALIER_MAX;index_P++)
		{   
			var nomf = "Fiche_Pompage_paliers_N" + (index_P)
			//t.deleteSheet(nomf)
			delete_sheets.push(nomf)
			console.log("Effacement fiche palier " + index_P )
		}

		if (element["F0-INTERVENTION_TYPE/FICHE_POMPAGE_LONGUE_DUREE"] == "1"){
			t.substitute("Fiche_Pompage_longue_durée", element);
		}
		else {
			// suppression onglet
			//t.deleteSheet("Fiche_Pompage_longue_durée")
			delete_sheets.push("Fiche_Pompage_longue_durée")
			console.log("Effacement fiche pompage longue durée" )
		}
		if (element["F0-INTERVENTION_TYPE/SUIVI_POMPAGE_DVPT_AIRLIFT"] == "1"){
			t.substitute("Fiche_Pompage_dvlp_airlift", element);
		}
		else {
			// suppression onglet
			// t.deleteSheet("Fiche_Pompage_dvlp_airlift")
			delete_sheets.push("Fiche_Pompage_dvlp_airlift")
			console.log("Effacement fiche dvlp airlift" )
		}

		delete_sheets.forEach(elt=>{
			console.log("delete sheet : ", elt);
			t.deleteSheet(elt);
		})

		// generation du nouvel excel
		var newData = t.generate();
		// Un fichier par soumission dans répertoire \Export\
		//   Utilisation du option.templateFilePath (= template) comme modèle de données pour chaque soumission
		//   sauvegarde fichier excel : renommer le fichier pour la soumission : \Export\template_NOM_OUVRAGE_XX.xlsx
		nom_ouvrage = element["F0-GLOB_NOM_OUVRAGE"]
		var nomfichier = "";
		if ( nom_ouvrage != "" ){
			nom_fichier = "_" + nom_ouvrage
		}
		else{
			nom_fichier = ""
		}
		// on laisse index dans tous les cas : F0-GLOB_NOM_OUVRAGE saisi pas utilisateur => doublons possibles
		nom_fichier =  nom_fichier + "_" + index + ".xlsx"
		template_export =  rep_export + path.basename(template).replace(".xlsx", nom_fichier);
		console.log("Fichier soumission " + index + " : " + template_export)
		fs.writeFileSync(template_export, newData, 'binary');
	});
});


