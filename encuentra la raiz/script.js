let resultado = document.getElementById('resultado');
let entrada = document.querySelector('input');

function raizCuadrada() {

    let valorEntrada = entrada.value;
    
    let cadenaDeTexto = 'La raíz de ' + valorEntrada + 
    ' es: ' + Math.sqrt(valorEntrada); 

    return resultado.innerText = cadenaDeTexto;
}




