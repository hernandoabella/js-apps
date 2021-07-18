var visible = false ;

function ver(){
    var input = document.getElementById("password");
    var ver = document.getElementById("ver");
    
    if(visible){
        input.type = 'password';
        visible = false; 
        ver.style.color='red';
    }else{
        input.type = 'text';
        visible = true; 
        ver.style.color='#70A288';
    }
}

function validar(){

    var input = document.getElementById("password").value;
    
    input=input.trim();

    document.getElementById("password").value=input;

    document.getElementById("largo").innerText="Largo : " + input.length;
    
    if(input.length>=5){
        document.getElementById("validar0").style.color="#70A288";
    }else{
       document.getElementById("validar0").style.color="#D5896F"; 
    }
    
    if(input.length<=10){
        document.getElementById("validar1").style.color="#70A288";
    }else{
       document.getElementById("validar1").style.color="#D5896F"; 
    }
    
    if(input.match(/[0-9]/i)){
       document.getElementById("validar2").style.color="#70A288";
    }else{
       document.getElementById("validar2").style.color="#D5896F"; 
    }
    
    if(input.match(/[^A-Za-z0-9-' ']/i)){
        document.getElementById("validar3").style.color="#70A288";
    }else{
        document.getElementById("validar3").style.color="#D5896F"; 
    }
    
    if(input.match(' ')){
        document.getElementById("validar4").style.color="#D5896F";
    }else{
        document.getElementById("validar4").style.color="#70A288"; 
    }
}
