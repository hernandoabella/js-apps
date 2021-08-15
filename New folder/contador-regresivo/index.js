const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const currentYear = new Date().getFullYear();
const newYear = new Date(`May 01 ${currentYear} 00:00:00`);

function updateCountdown() {
	const currentTime = new Date();
	const timeDiff = newYear - currentTime;

	const day = Math.floor(timeDiff / 1000 / 60 / 60 / 24);
	const hour = Math.floor(timeDiff / 1000 / 60 / 60) % 24;
	const minute = Math.floor(timeDiff / 1000 / 60) % 60;
	const second = Math.floor(timeDiff / 1000) % 60;

	days.innerHTML = day < 10 ? "0" + day : day;
	hours.innerHTML = hour < 10 ? "0" + hour : hour;
	minutes.innerHTML = minute < 10 ? "0" + minute : minute;
	seconds.innerHTML = second < 10 ? "0" + second : second;
}
setInterval(updateCountdown, 1000);
