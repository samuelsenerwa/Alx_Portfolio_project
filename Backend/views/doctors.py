from models.doctor import Doctor
from models.county import County
from models.town import Town
from models.specialization import Specialization
from models import storage
from api.v1.views import app_views
from flask import abort, jsonify

@app_views.route('/doctors', methods=['GET'], strict_slashes=False)
def get_all_doctors():
    """
    Retrieves the list of all doctors
    """
    doctors = Doctor.query.all()
    doctors_data = [doctor.to_dict() for doctor in doctors]

    return jsonify(doctors_data)


@app_views.route('/doctors/<doctor_id>', methods=['GET'], strict_slashes=False)
def get_doctor(doctor_id):
    """
    Retrieves a specific doctor based on ID
    """
    doctor = storage.get(Doctor, doctor_id)
    if not doctor:
        abort(404)

    return jsonify(doctor.to_dict())


@app_views.route('/doctors/search', methods=['GET'], strict_slashes=False)
def search_doctors():
    """
    Retrieves the list of doctors based on search criteria
    """
    query_params = request.args

    # Retrieve query parameters
    name = query_params.get('name')
    county_id = query_params.get('county_id')
    town_id = query_params.get('town_id')
    specialization_id = query_params.get('specialization_id')

    # Perform search based on query parameters
    doctors_query = Doctor.query

    if name:
        doctors_query = doctors_query.filter(Doctor.name.ilike(f'%{name}%'))

    if county_id:
        doctors_query = doctors_query.filter(Doctor.county_id == county_id)

    if town_id:
        doctors_query = doctors_query.filter(Doctor.town_id == town_id)

    if specialization_id:
        doctors_query = doctors_query.filter(Doctor.specialization_id == specialization_id)

    doctors = doctors_query.all()
    doctors_data = [doctor.to_dict() for doctor in doctors]

    return jsonify(doctors_data)
