function binToS(){

function str(x){
    let bchn, n;
    n = 0;
    bchn = parseInt(x);
    for (let i = 0; i<x.length; i++)
    {
        n = n + (bchn%10)*(Math.pow(2, i) | 0);
        bchn = ((bchn/10) | 0);
    }
    return n;
}

let b = document.getElementById('binIn').value + " ";
let l = b.length;
let bch = "";
let s = "";

function checkValidBin(bx){
    let a;
    a = true;
    for (let x = 0; x<bx.length; x++){
        if (((bx.charAt(x) != '1') && 
             (bx.charAt(x) != '0')) && 
             (bx.charAt(x) != ' ')){
            a = false;
        }
    }
    return a;
}

if (checkValidBin(b)){

for (let i = 0; i<l; i++){
    if (b.charAt(i) != ' '){
        bch = bch + b.charAt(i);
    }else{
        s = s + String.fromCharCode(str(bch));
        bch = "";
    }
}

document.getElementById('strOut').value = s;

}else{
    document.getElementById('strOut').value = "Invalid Input";
}

}

function sToBin(){
    function binary(num){
    let b = "";
    let r;
    while (true){
        if (num == 0){
            break;
        }

        r = num % 2;
        b = r + b;
        num = ((num/2) | 0);
    }

    return parseInt(b);
}

let s = document.getElementById('strIn').value;
let n = 0;
let bin = "";

for (let i = 0; i < s.length; i++){
    n = s.charCodeAt(i);
    bin = bin + binary(n) + " ";
}

document.getElementById('binOut').value = bin;

}

function converter1(){
    document.getElementById('sToB').style.display = 'block';
    document.getElementById('bToS').style.display = 'none';
}

function converter2(){
    document.getElementById('sToB').style.display = 'none';
    document.getElementById('bToS').style.display = 'block';
}

function copyBin(){
    let c = document.createElement("textarea");
    c.style.position = "absolute";
    c.style.left = "-999px";
    c.innerHTML = document.getElementById("binOut").value;
    document.body.appendChild(c);
    c.select();
    document.execCommand("copy");
    document.body.removeChild(c);
    alert("Texto copiado: \n" + document.getElementById("binOut").value);
}

function copyStr(){
    let c = document.createElement("textarea");
    c.style.position = "absolute";
    c.style.left = "-999px";
    c.innerHTML = document.getElementById("strOut").value;
    document.body.appendChild(c);
    c.select();
    document.execCommand("copy");
    document.body.removeChild(c);
    alert("Text Copied: \n" + document.getElementById("strOut").value);
}

document.getElementById('sToB').style.display = 'block';
document.getElementById('bToS').style.display = 'none';