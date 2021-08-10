function createCircle() {
    const circleEl = document.createElement('div')
	circleEl.classList.add('circle')
	circleEl.style.top = Math.random() * innerHeight + "px";
	circleEl.style.left = Math.random() * innerWidth + "px";
	document.body.appendChild(circleEl);
	
	setTimeout(() => {
        circleEl.remove()
    }, 3000)
}

setInterval(createCircle, 300)

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