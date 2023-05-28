const button = document.querySelector(".button");
const toasts = document.getElementById("toasts");

const messages = ["toast notification one", "epic javascript", "this is awesome stuff", "you got toasted"];

button.addEventListener("click", function createNotification() {
	const notification = document.createElement("div");
	notification.classList.add("toast");

	notification.innerText = getRandomMessage();
	toasts.appendChild(notification);

	setInterval(() => {
		notification.remove();
	}, 3000);
});

function getRandomMessage() {
	return messages[Math.floor(Math.random() * messages.length)];
}
