const panels = document.querySelectorAll(".panel");

panels.forEach(function (panel) {
	panel.addEventListener("click", function () {
		removeActive();
		panel.classList.add("active");
	});
});

// check if active class is on and then remove
function removeActive() {
	panels.forEach(function (panel) {
		panel.classList.remove("active");
	});
}
