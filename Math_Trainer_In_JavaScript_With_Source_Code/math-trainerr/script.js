// Globales
var resultadoTemporal = 1.01;

function hacerMatematicas(a, b, c) {
  switch (a) {
    case "+":
      return b + c;
    case "-":
      return b - c;
    case "*":
      return b * c;
    case "/":
      return b / c;
  }
}

function submitAnswer(resultado) {
  document.querySelector("#formularioMatematico").addEventListener("submit", function(e) {
    e.preventDefault();
    var respuestaUsuario = document.querySelector("#answerInput").value;
    var booleano = (resultado == respuestaUsuario) ? true : false;

    if (booleano === true) {
      // Set color to green for success
      document.body.style.backgroundColor = "#34a853";
      setTimeout(function() {
        document.body.style.backgroundColor = "#333";
      }, 1000);
      // Clear input field
      document.querySelector("#answerInput").value = "";
      // Ask a new question
      creadorAleatorio();
    } else {
      // Set color to red for failure
      document.body.style.backgroundColor = "#dc3545";
      setTimeout(function() {
        document.body.style.backgroundColor = "#fff";
      }, 1000);
    }
  });
}

function creadorAleatorio() {
  // Remove the answer if a hint was used
  if (document.querySelector(".correctAnswer")) {
    document.querySelector(".correctAnswer").remove();
  }

  // Set up the random numbers and operator
  var operadores = ["+", "-", "*", "/"];
  var enteroAleatorioUno = parseInt((Math.random() * 100), 10);
  var enteroAleatorioDos = parseInt((Math.random() * 100), 10);
  var operadorAleatorio = operadores[Math.floor(Math.random() * operadores.length)];

  // Create the question text and set it in the document
  var elemento = document.querySelector(".questionText");
  elemento.innerHTML = ("¿Cuánto es ").concat(enteroAleatorioUno, " ", operadorAleatorio, " ", enteroAleatorioDos, "?");

  // Do the math and round floats to two decimals
  var resultadoPreliminar = hacerMatematicas(operadorAleatorio, enteroAleatorioUno, enteroAleatorioDos);
  var isFloat = (!Number.isInteger(resultadoPreliminar)) ? true : false;
  var resultado = (isFloat === true) ? resultadoPreliminar.toFixed(2) : resultadoPreliminar;
  resultadoTemporal = resultado;

  // Set event listener for the form based on browser type
  var respuestaEntradaUsuario = document.querySelector("#answerInput");
  if (respuestaEntradaUsuario.addEventListener) {
    respuestaEntradaUsuario.addEventListener("submit", submitAnswer(resultado), false);
  } else if (respuestaEntradaUsuario.attachEvent) {
    respuestaEntradaUsuario.attachEvent("onsubmit", submitAnswer(resultado));
  }

  return resultado;
}

function respuestaAyuda() {
  // Make sure the answer isn't already showing
  if (!document.querySelector(".correctAnswer")) {
    // Show the answer
    document.querySelector(".mathQuestion").innerHTML += ("<p class='correctAnswer'>La respuesta correcta es: " + "<b>" + resultadoTemporal + "</b>" + "</p>");
  }
}
