// Crea un botón [cerrar[X]] y se lo añade a cada ítem de la lista.
var nodoDeLista = document.getElementsByTagName("LI");
var i;
for (i = 0; i < nodoDeLista.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "cerrar";
  span.appendChild(txt);
  nodoDeLista[i].appendChild(span);
}

// Oculta el ítem de la lista cuando haces clic en botón [cerrar[X]]
var cerrar = document.getElementsByClassName("cerrar");
var i;
for (i = 0; i < cerrar.length; i++) {
  cerrar[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Cuando haces clic en la lista agrega un símbolo [chequeado]
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Crea una nueva lista cuando haces clic en el botón agregar
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "cerrar";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < cerrar.length; i++) {
    cerrar[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}


