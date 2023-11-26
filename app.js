async function getWeather() {
    try {
        let city = 'Toronto';
        const apiKey = '898abb700b92fcac851ac5da0d449e50';
        const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

        const tempReading = document.getElementById('temperature');
        const cityName = document.getElementById('cityname');

        const response = await fetch(apiURL);

        if (!response.ok) {
            throw new Error('Error fetching weather data');
        }

        const data = await response.json();

        // Extract temperature from the data
        const temp = data.main.temp;

        // Update the HTML to display the temperature
        tempReading.innerText = `${temp.toFixed()}F`; // Adjust the unit as needed
        cityName.innerText = `${city}`;
    } catch (error) {
        console.error('Error:', error.message);
        // Handle errors and update the temperature display accordingly
        tempReading.innerText = 'Error fetching weather data';
    }
}

// Call the function to fetch and display weather data
getWeather();
