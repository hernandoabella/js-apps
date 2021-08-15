//Variables

const numero = document.getElementById('numero');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');

const sumar = () => {

   removeAnimationClass();

   setTimeout(() =>{
      numero.classList.add('animation');
   }, 10);

   numero.innerText++;

   testColor();

   console.log(numero.innerHTML);
   
   return numero.innerText;

}

const restar = () => {

   removeAnimationClass();

   setTimeout(() =>{
      numero.classList.add('animation2');
   }, 10);

   numero.innerText--;

   testColor();

   console.log(numero.innerHTML);

   return numero.innerText;
}

const removeAnimationClass = () => {
   numero.classList.remove('animation2', 'animation');
}

const testColor = () =>{
   if(numero.innerText === '0'){
      numero.style.color = '#999';
   }else if(numero.innerText < '0'){
      numero.style.color = "red";
   }else{
      numero.style.color = "green";
   }
}

// Activar contador automático: 

// Suma automáticamente
// setInterval(sumar, 1000);
 
// Resta automáticamente
// setInterval(restar, 1000); 
