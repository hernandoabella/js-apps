//variables
let hora = document.getElementById('hora');
let minutos = 60;
let btn = document.getElementById('btn');
let resultado = document.getElementById('resultado'); 


//Esta función convierte las horas en segundos
function convertir(hora){
   let formula = hora.value * minutos * 60;
   resultado.innerHTML = formula + ' segundos. ';
   resultado.style.visibility = 'visible';
   return resultado;
}




