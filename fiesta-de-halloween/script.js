const form = document.querySelector("form");
const namefield = document.getElementById("namefield");
const prefer = document.getElementById("prefer");
const costume = document.getElementById("costume");

form.addEventListener("submit", (event) => {
  let name = document.getElementById("halloween_name").value;
  if (name.length > 0) {
    namefield.innerHTML = name;
  } else {
    namefield.innerHTML = "I don't know who I am.";
  }

  var select = document.getElementById("costume_type");
  var text = select.options[select.selectedIndex].text;
  if (text == "Pick one" || text == "Other") {
    costume.innerHTML = "I don't who I'm supposed to be!";
  } else {
    costume.innerHTML = `I'm supposed to be a ${text}`;
  }

  if (document.getElementById("treats").checked) {
    prefer.innerHTML = "I Prefer Treats!";
  } else {
    prefer.innerHTML = "I Prefer Tricks!";
  }
  let snack = document.getElementById("snack");
  snack.innerHTML = "No Snack so Eat ME!";
  if (document.getElementById("bringing_snacks").checked) {
    snack.innerHTML = "I'm bringin munchies!";
  }
  document.getElementById("name-tag").style.display = "block";
  form.reset();
  event.preventDefault();
});
