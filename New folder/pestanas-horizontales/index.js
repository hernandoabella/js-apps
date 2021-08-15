// remove 'active' class from all previous buttons
// remove 'active' class from all previous 'tab-content'
// add 'active' class to current clicked button
// add 'active' class to associated 'tab-content of the clicked button

const buttons = document.querySelectorAll(".btn");
buttons.forEach((btn) => {
	btn.addEventListener("click", () => {
		buttons.forEach((btn) => btn.classList.remove("active"));

		btn.classList.add("active");

		// remove active class and replace it with none
		const tabContents = document.querySelectorAll(".tab-content");
		tabContents.forEach((content) => {
			content.className = content.className.replace("active", "");
		});

		document.querySelector(btn.dataset.target).classList.add("active");
	});
});
