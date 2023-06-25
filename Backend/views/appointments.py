from flask import jsonify
from api.v1.views import app_views
from models.appointment import Appointment


@app_views.route('/doctors/<doctor_id>/appointments', methods=['GET'])
def get_doctor_appointments(doctor_id):
    """
    Retrieves the list of appointments for a specific doctor
    """
    appointments = Appointment.get_appointments_by_doctor(doctor_id)
    appointment_list = [appointment.to_dict() for appointment in appointments]
    return jsonify(appointment_list)


@app_views.route('/patients/<patient_id>/appointments', methods=['GET'])
def get_patient_appointments(patient_id):
    """
    Retrieves the list of appointments for a specific patient
    """
    appointments = Appointment.get_appointments_by_patient(patient_id)
    appointment_list = [appointment.to_dict() for appointment in appointments]
    return jsonify(appointment_list)
