const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;

let int = setInterval(blurring, 30);

function blurring() {
	load++;
	
	if(load > 99) {
		clearInterval(int);
		
		// recreate the interval after 2 sec
		setTimeout(() => {
			load = 0;
			int = setInterval(blurring, 30);
		}, 2000);
	}
	
	loadText.innerText = load + '%';
	loadText.style.opacity = scale(load, 0, 100, 1, 0);
	bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

// from https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
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