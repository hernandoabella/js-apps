window.onload = init;

//Globals

//Available levels
const levels = {
    easy: 5,
    medium: 3,
    hard: 1
}

//To change levels
const currentLevel = levels.easy;

let time = currentLevel;
let score = 0;
let isPlaying;

//DOM elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

//Word array
const words = [
    'width',
    'unlikely',
    'acceptable',
    'depressed',
    'loot',
    'disappear',
    'default',
    'manufacture',
    'pastel',
    'vegetable',
    'budget',
    'opera',
    'pool',
    'mirror',
    'secular',
    'laser',
    'censorship',
    'interference',
    'leash',
    'pay',
    'satisfied',
    'pepper',
    'allocation',
    'club',
    'patent',
    'fuss',
    'lake',
    'commission',
    'president',
    'simplicity',
    'technique',
    'magnitude',
    'favor',
    'color-blind',
    'paper',
    'assignment',
    'abnormal',
    'cultural',
    'transport',
    'threaten',
    'quaint',
    'mug',
    'major',
    'compromise',
    'favorable',
    'appreciate',
    'check',
    'van',
    'referral',
    'bell'
];

//Initialize Game
function init() {
    // Show number of seconds in UI
    seconds.innerHTML = currentLevel;
    // Load word from array
    showWord(words);
    // Start matching on word inputs
    wordInput.addEventListener('input', startMatch);
    // Call countdown every second
    setInterval(countdown, 1000);
    // Check game status
    setInterval(checkStatus, 50);
}

// Start Match
function startMatch() {
    if(matchWords()) {
        isPlaying = true;
        time = currentLevel + 1;
        showWord(words);
        wordInput.value = '';
        score++;
    }

    // If score is -1, show 0
    if(score == -1){
        scoreDisplay.innerHTML = 0;
    }
    else {
        scoreDisplay.innerHTML = score;
    }
}

// Match current word to word input
function matchWords() {
    if (wordInput.value == currentWord.innerHTML){
        message.innerHTML = 'Correct!';
        return true;
    }
    else{
        message.innerHTML = '';
        return false;
    }
} 

//Pick and show random word
function showWord(words) {
    //Generate random array index
    const randIndex = Math.floor(Math.random() * words.length);
    //Output random word
    currentWord.innerHTML = words[randIndex];
}

//Countdown timer
function countdown() {
    // If the time is not run out
    if (time > 0){
        //Decrement
        time--;
    }
    // If the time has run out
    else if(time == 0) {
        //Game is over
        isPlaying = false;
    }
    //Show time
    timeDisplay.innerHTML = time;
}

//Check game status
function checkStatus() {
    if(!isPlaying && time == 0){
        message.innerHTML = 'Game Over!';
        score = -1;
    }
}