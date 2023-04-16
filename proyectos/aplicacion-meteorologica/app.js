const apiKey = "16f00dd6edca31d9934c7fd9cdfba77c";
const baseUrl = "https://api.openweathermap.org/data/2.5/weather?";
const form = document.querySelector(".inputForm");
const lang = "sp";

form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
    e.preventDefault();
    const city = document.querySelector(".inputCity").value;
    fetchWeatherData(city);
   
}

async function fetchWeatherData(city) {
    
    const apiResponse = 
    await fetch(`${baseUrl}q=${city}&units=metric&lang=${lang}&APPID=${apiKey}`)
    const weatherData = apiResponse.json();
    weatherData.then(data => {
        console.log(data)
        document.querySelector(".city").textContent = data.name;
        document.querySelector(".country").textContent = `, ${data.sys.country}`;
        document.querySelector(".temprature").textContent = 
        `${Math.round(data.main.temp)}°c`;
        document.querySelector(".icono").src = 
        `https://api.openweathermap.org/img/w/${data.weather[0].icon}.png`
        document.querySelector(".sky").textContent = data.weather[0].main;
        document.querySelector(".min-max").textContent = 
        `${data.main.temp_min}°c / ${data.main.temp_max}°c`;
    });
}

document.addEventListener("DOMContentLoaded", function() {
    fetchWeatherData("Santa Marta");
});