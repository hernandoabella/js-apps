const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.getElementById('container');

open.addEventListener('click', () => {
	container.classList.add('show-nav');
});

close.addEventListener('click', () => {
	container.classList.remove('show-nav');
});

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