window.onload = function() {

    var milliseconds = 00;
    var seconds = 00;
    var minutes = 00;
    var hours = 00;

    var appendMilliseconds = document.getElementById("milliseconds");
    var appendSeconds = document.getElementById("seconds");
    var appendMinutes = document.getElementById("minutes");
    var appendHours = document.getElementById("hours");

    var buttonStart = this.document.getElementById("play");
    var buttonStop = this.document.getElementById("stop");
    var buttonReset = this.document.getElementById("reset");

    var Interval;

    // Function for starting timer

    function startTimer() {
        milliseconds++;

        // Milliseconds Counter

        if (milliseconds < 9) {
            appendMilliseconds.innerHTML = "0" + milliseconds;
            

        }
        if (milliseconds > 9) {
            appendMilliseconds.innerHTML = milliseconds;
        }
        if (milliseconds > 99) {
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            milliseconds = 0;
            appendMilliseconds.innerHTML = "0" + milliseconds;
        }
        if (seconds > 9) {
            appendSeconds.innerHTML = seconds;
        } 

        //Second Counter

        if (seconds > 59) {
            minutes++;
            appendMinutes.innerHTML = "0" + minutes;
            seconds = 0;
            appendSeconds.innerHTML = "0" + seconds;
        }
        if (minutes > 9) {
            appendMinutes.innerHTML = minutes;
        }

        //Minutes Counter
        if (minutes > 59) {
            hours++;
            appendHours.innerHTML = "0" + hours;
            minutes = 0;
            appendminutes.innerHTML = "0" + minutes;
        }
        if (hours > 9) {
            appendHours.innerHTML = hours;
        }
    }
    
    // Button to start timer
    buttonStart.onclick = function() {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
        $("#animateCircle").addClass("addAnimation");
        $("#animateCircle.addAnimation").css("animation-play-state", "running")
    }

    // Button to stop timer
    buttonStop.onclick = function() {
        clearInterval(Interval);
        $("#animateCircle").css("animation-play-state", "paused")

    }

    // Button to reset timer
    buttonReset.onclick = function() {
        clearInterval(Interval);
        milliseconds = "00";
        seconds = "00";
        minutes = "00";
        hours = "00";
        appendMilliseconds.innerHTML = milliseconds;
        appendSeconds.innerHTML = seconds;
        appendMinutes.innerHTML = minutes;
        appendHours.innerHTML = hours;
    }


}