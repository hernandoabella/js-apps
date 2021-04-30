window.addEventListener('load', iniciar);

// Globals

// Niveles disponibles
const niveles = {
    facil: 5,
    medio: 3,
    dificil: 2
}

// Para cambiar de nivel
let nivelActual = niveles.facil;
let tiempoRestante = nivelActual;
let puntuacionActual = 0;
let estaJugando;
let maximaPuntuacion;


// Elementos del DOM
const entrada = document.querySelector('#entrada');
const palabraActual = document.querySelector('#palabraActual');
const puntuacion = document.querySelector('#puntuacion');
const tiempo = document.querySelector('#tiempo');
const mensaje = document.querySelector('#mensaje');
const segundos = document.querySelector('#segundos');
const puntuacionesMasAltas = document.querySelector('#puntuacionesMasAltas');
const facil = document.querySelector('#facil');
const medio = document.querySelector('#medio');
const dificil = document.querySelector('#dificil');

const palabras = [
    'angular',
    'magia',
    'elaborar cerveza',
    'while',
    'throw',
    'css',
    'break',
    'swing',
    'echo',
    'let',
    'muro',
    'laughter',
    'hash',
    'spinner',
    'cerveza',
    'ninja',
    'javascript',
    'maestro',
    'programa',
    'codificar',
    'héroe',
    'aprendiendo',
    'trabajo',
    'case',
    'react',
    'dragón',
    'rush',
    'api',
    'init',
    'movimiento',
    'google',
    'float',
    'damn',
    'block',
    'ranking',
    'nice',
    'máquina',
    'perfecto',
    'deploy',
    'terminal',
    'array',
    'vue',
    'node',
    'html',
    'front',
    'grid',
    'stack',
    'mac',
    'console',
    'ajax',
    'heroku',
    'loop',
    'sql',
    'php',
    'data',
    'npm',
    'server',
    'bash'
];

//Opción
const menu = document.getElementById('menu');
const deslizarMenu = document.getElementById('deslizarMenu');

menu.addEventListener('click', function(){
    deslizarMenu.classList.toggle("deslizar");
});


// Selección de nivel
const ajustarNivel = e => {
    if(e.target === facil){
        nivelActual = niveles.facil;
    }else if(e.target === medio){
        nivelActual = niveles.medio;
    }else if(e.target === dificil){
        nivelActual = niveles.dificil;
    }
    console.log(nivelActual);
    iniciar();
};

// Inicializar juego
function iniciar(){
    // Show number of sec in UI
    segundos.innerHTML = nivelActual;
    // Load word from array
    showWord(palabras);
    // Start matching on word input
    entrada.addEventListener('input', iniciarPartida);
    // Call countdown every second
    setInterval(countdown, 1000);
    // Check game status
    setInterval(comprobarEstado, 50);
    maximaPuntuacion = localStorage.getItem('highScore');
    puntuacionesMasAltas.innerHTML = maximaPuntuacion;
}

//Iniciar partida
const iniciarPartida = () => {
    entrada.value = entrada.value.toLowerCase();
    if(matchWords()){
        estaJugando = true;
        tiempoRestante = nivelActual + 1;
        showWord(palabras);
        entrada.value = '';
        puntuacionActual++;
    }

    // If score is -1 display zero
    if(puntuacionActual === -1){
        puntuacion.innerHTML = 0;
    }else{
        puntuacion.innerHTML = puntuacionActual;
        puntuacionesMasAltas.innerHTML = puntuacionActual;
        
        if(puntuacionActual >= maximaPuntuacion){
            localStorage.setItem('highScore',puntuacionActual);
        }
    }
    maximaPuntuacion = localStorage.getItem('highScore');
    puntuacion.innerHTML = puntuacionActual;
    puntuacionesMasAltas.innerHTML = maximaPuntuacion;
};

// Match currentWord to wordInput
const matchWords = () => {
    
        if(entrada.value === palabraActual.innerHTML){
            mensaje.innerHTML = 'Asombroso 👌';
            return true;
        }else{
            mensaje.innerHTML = '🙄';
            return false;
        }
};

// Pick and show random word
const showWord = word => {
    // Generate random array index
    const randIndex = Math.floor(Math.random() * palabras.length);
    // Output random word
    palabraActual.innerHTML = palabras[randIndex];
};

// Countdown timer

const countdown = () => {
    // Make sure time is not runout
    if(tiempoRestante > 0){
        // decrement
        tiempoRestante--;
    }else if(tiempoRestante === 0){
        // Game is over
        estaJugando = false;
    }
    // Show time
    tiempo.innerHTML = tiempoRestante;
};

// Check game status
const comprobarEstado = () => {
    if(!estaJugando && tiempoRestante === 0){
        mensaje.innerHTML = '¡Juego terminado!🙅🏽';
        puntuacionActual = -1;
    }
};

facil.addEventListener('click', ajustarNivel);
medio.addEventListener('click', ajustarNivel);
dificil.addEventListener('click', ajustarNivel);