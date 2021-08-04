const navToggle = document.querySelector("#burger");
const navLinks = document.querySelector(".navLinks");

// toggle method to show or remove class
// navToggle.addEventListener("click", function () {
// 	navLinks.classList.toggle("show");
// });

// different way of doing the same thing
navToggle.addEventListener("click", function () {
	if (navLinks.classList.contains("show")) {
		navLinks.classList.remove("show");
	} else {
		navLinks.classList.add("show");
	}
});
