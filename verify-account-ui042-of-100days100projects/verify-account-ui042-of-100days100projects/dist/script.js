const codes = document.querySelectorAll('.code');

// Initially focus first input
codes[0].focus();

codes.forEach((code, idx) => {
	code.addEventListener('keydown', (e) => {
		if(e.key >= 0 && e.key <= 9) {
			setTimeout(() => {
				codes[idx+1].focus();
			}, 10);
		} else if (e.key === 'Backspace') {
			setTimeout(() => {
				codes[idx-1].focus();
			}, 10);
		}
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