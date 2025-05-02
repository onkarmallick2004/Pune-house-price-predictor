function formatPrice(price) {
    return new Intl.NumberFormat('en-IN', {
        maximumFractionDigits: 2,
        minimumFractionDigits: 0
    }).format(price);
}

function getBathValue() {
    var uiBathrooms = document.getElementsByName("uiBathrooms");
    for(var i in uiBathrooms) {
        if(uiBathrooms[i].checked) {
            return parseInt(i)+1;
        }
    }
    return -1;
}

function getBHKValue() {
    var uiBHK = document.getElementsByName("uiBHK");
    for(var i in uiBHK) {
        if(uiBHK[i].checked) {
            return parseInt(i)+1;
        }
    }
    return -1;
}

function setLoadingState(isLoading) {
    const button = document.querySelector('.btn-estimate');
    const result = document.getElementById('uiEstimatedPrice');
    
    if (isLoading) {
        button.disabled = true;
        button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Calculating...';
        result.innerHTML = `
            <div class="result-content">
                <i class="fas fa-spinner fa-spin result-icon"></i>
                <h2>Calculating...</h2>
                <p class="result-text">Please wait while we process your request</p>
            </div>
        `;
    } else {
        button.disabled = false;
        button.innerHTML = '<i class="fas fa-calculator"></i> Calculate Price';
    }
}

function showError(message) {
    const result = document.getElementById('uiEstimatedPrice');
    result.innerHTML = `
        <div class="result-content">
            <i class="fas fa-exclamation-circle result-icon" style="color: #ef4444;"></i>
            <h2>Error</h2>
            <p class="result-text">${message}</p>
        </div>
    `;
}

function onClickedEstimatePrice() {
    console.log("Estimate price button clicked");
    
    const sqft = document.getElementById("uiSqft");
    const bhk = getBHKValue();
    const bathrooms = getBathValue();
    const location = document.getElementById("uiLocations");
    const estPrice = document.getElementById("uiEstimatedPrice");

    // Validation
    if (!sqft.value || sqft.value <= 0) {
        showError("Please enter a valid square feet value");
        return;
    }
    if (bhk === -1) {
        showError("Please select number of bedrooms");
        return;
    }
    if (bathrooms === -1) {
        showError("Please select number of bathrooms");
        return;
    }
    if (!location.value) {
        showError("Please select a location");
        return;
    }

    setLoadingState(true);

    const url = "http://127.0.0.1:5000/predict_home_price";

    $.post(url, {
        total_sqft: parseFloat(sqft.value),
        bhk: bhk,
        bath: bathrooms,
        location: location.value
    })
    .done(function(data) {
        const price = formatPrice(data.estimated_price);
        estPrice.innerHTML = `
            <div class="result-content">
                <i class="fas fa-indian-rupee-sign result-icon"></i>
                <h2>${price} Lakh</h2>
                <p class="result-text">Estimated price based on current market data</p>
            </div>
        `;
    })
    .fail(function(jqXHR) {
        showError("Failed to estimate price. Please try again.");
        console.error("Error:", jqXHR.responseText);
    })
    .always(function() {
        setLoadingState(false);
    });
}

function onPageLoad() {
    console.log("document loaded");
    
    // Initialize price range display
    const priceRange = document.getElementById('priceRange');
    if (priceRange) {
        priceRange.addEventListener('input', function() {
            document.getElementById('priceDisplay').innerText = formatPrice(this.value);
        });
    }

    const url = "http://127.0.0.1:5000/get_location_names";
    
    $.get(url)
    .done(function(data) {
        console.log("got response for get_location_names request");
        if(data && data.locations) {
            const locations = data.locations.sort();
            const uiLocations = $('#uiLocations');
            uiLocations.empty();
            uiLocations.append('<option value="" disabled selected>Select a Location</option>');
            locations.forEach(function(location) {
                uiLocations.append(new Option(location));
            });
        }
    })
    .fail(function() {
        console.error("Failed to load locations");
        const uiLocations = $('#uiLocations');
        uiLocations.empty();
        uiLocations.append('<option value="" disabled selected>Error loading locations</option>');
    });
}

window.onload = onPageLoad;