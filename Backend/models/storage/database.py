from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base
from Backend.models.doctors import Doctor
from Backend.models.appointments import Appointment
import os

# Retrieving the database parameters from environment variables
username = os.environ.get('CAREBRIDGE_MYSQL_USER')
password = os.environ.get('CAREBRIDGE_MYSQL_PWD')
host = os.environ.get('CAREBRIDGE_MYSQL_HOST')
database = os.environ.get('CAREBRIDGE_MYSQL_DB')

# Creating the database engine
engine = create_engine(f'mysql://{username}:{password}@{host}/{database}')

# Creating a session factory
Session = sessionmaker(bind=engine)

# Creating the base model class
Base = declarative_base()


class Database:
    @staticmethod
    def save_doctor(doctor):
        session = Session()
        session.add(doctor)
        session.commit()

    @staticmethod
    def get_doctor_by_id(doctor_id):
        session = Session()
        return session.query(Doctor).get(doctor_id)

    @staticmethod
    def get_doctors_by_specialization(specialization):
        session = Session()
        return session.query(Doctor).filter_by(specialization=specialization).all()

    @staticmethod
    def get_doctors_by_location(county, city):
        session = Session()
        return session.query(Doctor).filter_by(county=county, city=city).all()

    @staticmethod
    def save_appointment(appointment):
        session = Session()
        session.add(appointment)
        session.commit()

    @staticmethod
    def get_appointment_by_id(appointment_id):
        session = Session()
        return session.query(Appointment).get(appointment_id)

    @staticmethod
    def get_appointments_by_doctor(doctor_id):
        session = Session()
        return session.query(Appointment).filter_by(doctor_id=doctor_id).all()

    @staticmethod
    def get_appointments_by_patient(patient_name):
        session = Session()
        return session.query(Appointment).filter_by(patient_name=patient_name).all()

    @staticmethod
    def get_appointments_by_date(date):
        session = Session()
        return session.query(Appointment).filter_by(date=date).all()
