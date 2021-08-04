// selectors
const factInput = document.querySelector(".numbers-fact");
const numberInput = document.querySelector("input");
const factBtn = document.getElementById("num-btn");

// event listener
factBtn.addEventListener("click", () => {
	const number = numberInput.value;
	const numberFact = parseInt(number);
	// console.log(typeof(number), number);

	fetchFact(numberFact);
});

// functions
async function fetchFact(number) {
	const url = "http://numbersapi.com/";
	const proxy = "https://cors-anywhere.herokuapp.com/";

	const response = await fetch(`${proxy}${url}${number}`, {
		method: "GET",
		headers: {
			"x-requested-with": "text/plain",
		},
	});
	const data = await response.text();
	factInput.innerText = data;
}
