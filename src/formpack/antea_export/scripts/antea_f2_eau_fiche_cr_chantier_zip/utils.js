// Fonction de paramétrage des projections LAMBERT pour utilisation module standard proj4
// Gestion des systèmes de projection : latitude-longitude vers X,Y dans le système de projection demandé (Lambert xx)
const utils_project = require('./Gestion_Projection_Carto/utils_projection');
// Extraction des coordonnées du geopoint : F0-LOCALISATION_LOCALISATION_POINT
function labelCoodX(root){
    return root["F0-LOCALISATION_LOCALISATION_POINT"] ? root["_F0-LOCALISATION_LOCALISATION_POINT_longitude"] : "";
}
function labelCoodY(root){
    return root["F0-LOCALISATION_LOCALISATION_POINT"] ? root["_F0-LOCALISATION_LOCALISATION_POINT_latitude"] : "";
}
function labelCoodZ(root){
    return root["F0-LOCALISATION_LOCALISATION_POINT"] ? root["_F0-LOCALISATION_LOCALISATION_POINT_altitude"] : "";
}

exports.formatting = function(jsonContent){

	// Affichage des paramètres (group repeat "F4-PALIER_PARAMETRE_LISTE") dans le rapport sous forme de 3 * 2 colonnes (nom PA et type mesure) sur deux lignes  
	// => 6 paramètres max
	// => on créé des variables PARAMETRE_i et  TYPE_MESURE_i pour les paramètres selon index i et on référence ces nouveaux champs dans le rapport
	// !!! : les variables créées içi ne doivent pas exister dans le formulaire initial
	// Si plus de 6 paramètres dans le GP, les variables suivantes sont créée => à voir pour utilisation dans rapport
	// On stocke le nombre de paramètres dans "F4-PALIER_PARAMETRE_LISTE_NB_PARAMETRE"
	nb_PA = 0		// Nom de paramètres de contrôle
	nb_PA_OUV = 0	// Nom de paramètres de contrôle sur ouvrage
	nb_DOC = 0		// Nombre de documents
	nb_elt = 0
	jsonContent.forEach((element, index) => {
		nb_elt++

		// 23/11/2020 : récupération des libellés des sélection dans de group repeat avec choix 'AUTRE'
		//   pour chaque variable liste "VL" concernée dans le formulaire, le champ "VL_OTHER" existe (activé si choix 'AUTRE' dans la liste)
		// => consstruction ici du champ "VL_AFFICHE" utilisé dans le rapport  
		// Pour chacune de ces variables, on est dans un group repeat => table dans element => parcourir tous les GR concernés pour mettre à jour la variable _AFFCIHE avec le bon libellé
/*
  GP["F2-CIMENT_TYPE_ELEMENT_AFFICHE"] = GP["F2-CIMENT_TYPE_ELEMENT_OTHER"] ? GP["F2-CIMENT_TYPE_ELEMENT_OTHER"] : (GP["F2-CIMENT_TYPE_ELEMENT"] ? GP["F2-CIMENT_TYPE_ELEMENT"] : "");
  GP["F2-EQUIP_TUBAGE_AFFICHE"] = GP["F2-EQUIP_TUBAGE_OTHER"] ? GP["F2-EQUIP_TUBAGE_OTHER"] : (GP["F2-EQUIP_TUBAGE"] ? GP["F2-EQUIP_TUBAGE"] : "");
  GP["F2-GEOL_DESCRIPTION_AFFICHE"] = GP["F2-GEOL_DESCRIPTION_OTHER"] ? GP["F2-GEOL_DESCRIPTION_OTHER"] : (GP["F2-GEOL_DESCRIPTION"] ? GP["F2-GEOL_DESCRIPTION"] : "");
  GP["F2-GEOL_ETAGE_AFFICHE"] = GP["F2-GEOL_ETAGE_OTHER"] ? GP["F2-GEOL_ETAGE_OTHER"] : (GP["F2-GEOL_ETAGE"] ? GP["F2-GEOL_ETAGE"] : "");
  GP["F2-INFO-HYDRO_MESURE_DEBIT_AFFICHE"] = GP["F2-INFO-HYDRO_MESURE_DEBIT_OTHER"] ? GP["F2-INFO-HYDRO_MESURE_DEBIT_OTHER"] : (GP["F2-INFO-HYDRO_MESURE_DEBIT"] ? GP["F2-INFO-HYDRO_MESURE_DEBIT"] : "");
  GP["F2-INFO-POMP_TYPE_POMPAGE_AFFICHE"] = GP["F2-INFO-POMP_TYPE_POMPAGE_OTHER"] ? GP["F2-INFO-POMP_TYPE_POMPAGE_OTHER"] : (GP["F2-INFO-POMP_TYPE_POMPAGE"] ? GP["F2-INFO-POMP_TYPE_POMPAGE"] : "");
  GP["F4-PALIER_L_PA_PARAMETRES_CONTROLE_AFFICHE"] = GP["F4-PALIER_L_PA_PARAMETRES_CONTROLE_OTHER"] ? GP["F4-PALIER_L_PA_PARAMETRES_CONTROLE_OTHER"] : (GP["F4-PALIER_L_PA_PARAMETRES_CONTROLE"] ? GP["F4-PALIER_L_PA_PARAMETRES_CONTROLE"] : "");
  GP["F4-PALIER_OUV_PARAMETRES_CONTROLE_AFFICHE"] = GP["F4-PALIER_OUV_PARAMETRES_CONTROLE_OTHER"] ? GP["F4-PALIER_OUV_PARAMETRES_CONTROLE_OTHER"] : (GP["F4-PALIER_OUV_PARAMETRES_CONTROLE"] ? GP["F4-PALIER_OUV_PARAMETRES_CONTROLE"] : "");
  GP["F4-PALIER_PARAMETRES_CONTROLE_AFFICHE"] = GP["F4-PALIER_PARAMETRES_CONTROLE_OTHER"] ? GP["F4-PALIER_PARAMETRES_CONTROLE_OTHER"] : (GP["F4-PALIER_PARAMETRES_CONTROLE"] ? GP["F4-PALIER_PARAMETRES_CONTROLE"] : "");
  GP["F5-PMP-LD_L_PA_PARAMETRES_CONTROLE_AFFICHE"] = GP["F5-PMP-LD_L_PA_PARAMETRES_CONTROLE_OTHER"] ? GP["F5-PMP-LD_L_PA_PARAMETRES_CONTROLE_OTHER"] : (GP["F5-PMP-LD_L_PA_PARAMETRES_CONTROLE"] ? GP["F5-PMP-LD_L_PA_PARAMETRES_CONTROLE"] : "");
  GP["F5-PMP-LD_OUV_PARAMETRES_CONTROLE_AFFICHE"] = GP["F5-PMP-LD_OUV_PARAMETRES_CONTROLE_OTHER"] ? GP["F5-PMP-LD_OUV_PARAMETRES_CONTROLE_OTHER"] : (GP["F5-PMP-LD_OUV_PARAMETRES_CONTROLE"] ? GP["F5-PMP-LD_OUV_PARAMETRES_CONTROLE"] : "");
  GP["F5-PMP-LD_PARAMETRES_CONTROLE_AFFICHE"] = GP["F5-PMP-LD_PARAMETRES_CONTROLE_OTHER"] ? GP["F5-PMP-LD_PARAMETRES_CONTROLE_OTHER"] : (GP["F5-PMP-LD_PARAMETRES_CONTROLE"] ? GP["F5-PMP-LD_PARAMETRES_CONTROLE"] : "");
  GP["F6-SYN-DVPT_L_PA_PARAMETRES_CONTROLE_AFFICHE"] = GP["F6-SYN-DVPT_L_PA_PARAMETRES_CONTROLE_OTHER"] ? GP["F6-SYN-DVPT_L_PA_PARAMETRES_CONTROLE_OTHER"] : (GP["F6-SYN-DVPT_L_PA_PARAMETRES_CONTROLE"] ? GP["F6-SYN-DVPT_L_PA_PARAMETRES_CONTROLE"] : "");
  GP["F6-SYN-DVPT_OUV_PARAMETRES_CONTROLE_AFFICHE"] = GP["F6-SYN-DVPT_OUV_PARAMETRES_CONTROLE_OTHER"] ? GP["F6-SYN-DVPT_OUV_PARAMETRES_CONTROLE_OTHER"] : (GP["F6-SYN-DVPT_OUV_PARAMETRES_CONTROLE"] ? GP["F6-SYN-DVPT_OUV_PARAMETRES_CONTROLE"] : "");
  GP["F6-SYN-DVPT_PARAMETRES_CONTROLE_AFFICHE"] = GP["F6-SYN-DVPT_PARAMETRES_CONTROLE_OTHER"] ? GP["F6-SYN-DVPT_PARAMETRES_CONTROLE_OTHER"] : (GP["F6-SYN-DVPT_PARAMETRES_CONTROLE"] ? GP["F6-SYN-DVPT_PARAMETRES_CONTROLE"] : "");
		*/
		nom_GP = "F2-GEOL_LISTE"
		if (element[nom_GP])	{
			element[nom_GP].forEach((GP,index_GP)=>{
				GP["F2-GEOL_DESCRIPTION_AFFICHE"] = GP["F2-GEOL_DESCRIPTION_OTHER"] ? GP["F2-GEOL_DESCRIPTION_OTHER"] : (GP["F2-GEOL_DESCRIPTION"] ? GP["F2-GEOL_DESCRIPTION"] : "");
				GP["F2-GEOL_ETAGE_AFFICHE"] = GP["F2-GEOL_ETAGE_OTHER"] ? GP["F2-GEOL_ETAGE_OTHER"] : (GP["F2-GEOL_ETAGE"] ? GP["F2-GEOL_ETAGE"] : "");
			})
		}
		nom_GP = "F2-EQUIP_LISTE"
		if (element[nom_GP])	{
			element[nom_GP].forEach((GP,index_GP)=>{
				GP["F2-EQUIP_TUBAGE_AFFICHE"] = GP["F2-EQUIP_TUBAGE_OTHER"] ? GP["F2-EQUIP_TUBAGE_OTHER"] : (GP["F2-EQUIP_TUBAGE"] ? GP["F2-EQUIP_TUBAGE"] : "");
			})
		}
		nom_GP = "F2-CIMENT_LISTE"
		if (element[nom_GP])	{
			element[nom_GP].forEach((GP,index_GP)=>{
				GP["F2-CIMENT_TYPE_ELEMENT_AFFICHE"] = GP["F2-CIMENT_TYPE_ELEMENT_OTHER"] ? GP["F2-CIMENT_TYPE_ELEMENT_OTHER"] : (GP["F2-CIMENT_TYPE_ELEMENT"] ? GP["F2-CIMENT_TYPE_ELEMENT"] : "");
			})
		}
		nom_GP = "F2-INFO-HYDRO_LISTE"
		if (element[nom_GP])	{
			element[nom_GP].forEach((GP,index_GP)=>{
				GP["F2-INFO-HYDRO_MESURE_DEBIT_AFFICHE"] = GP["F2-INFO-HYDRO_MESURE_DEBIT_OTHER"] ? GP["F2-INFO-HYDRO_MESURE_DEBIT_OTHER"] : (GP["F2-INFO-HYDRO_MESURE_DEBIT"] ? GP["F2-INFO-HYDRO_MESURE_DEBIT"] : "");
			})
		}
		nom_GP = "F2-INFO-POMP_LISTE"
		if (element[nom_GP])	{
			element[nom_GP].forEach((GP,index_GP)=>{
				GP["F2-INFO-POMP_TYPE_POMPAGE_AFFICHE"] = GP["F2-INFO-POMP_TYPE_POMPAGE_OTHER"] ? GP["F2-INFO-POMP_TYPE_POMPAGE_OTHER"] : (GP["F2-INFO-POMP_TYPE_POMPAGE"] ? GP["F2-INFO-POMP_TYPE_POMPAGE"] : "");
			})
		}
        nom_GP = "F4-PALIER_PARAMETRE_LISTE"
		if (element[nom_GP])	{
			element[nom_GP].forEach((GP,index_GP)=>{
				GP["F4-PALIER_PARAMETRES_CONTROLE_AFFICHE"] = GP["F4-PALIER_PARAMETRES_CONTROLE_OTHER"] ? GP["F4-PALIER_PARAMETRES_CONTROLE_OTHER"] : (GP["F4-PALIER_PARAMETRES_CONTROLE"] ? GP["F4-PALIER_PARAMETRES_CONTROLE"] : "");
			})
		}
		nom_GP = "F4-PALIER_OUV_LISTE"
		if (element[nom_GP])	{
			element[nom_GP].forEach((GP,index_GP)=>{
				GP["F4-PALIER_OUV_PARAMETRES_CONTROLE_AFFICHE"] = GP["F4-PALIER_OUV_PARAMETRES_CONTROLE_OTHER"] ? GP["F4-PALIER_OUV_PARAMETRES_CONTROLE_OTHER"] : (GP["F4-PALIER_OUV_PARAMETRES_CONTROLE"] ? GP["F4-PALIER_OUV_PARAMETRES_CONTROLE"] : "");
			})
		}
		nom_GP = "F4-PALIER_L_PA_LISTE"
		if (element[nom_GP])	{
			element[nom_GP].forEach((GP,index_GP)=>{
				GP["F4-PALIER_L_PA_PARAMETRES_CONTROLE_AFFICHE"] = GP["F4-PALIER_L_PA_PARAMETRES_CONTROLE_OTHER"] ? GP["F4-PALIER_L_PA_PARAMETRES_CONTROLE_OTHER"] : (GP["F4-PALIER_L_PA_PARAMETRES_CONTROLE"] ? GP["F4-PALIER_L_PA_PARAMETRES_CONTROLE"] : "");
			})
		}
		nom_GP = "F5-PMP-LD_PARAMETRE_LISTE"
		if (element[nom_GP])	{
			element[nom_GP].forEach((GP,index_GP)=>{
				GP["F5-PMP-LD_PARAMETRES_CONTROLE_AFFICHE"] = GP["F5-PMP-LD_PARAMETRES_CONTROLE_OTHER"] ? GP["F5-PMP-LD_PARAMETRES_CONTROLE_OTHER"] : (GP["F5-PMP-LD_PARAMETRES_CONTROLE"] ? GP["F5-PMP-LD_PARAMETRES_CONTROLE"] : "");
			})
		}
		nom_GP = "F5-PMP-LD_OUV_LISTE"
		if (element[nom_GP])	{
			element[nom_GP].forEach((GP,index_GP)=>{
				GP["F5-PMP-LD_OUV_PARAMETRES_CONTROLE_AFFICHE"] = GP["F5-PMP-LD_OUV_PARAMETRES_CONTROLE_OTHER"] ? GP["F5-PMP-LD_OUV_PARAMETRES_CONTROLE_OTHER"] : (GP["F5-PMP-LD_OUV_PARAMETRES_CONTROLE"] ? GP["F5-PMP-LD_OUV_PARAMETRES_CONTROLE"] : "");
			})
		}
		nom_GP = "F5-PMP-LD_L_PA"
		if (element[nom_GP])	{
			element[nom_GP].forEach((GP,index_GP)=>{
				GP["F5-PMP-LD_L_PA_PARAMETRES_CONTROLE_AFFICHE"] = GP["F5-PMP-LD_L_PA_PARAMETRES_CONTROLE_OTHER"] ? GP["F5-PMP-LD_L_PA_PARAMETRES_CONTROLE_OTHER"] : (GP["F5-PMP-LD_L_PA_PARAMETRES_CONTROLE"] ? GP["F5-PMP-LD_L_PA_PARAMETRES_CONTROLE"] : "");
			})
		}
		nom_GP = "F6-SYN-DVPT_PARAMETRE_LISTE"
		if (element[nom_GP])	{
			element[nom_GP].forEach((GP,index_GP)=>{
				GP["F6-SYN-DVPT_PARAMETRES_CONTROLE_AFFICHE"] = GP["F6-SYN-DVPT_PARAMETRES_CONTROLE_OTHER"] ? GP["F6-SYN-DVPT_PARAMETRES_CONTROLE_OTHER"] : (GP["F6-SYN-DVPT_PARAMETRES_CONTROLE"] ? GP["F6-SYN-DVPT_PARAMETRES_CONTROLE"] : "");
			})
		}
		nom_GP = "F6-SYN-DVPT_OUV_LISTE"
		if (element[nom_GP])	{
			element[nom_GP].forEach((GP,index_GP)=>{
				GP["F6-SYN-DVPT_OUV_PARAMETRES_CONTROLE_AFFICHE"] = GP["F6-SYN-DVPT_OUV_PARAMETRES_CONTROLE_OTHER"] ? GP["F6-SYN-DVPT_OUV_PARAMETRES_CONTROLE_OTHER"] : (GP["F6-SYN-DVPT_OUV_PARAMETRES_CONTROLE"] ? GP["F6-SYN-DVPT_OUV_PARAMETRES_CONTROLE"] : "");
			})
		}
		nom_GP = "F6-SYN-DVPT_L_PA"
		if (element[nom_GP])	{
			element[nom_GP].forEach((GP,index_GP)=>{
				GP["F6-SYN-DVPT_L_PA_PARAMETRES_CONTROLE_AFFICHE"] = GP["F6-SYN-DVPT_L_PA_PARAMETRES_CONTROLE_OTHER"] ? GP["F6-SYN-DVPT_L_PA_PARAMETRES_CONTROLE_OTHER"] : (GP["F6-SYN-DVPT_L_PA_PARAMETRES_CONTROLE"] ? GP["F6-SYN-DVPT_L_PA_PARAMETRES_CONTROLE"] : "");
			})
		}

		// F2 : documents
		nb_DOC = 0		// Nombre de documents
		nom_GP = "F2-COUPE-GEOL-DOC"
		if (element[nom_GP]){
			element[nom_GP].forEach((GP,index_GP)=>{
				// index_GP = indice du paramètre
				// On extrait le nom du document : F2-COUPE-GEOL-DOC_NOMFIC_i
				nomvar = nom_GP + "_NOMFIC_" + (index_GP+1)
				element[nomvar] = GP["F2-COUPE-GEOL-DOC_FICHIER"]
				// et son titre : F2-COUPE-GEOL-DOC_TITRE_i
				nomvar = nom_GP + "_TITRE_" + (index_GP+1)
				element[nomvar] = GP["F2-COUPE-GEOL-DOC_TITRE"]
				nb_DOC++
			})
			// Nombre de documents : F2-COUPE-GEOL-DOC_NB_DOCUMENT
			nomvar = nom_GP + "_NB_DOCUMENT"
			element[nomvar] = nb_DOC
		}
		else
		{
			console.log("Pas de données " + nom_GP)
		}
		nom_GP = "F4-PALIER_PARAMETRE_LISTE"
		if (element[nom_GP])	{
			element[nom_GP].forEach((GP,index_GP)=>{
				// index_GP = indice du paramètre
				// On extrait le nom du paramètre dans "F4-PALIER_PARAMETRE_LISTE_PARAMETRE_i"
				nomvar = nom_GP + "_PARAMETRE_" + (index_GP+1)
				element[nomvar] = GP["F4-PALIER_PARAMETRES_CONTROLE_AFFICHE"]
				// On extrait le type de mesure dans "F4-PALIER_PARAMETRE_LISTE_TYPE_MESURE_i"
				nomvar = nom_GP + "_TYPE_MESURE_" + (index_GP+1)
				element[nomvar] = GP["F4-PALIER_TYPE_MESURE"]
				nb_PA++
			})
			nomvar = nom_GP + "_NB_PARAMETRE"
			element[nomvar] = nb_PA
		}
		else
		{
			console.log("Pas de données " + nom_GP)
		}
		// Meme traitemenst avec la liste des paramètres sur ouvrage : Group repeat F4-PALIER_OUV_LISTE
		nom_GP = "F4-PALIER_OUV_LISTE"
		if (element[nom_GP])	{
			element[nom_GP].forEach((GP,index_GP)=>{
				// index_GP = indice du paramètre
				// On extrait le nom du paramètre dans "F4-PALIER_OUV_LISTE_PARAMETRE_i"
				nomvar = nom_GP + "_PARAMETRE_" + (index_GP+1)
				element[nomvar] = GP["F4-PALIER_OUV_PARAMETRES_CONTROLE_AFFICHE"]
				// On extrait le type de mesure dans "F4-PALIER_OUV_LISTE_TYPE_MESURE_i"
				nomvar = nom_GP + "_TYPE_MESURE_" + (index_GP+1)
				element[nomvar] = GP["F4-PALIER_OUV_TYPE_MESURE"]
				nb_PA_OUV++
			})
			nomvar = nom_GP + "_NB_PARAMETRE"
			element[nomvar] = nb_PA_OUV
		}
		else
		{
			console.log("Pas de données " + nom_GP)
		}
		// F4 : documents
		nb_DOC = 0		// Nombre de documents
		nom_GP = "F4-PALIER-DOC"
		if (element[nom_GP])	{
		   element[nom_GP].forEach((GP,index_GP)=>{
			   // index_GP = indice du paramètre
			   // On extrait le nom du document : F4-PALIER-DOC_NOMFIC_i
			   nomvar = nom_GP + "_NOMFIC_" + (index_GP+1)
			   element[nomvar] = GP["F4-PALIER-DOC_FICHIER"]
			   // et son titre : F4-PALIER-DOC_TITRE_i
			   nomvar = nom_GP + "_TITRE_" + (index_GP+1)
			   element[nomvar] = GP["F4-PALIER-DOC_TITRE"]
			   nb_DOC++
		   })
		   // Nombre de documents : F4-PALIER-DOC_NB_DOCUMENT
		   nomvar = nom_GP + "_NB_DOCUMENT"
		   element[nomvar] = nb_DOC
	   }
	   else
	   {
		   console.log("Pas de données " + nom_GP)
	   }
		// F5 : fiche pompage longue durée : liste des paramètres de contrôle et des paramètres ouvrage : idem à F4
		nom_GP = "F5-PMP-LD_PARAMETRE_LISTE"
		if (element[nom_GP])	{
			element[nom_GP].forEach((GP,index_GP)=>{
				// index_GP = indice du paramètre
				// On extrait le nom du paramètre dans "F5-PMP-LD_PARAMETRE_LISTE_PARAMETRE_i"
				nomvar = nom_GP + "_PARAMETRE_" + (index_GP+1)
				element[nomvar] = GP["F5-PMP-LD_PARAMETRES_CONTROLE_AFFICHE"]
				// On extrait le type de mesure dans "F5-PMP-LD_PARAMETRE_LISTE_TYPE_MESURE_i"
				nomvar = nom_GP + "_TYPE_MESURE_" + (index_GP+1)
				element[nomvar] = GP["F5-PMP-LD_TYPE_MESURE"]
				nb_PA++
			})
			nomvar = nom_GP + "_NB_PARAMETRE"
			element[nomvar] = nb_PA
		}
		else
		{
			console.log("Pas de données " + nom_GP)
		}
		// Meme traitemenst avec la liste des paramètres sur ouvrage : Group repeat F4-PALIER_OUV_LISTE
		nom_GP = "F5-PMP-LD_OUV_LISTE"
		if (element[nom_GP])	{
			element[nom_GP].forEach((GP,index_GP)=>{
				// index_GP = indice du paramètre
				// On extrait le nom du paramètre dans "F5-PMP-LD_OUV_LISTE_PARAMETRE_i"
				nomvar = nom_GP + "_PARAMETRE_" + (index_GP+1)
				element[nomvar] = GP["F5-PMP-LD_OUV_PARAMETRES_CONTROLE_AFFICHE"]
				// On extrait le type de mesure dans "F5-PMP-LD_OUV_LISTE_TYPE_MESURE_i"
				nomvar = nom_GP + "_TYPE_MESURE_" + (index_GP+1)
				element[nomvar] = GP["F5-PMP-LD_OUV_TYPE_MESURE"]
				nb_PA_OUV++
			})
			nomvar = nom_GP + "_NB_PARAMETRE"
			element[nomvar] = nb_PA_OUV
		}
		else
		{
			console.log("Pas de données " + nom_GP)
		}
		// F5 : documents
		nb_DOC = 0		// Nombre de documents
		nom_GP = "F5-PMP-LD-DOC"
		if (element[nom_GP])	{
		   element[nom_GP].forEach((GP,index_GP)=>{
			   // index_GP = indice du paramètre
			   // On extrait le nom du document : F5-PMP-LD-DOC_NOMFIC_i
			   nomvar = nom_GP + "_NOMFIC_" + (index_GP+1)
			   element[nomvar] = GP["F5-PMP-LD-DOC_FICHIER"]
			   // et son titre : F5-PMP-LD-DOC_TITRE_i
			   nomvar = nom_GP + "_TITRE_" + (index_GP+1)
			   element[nomvar] = GP["F5-PMP-LD-DOC_TITRE"]
			   nb_DOC++
		   })
		   // Nombre de documents : F5-PMP-LD-DOC_NB_DOCUMENT
		   nomvar = nom_GP + "_NB_DOCUMENT"
		   element[nomvar] = nb_DOC
	   }
	   else
	   {
		   console.log("Pas de données " + nom_GP)
	   }

		// F6 : fiche Synthèse de l'essai de développement : liste des paramètres de contrôle et des paramètres ouvrage : idem à F4 et F5
		nom_GP = "F6-SYN-DVPT_PARAMETRE_LISTE"
		if (element[nom_GP])	{
			element[nom_GP].forEach((GP,index_GP)=>{
				// index_GP = indice du paramètre
				// On extrait le nom du paramètre dans "F6-SYN-DVPT_PARAMETRE_LISTE_PARAMETRE_i"
				nomvar = nom_GP + "_PARAMETRE_" + (index_GP+1)
				element[nomvar] = GP["F6-SYN-DVPT_PARAMETRES_CONTROLE_AFFICHE"]
				// On extrait le type de mesure dans "F6-SYN-DVPT_PARAMETRE_LISTE_TYPE_MESURE_i"
				nomvar = nom_GP + "_TYPE_MESURE_" + (index_GP+1)
				element[nomvar] = GP["F6-SYN-DVPT_TYPE_MESURE"]
				nb_PA++
			})
			nomvar = nom_GP + "_NB_PARAMETRE"
			element[nomvar] = nb_PA
		}
		else
		{
			console.log("Pas de données " + nom_GP)
		}
		// Meme traitements avec la liste des paramètres sur ouvrage : Group repeat F4-PALIER_OUV_LISTE
		nom_GP = "F6-SYN-DVPT_OUV_LISTE"
		if (element[nom_GP])	{
			element[nom_GP].forEach((GP,index_GP)=>{
				// index_GP = indice du paramètre
				// On extrait le nom du paramètre dans "F6-SYN-DVPT_OUV_LISTE_PARAMETRE_i"
				nomvar = nom_GP + "_PARAMETRE_" + (index_GP+1)
				element[nomvar] = GP["F6-SYN-DVPT_OUV_PARAMETRES_CONTROLE_AFFICHE"]
				// On extrait le type de mesure dans "F6-SYN-DVPT_OUV_LISTE_TYPE_MESURE_i"
				nomvar = nom_GP + "_TYPE_MESURE_" + (index_GP+1)
				element[nomvar] = GP["F5-PMP-LD_OUV_TYPE_MESURE"]
				nb_PA_OUV++
			})
			nomvar = nom_GP + "_NB_PARAMETRE"
			element[nomvar] = nb_PA_OUV
		}
		else
		{
			console.log("Pas de données " + nom_GP)
		}
		// F6 : Documents : group repeat F6-SYN-DVPT-DOC
		nb_DOC = 0		// Nombre de documents
		nom_GP = "F6-SYN-DVPT-DOC"
		if (element[nom_GP])	{
			element[nom_GP].forEach((GP,index_GP)=>{
				// index_GP = indice du paramètre
				// On extrait le nom du document : F6-SYN-DVPT-DOC_NOMFIC_i
				nomvar = nom_GP + "_NOMFIC_" + (index_GP+1)
				element[nomvar] = GP["F6-SYN-DVPT-DOC_FICHIER"]
				// et son titre : F6-SYN-DVPT-DOC_TITRE_i
				nomvar = nom_GP + "_TITRE_" + (index_GP+1)
				element[nomvar] = GP["F6-SYN-DVPT-DOC_TITRE"]
				nb_DOC++
			})
			// Nombre de documents : F6-SYN-DVPT-DOC_NB_DOCUMENT
			nomvar = nom_GP + "_NB_DOCUMENT"
			element[nomvar] = nb_DOC
		}
		else
		{
			console.log("Pas de données " + nom_GP)
		}
		// 18/11/2020 : Mise en forme des données CR chantier partie F1 : 
		// Un group repeat F1-GP_GLOBAL_LISTE contenant :
		//    - Suivi de l'avancement des travaux : durée, description des travaux
		//    - photos (group repeat)
		//    - Planning prévisionnel : durée, description
		//    - documents (group repeat)
		// => on reformate les deux group repeat imbriqués dans des champs à plats : nb_photos, photo_1, photo_2, .., photo_N, nb_doc, doc_1, doc_2, .., doc_M
		nom_GP = "F1-GP_GLOBAL_LISTE"
		if (element[nom_GP])	{
			element[nom_GP].forEach((GP,index_GP)=>{
				// variable utilisée pour le tri des CR => ordre dans les onglets (un onglet par CR) ("-" dans variable de tri pas supportée )
				GP["VAR_TRI_CR"] = GP["F1-AVT-TRAV_DATE_DEBUT"]
				// index_GP = indice du CR avancement travaux en cours
				// Les photos : GP F1-AVT-TRAV_LISTE_PHOTOS => Photos et description photo
				nb_DOC = 0
				nom_sous_GP = "F1-AVT-TRAV_LISTE_PHOTOS"
				if (GP[nom_sous_GP]){
					GP[nom_sous_GP].forEach((sous_GP, index_sGP)=>{
						nomvar = "F1-AVT-TRAV_PHOTO_" + (index_sGP+1)
						GP[nomvar] = sous_GP["F1-AVT-TRAV_PHOTO_SUIVI"]
						nomvar = "F1-AVT-TRAV_DESC_PHOTO_" + (index_sGP+1)
						GP[nomvar] = sous_GP["F1-AVT-TRAV_DESCRIPTION_PHOTO"]
						nb_DOC++
					})
					// Nombre de photos dans le CR en cours : 
					nomvar = "F1-AVT-TRAV_NB_PHOTO"
					GP[nomvar] = nb_DOC
				}
				// Les documents : GP F1-AVT-TRAV_LISTE_PHOTOS => Photos et description photo
				nb_DOC = 0
				nom_sous_GP = "F1-DOC_ANNEXE_LISTE"
				if (GP[nom_sous_GP]){
					GP[nom_sous_GP].forEach((sous_GP, index_sGP)=>{
						nomvar = "F1-DOC_ANNEXE_DOC_" + (index_sGP+1)
						GP[nomvar] = sous_GP["F1-DOC_ANNEXE_FICHIER"]
						nomvar = "F1-DOC_ANNEXE_DESC_" + (index_sGP+1)
						GP[nomvar] = sous_GP["F1-DOC_ANNEXE_TITRE"]
						nb_DOC++
					})
					// Nombre de photos dans le CR en cours : 
					nomvar = "F1-AVT-TRAV_NB_DOC_ANNEXE"
					GP[nomvar] = nb_DOC
				}
			})
			// tri des CR de chantier selon "VAR_TRI_CR" init plus haut
			element[nom_GP].sort( function compare(a,b){
				if ( a.VAR_TRI_CR < b.VAR_TRI_CR){
					vr = -1
				}
				else {
					 vr = 1
				}
				return vr
			})
			
		}
		else
		{
			console.log("Pas de données " + nom_GP)
		}

		// ------------------------------------------------------------------------------------------------------------------------------------
		// Fct de conversion WGS84 (geopoint) vers sélection projection en sortie (Lambert xx) ------------------------------------------------
		// ------------------------------------------------------------------------------------------------------------------------------------
		// Champs dans le formulaire :
		//    element["F0-LOCALISATION_PROJECTION_CARTO"] : résultat (étiquette) de la sélection dans la liste des projections (liste de choix dans le formulaire)
		//    element["_EPSG_POUR_PROJECTION_RAPPORT"] : valeur du choix sélectionné dans la liste : sous la forme EPSG_NOM
		// Création des champs pour utilisation dans le rapport :
		//    element["COORD_LONGITUDE"] : longitude du geopoint
		//    element["COORD_LATITUDE"]  : latitude du geopoint
		//    element["CONVERSION_COORD_Z"] : altitude saisie dans le geopoint
		//    element["SYSTEME_PROJECTION_EPSG"] : EPSG du système de projection sélectionné
		//    element["CONVERSION_COORD_X"] = X recalculé dans le système de projection sélectionné
		//    element["CONVERSION_COORD_Y"] = Y recalculé dans le système de projection sélectionné
		// Coordonnées du géopoint : on garde latitude et longitude (WGS84) et coordonnées dans le nouveau système de projection 
		element["COORD_LONGITUDE"] = labelCoodX(element);
		element["COORD_LATITUDE"] = labelCoodY(element);
		element["CONVERSION_COORD_Z"] = labelCoodZ(element);
		// Conversion des coordonnées du point dans le système de projection choisi (liste déroulante dans le formulaire)
		// Projection définie par EPSG_Nom (liste de choix) avec EPSG entier sur 4 caractères (voir pour recherche "_" si pas toujours 4)
		// EPSG : utilisé dans fct de projection mais doit être connu ( switch ...) pour paramétrage des conctantes associées 
		// => Lambert 93 et lambert CCxx : à compléter si besoin
		EPSG = 0
		if (element["_EPSG_POUR_PROJECTION_RAPPORT"] ){
			ch_EPSG = element["_EPSG_POUR_PROJECTION_RAPPORT"].substring(0,4)	
			EPSG = parseInt(ch_EPSG)
			console.log("EPSG = " + ch_EPSG + " -> " + EPSG)
		}
		if (EPSG == 0){
			console.log("EPSG non défini => L93 par défaut")
			// Lambert 93 par défaut
			EPSG = 2154
		}
		element["SYSTEME_PROJECTION_EPSG"] = EPSG;
		X = 0
		Y = 0
		// Changement du système de projection : WGS84 vers EPSG sélectionné
		if (element["COORD_LATITUDE"] != "" && element["COORD_LONGITUDE"] != ""){
			longitude = parseFloat(element["COORD_LONGITUDE"]) 
			latitude = parseFloat(element["COORD_LATITUDE"]) 
			// console.log("Avant projection : " + EPSG + " lat = " + latitude + " long = " + longitude)
			if (EPSG != 4326){
				var coord = utils_project.project_WGS84_vers_EPSG(latitude,longitude,EPSG)
				X = coord[0]
				Y = coord[1]	
			}
			else
			{
				X = longitude
				Y = latitude
			}
		}
		console.log("Retour fct projection : " + X + " , " + Y)
		element["CONVERSION_COORD_X"] = X
		element["CONVERSION_COORD_Y"] = Y
		// ------------------------------------------------------------------------------------------------------------------------------------

	})
	console.log("Nombre de soumissions " + nb_elt)
}
function Creation_Parametre_Palier(GP_PA)
{
	var line = {} ;
	line["PARAMETRE"] = GP_PA["F4-PALIER_L_PA_PARAMETRES_CONTROLE_AFFICHE"] ;
	// temps de pompage : HH:mm
	line["TPS_POMPAGE"] = GP_PA["F4-PALIER_L_PA_PARAMETRES_CONTROLE_HEURE"] ;
	line["MESURE"] = GP_PA["F4-PALIER_L_PA_PARAMETRES_CONTROLE_MESURE"] ;
	// Manque champ commentaire dans repeat
	line["COMMENTAIRE"] = GP_PA["F4-PALIER_L_PA_PARAMETRES_CONTROLE_COMMENT"] ;
	return line ;
}
// Extraction des données pour les paliers : group repeat "F4-PALIER_LISTE"
// On met en forme les données pour créer un onglet rapport par palier
exports.formatting_Palier = function(jsonContent){
	line_GP = {
		// Copier le code d'initialisation des variables à utiliser dans le modèle de rapport
		// -------------------------------------------
		// Structure de la table de données à extraire : N° du point de mesure, indice dans le groupe (voir si on utilise) puis liste 
		// des champs à extraire du groupe => toujours nommés de la même façon pour simplifier le paramétrage de l'export => 1 à N
		"IND_ENREG": "",
//		"NOM_OUVRAGE" : "",
		"IND_PALIER" : "",
		"NUM_PALIER" : "",
		"DATE_PALIER" : "",
		"DEBIT_PALIER" : "",
		"H_DEB" : "",
		"H_FIN" : "",
		"DUREE_PALIER" : "",
		"NIVEAU_DYNAMIQUE_FIN" : "",
		"RABATTEMENT" : "",
		"NIVEAU_STATIQUE_FIN" : "",
		"TEMPS_REMONTEE" : "",
		"RABATTEMENT_RESIDUEL" : "",
		// -------------------------------------------
	}
	resultat = {
		// Nom de la table résultat dans la structure construite ici => référencée dans le fichier modèle de rapport => ${table:data_GP1.NUM_PTS}
		"data_Palier" : []
	}
	// Nom du groupe repeat à extraire : dans le formulaire et donc dans le fichier de données
	jsonContent.forEach((element, index) => {
		// Données dans le group repeat des palier
		nb_palier = 0
		nom_GP_Palier = "F4-PALIER_LISTE"
		if (element[nom_GP_Palier])	{
			element[nom_GP_Palier].forEach((GP,index_GP)=>{
				new_line = Object.assign({}, line_GP)
				// Copier ici : paramétrage des champs du formulaire (group_repeat) à extraire et à copier dans la structure de données locale
				//   récupération de l'ID de la soumission principale (ici le N° du point de mesure = element["PTS_MES_NUM"] ) pour définir un ID unique pour chaque ligne
				//   indice dans le repeat => index dans la boucle : voir si utile, c'est plutot un N° = indice géré dans le formulaire (ajout) qui doit être utilisé
				// Il faut qu'il soit unique et maitrisé par utilisateur (ordre des mesures saisies)
				new_line["IND_ENREG"] = index
				// On redescend les infos ouvrage qui doivent être affichées dans la feuille des paliers
				new_line["NOM_OUVRAGE"] = element["F0-GLOB_NOM_OUVRAGE"]
				new_line["IND_PALIER"] = index_GP
				new_line["NUM_PALIER"] = GP["F4-PALIER_L_NUM"]
				new_line["DATE_PALIER"] = GP["F4-PALIER_L_DATE"]
				new_line["NIVEAU_DEPART"] = GP["F4-PALIER_L_NIVEAU_DEPART"]
				new_line["DEBIT_PALIER"] = GP["F4-PALIER_L_DEBIT_MOYEN"]
				new_line["H_DEB"] = GP["F4-PALIER_L_HEURE_DEPART"]
				new_line["H_FIN"] = GP["F4-PALIER_L_HEURE_FIN"]
				new_line["DUREE_PALIER"] = GP["F4-PALIER_L_DUREE"]
				new_line["NIVEAU_DYNAMIQUE_FIN"] = GP["F4-PALIER_L_NIVEAU_FIN"]
				new_line["RABATTEMENT"] = GP["F4-PALIER_L_RABATTEMENT"]
				new_line["NIVEAU_STATIQUE_FIN"] = GP["F4-PALIER_L_NIVEAU_STATIQUE_FIN"]
				new_line["TEMPS_REMONTEE"] = GP["F4-PALIER_L_TEMPS_REMONTEE"]
				new_line["RABATTEMENT_RESIDUEL"] = GP["F4-PALIER_L_RABATTEMENT_RESIDUEL"]
				new_line["REMARQUE_PALIER"] = GP["F4-PALIER_L_REMARQUE"]
				
				new_line["T_PA_PALIER"] = []
				// cas des paramètres de contrôle dans le palier : group repeat imbriqué
				// => Idem que la liste des paramètres de contrôle : => on créée un groupe de variable V_i par paramètre
				// Liste des paramètres mesurés dans le palier
				nom_L_PA = "F4-PALIER_L_PA_LISTE"
				if (GP[nom_L_PA])	{
					// parcours des PA dans le palier
					GP[nom_L_PA].forEach((GP_PA,index_PA)=>{
						if (true){
							// Paramètres dans une table => export ${table:} dans template Excel
							new_line["T_PA_PALIER"].push(Creation_Parametre_Palier(GP_PA))
							// T_PA_PALIER.PARAMETRE
							// T_PA_PALIER.TPS_POMPAGE
							// T_PA_PALIER.MESURE
						}
						else{
							// On extrait le paramètre dans "PARMETRE_i"
							nomvar = "PARAMETRE_" + (index_GP+1)
							new_line[nomvar] = GP_PA["F4-PALIER_L_PA_PARAMETRES_CONTROLE_AFFICHE"]
							// On extrait le temps de pompage "TEMPS_POMPAGE_i"
							nomvar = "TEMPS_POMPAGE_" + (index_GP+1)
							new_line[nomvar] = GP_PA["F4-PALIER_L_PA_PARAMETRES_CONTROLE_HEURE"]
							// On extrait la valeur "MESURE_i"
							nomvar = "MESURE_" + (index_GP+1)
							new_line[nomvar] = GP_PA["F4-PALIER_L_PA_PARAMETRES_CONTROLE_MESURE"]
							// Manque champ commentaire dans repeat
						}
					})
				}
				resultat["data_Palier"].push(new_line)
				nb_palier++
			})
			}
		else
		{
			console.log("Pas de données " + nom_GP_Palier)
		}
		element["NB_PALIER"] = nb_palier
//		console.log( "Nombre de paliers pour enreg " + index + " : " + nb_palier)
	})
	return resultat;
}

