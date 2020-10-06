let resultado = document.getElementById('resultado');
let entrada = document.querySelector('input');


function raizCuadrada() {
    resultado.style.display = 'block';

    let valorEntrada = entrada.value;
    
    let cadenaDeTexto = 'La raíz de ' + valorEntrada + 
        ' es: ' + Math.sqrt(valorEntrada) + ' porque ' + 
        ' ' + Math.sqrt(valorEntrada) + ' * ' + 
        Math.sqrt(valorEntrada) + ' = ' + valorEntrada; 
    
    return resultado.innerText = cadenaDeTexto;
    
}



