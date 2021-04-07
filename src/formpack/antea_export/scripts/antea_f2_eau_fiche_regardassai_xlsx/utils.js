var RegardSchema = require('regardschema');
var fs = require('fs');
var path = require('path');
var proj4 = require('proj4');

exports.createBranchImages = function(jsonContent, imagesPath = "images"){
	const promises = []
	jsonContent.forEach((element, index) => {
		promises.push(new Promise((resolve, reject) => {
			var currentSchema = new RegardSchema({
				setColor : "#FF3F33"
			});
			active = [];
			if (!fs.existsSync(imagesPath)){
				fs.mkdirSync(imagesPath);
			}
			element["BRANCH_IMAGE_FILENAME"] = imagesPath + "/branchement_" + index + "_" + element["GENERAL-NUM_REGARD"] + ".png";
			element["BRANCH_ARRAY"].forEach(branch => {
				currentSchema.set(Number.parseInt(branch["ARRIVEES_BRANCH-POSITION"]));
			});
			currentSchema.toPng({
				setWidth : 300,
				setHeight : 300
			}).then((buffer) => {
				fs.writeFileSync(element["BRANCH_IMAGE_FILENAME"], buffer);
				resolve();
			})
		}))
	});
	return promises;
}


exports.formatting = function(jsonContent){
	 jsonContent.forEach(element => {
		 
		element["form_logo"] = "metadata/form_logo.png";
		element["carto_img"] = "carto/regard_" + element["_index"] + ".png";

		try {
			var fromProjection = proj4('EPSG:4326');
			var toProjection = "+proj=lcc +lat_1=49 +lat_2=44 +lat_0=46.5 +lon_0=3 +x_0=700000 +y_0=6600000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs";
			var new_coord = proj4(fromProjection,toProjection,[parseFloat(element["_GENERAL-LOCALISATION_longitude"]),parseFloat(element["_GENERAL-LOCALISATION_latitude"])]);
			element["X_2154_FINAL"] = new_coord[0]
			element["Y_2154_FINAL"] = new_coord[1]
		} catch (error) {
			console.error("Eror on reproj point");
		}

		element["GENERAL-COMMUNE_FINAL"] = element["GENERAL-COMMUNE_OTHER"] ? element["GENERAL-COMMUNE_OTHER"]  : element["GENERAL-COMMUNE"];
		element["GENERAL-RUE_FINAL"] = element["GENERAL-RUE_OTHER"] ? element["GENERAL-RUE_OTHER"]  : element["GENERAL-RUE"];
		element["REGARD-TYPE_RESEAU_FINAL"] = element["REGARD-TYPE_RESEAU_OTHER"] ? element["REGARD-TYPE_RESEAU_OTHER"]  : element["REGARD-TYPE_RESEAU"];
		element["REGARD_CARACT-TYPE_FINAL"] = element["REGARD_CARACT-TYPE_OTHER"] ? element["REGARD_CARACT-TYPE_OTHER"]  : element["REGARD_CARACT-TYPE"];
		element["REGARD_CARACT-MATERIAU_FINAL"] = element["REGARD_CARACT-MATERIAU_OTHER"] ? element["REGARD_CARACT-MATERIAU_OTHER"]  : element["REGARD_CARACT-MATERIAU"];
		element["REGARD_CARACT-EMPLACEMENT_FINAL"] = element["REGARD_CARACT-EMPLACEMENT_OTHER"] ? element["REGARD_CARACT-EMPLACEMENT_OTHER"]  : element["REGARD_CARACT-EMPLACEMENT"];
		element["REGARD-EQUIPEMENT_FINAL"] = element["REGARD-EQUIPEMENT"];
		if(element["REGARD-EQUIPEMENT_OTHER"]){
			element["REGARD-EQUIPEMENT_FINAL"] += " - " + element["REGARD-EQUIPEMENT_OTHER"];
		}
		// element["REGARD-EQUIPEMENT_FINAL"] = element["REGARD-EQUIPEMENT_FINAL"] + (element["REGARD-EQUIPEMENT_OTHER"] ? (" - " + element["REGARD-EQUIPEMENT_OTHER"])  : "");
		element["REGARD_ETAT-ETAT_FINAL"] = element["REGARD_ETAT-ETAT_OTHER"] ? element["REGARD_ETAT-ETAT_OTHER"]  : element["REGARD_ETAT-ETAT"];
		element["REGARD_ETAT-TYPE_FINAL"] = element["REGARD_ETAT-TYPE_OTHER"] ? element["REGARD_ETAT-TYPE_OTHER"]  : element["REGARD_ETAT-TYPE"];
		element["REGARD_ETAT-ETAT_JOINT_FINAL"] = element["REGARD_ETAT-ETAT_JOINT_OTHER"] ? element["REGARD_ETAT-ETAT_JOINT_OTHER"]  : element["REGARD_ETAT-ETAT_JOINT"];
		element["REGARD_ETAT-ACCES_FINAL"] = element["REGARD_ETAT-ACCES_OTHER"] ? element["REGARD_ETAT-ACCES_OTHER"]  : element["REGARD_ETAT-ACCES"];
		
		element["REGARD-NB_BRANCHEMENT_FINAL"] = 2 //Arrivé + sortie
		element["REGARD-NB_BRANCHEMENT_FINAL"] += Number.parseInt(element["REGARD-NB_BRANCHEMENT"],10);
		
		element["PRESENCE_ECHELON_FINAL"] = element["REGARD-EQUIPEMENT"] ? (element["REGARD-EQUIPEMENT"].includes("Echelons") ? "Oui"  : "Non") : "";
		
		element["BRANCH_ARRAY"] = []
		//On ajouter l'arrivé en 1er dans le tableau
		element["BRANCH_ARRAY"].push({
			"ARRIVEES_BRANCH-TYPE": "Arrivée",
			"ARRIVEES_BRANCH-POSITION": element["ARRIVEE-POSITION"],
			"ARRIVEES_BRANCH-CHUTE_REGARD_AMONT": element["ARRIVEE-CHUTE_REGARD_AMONT"],
			"ARRIVEES_BRANCH-CHUTE": element["ARRIVEE-CHUTE"],
			"ARRIVEES_BRANCH-MATERIAU": element["ARRIVEE-MATERIAU"],
			"ARRIVEES_BRANCH-MATERIAU_OTHER": element["ARRIVEE-MATERIAU_OTHER"],
			"ARRIVEES_BRANCH-DIAMETRE": element["ARRIVEE-DIAMETRE"],
			"ARRIVEES_BRANCH-PROFONDEUR": element["ARRIVEE-PROFONDEUR"],
			"ARRIVEES_BRANCH-REMARQUE": element["ARRIVEE-REMARQUE"],
		});
		//On ajoute la sortie en 2eme
		element["BRANCH_ARRAY"].push({
			"ARRIVEES_BRANCH-TYPE": "Sortie",
			"ARRIVEES_BRANCH-POSITION": element["SORTIE-POSITION"],
			"ARRIVEES_BRANCH-CHUTE_REGARD_AMONT": "",
			"ARRIVEES_BRANCH-CHUTE": element["SORTIE-CHUTE"],
			"ARRIVEES_BRANCH-MATERIAU": element["SORTIE-MATERIAU"],
			"ARRIVEES_BRANCH-MATERIAU_OTHER": element["SORTIE-MATERIAU_OTHER"],
			"ARRIVEES_BRANCH-DIAMETRE": element["SORTIE-DIAMETRE"],
			"ARRIVEES_BRANCH-PROFONDEUR": element["SORTIE-PROFONDEUR"],
			"ARRIVEES_BRANCH-REMARQUE": element["SORTIE-REMARQUE"],
		});
		//On push les autres après, comme ca on a l'arrivée et la sortie en 1er dans le tableau
		if(element["ARRIVEES_BRANCH"]){
			element["ARRIVEES_BRANCH"].forEach(arr_branch => {
				element["BRANCH_ARRAY"].push(arr_branch);
			});
		}
		//Pour chaque element, on s'amuse à recalculer le nom du matériau
		element["BRANCH_ARRAY"].forEach(arr_branch => {
			arr_branch["ARRIVEES_BRANCH-MATERIAU_FINAL"] = arr_branch["ARRIVEES_BRANCH-MATERIAU_OTHER"] ? arr_branch["ARRIVEES_BRANCH-MATERIAU_OTHER"]  : arr_branch["ARRIVEES_BRANCH-MATERIAU"];
		});

		//Je veux au moins 8 BRANCH_ARRAY, sinon le rendu n'est pas élégant.
		if(element["BRANCH_ARRAY"] && element["BRANCH_ARRAY"].length < 8){
			for (const x of Array(8 - element["BRANCH_ARRAY"].length).keys()) {
				element["BRANCH_ARRAY"].push({});
			}
		}
	})
}