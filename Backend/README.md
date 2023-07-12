# CareBridge Appointment App - Backend

This is the backend component of the CareBridge Appointment App. CareBridge is an application that connects patients and doctors, allowing users to schedule and manage appointments. The backend is responsible for handling API requests, managing the database, and facilitating communication between the frontend and the database.

## Technologies Used

- Python
- Flask (Web framework)
- SQLite (Database)
- Flask-Cors (Cross-Origin Resource Sharing support)

## Project Structure

The project structure is organized as follows:

- `api/`: This directory contains the Flask application code for handling API routes, managing appointments, and interacting with the database.
- `appointments.db`: This is the SQLite database file that stores appointment-related data.
- `wsgi.py`: The entry point file that runs the Flask application.

## Installation and Setup

To set up the CareBridge backend, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the `Backend` directory.
3. Create a virtual environment (optional but recommended).
4. Install the required dependencies by running `pip install -r requirements.txt`.
5. Ensure the `appointments.db` file is present and accessible.
6. Start the backend server by running `python wsgi.py`.

## API Routes

The CareBridge backend provides the following API routes:

- `GET /team`: Retrieves information about the team members, including their names, specialties, contact details, and social media profiles.
- `GET /appointments`: Retrieves a list of all appointments, including the patient's name, email, appointment date, department, phone number, and additional message.
- `POST /appointment`: Submits a new appointment request, including the patient's name, email, appointment date, department, phone number, and additional message.

For more detailed API documentation, please refer to the API code (`api/app.py`) or the frontend documentation.

## Database Schema

The database schema consists of two tables:

- `appointments`: Stores appointment-related data, including the appointment ID, patient's name, email, appointment date, department, phone number, and additional message.
- `team`: Stores information about the team members, including their ID, name, specialty, contact details, and social media profiles.

## Frontend

For information about the CareBridge frontend, please refer to the [Frontend README.md](/link/to/frontend/readme.md) file.

## Contributing

We welcome contributions to the CareBridge project! If you have any ideas, bug fixes, or feature enhancements, please submit a pull request. For major changes, please open an issue first to discuss the proposed changes.

## License

The CareBridge Appointment App is open source and available under the [MIT License](/link/to/license).


# BackEnd Data Structure#



![data_structure](https://live.staticflickr.com/65535/52999644713_1550c92c98_q.jpg)

