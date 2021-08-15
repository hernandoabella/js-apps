const boxesContainer = document.getElementById('boxes');

const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
	boxesContainer.classList.toggle('big');
});

function createBoxes() {
	for(let i=0; i<4; i++) {
		for(let j=0; j<4; j++) {
			const box = document.createElement('div');
			box.classList.add('box');
			box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`;
			boxesContainer.appendChild(box);
		}
	}
}

createBoxes();

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