const edadEnDias = () => {
    let nacimiento = document.querySelector('.entradaEdad').value;
    let edadEnDias = (2019 - nacimiento) * 365;
    let resultado = document.getElementById("resultado");
    let h2 = document.createElement("h2");
    let textoRespuesta = document.createTextNode("Tienes " + edadEnDias + " días de edad.");
    h2.setAttribute("id", "edadEnDias");
    h2.appendChild(textoRespuesta);
    resultado.style.display = "block";
    resultado.style.animation = "animacion1 3s";
    resultado.appendChild(h2);
}

const reiniciar = () => {
    document.getElementById("edadEnDias").remove();
    resultado.style.display = "none";
}