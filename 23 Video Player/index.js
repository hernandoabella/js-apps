// the DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images and sub-frames to finish loading
// load event is fired when the whole page is loaded, including all dependent resources such as stylesheets and images

const switchBtn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");

switchBtn.addEventListener("click", () => {
	if (!switchBtn.classList.contains("slide")) {
		switchBtn.classList.add("slide");
		video.pause();
	} else {
		switchBtn.classList.remove("slide");
		video.play();
	}
});

// preloader animation
const preloader = document.querySelector(".preloader");
window.addEventListener("load", () => {
	preloader.classList.add("hide-preloader");
});
