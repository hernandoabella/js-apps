// Variables

var puntaje = 0;
var questionIndex = 0;
var currentTime = document.querySelector("#currentTime");
var timer = document.querySelector("#startTimer");
var seccionPreguntas = document.querySelector("#questionsSection");
var quizContainer = document.querySelector("#quizContainer");
var todasLasPuntuaciones = JSON.parse(localStorage.getItem("allScores")) || [];

// Quiz time remaining

var secondsLeft = 75;

// Interval time

var holdInterval = 0;

// Penalty 10 seconds

var penalty = 10;

// Quiz questions array

var preguntas = [
    {
        titulo: "¿Cómo se crea una función en JavaScript",
        opciones: ["function myFunction()", "callFunction()", "var myFunction", "myFunction()"],
        respuesta: "function myFunction()"
    },
    {
        titulo: "¿Cómo se crea una instrucción IF para ejecutar algún código si 'i' no es igual a 5?",
        opciones: ["if i=! 5 then", "if (i || 5)", "if (i != 5)", "if (i % 5)"],
        respuesta: "if (i != 5)"
    },
    {
        titulo: "¿Cómo encuentras el número con el valor más alto de x - y?",
        opciones: ["Math.ceil(x ,y)", "Math.max(x, y)", "Math.round(x, y)", "Math.highest(x, y)"],
        respuesta: "Math.max(x, y)"
    },
    {
        titulo: "¿Qué evento ocurre cuando el usuario hace clic en un elemento HTML?",
        opciones: ["onmouseclick", "onpush", "onclick", "mousepress"],
        respuesta: "onclick"
    },
    {
        titulo: "¿Cómo comienza un bucle FOR?",
        opciones: ["for (i < 0; i ++ 5; i+-)", "for (i = 0; i % 5; [i])", "for (i = 0; i || 5; i+)", "for (i = 0; i < 5; i++)"],
        respuesta: "for (i = 0; i < 5; i++)"
    },

];

// Check questions array in console log

console.log(preguntas);

// Create ul for quiz questions

var ulEl = document.createElement("ul");
console.log(ulEl);
console.log(timer);
if (timer !== null) {
    timer.addEventListener("click", function () {
        if (holdInterval === 0) {
            holdInterval = setInterval(function () {
                secondsLeft--;
                currentTime.textContent = secondsLeft + " seconds";

                if (secondsLeft <= 0) {
                    clearInterval(holdInterval);
                    quizComplete();
                    currentTime.textContent = "OOOPS! OUT OF TIME!";
                }
            }, 1000);
        }
        render(questionIndex);
    });
}
console.log(questionIndex);

// Renders questions

const render = questionIndex => {

    // Clears existing data 

    seccionPreguntas.innerHTML = "";
    ulEl.innerHTML = "";

    // Loop through questions array

    for (var i = 0; i < preguntas.length; i++) {
        // Appends question title only
        var userQuestion = preguntas[questionIndex].titulo;
        var userChoices = preguntas[questionIndex].opciones;
        seccionPreguntas.textContent = userQuestion;
    }
    // New for each for question

    userChoices.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        seccionPreguntas.appendChild(ulEl);
        ulEl.appendChild(listItem);
        listItem.addEventListener("click", (comparar));
    })
};

// Event to compare options with answer

const comparar = event => {
    var element = event.target;

    if (element.matches("li")) {

        var answerDiv = document.createElement("div");
        answerDiv.setAttribute("id", "answerDiv");

        // Correct condition 

        if (element.textContent == preguntas[questionIndex].respuesta) {
            puntaje++;
            answerDiv.textContent = "¡Correcto! La respuesta es:  " + preguntas[questionIndex].respuesta;
        }
        else {
            // Will deduct 10 seconds off secondsLeft for wrong answers

            secondsLeft = secondsLeft - penalty;
            answerDiv.textContent = "¡Te equivocaste! La respuesta es:  " + preguntas[questionIndex].respuesta;
        }

    }
    // Question Index determines number question user is on 
    // Append page with user information

    questionIndex++;

    if (questionIndex >= preguntas.length) {
        quizComplete();
        answerDiv.textContent = "¡Has terminado!" + " " + "Obtuviste  " + puntaje + "/" + preguntas.length + " ¡Correctas!";
    }
    else {
        render(questionIndex);
    }
    seccionPreguntas.appendChild(answerDiv);

};

// Quiz complete clear questionsSection

const quizComplete = () => {
    seccionPreguntas.innerHTML = "";
    currentTime.innerHTML = "";

    // Create h1, p elements

    var h1El = document.createElement("h1");
    h1El.setAttribute("id", "h1El");
    h1El.textContent = "Quiz Complete!"

    seccionPreguntas.appendChild(h1El);

    var pEl = document.createElement("p");
    pEl.setAttribute("id", "pEl");

    seccionPreguntas.appendChild(pEl);

    // Calculates time remaining and creates score

    if (secondsLeft >= 0) {
        var timeRemaining = secondsLeft;
        var pEl2 = document.createElement("p");
        clearInterval(holdInterval);
        pEl.textContent = "Your final score is: " + timeRemaining;

        seccionPreguntas.appendChild(pEl2);
    }

    // User prompted to enter intials

    var enterInitials = document.createElement("initials");
    enterInitials.setAttribute("id", "enterInitials");
    enterInitials.textContent = "Enter your initials: ";

    seccionPreguntas.appendChild(enterInitials);

    // Enter initials

    var userInput = document.createElement("input");
    userInput.setAttribute("type", "text");
    userInput.setAttribute("id", "initials");
    userInput.textContent = "";

    seccionPreguntas.appendChild(userInput);

    // Submit user information

    var initialsSubmit = document.createElement("button");
    initialsSubmit.setAttribute("class", "btn btn-light");
    initialsSubmit.setAttribute("type", "submit");
    initialsSubmit.setAttribute("id", "submit");
    initialsSubmit.textContent = "Submit";

    seccionPreguntas.appendChild(initialsSubmit);

    // Event listener to capture initials and score in local storage 

    initialsSubmit.addEventListener("click", function (event) {
        event.preventDefault();
        var initials = userInput.value;
        console.log(initials);
        if (!initials) {
            document.querySelector("#submit").textContent = "Enter a valid value!";
            console.log(initialsSubmit);
        }
        else {
            var finalScore = {
                initials: initials,
                puntaje: timeRemaining
            }

            // Clearing HTML at #questionSection 

            document.querySelector("#questionsSection").innerHTML = "";

            // Create High Scores page heading

            var h2El = document.createElement("h2");
            h2El.setAttribute("id", "h2El");
            h2El.textContent = "High Scores!"

            // Append element to page

            seccionPreguntas.appendChild(h2El);

            todasLasPuntuaciones.push(finalScore);
            var newScore = JSON.stringify(todasLasPuntuaciones);
            localStorage.setItem("allScores", newScore);

            // Adds score to final page

            for (let i = 0; i < todasLasPuntuaciones.length; i++) {
                const el = todasLasPuntuaciones[i].initials + " " + todasLasPuntuaciones[i].puntaje;
                var li2 = document.createElement("li");
                li2.textContent = el;
                var ul = document.querySelector("#highScoresUl");
                ul.appendChild(li2);

            }
        }
    });
};
