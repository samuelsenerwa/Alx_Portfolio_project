#!/usr/bin/python3
"""Objects that handle all default API actions for counties"""

from models.town import Town
from models.county import County
from models import storage
from api.v1.views import app_views
from flask import abort, jsonify, make_response
from flasgger.utils import swag_from


@app_views.route('/counties/<county_id>/towns', methods=['GET'], strict_slashes=False)
@swag_from('documentation/town/towns_by_county.yml', methods=['GET'])
def get_towns(county_id):
    """
    Retrieves the list of all town objects of a specific County, or a specific town
    """
    list_towns = []
    county = storage.get(County, county_id)
    if not county:
        abort(404)
    for town in county.towns:
        list_towns.append(town.to_dict())

    return jsonify(list_towns)


@app_views.route('/towns/<town_name>/', methods=['GET'], strict_slashes=False)
@swag_from('documentation/town/get_town.yml', methods=['GET'])
def get_town(town_name):
    """
    Retrieves a specific town based on name
    """
    town = storage.get_by(Town, 'name', town_name)
    if not town:
        abort(404)
    return jsonify(town.to_dict())
