const tweets_container = document.getElementById('tweets_container');
const dummyTweets = [
	{
		userImage:
			'https://pbs.twimg.com/profile_images/595659104384905218/bOtXKmdP_bigger.jpg',
		userName: 'Florin Pop',
		userScreen: '@florinpop1705',
		created: Date.now(),
		text: 'Oooopsie!'
	},
	{
		userImage:
			'https://pbs.twimg.com/profile_images/595659104384905218/bOtXKmdP_bigger.jpg',
		userName: 'Florin Pop',
		userScreen: '@florinpop1705',
		created: Date.now() - 50000,
		text: 'Twitter API limit reached. 😭'
	},
	{
		userImage:
			'https://pbs.twimg.com/profile_images/595659104384905218/bOtXKmdP_bigger.jpg',
		userName: 'Florin Pop',
		userScreen: '@florinpop1705',
		created: Date.now() - 150000,
		text: 'Now all you can see are these dummy tweets... 😞'
	},
	{
		userImage:
			'https://pbs.twimg.com/profile_images/595659104384905218/bOtXKmdP_bigger.jpg',
		userName: 'Florin Pop',
		userScreen: '@florinpop1705',
		created: Date.now() - 300000,
		text: 'But, you can come back later to see the real deal!'
	},
];
const tweets = [];

const getTweets = () => {
	fetch('https://twitter-100-days-100-projects.glitch.me/feed')
		.then(res => res.json())
		.then(res => {
			if(res.error) {
				clearInterval(tweetsInterval);
				tweets_container.innerHTML = '';
				dummyTweets.sort(() => -1).forEach(tweet => createTweet(tweet));
			} else {
				res.sort(() => -1).forEach(tweet => createTweet(tweet))
			}
		});
}

const createTweet = (tweet) => {
	if(!tweets.find(tw => tw.text === tweet.text)) {
		const tweetEl = document.createElement('li');
		tweetEl.classList.add('tweet');
		const tweetInnerHTML = `
			<div class="tw-left">
				<img src="${tweet.userImage}" alt="img" />
			</div>
			<div class="tw-right">
				<h4 class="name">
					${tweet.userName} 
					<span class="handle">${tweet.userScreen} ·</span> 
					<span class="time" data-time="${tweet.created}">${moment(tweet.created).fromNow()}</span>
				</h4>
				<p class="text">${tweet.text.replace(/\n/g, '<br />')}</p>
			</div>`;

		tweetEl.innerHTML = tweetInnerHTML;
		tweets_container.prepend(tweetEl);
		
		tweets.push(tweet);
	}
}

const updateTimes = () => {
	const tweetsTimes = document.querySelectorAll('.time');
	tweetsTimes.forEach(tweetEl => {
		tweetEl.innerText = moment(tweetEl.getAttribute('data-time')).fromNow()
	});
}

function tweetsInterval() {
	updateTimes();
	getTweets();
}

getTweets();
setInterval(tweetsInterval, 5000);


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