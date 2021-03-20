let imprimir = (mensaje) => {
    document.getElementById("salida").innerHTML = "Length is " + mensaje + " (White Spaces are included)";
}



document.getElementById("boton").onclick = function (event){
    imprimir(document.getElementById('cadena').value.length);
}