// Define los precios de cada artículo

const price = {
  egg: 2.00,
  muffin: 1.75,
  pancake: 3.00,
  biscuit: 2.00,
  oj: 1.50,
  pbj: 2.00,
  bologna: 2.00,
  taco: 2.00,
  soup: 2.00,
  water: 1.00,
  burger: 4.00,
  pizza: 2.00,
  chicken: 3.00,
  salad: 2.50,
  soda: 1.60,
  icecream: 2.50,
  flan: 3.00,
  cookie: 1.25,
  cupcake: 1.75,
  milkshake: 3.00
};

// Define las categorias para cada artículo

let drink = ["oj", "water", "soda", "milkshake"];
let breakfast = ["egg", "muffin", "pancake", "biscuit"];
let lunch = ["pbj", "bologna", "taco", "soup"];
let dinner = ["burger", "pizza", "chicken", "salad"];
let sweet = ["icecream", "flan", "cookie", "cupcake"];

// Agrega cada categoria a un objeto ()
// add each category to an object (used for match individual items to their categories)

let cats = { drink, breakfast, lunch, dinner, sweet };

/* índices para elementos agregados a divisiones de categoría
   * p.ej. si se agrega muffin después del panqueque, el muffin tendrá un índice de 1
   */

let drinkIdx = 0;
let breakfastIdx = 0;
let lunchIdx = 0;
let dinnerIdx = 0;
let sweetIdx = 0;

/* establece atributos de imagen que se aplican a todas las imágenes
   * esto también ahorra algo de desorden en el HTML
   */

function setAttributes() {
  let unassigned = document.getElementsByTagName("img");
  for (i = 0; i < unassigned.length; i++) {
    unassigned[i].onclick = function () { addItem(this); };
  }
} setAttributes();

// devuelve el precio de un artículo según la identificación de la imagen

function getPrice(obj) {
  let id = obj.id;
  for (i in price) {
    if (i == id) {
      return price[i];
    }
  }
};

// devuelve la categoría de un artículo según la identificación de la imagen

function getCategory(obj) {
  let id = obj.id;
  for (i in cats) {
    for (j = 0; j < cats[i].length; j++) {
      if (id == cats[i][j]) {
        return i;
      }
    }
  }
};

// calcula el precio total de todos los artículos en cada div categoría 

function calculatePrice() {
  let total = 0;
  for (i in cats) {
    let div = document.getElementById(i);
    let nodes = div.childNodes;
    for (j = 0; j < nodes.length; j++) {
      total += parseFloat(nodes[j].getAttribute("price"));
    }
  }
  let parseTotal = total.toFixed(2);
  let totalDiv = document.getElementById("total");
  totalDiv.innerHTML = "Total: $" + parseTotal;
}

// borra la salida de calculatePrice () y la reemplaza con un espacio que no se rompe

function clearTotal() {
  let div = document.getElementById("total");
  if (div.innerHTML != "") {
    div.innerHTML = "&nbsp";
  }
}

// borra cada div de categoría y restablece el índice de cada categoría a 0

function clearList() {
  for (i in cats) {
    let div = document.getElementById(i)
    while (div.hasChildNodes()) {
      let nodes = div.childNodes;
      div.removeChild(nodes[0]);
    }
  }
  drinkIdx = 0;
  breakfastIdx = 0;
  lunchIdx = 0;
  dinnerIdx = 0;
  sweetIdx = 0;
  clearTotal();
}

// borra una columna de categorías, restablece ese índice a 0 y borra el precio total (si está presente)

function clearColumn(obj) {
  let cat = obj.nextElementSibling.id;
  let div = document.getElementById(cat);
  while (div.hasChildNodes()) {
    div.removeChild(div.childNodes[0]);
  }
  switch (cat) {
    case "drink":
      if (drinkIdx > 0) {
        clearTotal();
      }
      drinkIdx = 0;
      break;
    case "breakfast":
      if (breakfastIdx > 0) {
        clearTotal();
      }
      breakfastIdx = 0;
      break;
    case "lunch":
      if (lunchIdx > 0) {
        clearTotal();
      }
      lunchIdx = 0;
      break;
    case "dinner":
      if (dinnerIdx > 0) {
        clearTotal();
      }
      dinnerIdx = 0;
      break;
    case "sweet":
      if (sweetIdx > 0) {
        clearTotal();
      }
      sweetIdx = 0;
      break;
  }
}

/* borra el contenido de una sola celda.
   * porque el botón de borrar se superpone en la parte superior de la imagen del artículo
   * hacer clic en el botón da como resultado dos llamadas
   * 1) clearCell (...) elimina la "pila" de imágenes (realmente reduce el atributo de precio)
   * 2) deleteItem (...) elimina la imagen real de la columna
   */

function clearCell(obj, category, price) {
  let idx = obj.tabIndex;
  let div = document.getElementById(category);
  let nodes = div.childNodes;
  let itemP = nodes[idx].getAttribute("price");
  let n = itemP / price;
  for (i = 0; i < n - 1; i++) {
    deleteItem(obj, category, price);
  }
}

// agrega la imagen de un elemento en una categoría div en función de la identificación de la imagen

function addItem(obj) {
  let idx; //used to idicate what position an item is in a column
  let category = getCategory(obj);
  let div = document.getElementById(category);

  switch (category) {
    case "drink":
      idx = drinkIdx;
      break;
    case "breakfast":
      idx = breakfastIdx;
      break;
    case "lunch":
      idx = lunchIdx;
      break;
    case "dinner":
      idx = dinnerIdx;
      break;
    case "sweet":
      idx = sweetIdx;
      break;
  }

  // determina si la siguiente entrada de imagen es una copia de una imagen anterior

  var stack = false;
  if (idx > 0) {
    var srcImg = 'url("' + obj.src + '")';
    var nodes = document.getElementById(category).childNodes;
    for (i = 0; i < nodes.length; i++) {
      if (nodes[i].style.backgroundImage == srcImg) {
        stack = true;
      }
    }
  }

  /* si no hay pilas
     * la imagen se agrega a un nuevo div como imagen de fondo
     * el uso de la imagen de fondo permite la superposición de texto
     * se establecen nuevos atributos div, así como información superpuesta
     *
     * si la imagen es una pila
     * primero se recupera el índice de imágenes
     * luego se actualiza la información de superposición
     */

  if (!stack) {
    let newDiv = document.createElement("div");
    newDiv.setAttribute("class", "fix");
    newDiv.style.backgroundImage = "url(" + obj.src + ")";
    newDiv.style.backgroundSize = "100px 100px";
    newDiv.style.backgroundRepeat = "no-repeat";
    newDiv.setAttribute("price", getPrice(obj));
    newDiv.tabIndex = idx;
    newDiv.onclick = function () { deleteItem(this, category, getPrice(obj)); };

    let text = document.createElement("div");
    text.innerHTML = "x1";
    text.setAttribute("class", "fixed")

    let dollar = document.createElement("div");
    dollar.innerHTML = "$" + getPrice(obj).toFixed(2);
    dollar.setAttribute("class", "fixed")

    let inputDiv = document.createElement("div");
    let icono = document.createElement("i");

    icono.setAttribute("class", "fas fa-times");

    icono.onclick = function () { clearCell(newDiv, category, getPrice(obj)); };
    inputDiv.setAttribute("class", "fixer")
    inputDiv.appendChild(icono);
    newDiv.appendChild(text);
    newDiv.appendChild(dollar);
    newDiv.appendChild(inputDiv);
    div.appendChild(newDiv);

    switch (category) {
      case "drink":
        drinkIdx++;
        break;
      case "breakfast":
        breakfastIdx++;
        break;
      case "lunch":
        lunchIdx++;
        break;
      case "dinner":
        dinnerIdx++;
        break;
      case "sweet":
        sweetIdx++;
        break;
    }
  } else {
    let index;
    for (i = 0; i < div.childNodes.length; i++) {
      if (div.childNodes[i].style.backgroundImage == srcImg) {
        index = i;
      }
    }
    let node = div.childNodes[index];
    let itemP = parseFloat(node.getAttribute("price"));
    let count = node.firstElementChild;
    let num = parseInt(count.innerHTML.substr(1, count.innerHTML.length)) + 1;

    let dollar = count.nextElementSibling;
    let amount = parseFloat(dollar.innerHTML.substr(1, dollar.innerHTML.length));
    amount += getPrice(obj);

    count.innerHTML = "x" + num;
    dollar.innerHTML = "$" + amount.toFixed(2);
    node.setAttribute("price", itemP + getPrice(obj));
  }
  clearTotal();
};


 /* detecta un elemento de la columna
   * si el artículo está apilado (es decir, su atributo de precio es mayor que el precio del artículo)
   * entonces la función disminuye el precio por el precio del artículo hasta que el precio base permanece
   * 
   * si la imagen no está apilada
   * la función elimina la imagen, disminuye el índice de categoría,
   * y actualiza el tabIndex para cada imagen
   */

function deleteItem(obj, category, price) {
  let idx = obj.tabIndex;
  let div = document.getElementById(category);
  let nodes = div.childNodes;
  let itemP = parseFloat(nodes[idx].getAttribute("price")).toFixed(2);

  if (itemP > price) {
    nodes[idx].setAttribute("price", itemP - price);
    let count = nodes[idx].firstElementChild;
    let dollar = count.nextElementSibling;

    let num = parseInt(count.innerHTML.substr(1, count.innerHTML.length)) - 1;
    let amount = parseFloat(dollar.innerHTML.substr(1, dollar.innerHTML.length));
    amount -= price;

    count.innerHTML = "x" + num;
    dollar.innerHTML = "$" + amount.toFixed(2);
  } else {
    div.removeChild(nodes[idx])
    for (i = idx; i < nodes.length; i++) {
      nodes[i].tabIndex = i;
    }

    switch (category) {
      case "drink":
        drinkIdx--;
        break;
      case "breakfast":
        breakfastIdx--;
        break;
      case "lunch":
        lunchIdx--;
        break;
      case "dinner":
        dinnerIdx--;
        break;
      case "sweet":
        sweetIdx--;
        break;
    }
  }
  clearTotal();
};

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}