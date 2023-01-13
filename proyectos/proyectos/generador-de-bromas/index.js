// selectors
const input = document.querySelector("p");
const jokeBtn = document.getElementById("joke-btn");

// event listeners
jokeBtn.addEventListener("click", getJokes);

async function getJokes() {
	const response = await fetch("https://icanhazdadjoke.com/", {
		method: "GET",
		headers: {
			Accept: "application/json",
		},
	});
	const joke = await response.json();
	input.innerText = joke.joke;
}

getJokes();
