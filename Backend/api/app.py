from flask import Flask, request, g, jsonify
from flask_cors import CORS
import sqlite3

app = Flask(__name__)
CORS(app)


def get_db():
    if "db" not in g:
        g.db = sqlite3.connect("appointments.db")
    return g.db


@app.teardown_appcontext
def close_db(exception):
    db = g.pop("db", None)
    if db is not None:
        db.close()

# Doctors TEAM DB
@app.route("/team", methods=["GET"])
def get_team():
    with app.app_context():
        db = get_db()
        cursor = db.cursor()
        cursor.execute("SELECT * FROM team")
        team_members = cursor.fetchall()
        cursor.close()

    print("Retrieved team members:", team_members)

    #converting the team data into list
    team_list = []
    for member in team_members:
        member_dict = {
            "id": member[0],
            "name":member[1],
            "speciality": member[2],
            "phone": member[3],
            "email":member[4],
            "image":member[5],
            "social": {
                "linkedin": member[6],
                "facebook": member[7],
                "twitter": member[8],
                "flickr": member[9]
            }
        }
        team_list.append(member_dict)

    print("Formmatted team data :", team_list)

    return jsonify(team_list)


@app.route("/appointment", methods=["POST"])
def handle_appointment():
    data = request.get_json()

    name = data.get("name")
    email = data.get("email")
    date = data.get("date")
    department = data.get("department")
    phone = data.get("phone")
    message = data.get("message")

    # Validate required fields
    if not name or not email or not date or not department or not phone or not message:
        return "Missing required fields", 400

    # Store the data in the database
    with app.app_context():
        db = get_db()
        cursor = db.cursor()
        cursor.execute(
            "INSERT INTO appointments (name, email, date, department, phone, message) VALUES (?, ?, ?, ?, ?, ?)",
            (name, email, date, department, phone, message),
        )
        db.commit()
        cursor.close()

    print(f"Name: {name}")
    print(f"Email: {email}")
    print(f"Date: {date}")
    print(f"Department: {department}")
    print(f"Phone: {phone}")
    print(f"Message: {message}")

    return "Appointment submitted successfully"


@app.route("/appointments", methods=["GET"])
def get_appointments():
    with app.app_context():
        db = get_db()
        cursor = db.cursor()
        cursor.execute("SELECT * FROM appointments")
        appointments = cursor.fetchall()
        cursor.close()

    # Convert the appointment data into a list of dictionaries
    appointment_list = []
    for appointment in appointments:
        appointment_dict = {
            "id": appointment[0],
            "name": appointment[1],
            "email": appointment[2],
            "date": appointment[3],
            "department": appointment[4],
            "phone": appointment[5],
            "message": appointment[6],
        }
        appointment_list.append(appointment_dict)

    return jsonify(appointment_list)




if __name__ == "__main__":
    # Create the database table if it doesn't exist
    with app.app_context():
        db = get_db()
        cursor = db.cursor()

        #appointment table if it doesn't exist
        cursor.execute(
            "CREATE TABLE IF NOT EXISTS appointments ("
            "id INTEGER PRIMARY KEY AUTOINCREMENT,"
            "name TEXT NOT NULL,"
            "email TEXT NOT NULL,"
            "date TEXT NOT NULL,"
            "department TEXT NOT NULL,"
            "phone TEXT NOT NULL,"
            "message TEXT NOT NULL)"
        )
        
        #Doctors Team Table
        cursor.execute(
            "CREATE TABLE IF NOT EXISTS team ("
            "id INTEGER PRIMARY KEY AUTOINCREMENT,"
            "name TEXT NOT NULL,"
            "specialty TEXT NOT NULL,"
            "phone TEXT NOT NULL,"
            "email TEXT NOT NULL,"
            "image TEXT NOT NULL,"
            "linkedin TEXT,"
            "facebook TEXT,"
            "twitter TEXT,"
            "flickr TEXT)"
        )

        #inserting into doctors table
         # Insert sample data into the team table
       # Insert sample data into the team table
        cursor.execute(
            "INSERT INTO team (name, specialty, phone, email, image, linkedin, facebook, twitter, flickr) VALUES "
            "('Nate Baston', 'General Principal', '010-020-0120', 'general@company.com', '/home/senerwa/Web/portfolio_project/Frontend/src/Images/team-image1.jpg', "
            "'linkedin.com/nate', '', '', ''),"
            "('Jason Stewart', 'Pregnancy', '010-070-0170', 'pregnancy@company.com', '/home/senerwa/Web/portfolio_project/Frontend/src/Images/team-image2.jpg', "
            "'', 'facebook.com/jason', 'twitter.com/jason', ''),"
            "('Miasha Nakahara', 'Cardiology', '010-040-0140', 'cardio@company.com', '/home/senerwa/Web/portfolio_project/Frontend/src/Images/team-image3.jpg', "
            "'', '', 'twitter.com/miasha', '')"
        )


        cursor.close()

    app.run(host='0.0.0.0', port=5000)
