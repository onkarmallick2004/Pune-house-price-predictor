import json
import pickle
import numpy as np

__locations=None
__data_columns=None
__model=None

def get_estimated_price(location,sqft,bhk,bath):
    try:
        loc_index=__data_columns.index(location.lower())
    except:
        loc_index=-1

    X=np.zeros(len(__data_columns))
    X[0]=sqft
    X[1]=bath
    X[2]=bhk
    if loc_index>=0:
        X[loc_index]=1
        
        
    return round(__model.predict([X])[0],2)

    
def load_saved_artifacts():
    print("loading saved artifact ....start")
    global __data_columns
    global __locations

    with open("C:/Users/sanje/OneDrive/Desktop/Pune house price prediction/server/artifacts/columns.json",'r') as f:
        __data_columns=json.load(f)['data_columns']
        __locations=__data_columns[3:]
    
    global __model
    with open("C:/Users/sanje/OneDrive/Desktop/Pune house price prediction/server/artifacts/pune_house_prices_model.pickle",'rb') as f:
        __model=pickle.load(f)
        print("loading saved artifacts done ....")


def get_location_names():
    return __locations


if __name__== "__main__":
    load_saved_artifacts()
    print(get_location_names())
    print(get_estimated_price("Alandi Road",1056,2,2))
    print(get_estimated_price("Alandi Road",1056,3,3))
    print(get_estimated_price("Ambegaon Budruk",2600,4,5))
    print(get_estimated_price("Ambegaon Budruk",1056,4,5))

