let start = document.getElementById("start");
let reset = document.getElementById("reset");
let stop = document.getElementById("stop");

let wm = document.getElementById("workMinutes");
let ws = document.getElementById("workSeconds");

let bm = document.getElementById("breakMinutes");
let bs = document.getElementById("breakSeconds");

// variable reference for start time
let startTimer;
let timeRunning = false;

// start timer
start.addEventListener("click", function () {
	if (startTimer === undefined) {
		startTimer = setInterval(time, 1000);
		timeRunning = false;
	}
});

// stop timer
stop.addEventListener("click", function () {
	stopInterval();
	startTimer = undefined;
});

// reset timer
reset.addEventListener("click", function () {
	wm.innerText = 25;
	ws.innerText = "00";

	bm.innerText = 5;
	bs.innerText = "00";

	document.getElementById("counter").innerText = 0;
	stopInterval();
	startTimer = undefined;
});

function time() {
	// work timer
	if (ws.innerText != 0) {
		ws.innerText--;
	} else if (wm.innerText != 0 && ws.innerText == 0) {
		ws.innerText = 59;
		wm.innerText--;
	}

	// break timer
	if (wm.innerText == 0 && ws.innerText == 0) {
		if (bs.innerText != 0) {
			bs.innerText--;
		} else if (bm.innerText != 0 && bs.innerText == 0) {
			bs.innerText = 59;
			bm.innerText--;
		}
	}

	// increment cycle count by  one when work and zero timers are zero
	if (wm.innerText == 0 && ws.innerText == 0 && bm.innerText == 0 && bs.innerText == 0) {
		wm.innerText = 25;
		ws.innerText = "00";

		bm.innerText = 5;
		bs.innerText = "00";

		document.getElementById("counter").innerText++;
	}
}

// stop interval function
function stopInterval() {
	clearInterval(startTimer);
}
