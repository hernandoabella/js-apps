let kilometros = document.getElementById('kilometros');
let kilometro = kilometros.value;
let resultado = document.getElementById('resultado');



function convertir() {
    let factor = 0.621371;
    let millas = kilometro * factor;
    let cadenaDeTexto = `${kilometro} kilometros son iguales a ${millas} millas.`;
    resultado.style.display = 'block';
    return resultado.innerHTML = cadenaDeTexto;
}