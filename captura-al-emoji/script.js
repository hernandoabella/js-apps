// ----------- Ajustes del juego ----------- //

let currentLevel = 1; // El número de nivel actual
let totalLevels; // Número total de niveles en el juego.

let emojiTapsCount = 0;

let generateRandomNumb = function(minNumb, maxNumb) { // Generar un numero aletario en un rango
  return Math.floor(Math.random() * (maxNumb - minNumb + 1)) + minNumb;
}

let getObjectLength = function(l) { // Obtener el largo de un objeto
  return Object.keys(l).length;
}

let windowSize = { // Obtener el tamaño de la pagina
    width: window.innerWidth || document.body.clientWidth,
    height: window.innerHeight || document.body.clientHeight
}

// Paginas / Contenedores
let menuCont = document.getElementById('menuCont');
let levelTitleCont = document.getElementById('levelTitleCont');
let gameSpaceCont = document.getElementById('gameSpaceCont');
let timesUpCont = document.getElementById('timesUpCont');
let gamePauseCont = document.getElementById('gamePausedCont');
let levelPassedCont = document.getElementById('levelPassedCont');

// Botones del menu & llamadas a la acción
let newGameButton = document.getElementById('newGameButton');
let highScoresButton = document.getElementById('highScoresButton');
let aboutButton = document.getElementById('aboutButton');

// Pantalla de título de nivel
let levelNumberTitle = document.getElementById('levelNumberTitle');
let levelGoalTitle = document.getElementById('levelGoalTitle');

// Botón de nivel de inicio
let startLevelButton = document.getElementById('startLevelButton');

// Pausar pantalla
let continueGameButton = document.getElementById('continueGameButton');
let gamePauseEndGameButton = document.getElementById('gamePauseEndGameButton');
let gamePausedDescription = document.getElementById('gamePausedDescription');

// Espacio del juego
let progressLine = document.getElementById('progressLine');
let gameTime = document.getElementById('gameTime');
let gameScore = document.getElementById('gameScore');
let gameSpace = document.getElementById('gameSpace');
let inGameLevelNum = document.getElementById('inGameLevelNum');

// Pantalla se acabó el tiempo
let tryAgainButton = document.getElementById('tryAgainButton');
let timesUpDescription = document.getElementById('timesUpDescription');
let timesUpEndGameButton = document.getElementById('timesUpEndGameButton');

// Pantalla de nivel superado
let levelPassedDescreption = document.getElementById('levelPassedDescreption');
let nextLevelDesc = document.getElementById('nextLevelDesc');
let continueNextLevelButton = document.getElementById('continueNextLevelButton');

// Finalizar los botones del juego e ir a la página de inicio del juego
let endGameGoHome = function() {
  emoji.destroy();
  updateGameLevelValue(1); // Vuelve al nivel 1
  menuCont.style.display = "block";
  timesUpCont.style.display = "none";
  gamePauseCont.style.display = "none";
  levelTitleCont.style.display = "none";
  gameSpaceCont.style.display = "none";
  levelPassedCont.style.display = "none";
}

// Actualizar el número de nivel en el espacio del juego
let updateGameLevelValue = function(levelNumb) {
  inGameLevelNum.innerHTML = levelNumb;
}

updateGameLevelValue(currentLevel);

// Haz el progreso al 100%
progressLine.style.width = "100%";

// Tiempo de juego y tiempo restante
let playTime, timeLeft;

// ------------------------------------------------------- //

let timeEngines = {
  start: function() {
    gameTime.innerHTML = timeLeft; // muestra el tiempo restante en la pantalla
    // Ejecute la barra de progreso y las funciones de tiempo
    progressTimer = setInterval(timeEngines.updateTimeProgress, 100); // Cada 0,1 de segundo
    countDownTimer = setInterval(timeEngines.updateTime, 1000); // Cada segundo
  },
  stop: function() {
    clearInterval(countDownTimer);
    clearInterval(progressTimer);
  },
  reset: function(time) {
    emojiTapsCount = 0;
    gameScore.innerHTML = emojiTapsCount; // Restablecer la puntuación a 0
    progressValue = 100; // Valor de la barra de progreso
    gameTime.innerHTML = time;
    timeLeft = time;
    playTime = time;
  },
  updateTimeProgress: function() { // Reste (100 / tiempo total de juego / 10) 10 para hacerlo más pequeño, y el tiempo es 0,1 de segundo (100 ms)
    progressValue = progressValue - (100/playTime/10);
    progressLine.style.width = progressValue + "%";
    timeEngines.checkTime(); // Comprueba si el tiempo del juego es 0
  },
  updateTime: function() { // Resta 1 de la etiqueta de tiempo de juego
    gameTime.innerHTML = gameTime.innerHTML - 1;
    timeLeft = gameTime.innerHTML;
  },
  checkTime: function() { // Comprueba si el tiempo del juego es 0 o no
    if (gameTime.innerHTML == 0) {
      game.timesUp();
    } else if (emojiTapsCount >= gameCurrentLevel.goal) {
      game.levelPassed();
    }
  },
}


// --------- NIVELES DE JUEGO --------- //

let levels = {}; // Objeto de niveles

let addLevel = function(n, g, t) { // Función de adición de niveles
  levels[n] = {goal: g, time: t};
}
addLevel(1, 4, 10); // Añadiendo el nivel 1

let updateLevelsCount = function() {
  totalLevels = getObjectLength(levels); // Obtener número de niveles
}
updateLevelsCount();

const game = {
  start: function() {
    timeEngines.reset(gameCurrentLevel.time); // Restablecer la configuración del juego
    timeEngines.start();
    emoji.create();
  },
  stop: function() {
    timeEngines.stop();
  },
  reset: function() {
    timeEngines.reset(gameCurrentLevel.time); // Restablecer la configuración del juego
  },
  pause: function() {
    timeEngines.stop();
  },
  resume: function() {
    timeEngines.start();
  },
  checkScore: function() {
    if (emojiTapsCount >= gameCurrentLevel.goal) {
      game.levelPassed();
    } else {
      game.levelLost();
    }
  },
  levelPassed: function() {
    timeEngines.stop();
    currentLevel++; // Aumentar el nivel
    addLevel(currentLevel, currentLevel*4, 10); // Añadiendo el nivel 5
    updateLevelsCount();
    levelPassedCont.style.display = "block"; // Mostrar pantalla de nivel superado
    updateGameLevelValue(currentLevel); // Actualizar el número de nivel en el espacio del juego
    getGameCurrentLevel(currentLevel); // Obtener el objeto de nivel actual
    continueNextLevelButton.innerHTML = 'Start Level ' + currentLevel + ' 👍';
    levelPassedDescreption.innerHTML = 'You catched all the ' + emojiTapsCount + ' emoticons!';
    nextLevelDesc.innerHTML = 'Now try to catch ' + gameCurrentLevel.goal + ' emoticons.';
  },
  levelLost: function() {
    timesUpCont.style.display = "block";
    timesUpDescription.innerHTML = 'You catched ' + emojiTapsCount + ' emoticons, and you had to catch ' + gameCurrentLevel.goal + ' at least to complete this level.';
  },
  timesUp: function() {
    timeEngines.stop();
    game.checkScore(); // Comprobar la puntuación
  },
}

getGameCurrentLevel = function(levelNumb) {
  gameCurrentLevel = levels[levelNumb];
}
getGameCurrentLevel(currentLevel); // Obtener el objeto de nivel actual

var gameCurrentLevel = levels[currentLevel]; //gameLevel + número de nivel


// ----------- Establecer el título y el objetivo del nivel ----------- //
levelNumberTitle.innerHTML = 'Nivel ' + currentLevel;
levelGoalTitle.innerHTML = 'Intenta capturar ' + gameCurrentLevel.goal + ' emojis en ' + gameCurrentLevel.time + ' segundos.';


// ------------------ Botones ------------------ //
// Detén el efecto goma en iOS
document.ontouchmove = function(e) {
  e.preventDefault();
}

// Hacer clic en el botón Nuevo juego
newGameButton.onclick = function() {
  menuCont.style.display = "none";
  levelTitleCont.style.display = "block";
}

// Hacer clic en el botón de nivel de inicio
startLevelButton.onclick = function() {
  levelTitleCont.style.display = "none";
  gameSpaceCont.style.display = "block";
  game.start(); // Empezar juego
}

// Hacer clic en el botón Pausar juego
pauseGameButton.onclick = function() {
  gamePauseCont.style.display = "block";
  game.pause(); // Pausar juego
  gamePausedDescription.innerHTML = 'Capturaste ' + emojiTapsCount + ' emoticones, y tienes que capturar ' + gameCurrentLevel.goal + ' al menos para completar este nivel.'
}

// Hacer clic en el botón Continuar juego
continueGameButton.onclick = function() {
  gamePauseCont.style.display = "none";
  game.resume();
}

// Hacer clic en los botones de finalización del juego
gamePauseEndGameButton.onclick = function() {
  endGameGoHome();
}
timesUpEndGameButton.onclick = function() {
  endGameGoHome();
}

// Al hacer clic en Intentar de nuevo en la pantalla que perdió
tryAgainButton.onclick = function() {
  emoji.destroy();
  timesUpCont.style.display = "none";
  game.start();
}

// Haciendo clic en el botón Ir al siguiente nivel
continueNextLevelButton.onclick = function() {
  levelPassedCont.style.display = "none";
  emoji.destroy();
  game.reset();
  game.start(); // Empezar juego
}

// -------------------------------------------- //

soundPool = function() { // sonidos que quiero precargar

}

// Agrega 2 niveles más y luego haz cosas de sonido
// 1- Reproducir música de fondo
// 2- Botones de efectos de sonido
// 3- Música de pausa del juego
// 4- Ganas música
// 5- Perdiste la musica
// 6- Música emoji atrapada


let emojiDiv, emojiDivWidth, emojiDivHeight;

emoji = {
  tapCount: 0,
  names: ['702','703','706','710','712','745','755', '229'],
  create: function(){
    // Crea emoji y añádelo al contenedor div
    emojiDiv = document.createElement('img');
    emojiDiv.setAttribute('id', 'emoticon');
    emojiDiv.setAttribute('src', 'emoticons/' + emoji.names[emoji.random()] +'.png');
    gameSpace.appendChild(emojiDiv);
    emojiDivWidth = emojiDiv.offsetWidth;
    emojiDivHeight = emojiDivWidth;
    emoji.randomPosition(); // muestra el emmoticon en una posición aleatoria
    emojiDiv.onclick = function() { // al tocar el emoticono
      emoji.tap();
    }
  },
  random: function(){ // generar emoticonos aleatorios de la matriz
    return generateRandomNumb(0 , emoji.names.length - 1);
  },
  randomPosition: function(){ // mostrando el cuadro de emoticonos al azar
    emojiDiv.style.left = generateRandomNumb(emojiDivWidth, gameSpace.offsetWidth - emojiDivWidth) + 'px'; // random left position minus the emoticon width
    emojiDiv.style.top = generateRandomNumb(emojiDivWidth, gameSpace.offsetHeight - emojiDivHeight) + 'px'; // random top position minus the emoticon height
  },
  respawn: function(){ // volver a generar emoji en una posición aleatoria
    gameSpace.removeChild(emojiDiv);
    emojiDiv.setAttribute('src', 'emoticons/' + emoji.names[emoji.random()] +'.png'); // Obten un emoticon aleatorio
    emoji.randomPosition(); // obtener una posición aleatoria
    gameSpace.appendChild(emojiDiv);
  },
  tap: function(){
    tapAudio.play(); // Reproduce el efecto de sonido tap
    emoji.respawn(); // cambia el emoticon
    emojiTapsCount = ++emojiTapsCount; // agrega 1 al contador
    gameScore.innerHTML = emojiTapsCount + ' / ' + gameCurrentLevel.goal; // muestra el recuento en el cuadro de recuento
  },
  destroy: function() {
    gameSpace.removeChild(emojiDiv);
  }
}

// ------ INICIAR SONIDOS ------ //

tapAudio = {
  sounds: ['tap1','tap2','tap3','tap4','tap5','tap6','tap7','tap8'],
  generatePlayer: function() { // Crea un reproductor de audio y lo agregaa la página
    audioPlayer = document.createElement('audio');
    waveSource = document.createElement('source');
    audioPlayer.setAttribute('controls','');
    audioPlayer.appendChild(waveSource);
    document.body.appendChild(audioPlayer);
  },
  randomSound: function(){ // generar sonido aleatorio
    return generateRandomNumb(0, tapAudio.sounds.length - 1);
  },
  addSound: function() {
    waveSource.setAttribute('src', 'sounds/' + tapAudio.sounds[tapAudio.randomSound()] + '.wav');
    audioPlayer.load();
  },
  play: function() {
    tapAudio.addSound();
    audioPlayer.currentTime = 0;
    audioPlayer.play();
  }
}

tapAudio.generatePlayer();

// ------ SONIDOS FINALES ------ //
