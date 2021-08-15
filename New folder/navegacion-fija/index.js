const nav = document.querySelector(".nav");

// check for scroll movement and change nav
window.addEventListener(
	"click",
	(fixNav = () => {
		if (window.scrollY > nav.scrollHeight + 120) {
			nav.classList.add("active");
		} else {
			nav.classList.remove("active");
		}
	}),
);
