from flask import Flask

app = Flask(__name__)

# registering the flask blueprints
from .appointment import appointment_bp

app.register_blueprint(appointment_bp, url_prefix="/api")

# initializing the database
from . import database

database.init_db()
