const body_ = document.getElementById("body1");

const cambiarColor1 = () => {
body_.style.background = "#FF4E4E";
};

const cambiarColor2 = () => {
body_.style.background = "#5D00FF";
};

const cambiarColor3 = () => {
body_.style.background = "#008BFF";
};

$("#form1").submit(e => {

e.preventDefault();

let name1 = document.getElementById("input1").value;
let name2 = name1.toLowerCase();
let len_ = name1.length;
let name4 = "";

if (len_ < 2){return false}
    
for (i = 0; i < len_; i++){
name3 = name2.charAt(i);

switch(name3) {
    case "a":
    name4 = "Amable"
    break;
    case "b":
    name4 = "Bueno"
    break;
    case "c":
    name4 = "Comedido"
    break;
    case "d":
    name4 = "Decente"
    break;
    case "e":
    name4 = "Elegante"
    break;
    case "f":
    name4 = "Fabuloso"
    break;
    case "g":
    name4 = "Gigante"
    break;
    case "h":
    name4 = "Hábil"
    break;
    case "i":
    name4 = "Imparable"
    break;
    case "j":
    name4 = "Jefe"
    break;
    case "k":
    name4 = "Kinético"
    break;
    case "l":
    name4 = "Leopardo"
    break;
    case "m":
    name4 = "Misionero"
    break; 
    case "n": 
    name4 = "Nocturno" 
    break; 
    case "o": 
    name4 = "Obrador" 
    break; 
    case "p": 
    name4 = "Paciente" 
    break; 
    case "q": 
    name4 = "Quejoso" 
    break; 
    case "r": 
    name4 = "Respetuoso" 
    break; 
    case "s": 
    name4 = "Sinarca" 
    break; 
    case "t": 
    name4 = "Tigre" 
    break; 
    case "u": 
    name4 = "Unicornio " 
    break; 
    case "v": 
    name4 = "Valioso" 
    break; 
    case "w": 
    name4 = "Web" 
    break; 
    case "x": 
    name4 = "X-men" 
    break; 
    case "y": 
    name4 = "Yacente" 
    break; 
    case "z": 
    name4 = "Zafiro" 
    break; 
    default:
    name3 = "";
    name1 = "";
    name4 = ""
}

document.getElementById("div22").innerHTML += "<span class='name3'>"+name3+"</span><span class='name4'> - "+name4+"</span><br>";
}

let letters = /^[A-Za-z]+$/;
if(name1.match(letters))
{
document.getElementById("alert_").style.display = "none";
document.getElementById("div1").style.display = "none";
document.getElementById("div2").style.display = "block";
document.getElementById("div2").innerHTML += "<br>Gracias "+name1+" por ingresar tu nombre 🤗 Significa mucho 😊";
} else {
document.getElementById("div22").innerHTML = "";
document.getElementById("alert_").style.display = "block";
return false;
}

});
