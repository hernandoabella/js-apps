// selecciona el modal
let modal = document.getElementById("myModal");

// Selecciona el botón que abre el modal
let btn = document.getElementById("myBtn");

// Selecciona el elemento close que cierra el modal
let span = document.getElementsByClassName("close")[0];

// Abre el modal cuando el usuario presiona el botón
btn.onclick = function() {
  modal.style.display = "block";
}

// Cierra el modal cuando el usuario presiona la X
span.onclick = function() {
  modal.style.display = "none";
}

// Cierra el modal cuando el usuario hace clic afuera
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

