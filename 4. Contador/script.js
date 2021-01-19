//variables

const numero = document.getElementById('numero');
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');

const sumar = () => {


   numero.classList.remove('animation2')

   setTimeout(() =>{
      numero.classList.add('animation');
   }, 10);
   
   return numero.innerText++;
}

const restar = () => {
   
   numero.classList.remove('animation');

   setTimeout(() =>{
      numero.classList.add('animation2');
   }, 10);
   
   return numero.innerText--;
}


//activar contador automático: 
//setInterval(sumar, 500);
//setInterval(restar, 500);



