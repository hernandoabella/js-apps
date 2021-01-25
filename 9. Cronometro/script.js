window.onload = function(){

    var segundos = 00;
    var decenas = 00;
    var appendTens = document.getElementById("tens");
    var appendSeconds = document.getElementById("seconds");
    var botonEmpezar = this.document.getElementById("button-start");
    var botonDetener = this.document.getElementById("button-stop");
    var botonReiniciar = this.document.getElementById("button-reset");

    var Interval;
               
    function iniciarTemporizador(){
		decenas++;
		
        if(decenas < 9){
            appendTens.innerHTML = "0" + decenas;
		}
		
        if(decenas > 9){
            appendTens.innerHTML = decenas;
		}
		
        if(decenas > 99){
            segundos++;
            console.log(segundos);
            appendSeconds.innerHTML = "0" + segundos;
            decenas = 0;
            appendTens.innerHTML = "0" + decenas;
		}
		
        if(segundos > 9){
            appendSeconds.innerHTML = segundos;
        }
	}
	
    /*Button para empezar*/
    botonEmpezar.onclick = function(){
        clearInterval(Interval);
        Interval = setInterval(iniciarTemporizador, 10);
    }

    /*Boton para detener*/
    botonDetener.onclick = function(){
        clearInterval(Interval);
    }

    /*Boton para reiniciar*/
    botonReiniciar.onclick = function(){
        clearInterval(Interval);
        decenas = "00";
        segundos = "00";
        appendTens.innerHTML = decenas;
        appendSeconds.innerHTML = segundos;
    }
           
}

