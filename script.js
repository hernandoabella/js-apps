// modo oscuro
let darkMode = localStorage.getItem("darkMode");

if (darkMode == "true") {
    addDarkMode();
}
document.querySelector(".switch").addEventListener("click", function () {
    darkMode = localStorage.getItem("darkMode");
    if (darkMode == "true") {
        removeDarkMode();
    } else {
        addDarkMode();
    }
});

// agregar modo oscuro
function addDarkMode() {
    darkMode = localStorage.setItem("darkMode", "true");
    document.getElementsByTagName("body")[0].classList.add("darkMode");
    document.querySelector('h4').style.color = "var(--blanco)";
}

// eliminar modo oscuro
function removeDarkMode() {
    darkMode = localStorage.setItem("darkMode", "false");
    document.getElementsByTagName("body")[0].classList.remove("darkMode");
    document.querySelector('h4').style.color = "#5271FF";
}

// derechos de autor dinámico
function copyright() {
    let year = new Date().getFullYear();
    let yearRef = document.querySelector('.year');
    yearRef.innerHTML = year;
}
copyright();