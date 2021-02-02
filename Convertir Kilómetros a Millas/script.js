let kilometros = document.getElementById('kilometros');
let resultado = document.getElementById('resultado');

function convertir() {
    let factor = 0.621371;
    let millas = kilometros.value * factor;
    let cadenaDeTexto = `${kilometros.value} kilometros son iguales a ${millas} millas.`;
    resultado.style.display = 'block';
    return resultado.innerHTML = cadenaDeTexto;
}




