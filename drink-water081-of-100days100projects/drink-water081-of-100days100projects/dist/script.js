const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

updateBigCup();

smallCups.forEach((cup, idx) => {
	cup.addEventListener('click', () => highlightCups(idx));
});

function highlightCups(idx) {
	// if the cup has the full class already 
	// and the nextSiblign doesn't have it
	// (so it's clicked again), remove the full class by decreasing the idx.
	// the idx is used bellow to tell how far 
	// to add the 'full' class
	if(smallCups[idx].classList.contains('full') &&
		!smallCups[idx].nextElementSibling.classList.contains('full')) {
		idx--;
	}
	
	smallCups.forEach((cup, idx2) => {
		// make all the cups until here 'full'
		if(idx2 <= idx) {
			cup.classList.add('full');
		// and the rest, empty by removing 'full'
		} else {
			cup.classList.remove('full');
		}
	});
	
	updateBigCup();
}

function updateBigCup() {
	const fullGlasses = document.querySelectorAll('.cup-small.full').length;
	const totalGlasses = smallCups.length;
	
	// hide the .percentage if the glass is empty
	if(fullGlasses === 0) {
		percentage.style.visibility = 'hidden';
		percentage.style.height = '0';
	} else {
		percentage.style.visibility = 'visible';
		percentage.style.height = `${fullGlasses / totalGlasses * 330}px`;
		percentage.innerText = `${fullGlasses / totalGlasses * 100}%`;
	}
	
	if(fullGlasses === totalGlasses) {
		remained.style.visibility = 'hidden';
		remained.style.height = '0';
	} else {
		remained.style.visibility = 'visible';
		liters.innerText = `${(2 - (250 * fullGlasses / 1000)).toFixed(2)}L`;
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