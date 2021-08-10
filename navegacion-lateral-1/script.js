const menuBtn = document.getElementById('menu');
const sidebar = document.getElementById('sidebar');
const content = document.getElementById('content');

menuBtn.addEventListener('click', () => {
	sidebar.classList.toggle('active');
	content.classList.toggle('active');
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