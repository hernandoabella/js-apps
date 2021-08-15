const app = document.getElementById('app');
const animation = document.getElementById('animation');
const BLOCKS_NR = 20;
const blocks = [];
const b_width = Math.ceil(window.innerWidth / BLOCKS_NR);
const b_height = Math.ceil(window.innerHeight / BLOCKS_NR);

createBlocks('random');

animation.addEventListener('change', (e) => {
	const animation = e.target.value;
	cleanUp();
	createBlocks(animation)
});

function createBlocks(animation) {
	for(let i = 0; i<BLOCKS_NR; i++) {
		const row = [];
		for(let j=0; j<BLOCKS_NR; j++) {
			const block = document.createElement('div');
			block.classList.add('block');
			block.style.width = b_width + 'px';
			block.style.height = b_height + 'px';
			
			switch(animation) {
				case 'fall': {
					block.style.top = -b_height + 'px';
					block.style.left = j * b_width + 'px';
					break;
				}
					
				case 'random': {
					block.style.top = Math.random() * window.innerHeight + 'px';
					block.style.left = Math.random() * window.innerWidth + 'px';
					break;
				}
					
				case 'oval': {
					block.style.top = '100vh';
					block.style.left = '100vw';
					break;
				}
					
				case 'middle': {
					block.style.top = '50vh';
					block.style.left = '50vw';
					break;
				}
			}
			
			block.style.backgroundPosition = `${-b_width * j}px ${-b_height * i}px`;
			row.push(block);
			app.appendChild(block);
		}
		blocks.push(row);
	}
	
	setTimeout(() => { animateBlocks(animation) }, 1000);
}

function animateBlocks(animation) {
	blocks.forEach((row, i) => {
		row.forEach((block, j) => {
			block.style.top = (b_height * i) + 'px';
			block.style.left = (b_width * j) + 'px';
			
			switch(animation) {
				case 'fall': {
					block.style.transitionDelay = Math.random() * 1000 + 'ms';
					break;
				}
					
				case 'random': {
					block.style.transitionDelay = Math.random() * 1000 + 'ms';
					break;
				}
					
				case 'oval': {
					block.style.transitionDelay = (i * BLOCKS_NR + j * BLOCKS_NR ) + 'ms';
					break;
				}
					
				case 'middle': {
					block.style.transitionDelay = (i * BLOCKS_NR + j ) * 20 + 'ms';
					break;
				}
			}
		});
	})
}

function cleanUp() {
	blocks.forEach((row, i) => {
		row.forEach((block, j) => {
			block.remove();
		})
	});
			
	blocks.splice(0, blocks.length);
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