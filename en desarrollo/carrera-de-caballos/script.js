/* Cree un objeto Javascript para un caballo con 3 parámetros: ID HTML, posición x e y */
function Horse(id, x, y){
	this.element = document.getElementById(id); /* Elemento HTML del caballo */
	this.speed = Math.random() * 10 + 10; /* Inicie una velocidad aleatoria para cada caballo, a mayor velocidad, el caballo más rápido. El valor está entre 10 y 20 */
	this.originX = x; /* Posición X original */
	this.originY = y; /* Posición Y original */
	this.x = x; /* X actual */
	this.y = y; /* Y actual */
	this.number = parseInt(id.replace(/[\D]/g, '')); /* Número de caballo, el número será 1 o 2 o 3 o 4 */
	this.lap = 0; // Vuelta actual del caballo

	this.moveRight = function(){
		let horse = this; /* Asignar caballo a este objeto */

		/* Use setTimeout para retrasar el movimiento del caballo */
		setTimeout(function(){
			// Mueve el caballo a la derecha 1vw
			horse.x ++;
			horse.element.style.left = horse.x +'vw';

			// Compruebe si pasa por la línea de salida, si el caballo corre un número suficiente de vueltas y ha pasado la línea de salida, deténgase.
			if (horse.lap == num_lap && horse.x > horse.originX + 6){
				horse.arrive();
			}else{
				// Tomar la decisión de moverse hacia abajo o no
				// El ancho de Down Road es 10wh, luego la distancia de cada caballo es 2.5vw (4 caballos). La posición correcta de la carretera es 82.5vw.
				// Continúe moviéndose a la derecha si no llega al punto para girar
				if (horse.x < 82.5 - horse.number*2.5){
					horse.moveRight();
				}else{
					// Cambiar la clase HTML de caballo a runDown
					horse.element.className = 'horse runDown';
					// Cambie la velocidad, será un valor aleatorio de 10 a 20
					horse.speed = Math.random() * 10 + 10;
					horse.moveDown();
				}
			}

		}, 1000/this.speed);
		/* 1000 / this.speed es el tiempo de espera */
	}

	/* Haz lo mismo por moveDown, moveLeft, moveUp */
	this.moveDown = function(){
		let horse = this;
		setTimeout(function(){
			horse.y ++;
			horse.element.style.top = horse.y + 'vh';

			if (horse.y < horse.originY + 65){
				horse.moveDown();
			}else{
				horse.element.className = 'horse runLeft';
				horse.speed = Math.random() * 10 + 10;
				horse.moveLeft();
			}

		}, 1000/this.speed)
	}

	this.moveLeft = function(){
		let horse = this;
		setTimeout(function(){
			horse.x --;
			horse.element.style.left = horse.x +'vw';
			
			if (horse.x > 12.5 - horse.number*2.5){
				horse.moveLeft();
			}else{
				horse.element.className = 'horse runUp';
				horse.speed = Math.random() * 10 + 10;
				horse.moveUp();
			}

		}, 1000/this.speed)
	}

	this.moveUp = function(){
		let horse = this;
		
		setTimeout(function(){
			horse.y --;
			horse.element.style.top = horse.y + 'vh';

			if (horse.y > horse.originY){
				horse.speed = Math.random() * 10 + 10;
				horse.moveUp();
			}else{
				horse.element.className = 'horse runRight';
				// Casi terminar la vuelta
				horse.lap ++;
				horse.moveRight();
			}

		}, 1000/this.speed)
	}

	/* Activa el caballo corriendo */
	this.run = function(){
		this.element.className = 'horse runRight';
		this.moveRight();
	}

	this.arrive = function(){
		// Detén al caballo corriendo por cambiar de clase a standRight
		this.element.className = 'horse standRight';
		this.lap = 0; // Restablecer la vuelta

		/* Mostrar el resultado */
		let tds = document.querySelectorAll('#results .result'); // Obtener todas las celdas de la tabla para mostrar el resultado
		// results.length es la posición de llegada actual
		tds[results.length].className = 'result horse'+this.number; // La clase de resultado se ve así: resultado caballo1 ...

		// Empuja el número de caballo al arreglo resultados, de acuerdo con la matriz de resultados, conocemos el orden de los resultados de la carrera
		results.push(this.number);

		// Ganar caballo
		if (results.length == 1){
			// Si el caballo ganador es el caballo de la apuesta, agregue el fondo
			if (this.number == bethorse){
				funds += amount;
			}else{
				funds -= amount;
			}
			document.getElementById('funds').innerText = funds;
		}else if (results.length == 4){
			// Llegaron todos los caballos, habilite de nuevo el botón de inicio
			document.getElementById('start').disabled = false;
		}
	}
}

let num_lap = 1, results = [], funds = 100, bethorse, amount;

// Inicie la función cuando se cargue el documento
document.addEventListener("DOMContentLoaded", function(event) {

	let horse1 = new Horse('horse1', 20, 4);
	let horse2 = new Horse('horse2', 20, 8);
	let horse3 = new Horse('horse3', 20, 12);
	let horse4 = new Horse('horse4', 20, 16);

	// Event listener para el botón empezar
	document.getElementById('start').onclick = function(){
		amount = parseInt(document.getElementById('amount').value);
		num_lap = parseInt(document.getElementById('num_lap').value);
		bethorse = parseInt(document.getElementById('bethorse').value);

		if (funds < amount){
			alert('Not enough funds.');
		}else if (num_lap <= 0){
			alert('Number of lap must be greater than 1.');
		}else{
			/*Empezó el juego */
			this.disabled = true; /* Desactivar el botón de inicio */
			let tds = document.querySelectorAll('#results .result'); // Obtenga todas las celdas de la tabla de resultados.
			for (let i = 0; i < tds.length; i++) {
				tds[i].className = 'result'; // Reinicia el resultado.
			}

			document.getElementById('funds').innerText = funds;
			results = []; // El arreglo resultados sirve para guardar los números de los caballos cuando finaliza la carrera.
			horse1.run();
			horse2.run();
			horse3.run();
			horse4.run();
		}
	}
});