function showTime() {
	let date = new Date();
	let hours = date.getHours(); // 0-23
	let minutes = date.getMinutes(); //0-59
	let seconds = date.getSeconds();

	// time format in AM or PM
	let formatHours = convertHours(hours);
	// check 12 or 24hour clock system
	hours = checkTime(hours);

	// add zero for numbers below 10
	hours = addZero(hours);
	minutes = addZero(minutes);
	seconds = addZero(seconds);

	// time element
	document.getElementById("clock").innerHTML = `${hours}:${minutes}:${seconds} ${formatHours}`;
}

function checkTime(time) {
	if (time > 12) {
		time = time - 12;
	}
	if (time === 0) {
		time = 12;
	}
	return time;
}

function addZero(time) {
	if (time < 10) {
		time = "0" + time;
	}
	return time;
}

// check for AM PM time format
function convertHours(time) {
	let format = "AM";
	if (time >= 12) {
		format = "PM";
	}
	return format;
}

showTime(); //prevents time loss on refresh
setInterval(showTime, 1000); // callback function to run the seconds on clock
