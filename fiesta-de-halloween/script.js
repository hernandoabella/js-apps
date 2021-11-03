const form = document.querySelector("form");
const namefield = document.getElementById("namefield");
const prefer = document.getElementById("prefer");
const costume = document.getElementById("costume");

form.addEventListener("submit", (event) => {
    
  let name = document.getElementById("halloween_name").value;
  if (name.length > 0) {
    namefield.innerHTML = name;
  } else {
    namefield.innerHTML = "No se quien soy.";
  }

  let select = document.getElementById("costume_type");
  let text = select.options[select.selectedIndex].text;

  if (text == "Elige uno" || text == "Otro") {
    costume.innerHTML = "¡No sé quién se supone que debo ser!";
  } else {
    costume.innerHTML = `Se supone que soy un ${text}`;
  }

  if (document.getElementById("treats").checked) {
    prefer.innerHTML = "¡Prefiero dulces!";
  } else {
    prefer.innerHTML = "¡Prefiero trucos!";
  }

  let snack = document.getElementById("snack");
  snack.innerHTML = "¡No hay bocadillos, así que cómeme!";

  if (document.getElementById("bringing_snacks").checked) {
    snack.innerHTML = "¡Traigo bocadillos!";
  }

  document.getElementById("name-tag").style.display = "block";
  form.reset();
  event.preventDefault();
  
});
