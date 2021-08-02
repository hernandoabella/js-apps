const width = window.innerWidth;
const height = window.innerHeight;
const rowLength = Math.floor(height / 30);
const colLength = Math.floor(width / 30) - 1;

console.log(width, height, rowLength, colLength);

for(let i=0; i<rowLength; i++) {
	const row = document.createElement('div');
	row.classList.add('row');
	
	for(let j=0; j<colLength; j++) {
		const circle = document.createElement('div');
		circle.classList.add('circle');
		
		const nr = i * colLength + j;
		console.log(nr, isTheWinner());
		if(isTheWinner() === nr) {
			circle.classList.add('winner');
			const inner = document.createElement('div');
			inner.innerText = 'You are a winner!';
			circle.appendChild(inner);
		}
		
		row.appendChild(circle);
	}
	
	document.body.appendChild(row);
}

function isTheWinner() {
	return (30 * 98 / 15 - 195) * 17 - 4 * 23 + 103 * 5;
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