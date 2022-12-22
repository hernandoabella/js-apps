const start = document.querySelector("#start");
const detener = document.querySelector("#stop");
const reset = document.querySelector("#reset");

let count = 0;

let minutes = 0;
let seconds = 0;
let milliSeconds = 0;

let startTimer = () => {
	count++;
	// Fórmula para calcular el tiempo
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

// Inicia el temporizador
let interval = 0;

// Verifica que el tiempo del temporizador esté corriendo
let timerRunning = false;

start.addEventListener("click", function () {
	if (!timerRunning) {
		interval = setInterval(startTimer, 10);
		timerRunning = true;
	}
});

// Detiene el temporizador
detener.addEventListener("click", function () {
	clearInterval(interval);
});

// Reinicia el temporizador
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

// Agrega zero a los números por debajo de 10
let addZero = (time) => {
	if (time <= 9) {
		return "0" + time;
	}
	return time;
};
