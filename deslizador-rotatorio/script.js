const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');
let activeSlide = 0;

slider.addEventListener('animationstart', () => {
	setInterval(changeSlide, 2000);
});

function changeSlide() {
	slides[activeSlide].classList.remove('visible');
	
	activeSlide++;
	
	if(activeSlide >= slides.length) {
		activeSlide = 0;
	}
	
	slides[activeSlide].classList.add('visible');
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