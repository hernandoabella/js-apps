const search = document.querySelector(".search");
const input = document.querySelector(".input");
const button = document.querySelector(".btn");

button.addEventListener("click", function () {
	search.classList.toggle("active");
	input.focus();
});
