	const mensaje = document.querySelector('.mensaje');
    const puntuacion = document.querySelector('.puntuacion');
    const botones = document.querySelectorAll('button');
    const puntuacionGanador = [0,0];
        
        //Recorre cada botón y le agrega un addEventListener
        for ( let i = 0 ; i < botones.length ; i++){
            botones[i].addEventListener('click', jugar);
        }

        function jugar(e){
            //setup player's selection
            let seleccionJugador = e.target.innerText;
            //setup a random number to select for computer
            //selects a number between 0 and 1 (1 not-inclusive)
            let seleccionComputadora = Math.random();

            //Si seleccionComputadora es menor que .34, la computadora selecciona piedra
            if (seleccionComputadora < .34){
                seleccionComputadora = 'Piedra';
            } else if (seleccionComputadora <= .67){
                seleccionComputadora = 'Papel';
            } else {
                seleccionComputadora = 'Tijeras';
            }
            
            //setup a function to compare winners and return result
            let resultado = checkWinner(seleccionJugador, seleccionComputadora);

            //output scores to the DOM
            if (resultado === 'Jugador'){
                resultado += ' gana!';
                //update score
                puntuacionGanador[0]++;
            }

            if (resultado === 'Computadora'){
                resultado += ' gana!';
                puntuacionGanador[1]++;
            }

            if (resultado === 'Empate'){
                resultado += '. It\'s a tie!'
            }

            //output score into Score DIV
            puntuacion.innerHTML = 'Jugador: [ ' + puntuacionGanador[0]+ ' ] <br><br> Computadora: [ ' + puntuacionGanador[1] + ' ]';

            //output player and computer's selections
            messenger('Jugador: ' + seleccionJugador + 'Computadora: <strong>' + seleccionComputadora + '</strong><br>' + result);
        }

        function messenger(selectionMessage){
            message.innerHTML = selectionMessage;
        }

        function checkWinner(player, computer){
            if (player === computer){
                return 'Empate';
            }

            if (player === 'Piedra'){
                if(computer === 'Papel'){
                    return 'Computadora';
                } else {
                    return 'Jugador';
                }
            }

            if (player === 'Papel'){
                if (computer === 'Tijeras'){
                    return 'Computadora';
                } else {
                    return 'Jugador';
                }
            }

            if (player === 'Tijeras'){
                if (computer === 'Piedra'){
                    return 'Computadora';
                } else {
                    return 'Jugador';
                }
            }
		}
		

		