let resultado = document.getElementById('resultado');

const crearTabla = () =>{
    let numero = document.getElementById('numero').value;
    let cadenaDeTexto = "";
    resultado.style.display = 'block';

    for(let i = 1; i <= 10; i++){
        multi = i * numero;
        cadenaDeTexto += `${numero} * ${i} = ${multi} <br>`;
        resultado.innerHTML = cadenaDeTexto;
    }
}

