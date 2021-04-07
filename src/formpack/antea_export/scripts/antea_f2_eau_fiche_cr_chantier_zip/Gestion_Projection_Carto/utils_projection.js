var proj4 = require('proj4');

exports.project_WGS84_vers_EPSG = function(lat, long, EPSG){
	Xp = 0
	Yp = 0
	//Projection initiale de mes coordonnées
	var fromProjection = proj4('EPSG:4326');
	//Projection destination (ici, c'est la description du EPSG:2154 (RGF93/Lambert93)
	var toProjection = ""
	switch (EPSG){
		case 3942 : toProjection = "+proj=lcc +lat_1=42.75 +lat_2=41.25 +lat_0=42 +lon_0=3 +x_0=1700000 +y_0=1200000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs";   // CC42
		break;
		case 3943 : toProjection = "+proj=lcc +lat_1=43.75 +lat_2=42.25 +lat_0=43 +lon_0=3 +x_0=1700000 +y_0=2200000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs";   // CC43
		break;
		case 3944 : toProjection = "+proj=lcc +lat_1=44.75 +lat_2=43.25 +lat_0=44 +lon_0=3 +x_0=1700000 +y_0=3200000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs";   // CC44
		break;
		case 3945 : toProjection = "+proj=lcc +lat_1=45.75 +lat_2=44.25 +lat_0=45 +lon_0=3 +x_0=1700000 +y_0=4200000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs";   // CC45
		break;
		case 3946 : toProjection = "+proj=lcc +lat_1=46.75 +lat_2=45.25 +lat_0=46 +lon_0=3 +x_0=1700000 +y_0=5200000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs";   // CC46
		break;
		case 3947 : toProjection = "+proj=lcc +lat_1=47.75 +lat_2=46.25 +lat_0=47 +lon_0=3 +x_0=1700000 +y_0=6200000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs";   // CC47
		break;
		case 3948 : toProjection = "+proj=lcc +lat_1=48.75 +lat_2=47.25 +lat_0=48 +lon_0=3 +x_0=1700000 +y_0=7200000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs";   // CC48
		break;
		case 3949 : toProjection = "+proj=lcc +lat_1=49.75 +lat_2=48.25 +lat_0=49 +lon_0=3 +x_0=1700000 +y_0=8200000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs";   // CC49
		break;
		case 3950 : toProjection = "+proj=lcc +lat_1=50.75 +lat_2=49.25 +lat_0=50 +lon_0=3 +x_0=1700000 +y_0=9200000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs";   // CC50
		break;
		case 2154 : toProjection = "+proj=lcc +lat_1=49 +lat_2=44 +lat_0=46.5 +lon_0=3 +x_0=700000 +y_0=6600000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs";   // Lambert93
		break;
		default : console.log("Dans fct projection : EPSG non géré : " + EPSG)
	}
/*
	if (EPSG == 2154){
		toProjection = "+proj=lcc +lat_1=49 +lat_2=44 +lat_0=46.5 +lon_0=3 +x_0=700000 +y_0=6600000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs";
		
	} 
	else {
		console.log("Dans fct projection : EPSG non géré : " + EPSG)
	}
*/	
	console.log("Dans fct projection : EPSG " + EPSG + " -> " + toProjection)
	if (toProjection != ""){
		// On reprojet avec la fonction :
		// [x,y] = proj4(from, to, x, y)
		var new_coord = proj4(fromProjection,toProjection,[long,lat]);
		Xp = new_coord[0]
		Yp = new_coord[1]
	}
	else {
		// => return [0,0]
	}
	return [Xp,Yp]
}

/**

Pour retrouver une définition de projection, rdv sur le site : https://epsg.io/
Rechercher 2154 et sélectionner le système souhaité (on arrive ici : https://epsg.io/2154)
Plus bas sur la page, il y a la partie "Export"
Sélectionner l'export PROJ.4 et copier coller la définition dans la variable "toProjection".


*/