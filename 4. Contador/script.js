//variables

const numero = document.getElementById('numero');
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');

const sumar = () => {

   removeAnimationClass();

   setTimeout(() =>{
      numero.classList.add('animation');
   }, 10);
   
   return numero.innerText++;
}

const restar = () => {
   
   removeAnimationClass();

   setTimeout(() =>{
      numero.classList.add('animation2');
   }, 10);
   
   return numero.innerText--;
}

const removeAnimationClass = () => {
   numero.classList.remove('animation2', 'animation');
}


//activar contador automático: 
//setInterval(sumar, 500);
//setInterval(restar, 500);