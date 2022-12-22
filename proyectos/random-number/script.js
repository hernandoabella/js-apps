var sound = new Audio();
sound.src = "https://www.codingcommanders.com/javascript/random-number-generator/chime.mp3";

function randNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generate () {
  let min = document.getElementById('min_value').value;
  let max = document.getElementById('max_value').value;
  let rand = randNum(min,max);
  document.getElementById("output").innerHTML = rand;
}

document.getElementById("myBut").addEventListener("click", generate);