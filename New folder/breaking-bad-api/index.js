const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const characters = document.querySelector("#characters");
const form = document.querySelector("form");

let search;
// search field functionality
form.addEventListener("submit", (e) => {
	e.preventDefault();
	const query = e.target.search.value;
	fetchAPI(query);
});

// fetchAPI
async function fetchAPI(query) {
	let response;
	if (query) {
		response = await fetch(`https://www.breakingbadapi.com/api/characters?name=${query}`);
	} else {
		response = await fetch("https://www.breakingbadapi.com/api/characters");
	}
	const results = await response.json();
	// console.log(results);
	generateHTML(results);
}

// function for each character
function generateHTML(actors) {
	characters.innerHTML = "";

	actors.forEach((actor) => {
		const characterEl = document.createElement("div");
		characterEl.classList.add("character");

		characterEl.innerHTML = `
		<div class="character">
				<img src="${actor.img}" alt="">
				<p>Actor Name: ${actor.name}</p>
                <div class="character-info">
                    <p>Nickname: ${actor.nickname}</p>
                    <p>Seasons: ${actor.appearance}</p>
                    <p>Status: <span class="">${actor.status}</span></p>
                </div>
			</div>
		`;
		characters.appendChild(characterEl);
	});
}

fetchAPI();

// function to check character status
function getStatus(status) {
	if (status == "Presumed Dead") {
		return "orange";
	} else if (status == "Alive") {
		return "green";
	} else {
		return "red";
	}
}
