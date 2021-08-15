const box = document.querySelector('.box');

setInterval(setBorderRadius, 300);

function setBorderRadius() {
	box.style.setProperty('--br-blobby', generateBorderRadiusValue());
	box.style.setProperty('--br-blobby-after', generateBorderRadiusValue());
	box.style.setProperty('--br-blobby-before', generateBorderRadiusValue());
}

function generateBorderRadiusValue() {
	return `${getRandomValue()}% ${getRandomValue()}% ${getRandomValue()}% ${getRandomValue()}% / ${getRandomValue()}% ${getRandomValue()}% ${getRandomValue()}%`;
}
	
function getRandomValue() {
	return Math.floor(Math.random() * 50) + 50;
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