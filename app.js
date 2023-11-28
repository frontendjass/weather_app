async function searchWeather() {
    try {
        // Get the user-entered city from the input field
        const cityInput = document.getElementById('cityInput');
        const city = cityInput.value;

        // Validate if a city is entered
        if (!city) {
            throw new Error('Please enter a city');
        }

        // Use the entered city for the API request
        const apiKey = '898abb700b92fcac851ac5da0d449e50';
        const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

        // Get references to HTML elements
        const temperatureElement = document.getElementById('temperature');
        const cityNameElement = document.getElementById('cityname');
        const weatherInfoElement = document.getElementById('weatherInfo');
        const main = document.getElementById('main');
        const feels = document.getElementById('feels');

        // Fetch weather data from the OpenWeatherMap API
        const response = await fetch(weatherApiUrl);

        // Check if the response is successful
        if (!response.ok) {
            throw new Error('Error fetching weather data');
        }

        // Parse the JSON data from the response
        const weatherData = await response.json();

        // Extract temperature from the data
        const temperature = weatherData.main.temp;

        // Update the HTML to display the temperature
        temperatureElement.innerText = `${temperature.toFixed()}°F`; // Adjust the unit as needed
        cityNameElement.innerText = weatherData.name;
        main.innerText = weatherData.weather[0].description;
        feels.innerText = `${weatherData.main.feels_like.toFixed()}°F`;

        // Convert the JSON object to a string and display it
        weatherInfoElement.innerText = JSON.stringify(weatherData, null, 2);
    } catch (error) {
        // Handle errors and update the temperature display accordingly
        console.error('Error:', error.message);
        temperatureElement.innerText = 'Error fetching weather data';
    }
}

// Call the function to fetch and display weather data
searchWeather();

