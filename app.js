// Get references to HTML elements
const cityInput = document.getElementById("cityInput");
const searchButton = document.getElementById("searchButton");
const weatherInfo = document.getElementById("weatherInfo");

// Function to fetch weather data
async function getWeatherData(city) {
  const apiKey = "4b3d324d8f4b9d9afd39e985e8864db1"; // Replace with your actual API key
 fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4b3d324d8f4b9d9afd39e985e8864db1`)

  try {
    const response = await fetch(url);
    const data = await response.json();

    // Display weather information
    weatherInfo.innerHTML = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p>Temperature: ${data.main.temp} K</p>
      <p>Description: ${data.weather[0].description}</p>
      `;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    weatherInfo.innerHTML = "Error: Unable to fetch weather data.";
  }
}

// Event listeners for button click and Enter key press
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
