const mensaje = document.querySelector('.message');
const button = document.querySelector('button');
const gameArea = document.querySelector('.gameArea');
const results = document.querySelector('.results');
const directions = document.querySelector('.directions');
let inPlay = false;
let playArea = {};
let count = 0;

function mostrarMensaje(notification){
    mensaje.innerHTML = `<h3>${notification}</h3>`;
}

function mostrarCaja(){
    playArea.timer = setTimeout(miCaja, random(4000));
}

function miCaja(){
    //crea la forma del elemento
    let element = document.createElement('div');
    element.classList.add('box');
    element.style.top = random(setTopMargin()) + 'px';
    element.style.left = random(setLeftMargin()) + 'px';
    element.style.backgroundColor = getColor();
    element.start = new Date().getTime();
    element.addEventListener('click', hit);
    gameArea.appendChild(element);
}

// Elige un color hexadecimal aleatorio
function getColor(){
    function col(){
        let hex = random(255).toString(16);
        //Siempre retorna dos valores, incluso si se agrega un 0
        return ('0' + String(hex)).substr(-2);
    }
    return '#' + col() + col() + col();
}

 //Ajusta el alto del margen para que no se salga del borde
function setTopMargin(){
    let maxHeight = gameArea.clientHeight;
    if (maxHeight <= 100){
        maxHeight = maxHeight + 200;
    } else {
        maxHeight = maxHeight - 200;
    }
    return maxHeight;
}

//Ajusta el margen izquierdo para que no se salga del borde
function setLeftMargin(){
    let maxWidth = gameArea.clientWidth;
    if (maxWidth <= 100){
        maxWidth = maxWidth + 200;
    } else {
        maxWidth = maxWidth - 200;
    }
    
    return maxWidth;
}

function hit(e){
    let start = e.target.start;
    let end = new Date().getTime();
    let duration = (end-start)/1000;
    let maxDuration = 1;
    
    clearTimeout(playArea.timer);
    mostrarMensaje('¡Te tomó ' + duration + ' segundos en hacer clic!');
    if (duration > maxDuration){
        gameArea.children[0].remove();
        results.innerHTML = `¡Eres demasiado lento! <span id="loser">¡Perdiste!</span> Tu puntuación fue ${count}.<br> ¡Clica el botón empezar para empezar el juego nuevamente!`;
        resetGame();
    } else {
        gameArea.children[0].remove();
        playArea.timer = setTimeout(miCaja, random(4000));
        count++;
        if (count === 15){
            results.innerHTML = `Has alcanzado ${renderCount(count)}! <span id="winner">¡Ganaste!</span> <br> Clica empezar para iniciar el juego nuevamente`;
            resetGame();
        } else {
            results.innerHTML = `Puntuación: ${renderCount(count)} of 15`;
        }
    }
}

function renderCount(count){
    return count;
}

function random(number){
    let tempVal = Math.floor(Math.random()*number);
    return tempVal;
}

function resetGame(){
    clearTimeout(playArea.timer);
    inPlay = false;
    button.style.display = 'block';
}

mostrarMensaje('¡Haz clic en empezar para iniciar el juego!');

button.addEventListener('click', function(){
    //Inicia el juego
        inPlay = true;
        //Oculta el botón
        button.style.display = 'none';
        directions.style.display = 'none';
        results.innerHTML = '';
        count = 0;
    //Notifica al usuario que va a comenzar
    mostrarMensaje('Empezando...');

    mostrarCaja();
})