# #!/usr/bin/python3
# """ Flask Application """
# from models import storage
# from api.v1.views import app_views
# from os import environ
# from flask import Flask, make_response, jsonify
# from flask_cors import CORS
# from flasgger import Swagger
# from flasgger.utils import swag_from
#
# app = Flask(__name__)
# app.config['JSONIFY_PRETTYPRINT_REGULAR'] = True
# app.register_blueprint(app_views)
# cors = CORS(app, resources={r"/api/v1/*": {"origins": "*"}})


# @app.teardown_appcontext
# def close_db(error):
#     """ Close Storage """
#     storage.close()


# @app.errorhandler(404)
# def not_found(error):
#     """ 404 Error
#     ---
#     responses:
#       404:
#         description: a resource was not found
#     """
#     return make_response(jsonify({'error': "Not found"}), 404)

# app.config['SWAGGER'] = {
#     'title': 'Carebridge Restful API',
#     'uiversion': 3
# }

# Swagger(app)

from os import environ
from flask import Blueprint, app, request, jsonify
from api.database import get_db

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
            VALUES (?, ?, ?, ?, ?, ?)
        """
        cursor.execute(sql, (name, email, date, department, phone, message))
        db.commit()

        # if the response is successful
        response = {"message": "Appointment booked successfully"}
        return jsonify(response), 200
    except Exception as e:
        # error handling database
        response = {"error": "Failed to create appointment"}
        return jsonify(response), 500


if __name__ == "__main__":
    """Main Function"""
    host = environ.get("MY_API_HOST")
    port = environ.get("MY_API_PORT")
    if not host:
        host = "0.0.0.0"
    if not port:
        port = "5000"
    app.run(host=host, port=port, threaded=True)
