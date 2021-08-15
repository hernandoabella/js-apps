const contents = document.querySelectorAll('.content');
const listItems = document.querySelectorAll('nav ul li');

listItems.forEach((item, idx) => {
	item.addEventListener('click', () => {
		hideAllContents();
		hideAllItems();
		
		// activate list item
		item.classList.add('active');
		
		// display content
		contents[idx].classList.add('show');
	});
});

function hideAllContents() {
	contents.forEach(content => {
		content.classList.remove('show');
	});
}

function hideAllItems() {
	listItems.forEach(item => {
		item.classList.remove('active');
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