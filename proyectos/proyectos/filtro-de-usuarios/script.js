const result = document.getElementById('result');
const filter = document.getElementById('filter');
const listItems = [];

getData();

filter.addEventListener('input', (e) => {
	filterData(e.target.value);
});

function getData() {
	fetch('https://randomuser.me/api/?results=50').then(res => res.json())
		.then(data => {
		// clear
		result.innerHTML = '';
		
		data.results.forEach(user => {
			const li = document.createElement('li');
			
			// store for filter
			listItems.push(li);
			
			li.innerHTML = `
				<img src="${user.picture.large}" alt="${user.name.first}">
				<div class="user-info">
					<h4>${user.name.first} ${user.name.last}</h4>
					<p>${user.location.city}, ${user.location.country}</p>
				</div>
			`;
			
			result.appendChild(li);
		});
	});
}

function filterData(searchTerm) {
	listItems.forEach(item => {
		if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
			item.classList.remove('hide');
		} else {
			item.classList.add('hide');
		}
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