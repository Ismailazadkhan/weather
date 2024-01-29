const form = document.getElementById('weather-form');
const cityInput = document.getElementById('city-input');
const weatherData = document.getElementById('weather-data');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const cityName = cityInput.value;
  const apiKey = '4b3d324d8f4b9d9afd39e985e8864db1';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const temp = data.main.temp;
      const humidity = data.main.humidity;
      const windSpeed = data.wind.speed;
      const weatherDescription = data.weather[0].description;
      const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

      weatherData.innerHTML = `
        <h2>Weather of ${cityName}:</h2>
        <img src="${iconUrl}" alt="${weatherDescription}">
        <p>Temperature: ${temp}°C</p>
        <p>Humidity: ${humidity}%</p>
        <p>Wind Speed: ${windSpeed} m/s</p>
        <p>Description: ${weatherDescription}</p>
      `;
    })


  
    .catch((error) => {
      console.error(error);
      weatherData.innerHTML = 'Error retrieving weather data.';
    });
});
