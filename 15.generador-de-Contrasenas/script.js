let listaClave = "abcdefghijklmnopqrstuvwxyz1234567890!@#$%&*/\?";
let temp = "";

function generatePass(pLength) {
    temp = "";
    for (var i = 0; i < pLength; i++) {
        temp += listaClave.charAt(Math.floor(Math.random() * listaClave.length))
    }
    return temp;
}

function populateForm(enterLength) {
    document.generarPassword.salida.value = generatePass(enterLength);
}

const copiar = () =>{
    var copyText = document.getElementById('myInput');
    copyText.select();
    document.execCommand('copy');
}



