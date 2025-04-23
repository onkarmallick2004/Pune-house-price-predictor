![image](https://github.com/user-attachments/assets/a57bdfd9-b918-4260-9f99-955b7b9a656d)





🏠 **Pune House Price Predictor**
This project is a simple web app that predicts the price of a house in Pune using machine learning. You just need to enter a few details like:

Location of the house

BHK (Number of bedrooms, halls, and kitchens)

Total square feet of the house

Number of bathrooms

And it will give you an estimated price based on real data!

💡 **What It Does**
Takes user input through a website (location, size, etc.)

Sends the data to a machine learning model built with Python

Predicts the house price using that model

Shows the result instantly on the screen

⚙️ **Tech Used**
Frontend: HTML, CSS, JavaScript (for the website)

Backend: Python and Flask (to connect the site with the ML model)

Machine Learning: Trained with real housing data from Pune using scikit-learn

📂 **Project Files**
pune-house-price-prediction/
├── server/                # Backend code
│   ├── server.py          # Flask app that serves predictions
│   └── util.py            # Helper functions for prediction
├── client/                # Frontend code
│   ├── app.html           # HTML file for user interface
│   ├── app.css            # CSS file for styling
│   └── app.js             # JavaScript file for handling UI interactions
└── model/                 # Machine learning model and related files
    ├── model.pkl          # Saved machine learning model (Pickle file)
    ├── columns.json       # Column names for input data
    └── input_data.json    # Sample input data for testing

🔮 **Future Ideas**
Add more powerful ML models

Show price trends using graphs

Make it easier to select locations with a search box
