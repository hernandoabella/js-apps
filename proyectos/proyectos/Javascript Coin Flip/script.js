var coin = document.getElementById('coin');  
 var button = document.getElementById('button');  
 var result = document.getElementById('result');  
 var headsCounter = document.getElementById('headsCounter');  
 var TailsCounter = document.getElementById('TailsCounter');  
 var featureCoin = document.getElementById('featureCoin');  
 var heads = 0;  
 var tails = 0;  
 /* On click of button spin coin ainamtion */  
 function coinToss() {  
  /* Random number 0 or 1 */  
  var x = Math.floor(Math.random() * 2);  
  /* If x = 0 change coin html to image of heads along with animation for flipping effect */  
  if (x === 0) {  
   coin.innerHTML = '<img class="heads animate-coin" src="https://upload.wikimedia.org/wikipedia/en/5/52/British_fifty_pence_coin_2015_obverse.png"/>';  
   /* Heads count increase by 1 */  
   heads += 1;  
   /* Display result of flip */  
   result.innerHTML = '<h2>You got heads</h2>';  
   /* Display number of heads */  
   headsCounter.innerHTML = '<h3> Number of heads:<span> ' + heads + '</span></h3>';  
   /* Else x = change coin html to image of tails along with animation for flipping effect */  
  } else {  
   coin.innerHTML = '<img class="tails animate-coin" src="https://upload.wikimedia.org/wikipedia/en/d/d8/British_fifty_pence_coin_2015_reverse.png"/>';  
   /* Tails count increase by 1 */  
   tails += 1;  
   /* Display result of flip */  
   result.innerHTML = '<h2>You got tails</h2>';  
   /* Display number of tails */  
   tailsCounter.innerHTML = '<h3> Number of tails:<span> ' + tails + '</span></h3>';  
  }  
 }  
 /* Add the coin toss function to the button using on click */  
 button.onclick = function() {  
  coinToss();  
  featureCoin.remove();  
 }  