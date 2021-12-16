let operador = document.getElementsByClassName("operador");
let numero = document.getElementsByClassName("numero");

function obtenerHistorial(){
    return document.getElementById("valor-historial").innerText;
}

function imprimirHistorial(num){
    document.getElementById("valor-historial").innerText=num;
}

function obtenerSalida(){
    return document.getElementById("valor-salida").innerText;
}

function imprimirSalida(num){
    if(num==""){
    document.getElementById("valor-salida").innerText=num;
    }
    else{
        document.getElementById("valor-salida").innerText=obtenerNumeroFormateado(num);
    }
}

function obtenerNumeroFormateado(num){
    if(num=="-"){
        return "";
    }
    let n=Number(num);
    let value= n.toLocaleString("en");

    return value;
}

function revertirFormatoNumero(num){
    return Number(num.replace(/,/g, ''));
}



for(let i=0;i<operador.length;i++){
    operador[i].addEventListener('click',function(){
            if(this.id=="clear"){
                imprimirHistorial("");
                imprimirSalida("");
            }else if(this.id=="backspace"){
                let
                salida=revertirFormatoNumero(obtenerSalida()).toString();
                if(salida){// Si (salida tiene un valor) {...}
                    salida= salida.substr(0,salida.length-1);
                imprimirSalida(salida);
                }
            }else{
                let salida = obtenerSalida();
                let historial = obtenerHistorial();

                if(salida=="" && historial != ""){
                    if(isNaN(historial[historial.length-1])){
                        historial=historial.substr(0,historial.length-1);
                    }
                }

                if(salida != "" || historial != ""){
                    salida= salida==""?
                    salida:revertirFormatoNumero(salida);
                    historial=historial+salida;

                    if(this.id=="="){
                        let result= eval(historial);
                        imprimirSalida(result);
                        imprimirHistorial("");
                    }else{
                        historial=historial+this.id;
                        imprimirHistorial(historial);
                        imprimirSalida("");
                    }
                }
            }
    });
}

for(let i=0;i<numero.length;i++){
    numero[i].addEventListener('click', function(){
        let salida = revertirFormatoNumero(obtenerSalida());
        if(salida!=NaN){
            salida=salida+this.id;
            imprimirSalida(salida);
        }
    });
}