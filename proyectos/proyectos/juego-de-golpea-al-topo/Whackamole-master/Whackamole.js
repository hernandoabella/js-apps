var isMobile=false;

document.addEventListener('touchstart', ()=> {isMobile=true;})

const square = document.querySelectorAll('.square');
const mole = document.querySelectorAll('.mole');
const timeLeft = document.querySelector('#time-left');
const diffSelector = document.querySelector('#difficulty');
const timeSelector = document.querySelector('#time');

let score = document.querySelector('#score');
let result = 0;
let currentTime = timeLeft.textContent;
let moveTimer = null;
let timerId;
let diff = Number(diffSelector.options[diffSelector.selectedIndex].value);


function randomSquare() {
    square.forEach(className => {
        className.classList.remove('mole')
    });

    let randomPosition = square[Math.floor(Math.random() * 9)];
        
        randomPosition.classList.add('mole');
        
        hitPosition = randomPosition.id;

}


function moveMole() {
    moveTimer = setInterval(randomSquare, diff);
}


function countDown() {
    currentTime--;
    timeLeft.textContent = currentTime;

    if(currentTime === 0) {
        clearInterval(timerId);
        clearInterval(moveTimer);
        alert("Time's up, game over! Your final score: " + result);
        location.reload();
    }
}


function startGame() {
    document.removeEventListener('touchstart', ()=> {isMobile=true;});
    if(isMobile) var eventToListen = 'touchstart';
    else  var eventToListen = 'mouseup';
    currentTime = Number(timeSelector.options[timeSelector.selectedIndex].value);
    diff = Number(diffSelector.options[diffSelector.selectedIndex].value);
    square.forEach(id => {
        id.addEventListener(eventToListen, () => {
            if(id.id === hitPosition) {
                randomSquare();
                result += 1;
                score.textContent = result;
                clearInterval(moveTimer);
                moveMole();
            }
        })
    })

    moveMole();

    timerId = setInterval(countDown, 1000);
}

