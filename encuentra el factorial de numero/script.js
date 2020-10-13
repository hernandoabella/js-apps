let resultado = document.getElementById('resultado');

const encontrarFactorial = () => {
    let numero = document.getElementById('numero').value;
    if(numero < 0){
        resultado.innerHTML = 'Error! El número factorial negativo no existe.';
    }else if(numero === 0){
        resultado.innerHTML = `El factorial de ${numero} es 1.`;
    }else{
        let factorial = 1;
        for(i = 1; i <= numero; i++){
            factorial *= i;
        }
        resultado.innerHTML = `El factorial de ${numero} es ${factorial}.`;
    }

    let cadenaDeTexto = resultado;

    resultado.style.display = 'block';
    return resultado;
}
