// selectors
const ratings = document.querySelectorAll(".rating");
const ratingsContainer = document.querySelector(".ratings-container");
const panel = document.querySelector("#panel");
const sendBtn = document.querySelector("#send");
let selectedRating = "satisfied";

// event listeners
ratingsContainer.addEventListener("click", (e) => {
	if (e.target.parentNode.classList.contains("rating")) {
		removeActive();
		e.target.parentNode.classList.add("active");
		selectedRating = e.target.nextElementSibling.innerHTML;
	}
});

sendBtn.addEventListener("click", (e) => {
	panel.innerHTML = `
        <ion-icon name="heart"></ion-icon>
        <strong>Tussen Takk!</strong>
        </br>
        <p>Feedback: <strong>${selectedRating}</strong></p>
        <p class="feedback">Your feedback is well received and we shall endeavour too make your customer experience a lot better the next time around.</p>

    `;
});

// functions
function removeActive() {
	ratings.forEach((rating) => {
		rating.classList.remove("active");
	});
}
