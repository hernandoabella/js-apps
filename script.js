function cambiarIcono(x) {
    x.classList.toggle("fa-sun");
}

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
}

// eliminar modo oscuro
function removeDarkMode() {
    darkMode = localStorage.setItem("darkMode", "false");
    document.getElementsByTagName("body")[0].classList.remove("darkMode");
}

// derechos de autor dinámico
function copyright() {
    let year = new Date().getFullYear();
    let yearRef = document.querySelector('.year');
    yearRef.innerHTML = year;
}
copyright(); 

var count = 0;
var counterContainer = document.getElementById("counter");

var intervalId = setInterval(function() {
    if (count === 100) {
        clearInterval(intervalId);
    } else {
        count++;
        counterContainer.innerHTML = count;
    }
}, 50);
