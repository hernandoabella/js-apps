'use strict';
// Define variables for range sliders
// Weight variables
var weightSlider = document.getElementById("myWeight");
var weightOutput = document.getElementById("inputWeight");
// Height variables
var heightSlider = document.getElementById("myHeight");
var heightOutput = document.getElementById("inputHeight");
// Display slider value
weightOutput.innerHTML = weightSlider.value;
heightOutput.innerHTML = heightSlider.value;
// Update sliders in real time while dragging it
weightSlider.oninput = function () {
  weightOutput.innerHTML = this.value;
}
heightSlider.oninput = function () {
  heightOutput.innerHTML = this.value;
}
// Change weight-slider value on weight-number input
function showValWeight(newVal) {
  weightSlider.value=newVal;
};
// Change height-slider value on height-number input
function showValHeight(newVal) {
  heightSlider.value=newVal;
};
// *** Change number input when dragging slider ***
// Add 2 eventListeners for weight and input sliders
weightSlider.addEventListener("input", updateValueWeight);
heightSlider.addEventListener("input", updateValueHeight);
function updateValueWeight(e) {
  weightOutput.value = e.srcElement.value;
}
function updateValueHeight(e) {
  heightOutput.value = e.srcElement.value;
}
// Calculate BMI
function calculateBmi() {
  var weight = document.bmiForm.realweight.value;
  var height = (document.bmiForm.realheight.value)/100;
  var realbmi = (weight)/Math.pow(height, 2);
  var realbmiOutput = document.getElementById("yourbmi");
  var messageOutput = document.getElementById("evaluationMessage");
  var roundedBmi = realbmi.toFixed(1);
  messageOutput.innerHTML = ""; // Clear message before calculating new BMI
  realbmiOutput.innerHTML = " " + roundedBmi; // Print BMI
  // Appropriate message for your BMI rating
  if (roundedBmi > 26) {
    messageOutput.innerHTML = "YOU'RE A FAT ASS!!!";
  } else {
    
  }
  // Console loggings
  console.log('Teža: ' + weight + " kg");
  console.log('Višina: ' + height + " m");
  console.log('BMI: ' + realbmi);
}