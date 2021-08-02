const items_container = document.getElementById('items_container');
const submit_btn = document.getElementById('submit_btn');
const itemsEl = [];
const data = [];
const votes = [];
const db = firebase.database().ref('/items');
let voted = false;

db.once('value', snapshot => {
	const itemsObj = snapshot.val();
	if (itemsObj) {
		Object.keys(itemsObj).forEach(key => {
			data.push({...itemsObj[key], id: key});
			for(let i=0; i<itemsObj[key].votes; i++ ) {
				votes.push(key)
			}
		});
		
		createDom();
	}
});

function createDom() {
	items_container.innerHTML = '';

	data.forEach(data => {
		const item = document.createElement('div');
		item.classList.add('item');
		item.innerHTML = `
			<span>${data.value}</span>
			<small></small>
			<div class="percent-bar"></div>
		`;


		item.setAttribute('data-id', data.id);

		itemsEl.push(item);
		items_container.appendChild(item);
	})

	const items = document.querySelectorAll('.item');

	items.forEach(item => {
		item.addEventListener('click', () => {
			items.forEach(innerItem => {
				innerItem.classList.remove('active');
			});
			item.classList.add('active');
		});
	});

	submit_btn.addEventListener('click', () => {
		if(!voted) {
			const votedItem = document.querySelector('.item.active');
			if(!votedItem) {
				alert('Please select an option.')
				return;
			}
			const id = votedItem.getAttribute('data-id');
			votes.push(id);

			db.child(id).update({
				votes: data.find(item => item.id === id).votes + 1
			});

			calculateVotes();

			submit_btn.innerText = 'Thank you for your response';

			voted = true;
		}
	});
}

function calculateVotes() {
	const totalVotes = votes.length;
	const items = document.querySelectorAll('.item');
	const votesObj = {};
	
	votes.forEach(vote => {
		votesObj[vote] = votesObj[vote] ? ++votesObj[vote] : 1;
	});
	
	items.forEach(item => {
		const id = item.getAttribute('data-id');
		const votePercent = (votesObj[id] || 0) / totalVotes * 100;
		const voteFinalValue = `${votePercent.toFixed(2)}%`
		
		// Add % value into the small tag
		item.querySelector('small').innerText = voteFinalValue;		
		// Make the .percent-bar x% width
		item.querySelector('.percent-bar').style.width = voteFinalValue;
	});
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