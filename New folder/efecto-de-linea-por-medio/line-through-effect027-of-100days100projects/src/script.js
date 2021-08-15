const text = document.getElementById('text');
const textArr = text.innerText.split('');

const newEl = document.createElement('h1');
newEl.innerHTML = `
	${textArr.map(letter => `<span class="letter" style="${randomVisibility()}">${letter}</span>`).join('')}
`;
newEl.classList.add('overlay');

document.body.appendChild(newEl);


function randomVisibility() {
	return Math.random() < 0.5 ? 'visibility: hidden' : 'visibility: visible';
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