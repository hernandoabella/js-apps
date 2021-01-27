var numeroCuadros = 6;
var colores = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#color-display");
var messageDisplay = document.querySelector("#message");
var love = document.querySelector(".love");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var easyButton = document.querySelector(".mode");

iniciar();

function iniciar() {
	colorDisplay.textContent = pickedColor;
	setupSquares();
	setupMode();
	reset();
}

resetButton.addEventListener("click", function() {
	reset();
});

function setupSquares() {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colores[i];
		squares[i].addEventListener("click", function() {
			var clickedColor = this.style.backgroundColor;
			if(clickedColor === pickedColor) {
				messageDisplay.textContent = "¡Correcto!";
				resetButton.textContent = "Juego Nuevo";
				cambiarColores(pickedColor);
			}
			else {
                this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "¡Inténtalo nuevamente!";
			}
		});
	}
}

function setupMode() {
	for(var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function() {
			for (var i = 0; i < modeButtons.length; i++) {
				modeButtons[i].classList.remove("selected");
			}
			this.classList.add("selected");
			if (this.textContent === "fácil") {
				numeroCuadros = 3;
			}
			else {
				numeroCuadros = 6;
			}
			reset();
		});
	}
}

function reset() {
	colores = genRandomColors(numeroCuadros);
	pickedColor = elegirColor();
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "Nuevos Colores";
	messageDisplay.textContent = "";
	for (var i = 0; i < squares.length; i++) {
		if(colores[i]) { 
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colores[i];
		}
		else {
			squares[i].style.display = "none";
		}
	}
}

function cambiarColores(color) {
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
		love.style.backgroundColor = color;
	}
}

function elegirColor() {
	var random = Math.floor(Math.random() * colores.length);
	return colores[random];
}

function genRandomColors(num) {
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push(crearColor());
	}
	return arr;
}

function crearColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")"; 
}




