document.getElementById('add').addEventListener('click', function () {
 const city = document.getElementById('cityinput').value;

 fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4b3d324d8f4b9d9afd39e985e8864db1`)
    .then((response) => response.json())
    .then((data) => {
      document.getElementById('cityoutput').textContent = data.name;
      document.getElementById('description').textContent = data.weather[0].description;
      document.getElementById('temp').textContent = Math.round(data.main.temp - 273.15) + '°C';
      document.getElementById('wind').textContent = Math.round(data.wind.speed) + 'm/s';
     document.getElementById('humidity'); humidityElement.textContent = `Humidity: ${humidity}%`;
    });
});

import React, { useState } from 'react';

function WeatherComponent() {
 const [today, setToday] = useState(null);

 function getData(e) {
    let name = event.target.value;
    if (e.key === "Enter") {
      try {
        fetch(``https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4b3d324d8f4b9d9afd39e985e8864db1`)
          .then(response => response.json())
          .then(data => {
            if (data.cod !== "404") {
              setToday(data)
              let date = getDate(data.dt, data.timezone)
              setToday(prev => ({...prev, "day": date.slice(0, 10)}))
            } else {
              showErrorAlert('City not found');
            }
          });
      } catch (error) {
        showErrorAlert('An error occurred: ' + error.message);
      }
    }
 }

 function showErrorAlert(message) {
    // Implement your error alert handling here
 }

 function getDate(dt, timezone) {
    // Implement your date formatting logic here
 }

 // Render your component UI here
}

export default WeatherComponent;
