let print = (msg) => {
    document.getElementById("output").innerHTML = "Length is " + msg + " (White Spaces are included)";
}



document.getElementById("btn").onclick = function (event){
    print(document.getElementById('str').value.length);
}