// Función para calcular el número de días desde que naciste.
function ageInDays() {
    let entrada = document.getElementById('entrada').value;
    let resultado = document.getElementById("resultado");
    let ageInDayss = (2019 - entrada) * 365;
    let h1 = document.createElement("h1");
    let textAnswer = document.createTextNode("Tienes " + ageInDayss + " días de edad.");
    h1.setAttribute("id", "ageInDays");
    h1.appendChild(textAnswer);
    resultado.appendChild(h1);
    resultado.style.display = "block";
}

// Función de reinicio
function reset() {
    document.getElementById("ageInDays").remove();
}