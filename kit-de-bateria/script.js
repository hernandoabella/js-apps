var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "q":
      var tom1 = new Audio("sounds/sound1.mp3");
      tom1.play();
      break;

    case "w":
      var tom1 = new Audio("sounds/sound2.mp3");
      
      tom1.play();
      break;

    case "e":
      var tom1 = new Audio("sounds/sound3.mp3");
      tom1.play();
      break;  

    case "r":
      var tom1 = new Audio("sounds/sound4.mp3");
      tom1.play();
      break;  

    case "t":
      var tom1 = new Audio("sounds/sound5.mp3");
      tom1.play();
      break;
    
    case "y":
      var tom1 = new Audio("sounds/sound6.mp3");
      tom1.play();
      break;
    
    case "u":
      var tom1 = new Audio("sounds/sound7.mp3");
      tom1.play();
      break;
      
    case "i":
      var tom1 = new Audio("sounds/sound8.mp3");
      tom1.play();
      break;  

    case "a":
      var tom2 = new Audio("sounds/sound9.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/sound10.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/sound11.mp3');
      tom4.play();
      break;

    case "f":
      var tom1 = new Audio("sounds/sound12.mp3");
      tom1.play();
      break;  

    case "g":
      var snare = new Audio('sounds/sound13.mp3');
      snare.play();
      break;

    case "h":
      var crash = new Audio('sounds/sound14.mp3');
      crash.play();
      break;

    case "j":
      var kick = new Audio('sounds/sound15.mp3');
      kick.play();
      break;

    case "k":
      var kick = new Audio('sounds/sound16.mp3');
      kick.play();
      break      

    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
