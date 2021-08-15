const boton = document.querySelector('button');
const body = document.querySelector('body');

body.style.background = 'rgb(214, 48, 82)';
boton.addEventListener('click', changeBackground);


function changeBackground() {
   var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
   return body.style.backgroundColor = randomColor;
}



