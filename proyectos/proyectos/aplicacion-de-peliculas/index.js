const API_URL =
	"https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=df362ad112cc7cdf0ca09caab21b616f";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?api_key=df362ad112cc7cdf0ca09caab21b616f&query='";

const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");

getMovies(API_URL);
function getMovies(url) {
	fetch(url)
		.then((res) => res.json())
		.then((data) => {
			data.results;
			showMovies(data.results);
		})
		.catch((error) => console.log("error: ", error));
}

// function to display movies
function showMovies(movies) {
	main.innerHTML = "";
	movies.map((movie) => {
		const { title, poster_path, vote_average, overview } = movie;

		const movieEl = document.createElement("div");
		movieEl.classList.add("movie");

		movieEl.innerHTML = `
        <img src="${IMG_PATH + poster_path}" alt="${title}">
        <div class="movie-info">
            <h3>${title}</h3>
            <span class="${getClassByRate(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
            <h3>Overview</h3>
            ${overview}
        </div>
        `;
		main.appendChild(movieEl);
	});
}

form.addEventListener("submit", (e) => {
	e.preventDefault();
	const searchTerm = search.value;
	if (searchTerm && searchTerm !== "") {
		getMovies(SEARCH_API + searchTerm);

		search.value = "";
	} else {
		window.location.reload();
	}
});

// color coded rating
function getClassByRate(vote) {
	if (vote >= 8) {
		return "green";
	} else if (vote >= 5) {
		return "orange";
	} else {
		return "red";
	}
}
