# app/models/doctor.py

from .storage.database import Database


class Doctor:
    def __init__(self, id, name, specialization, county, town):
        self.id = id
        self.name = name
        self.specialization = specialization
        self.county = county
        self.town = town

    def save(self):
        Database.save_doctor(self)

    @classmethod
    def find_by_id(cls, doctor_id):
        return Database.get_doctor_by_id(doctor_id)

    @classmethod
    def find_by_name(cls, name):
        return Database.get_doctors_by_name(name)

    @classmethod
    def find_by_location(cls, county, town):
        return Database.get_doctors_by_location(county, town)

    @classmethod
    def find_by_specialization(cls, specialization):
        return Database.get_doctors_by_specialization(specialization)
