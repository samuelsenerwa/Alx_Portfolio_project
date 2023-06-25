# app/models/appointments.py

from .storage.database import Database


class Appointment:
    def __init__(self, id, doctor_id, patient_name, date, time):
        self.id = id
        self.doctor_id = doctor_id
        self.patient_name = patient_name
        self.date = date
        self.time = time

    def save(self):
        Database.save_appointment(self)

    @classmethod
    def find_by_id(cls, appointment_id):
        return Database.get_appointment_by_id(appointment_id)

    @classmethod
    def find_by_doctor(cls, doctor_id):
        return Database.get_appointments_by_doctor(doctor_id)

    @classmethod
    def find_by_patient(cls, patient_name):
        return Database.get_appointments_by_patient(patient_name)

    @classmethod
    def find_by_date(cls, date):
        return Database.get_appointments_by_date(date)
