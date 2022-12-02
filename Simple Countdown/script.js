/**
  Increase number
**/
const increaseNumber = () => {
    let counter = 0;
    const numberElement = document.getElementById("js-number") || {};
  
    setInterval(function startCount() {
      counter < 99 ? (numberElement.innerHTML = ++counter) : (counter = 0);
    }, 1000);
  };
  
  window.addEventListener("load", increaseNumber);