// Declaración de variables
let id = '71f6779186cc32448b4c412eea65b982';
let unidades = 'metric'; 
let metodoBuscar; // q significa buscar como una cadena de caracteres
let idioma = 'sp'; // Idioma español
let contenedorClima = document.getElementById('contenedorClima');
let buscar = document.getElementById('buscar');

function obtenerBusqueda(entrada) {
    if(entrada.length === 5 && Number.parseInt(entrada) + '' === entrada)
        metodoBuscar = 'zip';
    else 
        metodoBuscar = 'q';
}                                                                                                             

function buscarClima(entrada){
    obtenerBusqueda(entrada);
    fetch(`http://api.openweathermap.org/data/2.5/weather?${metodoBuscar}=${entrada}&APPID=${id}&units=${unidades}&lang=${idioma}`)
        .then((result) => {
            return result.json();
        }).then((res) => {
            iniciar(res);
    });
}

function iniciar(resultFromServer){
    contenedorClima.style.display = 'block';

    switch (resultFromServer.weather[0].main) {
        case 'Clear':
            document.body.style.backgroundImage = "url('clearPicture.jpg')";
            break;
        
        case 'Clouds':
            document.body.style.backgroundImage = "url('cloudyPicture.jpg')";
            break;

        case 'Rain':
        case 'Drizzle':
            document.body.style.backgroundImage = "url('rainPicture.jpg')";
            break;

        case 'Mist':
            document.body.style.backgroundImage = "url('mistPicture.jpg')";
            break;    
        
        case 'Thunderstorm':
            document.body.style.backgroundImage = "url('stormPicture.jpg')";
            break;
        
        case 'Snow':
            document.body.style.backgroundImage = "url('snowPicture.jpg')";
            break;

        default:
            break;
    }

    let descripcionClima = document.getElementById('descripcionClima');
    let temperatura = document.getElementById('temperatura');
    let humedad = document.getElementById('humedad');
    let velocidadViento = document.getElementById('velocidadViento');
    let encabezadoCiudad = document.getElementById('encabezadoCiudad');

    let iconoClima = document.getElementById('iconoClima');
    iconoClima.src = 'http://openweathermap.org/img/w/' + resultFromServer.weather[0].icon + '.png';

    let resultadoDescripcion = resultFromServer.weather[0].description;
    descripcionClima.innerText = resultadoDescripcion.charAt(0).toUpperCase() + resultadoDescripcion.slice(1);
    temperatura.innerHTML = Math.floor(resultFromServer.main.temp) + '&#176;';
    velocidadViento.innerHTML = '<b>' + 'Velocidad del viento: ' + '</b>' + Math.floor(resultFromServer.wind.speed) + ' metro/s';
    encabezadoCiudad.innerHTML = resultFromServer.name;
    humedad.innerHTML = '<b>' + 'Niveles de humedad: ' + '</b>' + resultFromServer.main.humidity +  '%';
}

buscar.addEventListener('click', () => {
    let entrada = document.getElementById('entradaBusqueda').value;
    if(entrada){
        buscarClima(entrada);
    }
});

let entrada = document.getElementById("entradaBusqueda");

entrada.addEventListener("keyup", e =>{
    
    if(e.key === 'Enter'){
        e.preventDefault();
        buscar.click();
    }
}, false);