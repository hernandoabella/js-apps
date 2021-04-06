// Función para calcular el número de días desde que naciste.
function edadEnDias() {
    let entrada = document.getElementById('entrada').value;
    let resultado = document.getElementById("resultado");
    let ageInDayss = (2019 - entrada) * 365;
    let textAnswer = "Tienes " + "<b>" + ageInDayss + "</b>" + " días de edad.";
    
    resultado.style.display = "block";
    resultado.innerHTML = textAnswer;
}