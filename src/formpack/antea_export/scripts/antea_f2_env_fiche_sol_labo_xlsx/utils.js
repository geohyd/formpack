
function formatHeure(heure){
	return heure.split(".")[0]
}

function makeBarCode(echantillon){
	barcode = ""
	separator = ""
	for (const x of Array(10).keys()) {
		falcon_key = "FLACON_" + String(x+1) + "-CODE_BAR"
		if(echantillon[falcon_key] && echantillon[falcon_key] != ""){
			barcode = barcode + separator + echantillon[falcon_key]
		}
		separator = "/"
	}
	return barcode;
}

/*function getAnalyse(echantillon){
	return echantillon["FLACON_1-ANALYSE"]
}*/
function getAnalyse(echantillon){
	analyse = echantillon["FLACON_1-ANALYSE"];
	if(analyse.includes("Autre")){
		analyse = analyse.replace("Autre", "");
		autreEchantillon = echantillon["ECHANTILLON-ANALYSE_OTHER"];
		analyse += " " + autreEchantillon;
		autreFlacon = echantillon["FLACON_1-ANALYSE_OTHER"];
		if(autreEchantillon != autreFlacon){
			analyse += " " + autreFlacon;
		}
	}
	return analyse;
}

function makeEOL(root, litho, echantillon){
	var line = {}
	line["NAME_ECHANTILLON"] = root["IDENTIFICATION-POINT-LABEL"] + " (" + echantillon["ECHANTILLON-PROF_PREL_DEB"] + "-" + echantillon["ECHANTILLON-PROF_PREL_FIN"] + ")";
	line["BAR_CODE"] = makeBarCode(echantillon)
	line["HEURE_PRELEV"] = formatHeure(echantillon["ECHANTILLON-TIME"])
	line["DATE_PRELEV"]	= root["today"]
	line["PRIORITY"] = "0"
	line["MATRICE"] = "0"
	line["ANALYSES"] = getAnalyse(echantillon);
	return line
}

exports.formatting = function(jsonContent){
	jsonContent["DATA_EOL"] = []
	jsonContent.forEach(element => {
		
		if(element["LITHO"]){
			element["LITHO"].forEach(litho => {
				if(litho["ECHANTILLON"]){
					litho["ECHANTILLON"].forEach(echantillon => {
						jsonContent["DATA_EOL"].push(makeEOL(element, litho, echantillon))
					});
				}
			});
		}
	})
}