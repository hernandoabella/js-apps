//variables

const numero = document.getElementById('numero');
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');

const sumar = () => {
   numero.classList.remove('claseAnimacion');
   numero.classList.add('claseAnimacion');
   return numero.innerText++;
}

const restar = () => {

      numero.classList.remove('claseAnimacion');

   window.requestAnimationFrame(() =>{

      numero.classList.add('claseAnimacion');
   })
   return numero.innerText--;
}


//activar contador automático: 
//setInterval(sumar, 500);



