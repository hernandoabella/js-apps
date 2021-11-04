const possibleWords = [
  "GRAND CANYON", 
  "ROCKY MOUNTAIN", 
  "ZION", 
  // "YELLOWSTONE",
  // "YOSEMITE", 
  // "GRAND TETON", 
  // "GLACIER", 
  // "ACADIA", 
  // "MAMMOTH CAVE"
];

const guessedLetters = [];
const guessingWord = [];
const usedGuessingwWords = [];
let wordToMatch;
let numGuess;
let wins = 0;
let pause = false; // Esta función var y setTimout es para no escuchar la pulsación de teclas mientras se reinicia el juego
let loseSound = new Audio("./assets/sounds/ahahah.mp3");
let winSound = new Audio("./assets/sounds/clever.wav");
let championSound = new Audio("./assets/sounds/crazysob.mp3");

// Inicia el juego
function initializeGame() {

  // Obtener una nueva palabra
  wordToMatch = possibleWords[Math.floor(Math.random() * possibleWords.length)].toUpperCase();
  // Establezca el número de aciertos (mayor o menor) según la longitud de la palabra
  if (wordToMatch.length <= 4) {
    numGuess = 4
  } else if (wordToMatch.length >4 && wordToMatch.length <= 7) {
    numGuess = Math.floor(wordToMatch.length * .67)
  } else if (wordToMatch.length >7 && wordToMatch.length <= 10) {
    numGuess = Math.floor(wordToMatch.length * .5)
  } else if (wordToMatch.length >10 && wordToMatch.length <= 14) {
    numGuess = Math.floor(wordToMatch.length * .52)
  } else if (wordToMatch.length >14) {
    numGuess = 7;
  }

  // Obtener guiones bajos para guessingWord desde wordToMatch
  for (var i=0; i < wordToMatch.length; i++){
    // Coloque un espacio en lugar de un guión bajo entre las opciones de varias palabras en el arreglo de palabras posibles
    if (wordToMatch[i] === " ") {
      guessingWord.push(" ")
    } 
    else {
      guessingWord.push("_");
    }
  }
  
  updateDisplay();
};

// Reiniciar el juego
function resetGame() {
  if (usedGuessingwWords.length === possibleWords.length) {
    championSound.play() // Activa el comentario de línea para casi todo el arreglo de palabras posibles para escuchar este clip de sonido al final del juego
    usedGuessingwWords = []
    wins = 0
    setTimeout(resetGame, 6000); // Nota para cambios futuros: acorte las palabras posibles, haga que jumbotron muestre un mensaje de felicitación al adivinar todas las posibilidades
  }else {
    pause = false;
    // Restaura el mensaje parpadeante "... empezar"
    document.getElementById('welcome').className = 'blink';
    
    // Obtener una nueva palabra
    wordToMatch = possibleWords[Math.floor(Math.random() * possibleWords.length)].toUpperCase();
    console.log(wordToMatch)
    // Si una nueva palabra ya ha sido usada aleatoriamente selecciona otra
    if (usedGuessingwWords.includes(wordToMatch) === true) {
      resetGame();
    }
    
    // Establezca el número de aciertos (mayor o menor) según la longitud de la palabra
    if (wordToMatch.length <= 4) {
      numGuess = 4
    } else if (wordToMatch.length > 4 && wordToMatch.length <= 7) {
      numGuess = Math.floor(wordToMatch.length * .67)
    } else if (wordToMatch.length > 7 && wordToMatch.length <= 10) {
      numGuess = Math.floor(wordToMatch.length * .5)
    } else if (wordToMatch.length > 10 && wordToMatch.length <= 14) {
      numGuess = Math.floor(wordToMatch.length * .52)
    } else if (wordToMatch.length > 14) {
      numGuess = 7;
    }

    // Reinicia los arreglos de las palabras
    guessedLetters = [];
    guessingWord = [];

    // Reinicia la palabra adivinada
    for (var i=0; i < wordToMatch.length; i++){
      // Coloque un espacio en lugar de un guión bajo entre las opciones de varias palabras en el arreglo de palabras posibles
      if (wordToMatch[i] === " ") {
        guessingWord.push(" ")
      } 
      else {
        guessingWord.push("_");
      }
    }
    updateDisplay();
  }
};

// Actualizar la pantalla
function updateDisplay () {
  document.getElementById("totalWins").innerText = wins;
  document.getElementById("currentWord").innerText = guessingWord.join("");
  document.getElementById("remainingGuesses").innerText = numGuess;
  document.getElementById("guessedLetters").innerText =  guessedLetters.join(" ");
};

// Espere a que se presione la tecla
document.onkeydown = function(event) {
  // Asegúrese de que la tecla presionada sea un carácter alfabético
  if (isLetter(event.key) && pause === false) {
  checkForLetter(event.key.toUpperCase());
  }
  // Apaga el mensaje parpadeante "... empezar" al presionar una tecla
  document.getElementById('welcome').className = 'noBlink';
};

// Comprueba si la letra presionada está entre A-Z o a-z
let isLetter = function(ch){
  return typeof ch === "string" && ch.length === 1
  && (ch >= "a" && ch <= "z" || ch >= "A" && ch <= "Z");
};

// Comprueba si la letra está en una palabra
function checkForLetter(letter) {
  let foundLetter = false;

  // Busca un string por letra 
  for (var i=0; i < wordToMatch.length; i++) {

    if (letter === wordToMatch[i]) {
      guessingWord[i] = letter
      foundLetter = true
      // Si la palabra que adivinaste coincide con una palabra aleatoria
      if (guessingWord.join("") === wordToMatch) {
        // Incrementar el número de victorias y agregar palabras a usedGuessingWords.
        wins++
        // Agregar palabra al arreglo usedGuessingWords para que no se repita
        usedGuessingwWords.push(wordToMatch)
        console.log(usedGuessingwWords)
        pause = true;
        winSound.play();
        updateDisplay();
        setTimeout(resetGame, 4000);
      }
    }

  }

  if (foundLetter === false) {
    // Compruebe si la suposición incorrecta ya está en la lista
    if (guessedLetters.includes(letter) === false) {
      // Agregar letra incorrecta a la lista de letras adivinadas
      guessedLetters.push(letter)
      // Disminuir el número de aciertos restantes
      numGuess--
    }

    if (numGuess === 0) {
      // Agregar palabra al arreglo usedGuessingWords para que no se repita
      usedGuessingwWords.push(wordToMatch);
      console.log(usedGuessingwWords)
      // Mostrar palabra antes de reiniciar el juego
      guessingWord = wordToMatch.split();
      pause = true;
      loseSound.play();
      setTimeout(resetGame, 4000);
    }
  }

  updateDisplay();

};

initializeGame();
