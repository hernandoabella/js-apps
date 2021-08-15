// selectors
const currencyOne = document.getElementById("currency-one");
const amountOne = document.getElementById("amount-one");
const currencyTwo = document.getElementById("currency-two");
const amountTwo = document.getElementById("amount-two");

const swap = document.getElementById("swap");
const rateEl = document.getElementById("rate");

// event listeners
currencyOne.addEventListener("change", calculateCX);
amountOne.addEventListener("input", calculateCX);
currencyTwo.addEventListener("change", calculateCX);
amountTwo.addEventListener("input", calculateCX);

swap.addEventListener("click", () => {
	let temp = currencyOne.value;
	currencyOne.value = currencyTwo.value;
	currencyTwo.value = temp;
	calculateCX();
});

// functions
function calculateCX() {
	const currency_one = currencyOne.value;
	const currency_two = currencyTwo.value;

	fetch(` https://api.exchangeratesapi.io/latest?base=${currency_one}`)
		.then((response) => response.json())
		.then((data) => {
			console.log(data);

			const rate = data.rates[currency_two];
			rateEl.innerHTML = `1${currency_one} = ${rate}${currency_two}`;
			amountTwo.value = (amountOne.value * rate).toFixed(2);
		});
}

calculateCX();
