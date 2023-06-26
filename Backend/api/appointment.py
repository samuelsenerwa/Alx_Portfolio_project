from flask import Blueprint, request, jsonify

from Backend.api.database import get_db

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

    try:
        # insert the form into the database
        db = get_db()
        cursor = db.cursor()
        sql = """
            INSERT INTO appointments (name, email, date, department, phone, message)
        """
        cursor.execute(sql, (name, email, date, department, phone, message))
        db.commit()

        # if the response is successful
        response = {"message": "Appointment booked successfully"}
        return jsonify(response), 200
    except Exception as e:
        # error handling database
        response = {"error", "Failed to create appointment"}
        return jsonify(response), 500
