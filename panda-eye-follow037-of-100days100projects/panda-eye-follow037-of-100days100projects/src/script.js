const eyes = document.querySelectorAll('.eye-roll');

window.addEventListener('mousemove', (e) => {
	eyes.forEach(eye => {
		const x = eye.getBoundingClientRect().left + (eye.clientWidth / 2);
		const y = eye.getBoundingClientRect().top + (eye.clientHeight / 2);
		const radian = Math.atan2(e.pageX - x, e.pageY - y);
		const rot = (radian * (180 / Math.PI) * -1) + 90;
		eye.style.transform = `rotate(${rot}deg)`;
		
		console.log(rot);
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