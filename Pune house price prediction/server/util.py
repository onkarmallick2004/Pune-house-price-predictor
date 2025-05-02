import json
import pickle
import numpy as np
import os

__locations = None
__data_columns = None
__model = None

def get_estimated_price(location, sqft, bhk, bath):
    try:
        loc_index = __data_columns.index(location.lower())
    except:
        loc_index = -1

    X = np.zeros(len(__data_columns))
    X[0] = sqft
    X[1] = bath
    X[2] = bhk
    if loc_index >= 0:
        X[loc_index] = 1
    
    return round(__model.predict([X])[0], 2)

def load_saved_artifacts():
    print("loading saved artifact ....start")
    global __data_columns
    global __locations
    global __model

    artifacts_path = os.path.join(os.path.dirname(__file__), "artifacts")
    columns_path = os.path.join(artifacts_path, "columns.json")
    model_path = os.path.join(artifacts_path, "pune_house_prices_model.pickle")

    try:
        with open(columns_path, 'r') as f:
            __data_columns = json.load(f)['data_columns']
            __locations = __data_columns[3:]
        
        with open(model_path, 'rb') as f:
            __model = pickle.load(f)
        print("loading saved artifacts done ....")
    except Exception as e:
        print(f"Error loading artifacts: {str(e)}")
        print(f"Looking for files at: {columns_path} and {model_path}")
        raise

def get_location_names():
    return __locations

if __name__ == "__main__":
    load_saved_artifacts()
    print(get_location_names())
    print(get_estimated_price("Alandi Road", 1056, 2, 2))
    print(get_estimated_price("Alandi Road", 1056, 3, 3))
    print(get_estimated_price("Ambegaon Budruk", 2600, 4, 5))
    print(get_estimated_price("Ambegaon Budruk", 1056, 4, 5))

