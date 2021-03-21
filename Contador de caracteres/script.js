let boton = document.getElementById("boton");
let cadena = document.getElementById("cadena");

let imprimir = (mensaje) => {
    let salida = document.getElementById("salida");
    salida.style.display = "block";
    salida.innerHTML = "El largo de caracteres es: " + "<b>" + mensaje + "</b>" + " (Incluyendo los espacios en blanco)";
}

cadena.addEventListener("keyup", (e) =>{
    if(e.key === 'Enter'){
        e.preventDefault();
        boton.click();
    }
}, false);

boton.onclick = (e) =>{
    imprimir(document.getElementById('cadena').value.length);
}

