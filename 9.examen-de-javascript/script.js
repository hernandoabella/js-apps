// Variables

let puntuacion = 0;
let indicePregunta = 0;
let tiempoActual = document.querySelector("#currentTime");
let temporizador = document.querySelector("#startTimer");
let seccionDePreguntas = document.querySelector("#seccionDePreguntas");
let quizContainer = document.querySelector("#quizContainer");
let todasLasPuntuaciones = JSON.parse(localStorage.getItem("todasLasPuntuaciones")) || [];

// Tiempo restante del cuestionario

let segundosRestantes = 75;

// Tiempo de intervalo

let mantenerIntervalo = 0;

// Penalty 10 seconds

let penalty = 10;

// Quiz questions array

let questions;

questions = [
    {
        title: "How do you create a function in JavaScript?",
        options: ["function myFunction()", "callFunction()", "var myFunction", "myFunction()"],
        answer: "function myFunction()"
    },
    {
        title: "How do you create an IF statement for executing some code if 'i' is NOT equal to 5?",
        options: ["if i=! 5 then", "if (i || 5)", "if (i != 5)", "if (i % 5)"],
        answer: "if (i != 5)"
    },
    {
        title: "How do you find the number with the highest value of x and y?",
        options: ["Math.ceil(x ,y)", "Math.max(x, y)", "Math.round(x, y)", "Math.highest(x, y)"],
        answer: "Math.max(x, y)"
    },
    {
        title: "Which event occurs when the user clicks on an HTML element?",
        options: ["onmouseclick", "onpush", "onclick", "mousepress"],
        answer: "onclick"
    },
    {
        title: "How does a FOR loop start?",
        options: ["for (i < 0; i ++ 5; i+-)", "for (i = 0; i % 5; [i])", "for (i = 0; i || 5; i+)", "for (i = 0; i < 5; i++)"],
        answer: "for (i = 0; i < 5; i++)"
    },

];

// Check questions array in console log

console.log(questions);

// Create ul for quiz questions

var ulEl = document.createElement("ul");
console.log(ulEl);
console.log(temporizador);
if (temporizador !== null) {
    temporizador.addEventListener("click", function () {
        if (mantenerIntervalo === 0) {
            mantenerIntervalo = setInterval(function () {
                segundosRestantes--;
                tiempoActual.textContent = segundosRestantes + " seconds";

                if (segundosRestantes <= 0) {
                    clearInterval(mantenerIntervalo);
                    cuestionarioCompleto();
                    tiempoActual.textContent = "OOOPS! OUT OF TIME!";
                }
            }, 1000);
        }
        renderizar(indicePregunta);
    });
}
console.log(indicePregunta);

// Renders questions

function renderizar(indicePregunta) {

    // Clears existing data 

    seccionDePreguntas.innerHTML = "";
    ulEl.innerHTML = "";

    // Loop through questions array

    for (var i = 0; i < questions.length; i++) {
        // Appends question title only
        var userQuestion = questions[indicePregunta].title;
        var userChoices = questions[indicePregunta].options;
        seccionDePreguntas.textContent = userQuestion;
    }
    // New for each for question

    userChoices.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        seccionDePreguntas.appendChild(ulEl);
        ulEl.appendChild(listItem);
        listItem.addEventListener("click", (compare));
    })
}
// Event to compare options with answer

function compare(e) {
    var elemento = e.target;

    if (elemento.matches("li")) {

        var divRespuesta = document.createElement("div");
        divRespuesta.setAttribute("id", "divRespuesta");

        // Correct condition 

        if (elemento.textContent == questions[indicePregunta].answer) {
            puntuacion++;
            divRespuesta.textContent = "Correct! The answer is:  " + questions[indicePregunta].answer;
        }
        else {

            // Will deduct 10 seconds off secondsLeft for wrong answers

            segundosRestantes = segundosRestantes - penalty;
            divRespuesta.textContent = "Wrong! The correct answer is:  " + questions[indicePregunta].answer;
        }

    }
    // Question Index determines number question user is on 
    // Append page with user information

    indicePregunta++;

    if (indicePregunta >= questions.length) {
        cuestionarioCompleto();
        divRespuesta.textContent = "Finished!" + " " + "You got  " + puntuacion + "/" + questions.length + " Correct!";
    }
    else {
        renderizar(indicePregunta);
    }
    seccionDePreguntas.appendChild(divRespuesta);

}
// Quiz complete clear questionsSection

function cuestionarioCompleto() {
    seccionDePreguntas.innerHTML = "";
    tiempoActual.innerHTML = "";

    // Create h1, p elements

    var h1El = document.createElement("h1");
    h1El.setAttribute("id", "h1El");
    h1El.textContent = "Quiz Complete!"

    seccionDePreguntas.appendChild(h1El);

    var pEl = document.createElement("p");
    pEl.setAttribute("id", "pEl");

    seccionDePreguntas.appendChild(pEl);

    // Calculates time remaining and creates score

    if (segundosRestantes >= 0) {
        var tiempoRestante = segundosRestantes;
        var pEl2 = document.createElement("p");
        clearInterval(mantenerIntervalo);
        pEl.textContent = "Tu puntuación final es: " + tiempoRestante;

        seccionDePreguntas.appendChild(pEl2);
    }

    // User prompted to enter intials

    var ingreseIniciales = document.createElement("iniciales");
    ingreseIniciales.setAttribute("id", "ingreseIniciales");
    ingreseIniciales.textContent = "Enter your initials: ";

    seccionDePreguntas.appendChild(ingreseIniciales);

    // Enter initials

    var entradaUsuario = document.createElement("input");
    entradaUsuario.setAttribute("type", "text");
    entradaUsuario.setAttribute("id", "iniciales");
    entradaUsuario.textContent = "";

    seccionDePreguntas.appendChild(entradaUsuario);

    // Submit user information

    var ingresarIniciales = document.createElement("button");
    ingresarIniciales.setAttribute("class", "btn btn-light");
    ingresarIniciales.setAttribute("type", "submit");
    ingresarIniciales.setAttribute("id", "submit");
    ingresarIniciales.textContent = "Submit";

    seccionDePreguntas.appendChild(ingresarIniciales);

    // Event listener to capture initials and score in local storage 

    ingresarIniciales.addEventListener("click", function (e) {
        e.preventDefault();
        var iniciales = entradaUsuario.value;
        console.log(iniciales);
        if (!iniciales) {
            document.querySelector("#submit").textContent = "¡Ingresa un valor válido!";
            console.log(ingresarIniciales);
        }
        else {
            var puntuacionFinal = {
                iniciales: iniciales,
                puntuacion: tiempoRestante
            }

            // Clearing HTML at #questionSection 

            document.querySelector("#seccionDePreguntas").innerHTML = "";

            // Create High Scores page heading

            var elementoH2 = document.createElement("h2");
            elementoH2.setAttribute("id", "elementoH2");
            elementoH2.textContent = "High Scores!"

            // Append element to page

            seccionDePreguntas.appendChild(elementoH2);

            todasLasPuntuaciones.push(puntuacionFinal);
            var newScore = JSON.stringify(todasLasPuntuaciones);
            localStorage.setItem("todasLasPuntuaciones", newScore);

            // Adds score to final page

            for (let i = 0; i < todasLasPuntuaciones.length; i++) {
                const el = todasLasPuntuaciones[i].iniciales + " " + todasLasPuntuaciones[i].score;
                var li2 = document.createElement("li");
                li2.textContent = el;
                var ul = document.querySelector("#highScoresUl");
                ul.appendChild(li2);

            }

        }

    });
}
