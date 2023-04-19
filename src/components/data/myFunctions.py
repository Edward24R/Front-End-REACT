import json


with open('parkingData.json', 'r') as f:
    parking_data = json.load(f)

def get_position(parking_spot):
    return parking_data[parking_spot]['position']

def get_latitude(parking_spot):
    return parking_data[parking_spot]['latitude']

def get_longitude(parking_spot):
    return parking_data[parking_spot]['longitude']

def get_occupied_status(parking_spot):
    return parking_data[parking_spot]['isOccupied']