// Variables
const body = document.querySelector('body');
const loaderEffect = document.getElementById('svgEffect');

const hello = () =>{
    loaderEffect.style.display = "none";
}

setTimeout(() =>{
    hello();
}, 3000);