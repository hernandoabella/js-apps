const costo = document.querySelector('.costo');
const service_input = document.querySelector('.servicio');
const gente = document.querySelector('.gente');

const tip_btn = document.querySelector('#calcular');

tip_btn.addEventListener('click', calcularPropina);

function calcularPropina () {
 let cost = Number(costo.value);
 let service = Number(service_input.value) / 100;
 let people = Number(gente.value);
 let tip = (cost * service) / people;
 
 let tip_el = document.querySelector('.tip-wrap .tip');
 tip_el.innerText = '$' + tip.toFixed(2) + ((people > 1) ? ' cada 1' : '');
}

