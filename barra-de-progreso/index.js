const progress = document.querySelector(".progress-done");

// set time out
setTimeout(() => {
	progress.style.opacity = 1;
	progress.style.width = progress.getAttribute("data-done") + "%";
}, 500);
