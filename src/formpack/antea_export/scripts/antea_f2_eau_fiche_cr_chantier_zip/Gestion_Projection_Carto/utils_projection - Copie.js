var proj4 = require('proj4');

exports.formatting = function(jsonContent){
	 jsonContent.forEach(element => {
		try {
			//Projection initiale de mes coordonnées
			var fromProjection = proj4('EPSG:4326');
			//Projection destination (ici, c'est la description du EPSG:2154 (RGF93/Lambert93)
			var toProjection = "+proj=lcc +lat_1=49 +lat_2=44 +lat_0=46.5 +lon_0=3 +x_0=700000 +y_0=6600000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs";
			// On reprojet avec la fonction :
			// [x,y] = proj4(from, to, x, y)
			var new_coord = proj4(fromProjection,toProjection,[parseFloat(element["_GENERAL-LOCALISATION_longitude"]),parseFloat(element["_GENERAL-LOCALISATION_latitude"])]);
			element["X_2154_FINAL"] = new_coord[0]
			element["Y_2154_FINAL"] = new_coord[1]
		} catch (error) {
			//On fait un try/catch sur ce bout de code au cas où.
			console.error("Eror on reproj point");
		}
		
		// .... Suite de jus de cerveau
	 })
}

/**

Pour retrouver une définition de projection, rdv sur le site : https://epsg.io/
Rechercher 2154 et sélectionner le système souhaité (on arrive ici : https://epsg.io/2154)
Plus bas sur la page, il y a la partie "Export"
Sélectionner l'export PROJ.4 et copier coller la définition dans la variable "toProjection".


*/