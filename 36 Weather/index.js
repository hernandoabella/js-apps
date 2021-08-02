const apiKey = "d16a5e9a3d326a9c3ca2c7850b855e7c";
const baseURL = "https://api.openweathermap.org/data/2.5/";

const form = document.querySelector("form");
const weatherData = document.querySelector(".weather-data");

// search functionality
form.addEventListener("submit", (e) => {
	e.preventDefault();
	const city = e.target.location.value;
	fetchAPI(city);
});

// fetch weather data
async function fetchAPI(city) {
	const url = `${baseURL}weather?q=${city}&units=metric&appid=${apiKey}`;
	const res = await fetch(url);
	const data = await res.json();
	// console.log(data);
	weatherHTML(data);
}

// weather data element
function weatherHTML(data) {
	document.querySelector(".city").innerText = `Weather in ${data.name}`;
	document.querySelector(".temp").innerText = `${Math.round(data.main.temp)}°C`;
	document.querySelector(".icon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
	document.querySelector(".description").innerText = data.weather[0].description;
	document.querySelector(".humidity").innerText = `Humidity: ${data.main.humidity}%`;
	document.querySelector(".wind").innerText = `Wind speed: ${data.wind.speed}km/hr`;
}

fetchAPI();
