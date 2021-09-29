const textarea = document.getElementById('textarea');
const container = document.getElementById('suggestion_container');
const suggestions_count = document.getElementById('suggestions_count');

textarea.addEventListener('keypress', (e) => {
	// if enter is pressed add it do the DOM
	if(e.key === 'Enter') {
		addSuggestionToDOM(e.target.value.trim());
		
		// clear input after a while
		// (because it had error with pressing the enter)
		setTimeout(() => {
			textarea.value = '';
		}, 10);
	}
});

function addSuggestionToDOM(suggestionText) {
	const newSuggestion = document.createElement('div');
	newSuggestion.classList.add('suggestion');
	newSuggestion.innerHTML = `
		<div class="left">
			<button class="vote-btn">
				<i class="fas fa-chevron-up"></i>
			</button>
			<p>
				<span class="votes">0</span>
				votes
			</p>
		</div>
		<div class="right">
			<strong>${suggestionText}</strong>
		</div>
	`;
	container.appendChild(newSuggestion);
	
	// increase suggestions_count
	suggestions_count.innerText = +suggestions_count.innerText + 1;
}

// add click event for votes
container.addEventListener('click', (e) => {
	// find if on the path there is a button with class vote-btn
	const btn = e.path.find(el => el.classList && el.classList.contains('vote-btn'));
	
	if(btn) {
		// find the suggestion to pass it to the function
		const suggestionEl = e.path.find(el => el.classList && el.classList.contains('suggestion'));
		
		// check if it was voted already - then unvote
		if(btn.classList.contains('voted')) {
			btn.classList.remove('voted');
			unvoteFor(suggestionEl);
			
		// if it's not voted, vote it
		} else {
			btn.classList.add('voted');
			voteFor(suggestionEl);
		}
	}
});

// vote for this suggestion
function voteFor(el) {
	// find vote to grow
	const voteEl = el.querySelector('span.votes');
	
	// increase the innerVote
	voteEl.innerText = +voteEl.innerText + 1;
}

// unvote for this suggestion
function unvoteFor(el) {
	// find vote to unvote
	const unvoteEl = el.querySelector('span.votes');
	
	// decrease the innerVote
	unvoteEl.innerText = +unvoteEl.innerText - 1;
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