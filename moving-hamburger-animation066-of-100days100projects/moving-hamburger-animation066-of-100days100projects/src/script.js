const to_move = document.getElementById('to_move');
const clickable = document.querySelectorAll('.clickable');

clickable.forEach(c => {
	c.addEventListener('click', () => {
		to_move.className = 'menu active';
		to_move.classList.add(c.getAttribute('data-class'));
	});
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