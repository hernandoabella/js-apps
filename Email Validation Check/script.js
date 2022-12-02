function validation() {  
    let form = document.getElementById('form')  
    let email = document.getElementById('email').value  
    let text = document.getElementById('text')  
    let pattern = /^[^ ]+@[^ ]+.[a-z]{2,3}$/  
    if (email.match(pattern)) {  
     form.classList.add('valid')  
     form.classList.remove('invalid')  
     text.innerHTML = "Your Email Address in valid"  
     text.style.color = '#00ff00'  
    } else {  
     form.classList.remove('valid')  
     form.classList.add('invalid')  
     text.innerHTML = "Please Enter Valid Email Address"  
     text.style.color = '#ff0000'  
    }  
    if (email == '') {  
     form.classList.remove('valid')  
     form.classList.remove('invalid')  
     text.innerHTML = ""  
     text.style.color = '#00ff00'  
    }  
   }  