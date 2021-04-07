#!/usr/bin/python
# coding: utf-8

"""
Utils def for adding a point,
			  export in a PNG map and 
			  delete a point with Mappea ESRI API.

At this moment,
	only epsg:4326 is supported : TODO match the input espg with layer epsg and the rest, and so, change lat;lon keys by x;y
	name and id object keys are not used : TODO add the label in export map
"""

import json
import requests
import datetime
from pyproj import CRS, Transformer
try:
    # For Linux boys
    from . import settings
except ImportError:
    # For windows girls
    import settings
try:
    # For Linux boys
    from . import utils
except ImportError:
    # For windows girls
    import utils

class WebMapPoint(utils.WebMapConfig):

    def __init__(self, feature_pt, distance = settings.MAP_DISTANCE):
        utils.WebMapConfig.__init__(self, feature_pt,distance)
        point_layer = settings.LAYER_POINT.copy()
        point_layer["featureCollection"]["layers"][0]["featureSet"]["features"][0]["geometry"]["x"] = float(feature_pt['x'])
        point_layer["featureCollection"]["layers"][0]["featureSet"]["features"][0]["geometry"]["y"] = float(feature_pt['y'])
        if "epsg" in feature_pt:
            point_layer["featureCollection"]["layers"][0]["featureSet"]["features"][0]["geometry"]["spatialReference"]["wkid"] = int(feature_pt['epsg'])
        self.addLayer(point_layer)

#DEPRECATED
def export_map_point(feature_pt):
    """
    Create an export map from settings.URL_EXPORT_WEBMAP service.
    The Web Map config is on settings.WEBMAP_CONFIG_POINT. This methode override this conf
    Use settings.MAP_DISTANCE for calculate de BBOX around the point
    :param feature_pt: An object contains coord x, y and epsg
    :return: Map in base64 image, None otherwise
    """

    crs_input = CRS.from_epsg(int(feature_pt['epsg']))
    crs_3857 = CRS.from_epsg(3857)
    transformer = Transformer.from_crs(crs_input, crs_3857)
    coord_3857 = transformer.transform(float(feature_pt['y']), float(feature_pt['x']))

    webmap = settings.WEBMAP_CONFIG_POINT.copy()
    webmap["mapOptions"]["extent"]["xmin"] = float(coord_3857[0]) - settings.MAP_DISTANCE
    webmap["mapOptions"]["extent"]["ymin"] = float(coord_3857[1]) - settings.MAP_DISTANCE
    webmap["mapOptions"]["extent"]["xmax"] = float(coord_3857[0]) + settings.MAP_DISTANCE
    webmap["mapOptions"]["extent"]["ymax"] = float(coord_3857[1]) + settings.MAP_DISTANCE
    webmap["operationalLayers"][1]["featureCollection"]["layers"][0]["featureSet"]["features"][0]["geometry"]["x"] = float(feature_pt['x'])
    webmap["operationalLayers"][1]["featureCollection"]["layers"][0]["featureSet"]["features"][0]["geometry"]["y"] = float(feature_pt['y'])

    data = {
        'Web_Map_as_JSON' : json.dumps(webmap),
        'Format' : 'PNG32',
        'Layout_Template' : 'MAP_ONLY',
        'f' : 'pjson'
    }
    r = requests.post(settings.URL_EXPORT_WEBMAP, data=data, verify=False)
    if r.ok :
        resp = r.json()
        if "error" in resp:
            print(resp["error"]["message"])
            return None
        if "value" in resp["results"][0] and "url" in resp["results"][0]["value"]:
            resp_map_content_url = resp["results"][0]["value"]["url"]
            resp_image = requests.get(resp_map_content_url, verify=False)
            return resp_image.content
    else:
        print("Error in exportMap")
    return None

if __name__ == "__main__":
    """
    Main example for some peoples who don't want to read the comments ... 
    """
    coord = {
        "lon" : 1.931731,
        "lat" : 47.857922,
        "epsg" : 4326,
        "name" : "esri_mockup",
        "id" : "123"
    }
    binary_image = export_map_point(coord)
    if binary_image:
        with open("esri_mockup_v3.png", 'wb') as f:
            f.write(binary_image)

