from flask import Flask
from api.v1.app import appointment_bp
from api.database import init_db

app = Flask(__name__)
app.register_blueprint(appointment_bp)
app.register_blueprint(appointment_bp, url_prefix="/api")

# initializing the database
init_db()

if __name__ == "__main__":
    app.run(debug=True)
