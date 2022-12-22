'use strict';

document.querySelector('#calculate').addEventListener('click', function () {
  const height = document.querySelector('#height').value;
  const weight = document.querySelector('#weight').value;

  const bmi = (weight / (height * 2)) * 100;
  document.querySelector('#result').textContent = bmi.toFixed(1);
});
