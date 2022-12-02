const section = document.querySelector("section");  
let clicked = false;  
section.addEventListener("click", (e) => {  
 section.classList.toggle("flip");  
 if (!clicked) {  
  clicked = true;  
  document.getElementById("title").style.opacity = 0;  
 }  
});  