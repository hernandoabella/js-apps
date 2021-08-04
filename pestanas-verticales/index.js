const buttons = document.querySelectorAll(".btn");
const tabContents = document.querySelectorAll(".tab-content");

// tab functionality
buttons.forEach((button) => {
	button.addEventListener("click", () => {
		// remove active class from each of the buttons and content
		buttons.forEach((button) => button.classList.remove("active"));
		tabContents.forEach((content) => content.classList.remove("active"));
		button.classList.add("active");

		// select corresponding content to sleeted tab and add active class
		document.querySelector(button.dataset.target).classList.add("active");
	});
});
