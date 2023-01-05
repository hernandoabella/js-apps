function ding() {
    var sound = new  Audio("https://www.soundjay.com/misc/sounds/small-bell-ring-01a.mp3");  
    sound.play();
}


document.getElementsByTagName("button")[0].addEventListener("click", ding);