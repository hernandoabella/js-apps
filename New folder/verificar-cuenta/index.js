const codes = document.querySelectorAll(".code");

// focus on first input
codes[0].focus();

codes.forEach((code, index) => {
	code.addEventListener("keydown", (event) => {
		// replace any number in input with empty string
		codes[index].value = "";

		if (event.key >= 0 && event.key <= 9) {
			// delay to prevent typing into next input
			setTimeout(() => {
				codes[index + 1].focus();
			}, 10);
		} else if (event.key === "Backspace") {
			setTimeout(() => {
				codes[index - 1].focus();
			}, 10);
		}
	});
});
