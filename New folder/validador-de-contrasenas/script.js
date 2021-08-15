var visible = false ;

function ver(){
    var input = document.getElementById("password");
    var ver = document.getElementById("ver");
    
    if(visible){
        input.type = 'password';
        visible = false; 
        ver.style.color='#cc2b5e';
    }else{
        input.type = 'text';
        visible = true; 
        ver.style.color='#753a88';
    }
}

function validar(){

    var input = document.getElementById("password").value;
    
    input=input.trim();

    document.getElementById("password").value=input;

    document.getElementById("largo").innerText="Largo : " + input.length;
    
    if(input.length>=5){
        document.getElementById("validar0").style.color="#cc2b5e";
    }else{
       document.getElementById("validar0").style.color="#753a88"; 
    }
    
    if(input.length<=10){
        document.getElementById("validar1").style.color="#cc2b5e";
    }else{
       document.getElementById("validar1").style.color="#753a88"; 
    }
    
    if(input.match(/[0-9]/i)){
       document.getElementById("validar2").style.color="#cc2b5e";
    }else{
       document.getElementById("validar2").style.color="#753a88"; 
    }
    
    if(input.match(/[^A-Za-z0-9-' ']/i)){
        document.getElementById("validar3").style.color="#cc2b5e";
    }else{
        document.getElementById("validar3").style.color="#753a88"; 
    }
    
    if(input.match(' ')){
        document.getElementById("validar4").style.color="#753a88";
    }else{
        document.getElementById("validar4").style.color="#cc2b5e"; 
    }
}
