const hoursEls = document.querySelectorAll('#hours .number');
const minutesEls = document.querySelectorAll('#minutes .number');
const secondsEls = document.querySelectorAll('#seconds .number');

const states = [
	[1,2,3,4,5,6,8,9,10,11,12,13],
	[3,5,8,10,13],
	[1,2,3,5,6,7,8,9,11,12,13],
	[1,2,3,5,6,7,8,10,11,12,13],
	[1,3,4,5,6,7,8,10,13],
	[1,2,3,4,6,7,8,10,11,12,13],
	[1,2,3,4,6,7,8,9,10,11,12,13],
	[1,2,3,5,8,10,13],
	[1,2,3,4,5,6,7,8,9,10,11,12,13],
	[1,2,3,4,5,6,7,8,10,11,12,13]
];

setInterval(getTime, 1000);

function getTime() {
	const time = new Date();
	let hours = time.getHours();
	let minutes = time.getMinutes();
	let seconds = time.getSeconds();
	
	hours = (hours < 10 ? `0${hours}` : hours).toString().split('');
	minutes = (minutes < 10 ? `0${minutes}` : minutes).toString().split('');
	seconds = (seconds < 10 ? `0${seconds}` : seconds).toString().split('');
	
	// set hour
	displayNumber(hoursEls[0], +hours[0])
	displayNumber(hoursEls[1], +hours[1])
	
	// set minutes
	displayNumber(minutesEls[0], +minutes[0])
	displayNumber(minutesEls[1], +minutes[1])
	
	// set seconds
	displayNumber(secondsEls[0], +seconds[0])
	displayNumber(secondsEls[1], +seconds[1])
}

function displayNumber(el, number) {
	const pieces = el.querySelectorAll('.piece');
	
	// show/hide pieces depending on the states array
	pieces.forEach((piece, idx) => {
		if(states[+number].includes(idx + 1)) {
			piece.classList.add('show');
		} else {
			piece.classList.remove('show');
		}
	});
}

// SOCIAL PANEL JS
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
	social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
	social_panel_container.classList.remove('visible')
});