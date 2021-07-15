var indice = 1;
mostrarSlides(indice);

function siguienteSlide(n) {
  mostrarSlides(indice += n);
}

function slideActual(n) {
  mostrarSlides(indice = n);
}

function mostrarSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {indice = 1}
  if (n < 1) {indice = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  
  slides[indice-1].style.display = "block";
  
}

