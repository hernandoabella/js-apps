const screenEl = document.getElementById('screen');
const buttonEl = document.getElementById('button');
const scoreEl = document.getElementById('score');

buttonEl.addEventListener('click', increaseScore);

let score = 0;
let fillScreenScore = -1;

let icons;

function increaseScore() {
	scoreEl.innerText = ++score;
	
	if(score >= 100) {
		fillScreen();
	}
}100

function fillScreen() {
	screenEl.style.display = 'block';
	
	screenEl.innerHTML = `<div class="congrats">
		<h1>Congratulations!<br />You are a millionaire now! 
		<i class="fas fa-smile"></i></h1>
		<a href="https://www.twitter.com/share?text=I am a millionaire now thanks to @florinpop1705. You can become one too! 😃 (Just kiddin', but you should check this project out anyway 😆)&hashtags=100Days100Projects&url=https://codepen.io/FlorinPop17/full/qBBMWey" class="button-3d" target="_blank">Share with your friends</a>
	</div>`;
	
	const nrOfIcons = Math.ceil(window.innerWidth / 24) * Math.ceil(window.innerHeight / 20);
	// add icons to DOM
	screenEl.innerHTML += new Array(nrOfIcons).fill('<i class="fas fa-money-bill-wave hide"></i>').join('');
	
	icons = document.querySelectorAll('.fa-money-bill-wave');
	
	showMoney();
}

function showMoney() {
	if(fillScreenScore < icons.length) {
		setTimeout(showMoney, 1);
		icons[++fillScreenScore].classList.remove('hide');
	}
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