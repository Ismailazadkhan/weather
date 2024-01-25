document.getElementById('add').addEventListener('click', function () {
 const city = document.getElementById('cityinput').value;

 fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4b3d324d8f4b9d9afd39e985e8864db1`)
    .then((response) => response.json())
    .then((data) => {
      document.getElementById('cityoutput').textContent = data.name;
      document.getElementById('description').textContent = data.weather[0].description;
      document.getElementById('temp').textContent = Math.round(data.main.temp - 273.15) + '°C';
      document.getElementById('wind').textContent = Math.round(data.wind.speed) + 'm/s';

     searchButton.addEventListener("click", () => {
  const city = cityInput.value;
  getWeatherData(city);
});

cityInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const city = cityInput.value;
    getWeatherData(city);
      
    }
});
