# Pune House Price Predictor

![Python](https://img.shields.io/badge/python-v3.8+-blue.svg)
![Flask](https://img.shields.io/badge/flask-v2.0+-lightgrey.svg)
![Scikit-learn](https://img.shields.io/badge/scikit--learn-latest-orange.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

A machine learning-powered web application that provides accurate house price predictions for properties in Pune, India. Built with Python, Flask, and modern web technologies.

## Table of Contents
- [Overview](#overview)
- [Project Structure](#project-structure)
- [Technical Architecture](#technical-architecture)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Model Information](#model-information)
- [Development](#development)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

## Overview

This application leverages machine learning to predict house prices in Pune based on key features such as location, square footage, and amenities. The system uses a trained regression model to provide accurate price estimates, helping users make informed real estate decisions.

### Key Features
- Real-time price predictions
- Interactive web interface
- RESTful API endpoints
- Comprehensive data validation
- Error handling and logging
- Mobile-responsive design

## Project Structure

```
pune-house-price-predictor/
├── Pune house price prediction/
│   │   ├── client/
│   │   │   ├── app.html          # Main web interface
│   │   │   ├── app.js            # Frontend logic
│   │   │   └── app.css           # Styling
│   │   ├── server/
│   │   │   ├── artifacts/        # Model artifacts
│   │   │   ├── server.py         # Flask server
│   │   │   └── util.py           # Utility functions
│   │   └── model/
│   │       └── model_training.ipynb  # Model development
│   ├── requirements.txt
│   └── README.md
```

## Technical Architecture

### Backend Stack
- **Framework**: Flask 2.0+
- **ML Libraries**: 
  - scikit-learn (Model training and inference)
  - pandas (Data processing)
  - numpy (Numerical operations)
- **Server**: Werkzeug development server

### Frontend Stack
- **Core**: HTML5, CSS3, JavaScript (ES6+)
- **Libraries**: 
  - jQuery 3.4.1 (AJAX requests)
  - Font Awesome 6.0.0 (Icons)
- **Design**: Responsive CSS with modern UI/UX principles

### Machine Learning Pipeline
- Algorithm: Linear Regression
- Features: Location encoding, area normalization
- Validation: R² score, MAE metrics
- Data preprocessing: Outlier removal, feature scaling

## Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/pune-house-price-predictor.git
   cd pune-house-price-predictor
   ```

2. **Set Up Python Environment**
   ```bash
   # Create virtual environment
   python -m venv venv

   # Activate virtual environment
   # Windows:
   .\venv\Scripts\activate
   # Unix/MacOS:
   source venv/bin/activate
   ```

3. **Install Dependencies**
   ```bash
   pip install -r requirements.txt
   ```

## Configuration

1. **Environment Variables**
   Create a `.env` file in the root directory:
   ```env
   FLASK_ENV=development
   FLASK_APP=server.py
   DEBUG=True
   ```

2. **Model Configuration**
   The model artifacts are stored in `server/artifacts/`:
   - `pune_house_prices_model.pickle`: Trained model
   - `columns.json`: Feature configurations

## Usage

1. **Start the Server**
   ```bash
   cd "Pune house price prediction/server"
   python server.py
   ```
   Server will start at `http://127.0.0.1:5000`

2. **Access the Application**
   - Open `Pune house price prediction/client/app.html` in a modern web browser
   - Ensure JavaScript is enabled
   - Server must be running for predictions

3. **Making Predictions**
   1. Enter property details:
      - Total area (sq. ft.)
      - Number of bedrooms (1-5 BHK)
      - Number of bathrooms
      - Location
   2. Click "Calculate Price"
   3. View the estimated price in lakhs

## API Documentation

### Endpoints

1. **Get Location Names**
   ```
   GET /get_location_names
   Response: {"locations": ["location1", "location2", ...]}
   ```

2. **Predict House Price**
   ```
   POST /predict_home_price
   Content-Type: application/x-www-form-urlencoded

   Parameters:
   - total_sqft: float
   - location: string
   - bhk: integer
   - bath: integer

   Response: {"estimated_price": float}
   ```

## Model Information

- **Algorithm**: Linear Regression
- **Features**: 
  - Total Square Feet
  - Location (One-hot encoded)
  - BHK (Bedrooms)
  - Bathrooms
- **Accuracy**: R² Score > 0.8
- **Data Source**: Pune Real Estate Dataset

## Development

### Prerequisites
- Python 3.8+
- Node.js (for frontend development)
- Git

### Setting Up Development Environment
1. Clone repository
2. Install dependencies
3. Set up pre-commit hooks
4. Configure IDE (VSCode recommended)

## Troubleshooting

Common issues and solutions:

1. **Server Won't Start**
   - Check Python version
   - Verify all dependencies are installed
   - Ensure port 5000 is available

2. **Prediction Errors**
   - Validate input data format
   - Check server logs
   - Verify model artifacts exist

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Push to the branch
5. Open a pull request

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and development process.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Support

For support and queries:
- Create an issue in the repository
- Contact: your-email@example.com

## Acknowledgments

- Dataset: Pune Housing Market Data
- Contributors and maintainers
- Open source community

---
<<<<<<< HEAD
Last Updated: May 2024  
Version: 1.0.0  
Maintained by: [Your Name]
=======

## 🛠️ Tech Stack

### 🔍 Machine Learning
- Python
- Pandas, NumPy
- Scikit-learn
- Jupyter Notebook

### 🌐 Web Development
- Flask (Backend)
- HTML, CSS, JavaScript (Frontend)

---

## 🧠 ML Workflow

1. Data Collection (Pune real estate dataset)
2. Data Cleaning (handling missing values, outliers)
3. Feature Engineering (location encoding, area conversions)
4. Model Training (Linear Regression / other models)
5. Evaluation (R² Score, MAE)
6. Deployment using Flask

---
## 🖥️ How to Run Locally

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/pune-house-price-prediction.git
cd pune-house-price-prediction
---


## 2. Install Dependencies
pip install -r requirements.txt
---

## 3. Run the Flask App
python app.py
---

>>>>>>> 64e0c67e730fbbad228bfd6788885f7806123885


