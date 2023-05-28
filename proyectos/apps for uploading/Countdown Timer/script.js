var minutesInput = document.getElementById("minutesInput");
var secondsInput = document.getElementById("secondsInput");
var startButton = document.getElementById("startButton");
var progressBar = document.getElementById("progressBar");
var colonStyle = document.getElementById("colonStyle");

var progressBarMax;
var changeSeconds = 0;
var changeMinutes = 0;
var stopper;

var setTime = function(){
    clearTimeout(stopper);
    var getMinutes = parseInt(minutesInput.value);
    var getSeconds = parseInt(secondsInput.value);
    /* seconds logic */

    if (getSeconds <= 9) {
        var originalValue = secondsInput.value;
        secondsInput.value = ("0" + originalValue).slice(-2);
    } else if (getSeconds >= 60) {
        secondsInput.value = ("0" + 0).slice(-2);
        changeSeconds = 0;
    } else if (getSeconds >= 10) {
        secondsInput.value = getSeconds;
    } else if (secondsInput.value == "") {
        secondsInput.value = ("0" + 0).slice(-2);
    }
    /* minutes logic */
    if (minutesInput.value == "") {
        minutesInput.value = 0;
    } 
    changeMinutes = parseInt(minutesInput.value);
    minutesInput.value = changeMinutes;
    changeMinutes = changeMinutes * 60;
    changeSeconds = parseInt(secondsInput.value);
    var totalTime = changeSeconds + changeMinutes;
    progressBar.value = 0;
    progressBar.setAttribute("max", totalTime );
    progressBarMax = totalTime;
}

minutesInput.addEventListener("keyup", setTime);
minutesInput.addEventListener("click", setTime);
secondsInput.addEventListener("keyup", setTime);
secondsInput.addEventListener("click", setTime);


/** main countdown **/
var progressCountdown = function()
{
    secondsInput.classList.add("form_active");
minutesInput.classList.add("form_active");
colonStyle.classList.add("form_active");
    
    minutesInput.disabled = false;
    secondsInput.disabled = false;
    stopper = setTimeout(progressCountdown, 1000);
    if (secondsInput.value == 0 && minutesInput.value > 0){
        secondsInput.value = 60;
        minutesInput.value -= 1;
    }
    
    if (secondsInput.value > 0){
        secondsInput.value -= 1;		
        progressBar.value += 1;
    }

    if (secondsInput.value < 10){
        var concatSeconds = secondsInput.value;
        secondsInput.value = ("0" + concatSeconds).slice(-2);
        
    }
    if (progressBar.value == progressBar.max) {
        /* remove styling */
        secondsInput.classList.remove("form_active");
minutesInput.classList.remove("form_active");
colonStyle.classList.remove("form_active");
        /* sound */
        var soundClick = document.createElement("audio");
    soundClick.src = 'http://soundbible.com/mp3/Robot_blip-Marianne_Gagnon-120342607.mp3';
    soundClick.autoplay = "true";	document.body.appendChild(soundClick);	
        /* sound */
        clearTimeout(stopper);
        minutesInput.removeAttribute("disabled");
        secondsInput.removeAttribute("disabled");
    }
}

var progressReset = function(){
    progressBar.value = 0;
    secondsInput.value = ("0" + 0).slice(-2);
    minutesInput.value = 0;
    progressBar.setAttribute("max", 0);
    secondsInput.classList.remove("form_active");
minutesInput.classList.remove("form_active");
colonStyle.classList.remove("form_active");
    minutesInput.removeAttribute("disabled");
    secondsInput.removeAttribute("disabled");	
    clearTimeout(stopper);
}

var enterPressed = function(event){
    var key = event.which || event.keyCode;
    if (key === 13) { // 13 is enter
        // code for enter
        progressCountdown();
        secondsInput.setAttribute("disabled", true);
        minutesInput.setAttribute("disabled", true);
    }
}
        
startButton.addEventListener("click", progressCountdown);
resetButton.addEventListener("click", progressReset);
minutesInput.addEventListener("keypress", enterPressed);
secondsInput.addEventListener("keypress", enterPressed);