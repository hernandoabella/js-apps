//variables

let a = document.getElementById('a');
let b = document.getElementById('b');
let resultado = document.getElementById('resultado');


//Esta función te permite sumar dos números
function sumar(a, b){
   let suma = +a.value + +b.value;
   resultado.style.display = 'block';
   let cadenaTexto = resultado.innerHTML = 'El resultado es: ' + suma;
   return cadenaTexto;
}



