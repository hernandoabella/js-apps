let colapsable = document.getElementsByClassName("colapsable");
let i;

for (i = 0; i < colapsable.length; i++) {
   colapsable[i].addEventListener("click", function () {
      this.classList.toggle("active");
      let contenido = this.nextElementSibling;
      if (contenido.style.display === "block") {
         contenido.style.display = "none";
      } else {
         contenido.style.display = "block";
      }
   });
}


