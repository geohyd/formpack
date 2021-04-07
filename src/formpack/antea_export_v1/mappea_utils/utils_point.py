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
from pyproj import CRS, Transformer
try:
    # For Linux boys
    from . import settings
except ImportError:
    # For windows girls
    import settings



def createPoint(coord):
    """
    Create a new point in the settings.URL_SERVICE features service.
    The post data is on seettings.POST_CREATE_POINT. This methode override this conf
    :param coord: An object contains lon, lat, epsg, name and id keys.
    :return: the ESRI objectId of new point feature, None if error
    """
    feature = settings.POST_CREATE_POINT.copy()
    feature['geometry']['x'] = float(coord['lon'])
    feature['geometry']['y'] = float(coord['lat'])
    feature['geometry']['spatialReference']['wkid'] = coord['epsg']
    feature['attributes']['pr_nom'] = coord['name']
    feature['attributes']['survea_id'] = coord['id']
    
    data  = {
        'features' : json.dumps([feature]),
        'rollbackOnFailure' : True,
        'f': 'pjson'
    }
    # Need to disable certificate verify, please, do a serious and secured ArcGis Server installation :)
    r = requests.post(settings.URL_CREATE_POINT, params=data, verify=False)
    if r.ok :
        resp = r.json()
        if 'error' in resp:
            return None
        if "error" in resp["addResults"][0]:
            print(resp["error"]["message"])
            return None
        if "success" in resp["addResults"][0]:
            objectId = resp["addResults"][0]["objectId"]
            return objectId
    else:
        print("Error in createPoint")
    return None


def exportMap(feature):
    """
    Create an export map from settings.URL_EXPORT_WEBMAP service.
    The Web Map config is on settings.WEBMAP_CONFIG. This methode override this conf
    Use settings.MAP_DISTANCE for calculate de BBOX around the point
    :param feature: An object contains objectId key (ESRI objectId), and coord key (same object of createPoint def)
    :return: Map in base64 image, None otherwise
    """

    crs_input = CRS.from_epsg(int(feature["coord"]['epsg']))
    crs_3857 = CRS.from_epsg(3857)
    transformer = Transformer.from_crs(crs_input, crs_3857)
    coord_3857 = transformer.transform(float(feature["coord"]['lat']), float(feature["coord"]['lon']))

    webmap = settings.WEBMAP_CONFIG.copy()
    webmap["mapOptions"]["extent"]["xmin"] = float(coord_3857[0]) - settings.MAP_DISTANCE
    webmap["mapOptions"]["extent"]["ymin"] = float(coord_3857[1]) - settings.MAP_DISTANCE
    webmap["mapOptions"]["extent"]["xmax"] = float(coord_3857[0]) + settings.MAP_DISTANCE
    webmap["mapOptions"]["extent"]["ymax"] = float(coord_3857[1]) + settings.MAP_DISTANCE
    webmap["operationalLayers"][1]["layerDefinition"]["objectIds"].append(feature["objectId"])

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


def deletePoint(feature):
    """
    Delete a point in the settings.URL_SERVICE features service.
    :param feature: An object contains objectId key (ESRI objectId), and coord key (same object of createPoint def)
    :return: True if removed, None otherwise
    """
    data = {
        'objectIds': int(feature["objectId"]),
        'f' : 'pjson'
    }
    r = requests.post(settings.URL_DELETE_POINT, data=data, verify=False)
    if r.ok :
        resp = r.json()
        if "error" in resp:
            print(resp["error"]["message"])
            return None
        if "deleteResults" in resp \
                and "success" in resp["deleteResults"] \
                and resp["deleteResults"]["success"] == True:
            return True
    else:
        print("Error in deletePoint")
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
    features = []
    objectId = createPoint(coord)
    print(objectId)
    # if objectId:
    #     features.append({
    #         "objectId": objectId,
    #         "coord": coord
    #     })
    # for feature in features:
    #     binary_image = exportMap(feature)
    #     if binary_image:
    #         with open("esri_mockup.png", 'wb') as f:
    #             f.write(binary_image)
    #     deletePoint(feature)

