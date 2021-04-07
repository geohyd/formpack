# coding: utf-8
from enum import Enum

# Not Use
URL_TOKEN = "https://mappea.geo-hyd.net/portal/sharing/rest/generateToken"
URL_EXPORT_WEBMAP = 'https://mappea.geo-hyd.net/server/rest/services/Utilities/PrintingTools/GPServer/Export%20Web%20Map%20Task/execute'

# Not Use
HEADERS = {'Content-type': 'application/json', 'Accept': '*/*'}

class Basemap(Enum):
    STREET = {
			"id": "street",
			"title": "Rues",
			"opacity": 1,
			"minScale": 0,
			"maxScale": 0,
			"type": "VectorTileLayer",
			"styleUrl": "https://www.arcgis.com/sharing/rest/content/items/41f8cecb08ff42f8b7e15c8a20dc1984/resources/styles/root.json"
	}
    SATTELITE = {
        'id': 'World_Imagery_2017',
        'title': 'World_Imagery_2017',
        'opacity': 1,
        'minScale': 0,
        'maxScale': 0,
        'url': 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer'
    }
    NAVIGATION = {
			"id": "navigation",
			"title": "Navigation",
			"opacity": 1,
			"minScale": 0,
			"maxScale": 0,
			"type": "VectorTileLayer",
			"styleUrl": "https://www.arcgis.com/sharing/rest/content/items/fbdc26bdf15347f1a47564271e974f82/resources/styles/root.json"
	}

WEBMAP_CONFIG_DEFAULT = {
    'mapOptions': {
        'showAttribution': True,
        'extent': {
            'xmin': None,
            'ymin': None,
            'xmax': None,
            'ymax': None,
            'spatialReference': {
                'wkid': 102100,
                'latestWkid': 3857
            }
        },
        'spatialReference': {
            'wkid': 102100,
            'latestWkid': 3857
        }
    },
    'operationalLayers': [{
        'id': 'World_Imagery_2017',
        'title': 'World_Imagery_2017',
        'opacity': 1,
        'minScale': 0,
        'maxScale': 0,
        'url': 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer'
    }],
    'exportOptions': {
        'outputSize': [600, 600],
        'dpi': 96
    }
}

LAYER_POINT = {
    "id": "map_graphics",
    "featureCollection": {
        "layers": [{
            "layerDefinition": {
                "name": "pointLayer",
                "geometryType": "esriGeometryPoint",
                "drawingInfo": {
                    "renderer": {
                        "type": "simple",
                        "symbol": {
                            'angle': 0,
                            'xoffset': 0,
                            'yoffset': 0,
                            'type': 'esriPMS',
                            'url': 'http://mappea.geo-hyd.net/portal/portalimages/Symbols/Shapes/GreenCircleLargeB.png',
                            'imageData': 'iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAADImlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4wLWMwNjAgNjEuMTM0Nzc3LCAyMDEwLzAyLzEyLTE3OjMyOjAwICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IE1hY2ludG9zaCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3MTYxN0FBN0QzMUQxMUUwQUU5NUVFMEYwMTY0NzUwNSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3MTYxN0FBOEQzMUQxMUUwQUU5NUVFMEYwMTY0NzUwNSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjcxNjE3QUE1RDMxRDExRTBBRTk1RUUwRjAxNjQ3NTA1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjcxNjE3QUE2RDMxRDExRTBBRTk1RUUwRjAxNjQ3NTA1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQg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',
                            'contentType': 'image/png',
                            'width': 30,
                            'height': 30
                        }
                    }
                }
            },
            "featureSet": {
                "features": [{
                        "geometry": {
                            "x": None,
                            "y": None,
                            "spatialReference": {
                                "wkid": 4326
                            }
                        }
                    }
                ]
            }
        }]
    }
}

#DEPRECATED
WEBMAP_CONFIG_POINT = {
    'mapOptions': {
        'showAttribution': True,
        'extent': {
            'xmin': None,
            'ymin': None,
            'xmax': None,
            'ymax': None,
            'spatialReference': {
                'wkid': 102100,
                'latestWkid': 3857
            }
        },
        'spatialReference': {
            'wkid': 102100,
            'latestWkid': 3857
        }
    },
    'operationalLayers': [{
        'id': 'World_Imagery_2017',
        'title': 'World_Imagery_2017',
        'opacity': 1,
        'minScale': 0,
        'maxScale': 0,
        'url': 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer'
    },{
	    "id": "map_graphics",
	    "featureCollection": {
            "layers": [{
                "layerDefinition": {
                    "name": "pointLayer",
                    "geometryType": "esriGeometryPoint",
                    "drawingInfo": {
                        "renderer": {
                            "type": "simple",
                            "symbol": {
                                'angle': 0,
                                'xoffset': 0,
                                'yoffset': 0,
                                'type': 'esriPMS',
                                'url': 'http://mappea.geo-hyd.net/portal/portalimages/Symbols/Shapes/GreenCircleLargeB.png',
                                'imageData': 'iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAADImlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4wLWMwNjAgNjEuMTM0Nzc3LCAyMDEwLzAyLzEyLTE3OjMyOjAwICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IE1hY2ludG9zaCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3MTYxN0FBN0QzMUQxMUUwQUU5NUVFMEYwMTY0NzUwNSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3MTYxN0FBOEQzMUQxMUUwQUU5NUVFMEYwMTY0NzUwNSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjcxNjE3QUE1RDMxRDExRTBBRTk1RUUwRjAxNjQ3NTA1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjcxNjE3QUE2RDMxRDExRTBBRTk1RUUwRjAxNjQ3NTA1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQg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',
                                'contentType': 'image/png',
                                'width': 30,
                                'height': 30
                            }
                        }
                    }
                },
                "featureSet": {
                    "features": [{
                            "geometry": {
                                "x": None,
                                "y": None,
                                "spatialReference": {
                                    "wkid": 4326
                                }
                            }
                        }
                    ]
                }
            }]
	    }
    }],
    'exportOptions': {
        'outputSize': [600, 600],
        'dpi': 96
    }
}

# MAP_DISTANCE = 1000
MAP_DISTANCE = 300
