# coding: utf-8

from pyproj import CRS, Transformer
import requests
import json
import copy

try:
    # For Linux boys
    from . import settings
except ImportError:
    # For windows girls
    import settings

class WebMapConfig:

    def __init__(self, center, distance = settings.MAP_DISTANCE):
        self.__web_map = copy.deepcopy(settings.WEBMAP_CONFIG_DEFAULT)

        crs_input = CRS.from_epsg(int(center['epsg']))
        crs_3857 = CRS.from_epsg(3857)
        transformer = Transformer.from_crs(crs_input, crs_3857)
        coord_3857 = transformer.transform(float(center['y']), float(center['x']))
        self.__web_map["mapOptions"]["extent"]["xmin"] = float(coord_3857[0]) - distance
        self.__web_map["mapOptions"]["extent"]["ymin"] = float(coord_3857[1]) - distance
        self.__web_map["mapOptions"]["extent"]["xmax"] = float(coord_3857[0]) + distance
        self.__web_map["mapOptions"]["extent"]["ymax"] = float(coord_3857[1]) + distance

    @property
    def web_map(self):
        return self.__web_map

    @web_map.setter
    def web_map(self, web_map):
        self.__web_map = web_map

    def set_basemap(self, basemap):
        if not isinstance(basemap, settings.Basemap):
            raise TypeError('basemap must be an instance of Basemap Enum')
        self.__web_map["operationalLayers"][0] = copy.deepcopy(basemap.value)
        return self.__web_map

    def addLayer(self, layer):
        self.__web_map["operationalLayers"].append(layer)

    def export_map(self):
        data = {
            'Web_Map_as_JSON' : json.dumps(self.__web_map),
            'Format' : 'PNG32',
            'Layout_Template' : 'MAP_ONLY',
            'f' : 'pjson'
        }
        r = requests.post(settings.URL_EXPORT_WEBMAP, data=data, verify=False)
        if r.ok :
            resp = r.json()
            if "error" in resp:
                return None
            if "value" in resp["results"][0] and "url" in resp["results"][0]["value"]:
                resp_map_content_url = resp["results"][0]["value"]["url"]
                resp_image = requests.get(resp_map_content_url, verify=False)
                return resp_image.content
        else:
            print("Error in exportMap")
        return None
