const container = document.querySelector('.container');
const unsplashURL = 'https://source.unsplash.com/random/';
const rows = 10;

for(let i=0; i<rows * 3; i++) {
	const img = document.createElement('img');
	img.src = `${unsplashURL}${getRandomSize()}`;
	container.appendChild(img);
}

function getRandomSize() {
	return `${getRandomNr()}x${getRandomNr()}`;
}

function getRandomNr() {
	return Math.floor(Math.random() * 10) + 300;
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