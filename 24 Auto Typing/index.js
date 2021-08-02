const textElement = document.getElementById("text");
const speedElement = document.getElementById("speed");
const text = "This programming journey has just started...";

let index = 1;
let speed = 300 / speedElement.value;

writingEffect();
function writingEffect() {
	textElement.innerText = text.slice(0, index);
	index++;

	if (index > text.length) {
		index = 1;
	}
	setTimeout(writingEffect, speed);
}

// speed adjustment
speedElement.addEventListener("input", (event) => {
	speed = 300 / event.target.value;
});
