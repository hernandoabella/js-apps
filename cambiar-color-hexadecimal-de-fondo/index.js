let bgColor = document.querySelector("body");
let hexBtn = document.querySelector(".hexBtn");
let colorCode = document.querySelector(".hex");

// hex color foundation
const hexNumbers = ["A", "B", "C", "D", "E", "F", 1, 2, 3, 4, 5, 6];
// hex color generated on click
hexBtn.addEventListener(
	"click",
	(randomColor = () => {
		let color = "#";

		for (let i = 0; i < 6; i++) {
			let random = Math.floor(Math.random() * hexNumbers.length);
			color += hexNumbers[random];
			// generated color for the background
			bgColor.style.backgroundColor = color;
			// hex color code
			colorCode.innerHTML = color;
		}
	}),
);
