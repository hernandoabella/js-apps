let resultado = document.getElementById('resultado');

const convertir = () =>{
    let celsius = document.getElementById('celsius').value;
    let fahrentheit = (celsius * 1.8) + 32;
    resultado.style.display = 'block';
    let cadenaDeTexto = `${celsius} grados celsius es igual a 
    ${fahrentheit} grados Fahrenheit`;
    return resultado.innerHTML = cadenaDeTexto;
}