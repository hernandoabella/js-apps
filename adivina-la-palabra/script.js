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
let pause = false; // This var and setTimout function to not listen for keypress while game resets
let loseSound = new Audio("./assets/sounds/ahahah.mp3");
let winSound = new Audio("./assets/sounds/clever.wav");
let championSound = new Audio("./assets/sounds/crazysob.mp3");

//Starts game
function initializeGame() {

  // Get a new word
  wordToMatch = possibleWords[Math.floor(Math.random() * possibleWords.length)].toUpperCase();
  // Set number of guesses (higher or lower) based on word length
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

  // Get underscores for guessingWord from wordToMatch
  for (var i=0; i < wordToMatch.length; i++){
    // Put a space instead of an underscore between multi-word options in possibleWords array
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
    championSound.play() // Toggle line comment on for almost the entire possibleWords array to hear this end of game sound clip
    usedGuessingwWords = []
    wins = 0
    setTimeout(resetGame, 6000); // Note for future change - shorten possibleWords, make jumbotron display congratulatory message upon guessing all possibilites
  }else {
    pause = false;
    // Restores blinking "...get started" message
    document.getElementById('welcome').className = 'blink';
    
    // Obtener una nueva palabra
    wordToMatch = possibleWords[Math.floor(Math.random() * possibleWords.length)].toUpperCase();
    console.log(wordToMatch)
    // If new word has already been used randomly select another
    if (usedGuessingwWords.includes(wordToMatch) === true) {
      resetGame();
    }
    
    // Set number of guesses (higher or lower) based on word length
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
  // Make sure key pressed is an alpha character
  if (isLetter(event.key) && pause === false) {
  checkForLetter(event.key.toUpperCase());
  }
  // Turn off blinking "...get started" message on keypress
  document.getElementById('welcome').className = 'noBlink';
};

// Comprueba si la letra presionada está entre A-Z o a-z
var isLetter = function(ch){
  return typeof ch === "string" && ch.length === 1
  && (ch >= "a" && ch <= "z" || ch >= "A" && ch <= "Z");
};

// Comprueba si la letra está en una palabra
function checkForLetter(letter) {
  var foundLetter = false;

  // Busca un string por letra 
  for (var i=0; i < wordToMatch.length; i++) {
    if (letter === wordToMatch[i]) {
      guessingWord[i] = letter
      foundLetter = true
      // If guessing word matches random word
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
      // Disminuir el número de conjeturas restantes
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
