from flask import Blueprint, request, jsonify

appointment_bp = Blueprint("appointment", __name__)


@appointment_bp.route("/api/appointment", methods=["POST"])
def create_appointment():
    name = request.form.get("name")
    email = request.form.get("email")
    date = request.form.get("date")
    department = request.form.get("department")
    phone = request.form.get("phone")
    message = request.form.get("message")

    # validation
    if not name or not email or not date or not department:
        response = {"error": "Missing required fields"}
        return jsonify(response), 400
