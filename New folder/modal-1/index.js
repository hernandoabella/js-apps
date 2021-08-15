const open = document.getElementById("open_modal");
const close = document.getElementById("close_modal");
const modal = document.getElementById("modal_content");

// remove show class from modal
open.addEventListener("click", () => {
	modal.classList.add("show");
});

// remove show class from modal
close.addEventListener("click", () => {
	modal.classList.remove("show");
});
