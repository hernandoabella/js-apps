"use strict";;
let entrada, contarCaracter, contarPalabra, contarOracion, contarParrafo, tiempoLeer, palabrasClave, palabrasClavePrincipales;

entrada = document.querySelectorAll('textarea')[0];
contarCaracter = document.querySelector('#contarCaracter');
contarPalabra = document.querySelector('#contarPalabra');
contarOracion = document.querySelector('#contarOracion');
contarParrafo = document.querySelector('#contarParrafo');
tiempoLeer = document.querySelector('#tiempoLeer');
palabrasClave = document.querySelectorAll('.palabrasClave')[0];
palabrasClavePrincipales = document.querySelector('#palabrasClavePrincipales');

// Actualiza el estado cada vez que presiones una tecla
entrada.addEventListener('keyup', function() {
    // Mantiene la consola limpia para hacer visible solo los datos más recientes  
    console.clear();

    // Contador de caracter
    // Muestra el largo de cada carácter ingresado
    contarCaracter.innerHTML = entrada.value.length;

    // Contador de palabras usando el metacarácter \w - remplazando esto con .* Para hacer coincidir cualquier cosa entre los límites de las palabras ya que no estaba tomando 'a' como una palabra.
    // Esto es un golpe maestro - Para contar palabras con cualquier número de guiones como una sola palabra.
    // [-?(\w+)?]+ Busca un guión y una palabra (hacemos ambas opcionales con ?). + Al final lo convierte en un patrón repetido.
    // El metacarácter \b se utiliza para encontrar una coincidencia al principio o al final de una palabra.
    let palabras = entrada.value.match(/\b[-?(\w+)?]+\b/gi);
    // console.log(palabras);
    if (palabras) {
      contarPalabra.innerHTML = palabras.length;
    } else {
      contarPalabra.innerHTML = 0;
    }

    // El contador de oraciones utiliza ./!/? como separador de oraciones
    if (!palabras) {
      contarOracion.innerHTML = 0;
    } else {
      let oraciones = entrada.value.split(/[.|!|?]+/g);
      console.log(oraciones);
      contarOracion.innerHTML = oraciones.length - 1;
    }

    // Contador de párrafo de: http://stackoverflow.com/a/3336537
    if (!palabras) {
      contarParrafo.innerHTML = 0;
    } else {
      // \n$ Se encarga de las líneas vacías: lineas sin carácteres y solo \n no son párrafos y no necesitan ser reemplazadas con una cadena vacía.
      let parrafos = entrada.value.replace(/\n$/gm, '').split(/\n/);
      contarParrafo.innerHTML = parrafos.length;
    }
    // console.log(parrafos);

    // Tiempo de lectura basado en 275 palabras/minuto
    if (!palabras) {
      tiempoLeer.innerHTML = "0s";
    } else {
      let segundos = Math.floor(palabras.length * 60 / 275);
      // Necesitas convertir segundos a minutos y horas.
      if (segundos > 59) {
        let minutos = Math.floor(segundos / 60);
        segundos = segundos - minutos * 60;
        tiempoLeer.innerHTML = minutos + "m " + segundos + "s";
      } else {
        tiempoLeer.innerHTML = segundos + "s";
      }
    }

    // Descubre las palabras clave y su recuento
    // Paso 1: Elimina todas las palabras vacías
    // Paso 2: Formar un objeto con palabras clave y su recuento
    // Paso 3: Ordena el objeto convirtiéndolo primero en una matriz 2D
    // Paso 4: Muestro las 4 palabras clave principales y su recuento

    if (!palabras) {
        debugger;
    } else {

      // Paso 1: Eliminando todas las palabras vacías
      let palabrasNoVacias = [];
      let palabrasVacias = ["a"," acuerdo"," adelante"," ademas"," además"," adrede"," ahi"," ahí"," ahora"," al"," alli"," allí"," alrededor"," antano"," antaño"," ante"," antes"," apenas"," aproximadamente"," aquel"," aquél"," aquella"," aquélla"," aquellas"," aquéllas"," aquello"," aquellos"," aquéllos"," aqui"," aquí"," arriba"," abajo"," asi"," así"," aun"," aún"," aunque"," b"," bajo"," bastante"," bien"," breve"," c"," casi"," cerca"," claro"," como"," cómo"," con"," conmigo"," contigo"," contra"," cual"," cuál"," cuales"," cuáles"," cuando"," cuándo"," cuanta"," cuánta"," cuantas"," cuántas"," cuanto"," cuánto"," cuantos"," cuántos"," d"," de"," debajo"," del"," delante"," demasiado"," dentro"," deprisa"," desde"," despacio"," despues"," después"," detras"," detrás"," dia"," día"," dias"," días"," donde"," dónde"," dos"," durante"," e"," el"," él"," ella"," ellas"," ellos"," en"," encima"," enfrente"," enseguida"," entre"," es"," esa"," ésa"," esas"," ésas"," ese"," ése"," eso"," esos"," ésos"," esta"," está"," ésta"," estado"," estados"," estan"," están"," estar"," estas"," éstas"," este"," éste"," esto"," estos"," éstos"," ex"," excepto"," f"," final"," fue"," fuera"," fueron"," g"," general"," gran"," h"," ha"," habia"," había"," habla"," hablan"," hace"," hacia"," han"," hasta"," hay"," horas"," hoy"," i"," incluso"," informo"," informó"," j"," junto"," k"," l"," la"," lado"," las"," le"," lejos"," lo"," los"," luego"," m"," mal"," mas"," más"," mayor"," me"," medio"," mejor"," menos"," menudo"," mi"," mí"," mia"," mía"," mias"," mías"," mientras"," mio"," mío"," mios"," míos"," mis"," mismo"," mucho"," muy"," n"," nada"," nadie"," ninguna"," no"," nos"," nosotras"," nosotros"," nuestra"," nuestras"," nuestro"," nuestros"," nueva"," nuevo"," nunca"," o"," os"," otra"," otros"," p"," pais"," paìs"," para"," parte"," pasado"," peor"," pero"," poco"," por"," porque"," pronto"," proximo"," próximo"," puede"," q"," qeu"," que"," qué"," quien"," quién"," quienes"," quiénes"," quiza"," quizá"," quizas"," quizás"," r"," raras"," repente"," s"," salvo"," se"," sé"," segun"," según"," ser"," sera"," será"," si"," sí"," sido"," siempre"," sin"," sobre"," solamente"," solo"," sólo"," son"," soyos"," su"," supuesto"," sus"," suya"," suyas"," suyo"," t"," tal"," tambien"," también"," tampoco"," tarde"," te"," temprano"," ti"," tiene"," todavia"," todavía"," todo"," todos"," tras"," tu"," tú"," tus"," tuya"," tuyas"," tuyo"," tuyos"," u"," un"," una"," unas"," uno"," unos"," usted"," ustedes"," v"," veces"," vez"," vosotras"," vosotros"," vuestra"," vuestras"," vuestro"," vuestros"," w"," x"," y"," ya"," yo"," z"];
      for (let i = 0; i < palabras.length; i++) {
        // Filtrando palabras vacías y números
        if (!(palabrasVacias.indexOf(palabras[i].toLowerCase()) === -1 && isNaN(palabras[i]))) {
            debugger;
        } else {
          palabrasNoVacias.push(palabras[i].toLowerCase());
        }
      }
      // console.log(palabrasNoVacias);

      // Paso 2: Formando un objeto con palabras clave y su recuento
      let palabrasClave = {};
      for (let i = 0; i < palabrasNoVacias.length; i++) {
          palabrasNoVacias[i] in palabrasClave ? palabrasClave[palabrasNoVacias[i]] += 1 : palabrasClave[palabrasNoVacias[i]] = 1;
      }

      // Paso 3: Ordena el objeto convirtiéndolo primero en un arreglo 2D
      let palabrasClaveOrdenadas = [];
      for (let palabraClave in palabrasClave) {
        palabrasClaveOrdenadas.push([palabraClave, palabrasClave[palabraClave]])
      }
      palabrasClaveOrdenadas.sort((a, b) => {
        return b[1] - a[1]
      });
      // console.log(palabrasClaveOrdenadas);

      // Paso 4: Muestra las 4 palabras clave principales y su recuento
      palabrasClavePrincipales.innerHTML = "";
      for (let i = 0; i < palabrasClaveOrdenadas.length && i < 4; i++) {
        let lista = document.createElement('li');
        lista.innerHTML = "<b>" + palabrasClaveOrdenadas[i][0] + "</b>: " + palabrasClaveOrdenadas[i][1];
        palabrasClavePrincipales.appendChild(lista);
      }
    }

    palabras ? palabrasClave.style.display = "block" : palabrasClave.style.display = "none";
});

