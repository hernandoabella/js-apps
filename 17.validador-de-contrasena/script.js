var is_visible = false ;

function see(){
    var input = document.getElementById("password");
    var see = document.getElementById("see");
    
    if(is_visible){
        input.type = 'password';
        is_visible = false; 
        see.style.color='gray';
    }else{
        input.type = 'text';
        is_visible = true; 
        see.style.color='#262626';
    }
}

function validar(){

    var input = document.getElementById("password").value;
    
    input=input.trim();
    document.getElementById("password").value=input;

    document.getElementById("count").innerText="Length : " + input.length;
    
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
