const boxes = document.querySelectorAll(".box");

// event listener on scroll
window.addEventListener("scroll", animateDiv);
// visible content on load
animateDiv();

function animateDiv() {
	const animateTrigger = (window.innerHeight / 5) * 4;

	boxes.forEach((box) => {
		// height of div from in comparison to scroll
		const divTop = box.getBoundingClientRect().top;

		if (divTop < animateTrigger) {
			box.classList.add("show");
		} else {
			box.classList.remove("show");
		}
	});
}
