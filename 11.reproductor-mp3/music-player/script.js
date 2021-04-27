const portada = document.getElementById('portada');
const disco = document.getElementById('disco');
const titulo = document.getElementById('titulo');
const artista = document.getElementById('artista');
const contenedorProgreso = document.getElementById('contenedor__progreso');
const progreso = document.getElementById('progreso');
const temporizador = document.getElementById('temporizador');
const duration = document.getElementById('duracion');
const prev = document.getElementById('prev');
const play = document.getElementById('play');
const next = document.getElementById('next');
let indiceCancion = 0;

// Songs info
const canciones = [
  {
    titulo: 'Green Chair',
    artista: 'Diego Nava',
    coverPath: 'assets/images/cover1.jpg',
    discPath: 'assets/music/music1.mp3',
    duration: '1:33',
  },
  {
    titulo: 'Dance with Me',
    artista: 'Ahjay Stelino',
    coverPath: 'assets/images/cover2.jpg',
    discPath: 'assets/music/music2.mp3',
    duration: '2:22',
  },
  {
    titulo: 'Gimme that Bottle',
    artista: 'Michael Ramir',
    coverPath: 'assets/images/cover3.jpg',
    discPath: 'assets/music/music3.mp3',
    duration: '1:54',
  },
];

// Load song initially
loadSong(canciones[indiceCancion]);

// Load the given song
function loadSong(song) {
  portada.src = song.coverPath;
  disco.src = song.discPath;
  titulo.textContent = song.titulo;
  artista.textContent = song.artista;
  duration.textContent = song.duration;
}

// Toggle play and pause
function playPauseMedia() {
  if (disco.paused) {
    disco.play();
  } else {
    disco.pause();
  }
}

// Update icon
function updatePlayPauseIcon() {
  if (disco.paused) {
    play.classList.remove('fa-pause');
    play.classList.add('fa-play');
  } else {
    play.classList.remove('fa-play');
    play.classList.add('fa-pause');
  }
}

// Update progress bar
function updateProgress() {
  progreso.style.width = (disco.currentTime / disco.duration) * 100 + '%';

  let minutes = Math.floor(disco.currentTime / 60);
  let seconds = Math.floor(disco.currentTime % 60);
  if (seconds < 10) {
    seconds = '0' + seconds;
  }
  temporizador.textContent = `${minutes}:${seconds}`;
}

// Reset the progress
function resetProgress() {
  progreso.style.width = 0 + '%';
  temporizador.textContent = '0:00';
}

// Go to previous song
function gotoPreviousSong() {
  if (indiceCancion === 0) {
    indiceCancion = canciones.length - 1;
  } else {
    indiceCancion = indiceCancion - 1;
  }

  const isDiscPlayingNow = !disco.paused;
  loadSong(canciones[indiceCancion]);
  resetProgress();
  if (isDiscPlayingNow) {
    playPauseMedia();
  }
}

// Go to next song
function gotoNextSong(playImmediately) {
  if (indiceCancion === canciones.length - 1) {
    indiceCancion = 0;
  } else {
    indiceCancion = indiceCancion + 1;
  }

  const isDiscPlayingNow = !disco.paused;
  loadSong(canciones[indiceCancion]);
  resetProgress();
  if (isDiscPlayingNow || playImmediately) {
    playPauseMedia();
  }
}

// Change song progress when clicked on progress bar
function setProgress(ev) {
  const totalWidth = this.clientWidth;
  const clickWidth = ev.offsetX;
  const clickWidthRatio = clickWidth / totalWidth;
  disco.currentTime = clickWidthRatio * disco.duration;
}

// Play/Pause when play button clicked
play.addEventListener('click', playPauseMedia);

// Various events on disc
disco.addEventListener('play', updatePlayPauseIcon);
disco.addEventListener('pause', updatePlayPauseIcon);
disco.addEventListener('timeupdate', updateProgress);
disco.addEventListener('ended', gotoNextSong.bind(null, true));

// Go to next song when next button clicked
prev.addEventListener('click', gotoPreviousSong);

// Go to previous song when previous button clicked
next.addEventListener('click', gotoNextSong.bind(null, false));

// Move to different place in the song
contenedorProgreso.addEventListener('click', setProgress);
