// selectors
const image = document.querySelector("img");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
// buttons
const play = document.getElementById("play");
const nextBtn = document.getElementById("next");
const previousBtn = document.getElementById("previous");
const music = document.querySelector("audio");
// time update
const currentTimeEl = document.getElementById("current-time");
const durationEl = document.getElementById("duration");
const progressContainer = document.querySelector(".progress-container");
const progress = document.getElementById("progress");

// music
const songs = [
	{ name: "01 Rapture", displayName: "01 Rapture", artist: "Koffee" },
	{
		name: "02 Ngiyaz'fela Ngawe (feat. Thabsie)",
		displayName: "02 Ngiyaz'fela Ngawe (feat. Thabsie)",
		artist: "Kwesta ft. Thabsie",
	},
	{ name: "03 Longtime (feat. Skepta)", displayName: "03 Longtime (feat. Skepta)", artist: "WizKid ft. Skepta" },
	{ name: "04 Let Me Go (UmaBhengu Remix)", displayName: "04 Let Me Go (UmaBhengu Remix)", artist: "House" },
	{ name: "05 Thando (feat. Mbuso Khoza)", displayName: "05 Thando (feat. Mbuso Khoza)", artist: "Black Coffee" },
	{ name: "06 Uhuru", displayName: "06 Uhuru", artist: "Sun-El Musician" },
];

// check if music playing
let isPlaying = false;
let songIndex = 3;

// next song
function nextSong() {
	songIndex++;
	if (songIndex > songs.length - 1) {
		songIndex = 0;
	}
	loadSong(songs[songIndex]);
	playSong();
}

// previous song
function prevSong() {
	if (songIndex < 0) {
		songIndex = songs.length - 1;
	}
	songIndex--;
	loadSong(songs[songIndex]);
	playSong();
}

// functions
function playSong() {
	isPlaying = true;
	play.classList.replace("play-circle-outline", "pause-circle-outline");
	play.setAttribute("title", "Pause");
	music.play();
}

function pauseSong() {
	isPlaying = false;
	play.classList.replace("pause-circle-outline", "play-circle-outline");
	play.setAttribute("title", "Play");
	music.pause();
}

// update DOM
function loadSong(song) {
	title.textContent = song.displayName;
	artist.textContent = song.artist;
	music.src = `music/${song.name}.mp3`;
	image.src = `img/${song.name}.jpg`;
}

// update  progress bar and time
function updateProgressBar(e) {
	if (isPlaying) {
		const { duration, currentTime } = e.srcElement;
		// update progress bar
		const progressPercent = (currentTime / duration) * 100;
		progress.style.width = `${progressPercent}%`;

		// calculate display for duration
		const durationMinutes = Math.floor(duration / 60);
		let durationSeconds = Math.floor(duration % 60);
		if (durationSeconds < 10) {
			durationSeconds = `0${durationSeconds}`;
		}

		// delay  switching duration element to avoid NaN
		if (durationSeconds) {
			durationEl.textContent = `${durationMinutes}:${durationSeconds}`;
		}
		// calculate display for current time
		const currentMinutes = Math.floor(currentTime / 60);
		let currentSeconds = Math.floor(currentMinutes % 60);
		if (currentSeconds < 10) {
			currentSeconds = `0${currentSeconds}`;
		}
		currentTimeEl.textContent = `${currentMinutes}:${currentSeconds}`;
	}
}

// set progress bar
function setProgressBar(e) {
	const width = this.clientWidth;
	const clickX = e.offsetX;

	const { duration } = music;
	music.currentTime = (clickX / width) * duration;
}

// on load - select first song
loadSong(songs[songIndex]);

// event listeners
play.addEventListener("click", () => {
	isPlaying ? pauseSong() : playSong();
});

previousBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);
music.addEventListener("timeupdate", updateProgressBar);
music.addEventListener("ended", nextSong);
progressContainer.addEventListener("click", setProgressBar);
