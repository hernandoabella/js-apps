const portada = document.getElementById('portada');
const disco = document.getElementById('disco');
const titulo = document.getElementById('titulo');
const artista = document.getElementById('artista');
const contenedorProgreso = document.getElementById('contenedor__progreso');
const progreso = document.getElementById('progreso');
const temporizador = document.getElementById('temporizador');
const duracion = document.getElementById('duracion');
const anterior = document.getElementById('anterior');
const reproducir = document.getElementById('reproducir');
const siguiente = document.getElementById('siguiente');
let indiceCancion = 0;

// Informacion canciones
const canciones = [
  {
    titulo: 'Green Chair',
    artista: 'Diego Nava',
    coverPath: 'assets/images/cover1.jpg',
    origenDisco: 'assets/music/music1.mp3',
    duracion: '1:33',
  },
  {
    titulo: 'Dance with Me',
    artista: 'Ahjay Stelino',
    coverPath: 'assets/images/cover2.jpg',
    origenDisco: 'assets/music/music2.mp3',
    duracion: '2:22',
  },
  {
    titulo: 'Gimme that Bottle',
    artista: 'Michael Ramir',
    coverPath: 'assets/images/cover3.jpg',
    origenDisco: 'assets/music/music3.mp3',
    duracion: '1:54',
  },
];

// Cargar cancion inicialmente
cargarCancion(canciones[indiceCancion]);

// Cargar la cancion dada
function cargarCancion(song) {
  portada.src = song.coverPath;
  disco.src = song.origenDisco;
  titulo.textContent = song.titulo;
  artista.textContent = song.artista;
  duracion.textContent = song.duracion;
}

// Toggle reproducir y pausar
function reproducirPausarMedios() {
  if (disco.paused) {
    disco.play();
  } else {
    disco.pause();
  }
}

// Actualizar icon
function actualizarIconoReproducirPausar() {
  if (disco.paused) {
    reproducir.classList.remove('fa-pause');
    reproducir.classList.add('fa-play');
  } else {
    reproducir.classList.remove('fa-play');
    reproducir.classList.add('fa-pause');
  }
}

// Actualizar barra de progreso
const actualizarProgreso = () => {
  progreso.style.width = (disco.currentTime / disco.duration) * 100 + '%';

  let minutes = Math.floor(disco.currentTime / 60);
  let seconds = Math.floor(disco.currentTime % 60);
  if (seconds < 10) {
    seconds = '0' + seconds;
  }
  temporizador.textContent = `${minutes}:${seconds}`;
};

// Reiniciar el progreso
const reiniciarProgreso = () => {
  progreso.style.width = 0 + '%';
  temporizador.textContent = '0:00';
};

// Ir a la cancion anterior
function irCancionAnterior() {
  if (indiceCancion === 0) {
    indiceCancion = canciones.length - 1;
  } else {
    indiceCancion = indiceCancion - 1;
  }

  const isDiscPlayingNow = !disco.paused;
  cargarCancion(canciones[indiceCancion]);
  reiniciarProgreso();
  if (isDiscPlayingNow) {
    reproducirPausarMedios();
  }
}

// Ir a la siguiente cancion
function irSiguienteCancion(playImmediately) {
  if (indiceCancion === canciones.length - 1) {
    indiceCancion = 0;
  } else {
    indiceCancion = indiceCancion + 1;
  }

  const isDiscPlayingNow = !disco.paused;
  cargarCancion(canciones[indiceCancion]);
  reiniciarProgreso();
  if (isDiscPlayingNow || playImmediately) {
    reproducirPausarMedios();
  }
}

// Cambiar el progreso de la cancion cuando hagas clic en la barra de progreso
function setProgress(ev) {
  const totalWidth = this.clientWidth;
  const clickWidth = ev.offsetX;
  const clickWidthRatio = clickWidth / totalWidth;
  disco.currentTime = clickWidthRatio * disco.duration;
}

// Reproducir/pausar cuando hagas clic en el boton de reproducir
reproducir.addEventListener('click', reproducirPausarMedios);

// Varios eventos en el disco
disco.addEventListener('play', actualizarIconoReproducirPausar);
disco.addEventListener('pause', actualizarIconoReproducirPausar);
disco.addEventListener('timeupdate', actualizarProgreso);
disco.addEventListener('ended', irSiguienteCancion.bind(null, true));


// Ir a la siguiente cancion cuando hagas clic en el boton siguiente
anterior.addEventListener('click', irCancionAnterior);


// Ir a la cancion anterior cuando hagas clic en el boton anterior

siguiente.addEventListener('click', irSiguienteCancion.bind(null, false));


// Mover a un lugar diferente en la cancion
contenedorProgreso.addEventListener('click', setProgress);