var number = document.querySelector(".number");  
var count = 20;  
// Countdown Interval which runs on every 1s  
var countdownInterval = setInterval(() => {  
 // if count is less than or equal to 1 then clear the Interval  
 count <= 1 && clearInterval(countdownInterval);  
 number.textContent = count <= 10 ? `0${--count}` : `${--count}`;  
}, 1000);  