const form = document.getElementById('sendForm');
const messages = document.getElementById('messages');
const msg = document.getElementById('msg');
const closeBtn = document.getElementById('close');
const popup = document.getElementById('popup');

closeBtn.addEventListener('click', () => {
	popup.style.display = 'none';
});

const socket = io.connect('https://general-tub.glitch.me');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	
	const message = msg.value;

	// Only send if not empty
	if(message.trim()) {
		socket.emit('chat message', message);

		// Empty input
		msg.value = '';
		
		scrollBottom();
	}
});

// When initially joins
socket.on('chat join', (msgs) => {
	msgs.forEach(msg => {
		addMsg(msg);
	});
});

// When sends message
socket.on('chat message', (msg) => {
	addMsg(msg);
});

const addMsg = (msg) => {
	const messageEl = document.createElement('li');
	messageEl.innerText = msg.split(' ').reverse().map(scrambble).join(' ');
	messages.prepend(messageEl);
}

const scrambble = (word) => {
	const firstLetter = word[0];
	const lastLetter = word[word.length-1];
	let restWord = word.slice(1, word.length-1).split('');
	
	for(let i=0; i<100; i++){
		const temp = restWord[i];
		const rndIdx = Math.floor(Math.random() * restWord.length);
		restWord[i] = restWord[rndIdx];
		restWord[rndIdx] = temp;
	}
	
	return firstLetter + restWord.join('') + lastLetter;
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