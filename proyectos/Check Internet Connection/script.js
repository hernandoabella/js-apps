let random = document.getElementById("random");  
    if(navigator.onLine){  
      random.textContent = "We Are Online !";  
      random.style.color = "green";  
    }  
    window.addEventListener("online",function(){  
     random.textContent = "We Are Online !";  
      random.style.color = "green";  
    });  
    window.addEventListener("offline",function(){  
     random.textContent = "We Are Offine!";  
      random.style.color = "red";  
      vibratePattern();  
    });  