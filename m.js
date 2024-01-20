function getWeather() {
  const city = document.getElementById('cityInput').value;
  const apiKey = '4b3d324d8f4b9d9afd39e985e8864db1';
  const url = `https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key};

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const weatherInfo = document.getElementById('weatherInfo');
      weatherInfo.innerHTML = `
        <h2>${data.name}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
      `;
    })
    .catch(error => {
      const weatherInfo = document.getElementById('weatherInfo');
      weatherInfo.innerHTML = `<p>City not found</p>`;
    });
}
