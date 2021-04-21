// Variables

let puntaje = 0;
let indicePregunta = 0;
let tiempoActual = document.querySelector("#tiempoActual");
let timer = document.querySelector("#startTimer");
let seccionPreguntas = document.querySelector("#seccionPreguntas");
let quizContainer = document.querySelector("#quizContainer");
let todosLosPuntajes = JSON.parse(localStorage.getItem("todosLosPuntajes")) || [];

// Tiempo restante del examen

let segundosRestantes = 75;

// Tiempo de intervalo

let mantenerIntervalo = 0;

// Penalización de 10 segundos

let penalizacion = 10;

// Arreglo de preguntas

const preguntas = [
    {
        titulo: "¿Cómo se crea una función en JavaScript?",
        opciones: ["function myFunction()", "callFunction()", "var myFunction", "myFunction()"],
        respuesta: "function myFunction()"
    },
    {
        titulo: "¿Cómo se crea una declaración if para ejecutar un código si 'i' no es igual a 5?",
        opciones: ["if i=! 5 then", "if (i || 5)", "if (i != 5)", "if (i % 5)"],
        respuesta: "if (i != 5)"
    },
    {
        titulo: "¿Cómo encuentras el número con el valor más alto de x e y",
        opciones: ["Math.ceil(x ,y)", "Math.max(x, y)", "Math.round(x, y)", "Math.highest(x, y)"],
        respuesta: "Math.max(x, y)"
    },
    {
        titulo: "¿Qué evento ocurre cuando haces clic sobre un elemento HTML?",
        opciones: ["onmouseclick", "onpush", "onclick", "mousepress"],
        respuesta: "onclick"
    },
    {
        titulo: "¿Cómo empieza un bucle for?",
        opciones: ["for (i < 0; i ++ 5; i+-)", "for (i = 0; i % 5; [i])", "for (i = 0; i || 5; i+)", "for (i = 0; i < 5; i++)"],
        respuesta: "for (i = 0; i < 5; i++)"
    },

];

// Comprueba el arreglo preguntas en la consola

console.log(preguntas);

// Crea un elemento ul para el arreglo preguntas

let elementoUl = document.createElement("ul");
console.log(elementoUl);
console.log(timer);
if (timer !== null) {
    timer.addEventListener("click", function () {
        if (mantenerIntervalo === 0) {
            mantenerIntervalo = setInterval(function () {
                segundosRestantes--;
                tiempoActual.textContent = segundosRestantes + " seconds";

                if (segundosRestantes <= 0) {
                    clearInterval(mantenerIntervalo);
                    examenCompletado();
                    tiempoActual.textContent = "OOOPS! Fuera de tiempo!";
                }
            }, 1000);
        }
        renderizar(indicePregunta);
    });
}
console.log(indicePregunta);

// Renderiza las preguntas

const renderizar = indicePregunta => {

    // Limpia los datos existentes

    seccionPreguntas.innerHTML = "";
    elementoUl.innerHTML = "";

    // Recorre el arreglo preguntas

    for (var i = 0; i < preguntas.length; i++) {
        // Agrega solo el título de la pregunta
        var preguntaUsuario = preguntas[indicePregunta].titulo;
        var eleccionesUsuario = preguntas[indicePregunta].opciones;
        seccionPreguntas.textContent = preguntaUsuario;
    }
    // Nuevo forEach para las preguntas

    eleccionesUsuario.forEach(function (nuevoElemento) {
        var lista = document.createElement("li");
        lista.textContent = nuevoElemento;
        seccionPreguntas.appendChild(elementoUl);
        elementoUl.appendChild(lista);
        lista.addEventListener("click", (comparar));
    })
};

// Evento para comparar opciones con respuesta

const comparar = evento => {
    let elemento = evento.target;

    if (elemento.matches("li")) {

        let divRespuesta = document.createElement("div");
        divRespuesta.setAttribute("id", "divRespuesta");

        // Condición correcta
        
        if (elemento.textContent == preguntas[indicePregunta].respuesta) {
            puntaje++;
            divRespuesta.textContent = "¡Correcto! La respuesta es:  " + preguntas[indicePregunta].respuesta;
        }else {

            // Reducirá 10 segundos de los segundos que quedan por respuestas incorrectas

            segundosRestantes = segundosRestantes - penalizacion;
            divRespuesta.textContent = "¡Te equivocaste! la respuesta es:  " + preguntas[indicePregunta].respuesta;
        }

    }
    // El índice de preguntas determina el número de preguntas en las que está el usuario
    // Agrega la página con información del usuario

    indicePregunta++;

    if (indicePregunta >= preguntas.length) {
        examenCompletado();
        divRespuesta.textContent = "¡Has finalizado!" + " " + "Obtuviste  " + puntaje + "/" + preguntas.length + "¡Correctas!";
    }else {
        renderizar(indicePregunta);
    }
    seccionPreguntas.appendChild(divRespuesta);
};

// examenCompleto() limpia seccionPreguntas

const examenCompletado = () => {
    seccionPreguntas.innerHTML = "";
    tiempoActual.innerHTML = "";

    // Crea elementos h1, p

    var elementoH1 = document.createElement("h1");
    elementoH1.setAttribute("id", "elementoH1");
    elementoH1.textContent = "¡Examen completado!"

    seccionPreguntas.appendChild(elementoH1);

    var elementoP = document.createElement("p");
    elementoP.setAttribute("id", "elementoP");

    seccionPreguntas.appendChild(elementoP);

    // Calcula el tiempo restante y crea el puntaje

    if (segundosRestantes >= 0) {
        var tiempoRestante = segundosRestantes;
        var elementoP2 = document.createElement("p");
        clearInterval(mantenerIntervalo);
        elementoP2.textContent = "Tu puntaje final es: " + tiempoRestante;
        seccionPreguntas.appendChild(elementoP2);
    }

    // Se le solicita al usuario que ingrese sus iniciales

    var ingresarIniciales = document.createElement("iniciales");
    ingresarIniciales.setAttribute("id", "ingresarIniciales");
    ingresarIniciales.textContent = "Ingresa tus iniciales: ";

    seccionPreguntas.appendChild(ingresarIniciales);

    // Ingresa las iniciales

    var entradaUsuario = document.createElement("input");
    entradaUsuario.setAttribute("type", "text");
    entradaUsuario.setAttribute("id", "iniciales");
    entradaUsuario.textContent = "";

    seccionPreguntas.appendChild(entradaUsuario);

    // Envía la información del usuario

    var enviarIniciales = document.createElement("button");
    enviarIniciales.setAttribute("class", "btn btn-light");
    enviarIniciales.setAttribute("type", "submit");
    enviarIniciales.setAttribute("id", "submit");
    enviarIniciales.textContent = "Enviar";

    seccionPreguntas.appendChild(enviarIniciales);

    // Evento para capturar las iniciales y la puntuación en localStorage

    enviarIniciales.addEventListener("click", function (evento) {
        evento.preventDefault();
        var iniciales = entradaUsuario.value;
        console.log(iniciales);
        if (!iniciales) {
            document.querySelector("#submit").textContent = "¡Ingrese un valor válido!";
            console.log(enviarIniciales);
        }else {
            var puntajeFinal = {
                iniciales: iniciales,
                puntaje: tiempoRestante
            }

            // Limpiando el HTML de #seccionPreguntas

            document.querySelector("#seccionPreguntas").innerHTML = "";

            // Crea encabezado de puntuaciones altas

            var elementoH2 = document.createElement("h2");
            elementoH2.setAttribute("id", "elementoH2");
            elementoH2.textContent = "¡Puntuaciones altas!"

            // Añade el elemento a la página

            seccionPreguntas.appendChild(elementoH2);
            todosLosPuntajes.push(puntajeFinal);
            var nuevaPuntuacion = JSON.stringify(todosLosPuntajes);
            localStorage.setItem("todosLosPuntajes", nuevaPuntuacion);

            // Agrega la puntuación final

            for (let i = 0; i < todosLosPuntajes.length; i++) {
                const el = todosLosPuntajes[i].iniciales + " " + todosLosPuntajes[i].puntaje;
                var listaDos = document.createElement("li");
                listaDos.textContent = el;
                var ul = document.querySelector("#ulPuntajesAltos");
                ul.appendChild(listaDos);
                ul.style.display = "block";
            }
        }
    });
};
