const searchForm = document.querySelector("form");
const searchResult = document.querySelector(".search-result");
const container = document.querySelector(".container");
const searchBtn = document.querySelector(".search-btn");

// API
const APP_ID = "aedf7beb";
const APP_key = "644f6cbdeae22a47b314259c7479f1c9";

let searchQuery = "";

searchForm.addEventListener("submit", (e) => {
	e.preventDefault();
	searchQuery = e.target.querySelector("input").value;

	fetchAPI();
});

async function fetchAPI() {
	const baseURL = `https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_key}&from=0&to=20`;
	const response = await fetch(baseURL);
	const data = await response.json();

	generateHTML(data.hits);
}

// content for the dom
function generateHTML(results) {
	container.classList.remove("initial");

	let generatedHTML = "";
	results.map((result) => {
		generatedHTML += `<div class="item">
        <img src="${result.recipe.image}" alt="${result.recipe.label}">
        <div class="flex-container">
            <h2 class="title">${result.recipe.label}</h2>
            <a href="${result.recipe.url}" target="_blank" class="view-btn">view recipe</a>
        </div>
        <p class="item-data"><span>Calorie count:</span> ${result.recipe.calories.toFixed(2)}</p>
        <p class="item-data"><span>DietLabel:</span> ${
					result.recipe.dietLabels.length > 0 ? result.recipe.dietLabels.length : "No data available"
				}</p>
        <p class="item-data"><span>Health Label:</span> ${result.recipe.healthLabels}</p>
    </div>`;
	});
	searchResult.innerHTML = generatedHTML;
}
