// modo oscuro
const modoOscuro = () => {
    document.body.classList.toggle('dark-mode');
    document.querySelectorAll('a').forEach(element => element.classList.toggle('white'));
}

// dynamic copyright
function copyright() {
    let year = new Date().getFullYear();
    let yearRef = document.querySelector('.year');
    yearRef.innerHTML = year;
}
copyright();
