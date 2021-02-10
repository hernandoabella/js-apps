var operador = document.getElementsByClassName("operador");
var numero = document.getElementsByClassName("numero");

function obtenerHistorial(){
    return document.getElementById("valor-historial").innerText;
}

function printHistory(num){
    document.getElementById("valor-historial").innerText=num;
}

function getOutput(){
    return document.getElementById("valor-salida").innerText;
}

function printOutput(num){
    if(num==""){
    document.getElementById("valor-salida").innerText=num;
    }
    else{
        document.getElementById("valor-salida").innerText=getFormattedNumber(num);
    }
}

function getFormattedNumber(num){
    if(num=="-"){
        return "";
    }
    var n=Number(num);
    var value= n.toLocaleString("en");

    return value;
}

function revertirFormatoNumero(num){
    return Number(num.replace(/,/g, ''));
}



for(var i=0;i<operador.length;i++){
    operador[i].addEventListener('click',function(){
            if(this.id=="clear"){
                printHistory("");
                printOutput("");
            }else if(this.id=="backspace"){
                var
                output=revertirFormatoNumero(getOutput()).toString();
                if(output){//if output has a value
                    output= output.substr(0,output.length-1);
                printOutput(output);
                }
            }else{
                var output = getOutput();
                var history = obtenerHistorial();

                if(output==""&&history!=""){
                    if(isNaN(history[history.length-1])){
                        history=history.substr(0,history.length-1);
                    }
                }

                if(output!="" || history!=""){
                    output= output==""?
                    output:revertirFormatoNumero(output);
                    history=history+output;

                    if(this.id=="="){
                        var result= eval(history);
                        printOutput(result);
                        printHistory("");
                    }else{
                        history=history+this.id;
                        printHistory(history);
                        printOutput("");
                    }
                }
            }
    });
}

for(var i=0;i<numero.length;i++){
    numero[i].addEventListener('click', function(){
        var output=revertirFormatoNumero(getOutput());
        if(output!=NaN){
            output=output+this.id;
            printOutput(output);
        }
    });
}