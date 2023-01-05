// GUESS THE NUMBER GAME STEP BY STEP EXPLANATION
//Generating a random number from 1-500
let randomNumber = parseInt((Math.random() * 500) + 1);
//make variables
const submit = document.querySelector('#user_guess');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const startOver = document.querySelector('.resultParas');
const lowOrHi = document.querySelector('.lowOrHi');
const p = document.createElement('p');
//hold the prev values of user guesses.
let previousGuesses = [];
//counting number of guess by the user.
let numGuesses = 1;
let playGame = true;
//main driver code
if (playGame){
    user_guess.addEventListener('click', function(e){
        e.preventDefault();
        //Getting the number from user
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}
//if the user enters wrong input, giving alert messages.
function validateGuess(guess){
  //check if the number is Null
    if (isNaN(guess)){
        alert('Not a valid number');
    } else if (guess < 1) {
        alert('Enter number greater than 1');
    } else if (guess > 500){
        alert('Please enter a number less than 500')
    } else {
        //Keep record of number of attempted guesses
        //push it to empty array created above
        previousGuesses.push(guess);
        //Check if game is over
        if (numGuesses === 11){
            displayGuesses(guess);
            displayMessage(`Game Over! Number was ${randomNumber}`);
            endGame();
        } else {
        //Display previous guessed numbers
        displayGuesses(guess);
        //Check guess and display if wrong
        checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    //Display clue if guess is high or low
    if (guess === randomNumber){
        displayMessage('Great !! you guessed it right.');
        endGame();
    } else if (guess < randomNumber) {
        displayMessage("It's low, Try Again");
    } else if (guess > randomNumber) {
        displayMessage("It's high, Try Again");
    }
}
//details of the guessed number by user
function displayGuesses(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess}  `;
    numGuesses++
    remaining.innerHTML = `${11 - numGuesses}  `;
}
//display after each guess
function displayMessage(message){
        lowOrHi.innerHTML = `<h1>${message}</h1>`
}

function endGame(){
    //Clear user input
    userInput.value = '';
    //Disable user input button after chances are over
    userInput.setAttribute('disabled', '');
    //disable the submit button
    submit.setAttribute('disabled', '');
    //Display Start new Game Button
        p.classList.add('button');
        p.innerHTML = `<h1 id="newGame">PLAY AGAIN</h1>`
    startOver.appendChild(p);
    playGame = false;
    newGame();
}
//enable the options which we disabled in endgame fn
function newGame(){

    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(){
        //re-initialise eveything to fresh start
        randomNumber = parseInt((Math.random()*500)+1);
        previousGuesses = [];
        numGuesses = 1;
        guessSlot.innerHTML = '';
        lowOrHi.innerHTML = '';
        remaining.innerHTML = `${11 - numGuesses}  `;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
        location.reload();
    })
}
//you can always upgrade the game! let me know what innovative idea you can put into this
//Good Luck
