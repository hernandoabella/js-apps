var is_visible = false ;

function ver(){
    var input = document.getElementById("password");
    var ver = document.getElementById("ver");
    
    if(is_visible){
        input.type = 'password';
        is_visible = false; 
        ver.style.color='#fff';
    }else{
        input.type = 'text';
        is_visible = true; 
        ver.style.color='green';
    }
}

function validar(){

    var input = document.getElementById("password").value;
    
    input=input.trim();

    document.getElementById("password").value=input;

    document.getElementById("largo").innerText="Largo : " + input.length;
    
    if(input.length>=5){
        document.getElementById("validar0").style.color="green";
    }else{
       document.getElementById("validar0").style.color="red"; 
    }
    
    if(input.length<=10){
        document.getElementById("validar1").style.color="green";
    }else{
       document.getElementById("validar1").style.color="red"; 
    }
    
    if(input.match(/[0-9]/i)){
       document.getElementById("validar2").style.color="green";
    }else{
       document.getElementById("validar2").style.color="red"; 
    }
    
    if(input.match(/[^A-Za-z0-9-' ']/i)){
        document.getElementById("validar3").style.color="green";
    }else{
        document.getElementById("validar3").style.color="red"; 
    }
    
    if(input.match(' ')){
        document.getElementById("validar4").style.color="red";
    }else{
        document.getElementById("validar4").style.color="green"; 
    }
}
