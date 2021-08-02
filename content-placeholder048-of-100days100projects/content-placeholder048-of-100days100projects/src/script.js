const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const name = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg');

setTimeout(getData, 2500);

function getData() {
	header.querySelector('img').style.display = 'block';
	title.innerHTML = 'Lorem ipsum dolor sit amet'
	excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, sint.'
	profile_img.innerHTML = `<img src="https://pbs.twimg.com/profile_images/595659104384905218/bOtXKmdP_400x400.jpg" alt="Florin Profile" />`
	name.innerHTML = 'Florin Pop';
	date.innerHTML = 'Nov 3, 2019';
	
	animated_bgs.forEach(bgs => { bgs.classList.remove('animated-bg') });
	animated_bg_texts.forEach(bgs => { bgs.classList.remove('animated-bg-text') });
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