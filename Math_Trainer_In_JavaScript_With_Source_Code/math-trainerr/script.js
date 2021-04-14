// Globals
var tempResult = 1.01;

function doMath(a, b, c) {
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

function submitAnswer(result) {
  document.querySelector("#mathForm").addEventListener("submit", function(e) {
    e.preventDefault();
    var userAnswer = document.querySelector("#answerInput").value;
    var bool = (result == userAnswer) ? true : false;

    if (bool === true) {
      // Set color to green for success
      document.body.style.backgroundColor = "#34a853";
      setTimeout(function() {
        document.body.style.backgroundColor = "#333";
      }, 1000);
      // Clear input field
      document.querySelector("#answerInput").value = "";
      // Ask a new question
      randomCreator();
    } else {
      // Set color to red for failure
      document.body.style.backgroundColor = "#dc3545";
      setTimeout(function() {
        document.body.style.backgroundColor = "#fff";
      }, 1000);
    }
  });
}

function randomCreator() {
  // Remove the answer if a hint was used
  if (document.querySelector(".correctAnswer")) {
    document.querySelector(".correctAnswer").remove();
  }

  // Set up the random numbers and operator
  var operators = ["+", "-", "*", "/"];
  var randomIntOne = parseInt((Math.random() * 100), 10);
  var randomIntTwo = parseInt((Math.random() * 100), 10);
  var randomOperator = operators[Math.floor(Math.random() * operators.length)];

  // Create the question text and set it in the document
  var el = document.querySelector(".questionText");
  el.innerHTML = ("What is ").concat(randomIntOne, " ", randomOperator, " ", randomIntTwo, "?");

  // Do the math and round floats to two decimals
  var preliminaryResult = doMath(randomOperator, randomIntOne, randomIntTwo);
  var isFloat = (!Number.isInteger(preliminaryResult)) ? true : false;
  var result = (isFloat === true) ? preliminaryResult.toFixed(2) : preliminaryResult;
  tempResult = result;

  // Set event listener for the form based on browser type
  var userAnswerInput = document.querySelector("#answerInput");
  if (userAnswerInput.addEventListener) {
    userAnswerInput.addEventListener("submit", submitAnswer(result), false);
  } else if (userAnswerInput.attachEvent) {
    userAnswerInput.attachEvent("onsubmit", submitAnswer(result));
  }

  return result;
}

function answerHelp() {
  // Make sure the answer isn't already showing
  if (!document.querySelector(".correctAnswer")) {
    // Show the answer
    document.querySelector(".mathQuestion").innerHTML += ("<p class='text-center correctAnswer m-0 mb-3'>The Answer is " + tempResult + "</p>");
  }
}
