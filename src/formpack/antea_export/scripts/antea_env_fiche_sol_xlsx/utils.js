var proj4 = require('proj4');

function labelDateHeure(dateHeure){
    var date = dateHeure.split("T")[0];
    var year = date.split("-")[0];
    var month = date.split("-")[1];
    var day = date.split("-")[2];
    var time = dateHeure.split("T")[1];
    var hour = time.split(":")[0];
    var minute = time.split(":")[1];
    return day + "/" + month + "/" + year.slice(-2) + " " + hour + "h" + minute;
};
function labelDate(dateHeure){
    var date = dateHeure.split("T")[0];
    var year = date.split("-")[0];
    var month = date.split("-")[1];
    var day = date.split("-")[2];
    return day + "/" + month + "/" + year.slice(-2);
};

function labelProfondeur(debut, fin){
    return debut + "-" + fin
};

function labelLithoProfondeur(litho){
    return labelProfondeur(litho["LITHO-LITHO-PROF_DEB"], litho["LITHO-LITHO-PROF_FIN"])
}
function labelEchantillonProfondeur(echantillon){
    return labelProfondeur(echantillon["LITHO-ECHANTILLON-ECHANTILLON-PROF_PREL_DEB"], echantillon["LITHO-ECHANTILLON-ECHANTILLON-PROF_PREL_FIN"])
}

function makeLithoExportFiche(litho, echantillon, root){
    var line = {}
    line["LEF-ID_LITHO"] = litho["_id"];
    line["LEF-ID_ECHANTILLON"] = echantillon["_id"];
    line["LEF-PROF"] = labelLithoProfondeur(litho);
    line["LEF-DESC_LITHO"] = labelDescriptionLitho(litho);
    line["LEF-EAU"] = labelEau(litho);
    line["LEF-OBSERVATION"] = litho["LITHO-LITHODESC-LITHODESC-OBSERVATION"];
    line["LEF-ECHANTILLON_PID"] = echantillon["LITHO-ECHANTILLON-ECHANTILLON-PID"];
    line["LEF-ECHANTILLON_PROF"] = labelEchantillonProfondeur(echantillon);
    line["LEF-ECHANTILLON_HEURE_PRELEV"] = labelEchantillonHeurePrevel(echantillon);
    line["LEF-ECHANTILLON_ANALYSE"] = echantillon["LITHO-ECHANTILLON-ECHANTILLON-ANALYSE"];
    return line;
}

function lithoDescrOrOther(descr){
    return descr["LITHO-LITHODESC-LITHODESC-DESCRIPTION_OTHER"] ? descr["LITHO-LITHODESC-LITHODESC-DESCRIPTION_OTHER"]  : (descr["LITHO-LITHODESC-LITHODESC-DESCRIPTION"] ? descr["LITHO-LITHODESC-LITHODESC-DESCRIPTION"] : "");
}

function lithoCouleurOrOther(descr){
    return descr["LITHO-LITHODESC-LITHODESC-COULEUR_OTHER"] ? descr["LITHO-LITHODESC-LITHODESC-COULEUR_OTHER"]  : (descr["LITHO-LITHODESC-LITHODESC-COULEUR"] ? descr["LITHO-LITHODESC-LITHODESC-COULEUR"] : "");
}

function lithoDensiteOrOther(descr){
    return descr["LITHO-LITHODESC-LITHODESC-DENSITE_OTHER"] ? descr["LITHO-LITHODESC-LITHODESC-DENSITE_OTHER"]  : (descr["LITHO-LITHODESC-LITHODESC-DENSITE"] ? descr["LITHO-LITHODESC-LITHODESC-DENSITE"] : "");
}

function lithoAutrePresenceOrOther(descr){
    return descr["LITHO-LITHODESC-LITHODESC-AUTRE_PRESENCE_OTHER"] ? descr["LITHO-LITHODESC-LITHODESC-AUTRE_PRESENCE"].replace("Autre", "") + " " + descr["LITHO-LITHODESC-LITHODESC-AUTRE_PRESENCE_OTHER"]  : ( descr["LITHO-LITHODESC-LITHODESC-AUTRE_PRESENCE"] ? descr["LITHO-LITHODESC-LITHODESC-AUTRE_PRESENCE"] : "");
}

function lithoTailleGrain(descr){
	return descr["LITHO-LITHODESC-LITHODESC-TAILLE_GRAIN"]?descr["LITHO-LITHODESC-LITHODESC-TAILLE_GRAIN"]:""
}

function lithoObservation(descr){
	return descr["LITHO-LITHODESC-LITHODESC-OBSERVATION"]?descr["LITHO-LITHODESC-LITHODESC-OBSERVATION"]:""
}

function labelDescriptionLitho(litho){
    var finalDescr = "";
    var separator = "";
	if(litho["LITHODESC"]){
		
		litho["LITHODESC"].forEach(descr => {
			var descrBuilder = "De " + descr["LITHO-LITHODESC-LITHODESC-PROF_DEB"] + " à " + descr["LITHO-LITHODESC-LITHODESC-PROF_FIN"] + "m : "
			var lithoDesc = lithoDescrOrOther(descr)
			if(lithoDesc != ""){
				descrBuilder += " " + lithoDesc
			}
			var lithoCouleur = lithoCouleurOrOther(descr)
			if(lithoCouleur != ""){
				descrBuilder += " " + lithoCouleur
			}
			var lithoDens = lithoDensiteOrOther(descr)
			if(lithoDens != ""){
				descrBuilder += " " + lithoDens
			}
			var autrePresence = lithoAutrePresenceOrOther(descr);
			if(autrePresence != ""){
				descrBuilder += " - Autre présence : " + autrePresence
			}
			var tailleGrain = lithoTailleGrain(descr);
			if(tailleGrain != ""){
				descrBuilder += " - Taille grain : " + tailleGrain
			}
			var observ = lithoObservation(descr);
			if(observ != ""){
				descrBuilder += " - Autre observation : " + observ
			}
			//lithoDescrOrOther(descr) + " " + lithoCouleurOrOther(descr) + " " + lithoDensiteOrOther(descr) + " " + lithoAutrePresenceOrOther(descr) + " " + (descr["LITHO-LITHODESC-LITHODESC-TAILLE_GRAIN"]?descr["LITHO-LITHODESC-LITHODESC-TAILLE_GRAIN"]:"") + " " + (descr["LITHO-LITHODESC-LITHODESC-OBSERVATION"]?descr["LITHO-LITHODESC-LITHODESC-OBSERVATION"]:"")
			finalDescr = finalDescr + separator + descrBuilder;
			separator = " - ";
		});
	}
    return finalDescr
}


function labelDesignationPoint(root){
    return root["IDENTIFICATION-IDENTIFICATION-POINT_OTHER"] ? root["IDENTIFICATION-IDENTIFICATION-POINT_OTHER"] : root["IDENTIFICATION-IDENTIFICATION-POINT"];
}

function labelOperateur(root){
    return root["IDENTIFICATION-IDENTIFICATION-OPERATEUR_OTHER"] ? root["IDENTIFICATION-IDENTIFICATION-OPERATEUR_OTHER"] : (root["GENERAL-OPERATEUR"] ? root["GENERAL-OPERATEUR"] : "");
}
function labelCoordBySmartphone(root){
    return root["IDENTIFICATION-GEOPOINT"] ? "Acquises par Smartphone" : "";
}

function reprojectCoord(element){
	element["X_2154_FINAL"] = "";
	element["Y_2154_FINAL"] = "";
	if(element["IDENTIFICATION-GEOPOINT"]){
		try {
			var fromProjection = proj4('EPSG:4326');
			var toProjection = "+proj=lcc +lat_1=49 +lat_2=44 +lat_0=46.5 +lon_0=3 +x_0=700000 +y_0=6600000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs";
			var new_coord = proj4(fromProjection,toProjection,[parseFloat(element["IDENTIFICATION-_IDENTIFICATION-GEOPOINT_longitude"]),parseFloat(element["IDENTIFICATION-_IDENTIFICATION-GEOPOINT_latitude"])]);
			element["X_2154_FINAL"] = new_coord[0]
			element["Y_2154_FINAL"] = new_coord[1]
		} catch (error) {
			console.error("Eror on reproj point");
		}
	}
}

//TODO : Need to get the true coord 
function labelCoodX(root){
    return root["IDENTIFICATION-GEOPOINT"] ? root["IDENTIFICATION-_IDENTIFICATION-GEOPOINT_longitude"] : "";
}
function labelCoodY(root){
    return root["IDENTIFICATION-GEOPOINT"] ? root["IDENTIFICATION-_IDENTIFICATION-GEOPOINT_latitude"] : "";
}
function labelCoodZ(root){
    return root["IDENTIFICATION-GEOPOINT"] ? root["IDENTIFICATION-_IDENTIFICATION-GEOPOINT_altitude"] : "";
}

function labelMeteo(root){
    return root["ENVIRONNEMENT-ENV-METEO_OTHER"] ? root["ENVIRONNEMENT-ENV-METEO"].replace("Autre", "") + " " + root["ENVIRONNEMENT-ENV-METEO_OTHER"]  : (root["ENVIRONNEMENT-ENV-METEO"] ? root["ENVIRONNEMENT-ENV-METEO"] : "");
}

function labelOutils(root){
    return root["SONDAGE-SONDAGE-OUTIL_OTHER"] ? root["SONDAGE-SONDAGE-OUTIL_OTHER"]  : (root["SONDAGE-SONDAGE-OUTIL"] ? root["SONDAGE-SONDAGE-OUTIL"] : "");
}

//TODO : il faudrait refaire cette fonction pour mettre des ";" entre chaque valeur.
//Pour ca, il faut pouvoir récupérer la liste des valeurs sélectionnée (en label)
function labelRebouchage(root){
    return root["SONDAGE-SONDAGE-REBOUCHAGE_REFECTION_OTHER"] ? root["SONDAGE-SONDAGE-REBOUCHAGE_REFECTION"].replace("Autre", "") + " " + root["SONDAGE-SONDAGE-REBOUCHAGE_REFECTION_OTHER"]  : (root["SONDAGE-SONDAGE-REBOUCHAGE_REFECTION"] ? root["SONDAGE-SONDAGE-REBOUCHAGE_REFECTION"] : "");
}
//TODO : il faudrait refaire cette fonction pour mettre des ";" entre chaque valeur.
//Pour ca, il faut pouvoir récupérer la liste des valeurs sélectionnée (en label)
function labelCutting(root){
    return root["SONDAGE-SONDAGE-CUTTINGS_OTHER"] ? root["SONDAGE-SONDAGE-CUTTINGS"].replace("Autre", "") + " " + root["SONDAGE-SONDAGE-CUTTINGS_OTHER"]  : (root["SONDAGE-SONDAGE-CUTTINGS"] ? root["SONDAGE-SONDAGE-CUTTINGS"] : "");
}

function labelEchantillonHeurePrevel(enchantillon){
    var heure = enchantillon["LITHO-ECHANTILLON-ECHANTILLON-TIME"].split(":")[0]
    var minute = enchantillon["LITHO-ECHANTILLON-ECHANTILLON-TIME"].split(":")[1]
    return heure + "h" + minute;
}
function labelEau(litho, parent){
    switch (litho["LITHO-LITHO-EAU"]) {
        case 'Sec':
          return "-";
        case 'Légèrement humide':
            return "+"
        case 'Humide':
          return "++";
        case 'Noyé':
            return "+++"
        default:
          return "";
      }
}


function labelRemarqueFull(element){
    var otherRem = ""
    var separator = "";
    if(element["SONDAGE-SONDAGE-REMARQUES"]){
        element["SONDAGE-SONDAGE-REMARQUES-SONDAGE-REMARQUES"].forEach(remarque => {
            otherRem = otherRem + separator + remarque["SONDAGE-SONDAGE-REMARQUES-SONDAGE-REMARQUE"];
            separator = " - ";
        });
    }
    
    return (element["SONDAGE-SONDAGE-REMARQUE"] ? element["SONDAGE-SONDAGE-REMARQUE"] : "")  + (otherRem ?  " - " + otherRem : "")
}

exports.formatting = function(jsonContent){
	jsonContent.forEach(element => {
		
	   element["GENERAL-DATEHEURE"] = labelDate(element["start"])
	   element["IDENTIFICATION-POINT_FINAL"] = labelDesignationPoint(element)
	   element["GENERAL-OPERATEUR_OR_OTHER"] = labelOperateur(element);
	   element["ENV-METEO_OR_OTHER"] = labelMeteo(element);
	   element["SONDAGE-OUTIL_OR_OTHER"] = labelOutils(element);
	   element["SONDAGE-REBOUCHAGE_REFECTION_OR_OTHER"] = labelRebouchage(element);
	   element["SONDAGE-CUTTINGS_OR_OTHER"] = labelCutting(element);
	   element["GENERAL-COORD_BY_SMARTPHONE"] = labelCoordBySmartphone(element)
	   //element["GENERAL-COORD_X"] = labelCoodX(element);
	   //element["GENERAL-COORD_Y"] = labelCoodY(element);
	   reprojectCoord(element);
	   element["GENERAL-COORD_Z"] = labelCoodZ(element);
	   element["SONDAGE-REMARQUE_FULL"] = labelRemarqueFull(element);
	   element["IDENTIFICATION-IDENTIFICATION-MATERIELS_AUTRE_1_NOM"] = element["IDENTIFICATION-IDENTIFICATION-MATERIELS_AUTRE_1_VALEUR"] && element["IDENTIFICATION-IDENTIFICATION-MATERIELS_AUTRE_1_VALEUR"] != "" ? element["IDENTIFICATION-IDENTIFICATION-MATERIELS_AUTRE_1_NOM"] : "";
	   element["IDENTIFICATION-IDENTIFICATION-MATERIELS_AUTRE_2_NOM"] = element["IDENTIFICATION-IDENTIFICATION-MATERIELS_AUTRE_2_VALEUR"] && element["IDENTIFICATION-IDENTIFICATION-MATERIELS_AUTRE_2_VALEUR"] != "" ? element["IDENTIFICATION-IDENTIFICATION-MATERIELS_AUTRE_2_NOM"] : "";	   
	   element["LITHOEXPORTFICHE"] = []
	   if(element["LITHO"]){
		   element["LITHO"].forEach(litho => {
			   if(litho["ECHANTILLON"]){
				   litho["ECHANTILLON"].forEach(echantillon => {
						element["LITHOEXPORTFICHE"].push(makeLithoExportFiche(litho, echantillon, element))
					   /*echantillon["FLACON"].forEach(flacon => {
						   element["LITHOEXPORTFICHE"].push(makeLithoExportFiche(litho, echantillon, flacon, element))
					   })*/
				   });
			   }
		   });
	   }
	   for (let pas = element["LITHOEXPORTFICHE"].length; pas < 10; pas++) {
		   element["LITHOEXPORTFICHE"].push({})
	   }
   })
}