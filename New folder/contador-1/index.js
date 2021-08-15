let decrement = document.querySelector(".reduceCount");
let reset = document.querySelector(".resetCount");
let increment = document.querySelector(".addCount");
let counter = document.querySelector(".count");

let count = 0;
// event listener to decrease on click
decrement.addEventListener("click", () => {
	count--;
	counter.innerHTML = count;
	if (counter.innerHTML < 0) {
		counter.style.color = "red";
	} else if (counter.innerHTML === 0) {
		counter.style.color = "slategrey";
	}
	counter.animate([{ opacity: 0.2 }, { opacity: 1.0 }], { duration: 500, fill: "forwards" });
});

// event listener to reset on click
reset.addEventListener("click", () => {
	count = 0;
	counter.innerHTML = count;
	counter.style.color = "slategrey";
});

// event listener to increase on click
increment.addEventListener("click", () => {
	count++;
	counter.innerHTML = count;
	if (counter.innerHTML > 0) {
		counter.style.color = "skyblue";
	} else if (counter.innerHTML === 0) {
		counter.style.color = "slategrey";
	}
	counter.animate([{ opacity: 0.2 }, { opacity: 1.0 }], { duration: 500, fill: "forwards" });
});
