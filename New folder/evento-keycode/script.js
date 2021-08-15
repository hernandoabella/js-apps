const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
	console.log(e);
	insert.innerHTML = `
		<div class="key">
			${e.key === ' ' ? 'Space' : e.key}
			<small>event.key</small>
		</div>
		<div class="key">
			${e.keyCode}
			<small>event.keyCode</small>
		</div>
		<div class="key">
			${e.code}
			<small>event.code</small>
		</div>
	`
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