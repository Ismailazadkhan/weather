const apiKey = '4b3d324d8f4b9d9afd39e985e8864db1';
const apiUrl = 'https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}';
const apiIconUrl = 'https://openweathermap.org/img/wn';

const locationInput = document.getElementById('locationInput');
const searchButton = document.getElementById('searchButton');
const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');
const windSpeedElement = document.getElementById('windSpeed');
const weatherIconElement = document.getElementById('weatherIcon');

searchButton.addEventListener('click', () => {
    const location = locationInput.value;
    if (location) {
        fetchWeather(location);
    }
});

function fetchWeather(location) {
    const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            locationElement.textContent = data.name;
            temperatureElement.textContent = `${data.main.temp}°C`;
            descriptionElement.textContent = data.weather[0].description;
            windSpeedElement.textContent = `${data.wind.speed} m/s`;
            weatherIconElement.src = `${apiIconUrl}/${data.weather[0].icon}.png`;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}
