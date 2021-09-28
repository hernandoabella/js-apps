const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const reset = document.querySelector("#reset");

let count = 0;

let minutes = 0;
let seconds = 0;
let milliSeconds = 0;

let startTimer = () => {
	count++;
	// formula for time calculation
	// minutes = Math.floor((count / 100) / 60);
	// seconds = Math.floor((count / 100 ) - (minutes * 60));
	// milliSeconds = Math.floor(count - (seconds * 100 ) - (minutes * 6000));

	minutes = Math.floor(count / 100 / 60);
	seconds = Math.floor(count / 100 - minutes * 60);
	milliSeconds = Math.floor(count - seconds * 100 - minutes * 6000);

	document.querySelector("#minutes").innerText = addZero(minutes);
	document.querySelector("#seconds").innerText = addZero(seconds);
	document.querySelector("#m-seconds").innerText = addZero(milliSeconds);
};

// start timer
let interval = 0;

// check timer is running
let timerRunning = false;

start.addEventListener("click", function () {
	if (!timerRunning) {
		interval = setInterval(startTimer, 10);
		timerRunning = true;
	}
});

// stop timer
stop.addEventListener("click", function () {
	clearInterval(interval);
});

// reset timer
reset.addEventListener("click", function () {
	clearInterval(interval);
	count = 0;
	minutes = 0;
	seconds = 0;
	milliSeconds = 0;
	interval = 0;
	timerRunning = false;
	document.querySelector("#minutes").innerText = "00";
	document.querySelector("#seconds").innerText = "00";
	document.querySelector("#m-seconds").innerText = "00";
});

// add zero for numbers below 10
let addZero = (time) => {
	if (time <= 9) {
		return "0" + time;
	}
	return time;
};
