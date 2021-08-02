const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

prev.addEventListener('click', () => {
	currentActive--;
	
	// keep it withing boundaries
	if(currentActive < 1) {
		currentActive = 1;
	}
	
	update();
});

next.addEventListener('click', () => {
	currentActive++;
	
	// keep it withing boundaries
	if(currentActive > circles.length) {
		currentActive = circles.length;
	}
	
	update();
});

function update() {
	// set and remove active class dependent of the currentActive index
	circles.forEach((circle, idx) => {
		if(idx < currentActive) {
			circle.classList.add('active');
		} else {
			circle.classList.remove('active');
		}
	});
	
	// get all the 'active' circles
	const actives = document.querySelectorAll('.active');
	
	// get the % width for the progress bar
	// remove one from actives and circles in order to have steps like: 0%, 50%, 100%
	progress.style.width = `${(actives.length - 1) / (circles.length - 1) * 100}%`;
	
	if(currentActive === 1) {
		// hide prev
		prev.disabled = true;
	} else if (currentActive === circles.length) {
		// hide next
		next.disabled = true;
	} else {
		// show prev and next
		prev.disabled = false;
		next.disabled = false;
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