const body = document.body;
const slides = document.querySelectorAll('.slide');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

let activeSlide = 0;

leftBtn.addEventListener('click', () => {
	activeSlide--;
	
	if(activeSlide < 0) {
		activeSlide = slides.length - 1;
	}
	
	setBgToBody();
	setActiveSlide();
});

rightBtn.addEventListener('click', () => {
	activeSlide++;
	
	if(activeSlide > slides.length - 1) {
		activeSlide = 0;
	}
	
	setBgToBody();
	setActiveSlide();
});

setBgToBody();

function setBgToBody() {
	body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

function setActiveSlide() {
	slides.forEach(slide => {
		slide.classList.remove('active');
	});
	
	slides[activeSlide].classList.add('active');
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