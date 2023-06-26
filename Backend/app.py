from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route("/appointment", methods=["POST"])
def handle_appointment():
    data = request.get_json()

    name = request.form.get("name")
    email = request.form.get("email")
    date = request.form.get("date")
    department = request.form.get("department")
    phone = request.form.get("phone")
    message = request.form.get("message")

    # Process the form data and perform necessary operations

    print(f"Name: {name}")
    print(f"Email: {email}")
    print(f"Date: {date}")
    print(f"Department: {department}")
    print(f"Phone: {phone}")
    print(f"Message: {message}")

    return "Appointment submitted successfully"


if __name__ == "__main__":
    app.run(debug=True)
