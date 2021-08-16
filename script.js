// Variables

var loaderEffect;

loaderEffect = document.getElementById('svgEffect');
// 

const hello = () =>{
    loaderEffect.style.display = "none";
}

window.onload = hello();

setTimeout(() =>{

}, 3000);