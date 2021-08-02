let hour = document.querySelector(".hourHand");
let minute = document.querySelector(".minuteHand");
let second = document.querySelector(".secondHand");
let digitalClock = document.querySelector(".digitalClock");

function showTime() {
	const date = new Date();
	const hours = date.getHours();
	const minutes = date.getMinutes();
	const seconds = date.getSeconds();

	// rotation of hands based on time
	let hourRotation = hours * 12;
	let minuteRotation = minutes * 6;
	let secondRotation = seconds * 6;

	hour.style.transform = `rotateZ(${hourRotation + minuteRotation / 12}deg)`;
	minute.style.transform = `rotateZ(${minuteRotation + secondRotation / 60}deg)`;
	second.style.transform = `rotateZ(${secondRotation}deg)`;

	digitalClock.innerText = `${hours % 12 < 10 ? "0" : ""}${hours % 12}:${minutes < 10 ? "0" : ""}${minutes} ${
		hours < 12 ? "AM" : "PM"
	}`;
}

showTime();
setInterval(showTime, 1000);
