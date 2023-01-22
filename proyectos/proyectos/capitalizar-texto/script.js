

texto.addEventListener("keyup", function(){
    let texto = document.getElementById('texto').value;
    let salida = document.getElementById('salida');
    if(texto === '') {
        salida.innerHTML = "capitalizar texto";
    }
    salida.innerHTML = texto.replace(/^\w/, c => c.toUpperCase());
});