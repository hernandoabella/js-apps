const charlar = () => {  
    let realizarCharla = {  
        "Hola" : "¡Hola! 👋",
        "¿Cómo estás?" : "Bien, ¿y tú? 👍",  
        "Muy bien, gracias" : "Me alegra",
        "Ayuda" : "¡Dame like y sígueme para más tutoriales!",   
        "Chao" : "Chao, espero verte pronto..."  
    };

    let entradaUsuario = document.getElementById('entrada').value;  

    document.getElementById('registroDelChat').innerHTML = entradaUsuario + "<br>";  
    if (entradaUsuario in realizarCharla) {  
        document.getElementById('registroDelChat').innerHTML += realizarCharla[entradaUsuario] + "<br>";  
    }else{  
        document.getElementById('registroDelChat').innerHTML = "Lo siento, no te entiendo <br>";  
    }  
}  