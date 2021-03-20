let valorBase, valorAltura, resultado;

valorBase = document.getElementById('base');
valorAltura = document.getElementById('alto');
resultado = document.getElementById('resultado');

const calcularArea = () =>{
    let area = (valorBase.value * valorAltura.value) / 2;
    let cadenaDeTexto = `El área del triángulo es igual a: ${area}`;
    resultado.style.display = 'block';
    resultado.innerHTML = cadenaDeTexto;
}



