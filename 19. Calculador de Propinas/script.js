    // Variables
    let baseDeDatos = [
        {
            id: 1,
            nombre: 'Nintendo Switch',
            precio: 299.00,
            imagen: 'https://images-na.ssl-images-amazon.com/images/I/71ILSOE6ovL._AC_SL1500_.jpg'
        },
        {
            id: 2,
            nombre: 'ASUS VivoBook 15',
            precio: 482.00,
            imagen: 'https://images-na.ssl-images-amazon.com/images/I/81fstJkUlaL._AC_SL1500_.jpg'
        },
        {
            id: 3,
            nombre: 'AMD Ryzen 7',
            precio: 294.99,
            imagen: 'https://images-na.ssl-images-amazon.com/images/I/717Di3DGIbL._AC_SL1092_.jpg'
        },
        {
            id: 4,
            nombre: 'Acer Aspire C24',
            precio: 579.99,
            imagen: 'https://images-na.ssl-images-amazon.com/images/I/61PlVVOd3QL._AC_SL1500_.jpg'
        },
        {
            id: 5,
            nombre: 'Mouse Redragon M601',
            precio: 15.99,
            imagen: 'https://images-na.ssl-images-amazon.com/images/I/61okxuhfKBL._AC_SL1500_.jpg'
        },
        {
            id: 6,
            nombre: 'Teclado Mecánico',
            precio: 46.92,
            imagen: 'https://images-na.ssl-images-amazon.com/images/I/819bA8-GcWL._AC_SL1500_.jpg'
        }
    ];

    let $items = document.querySelector('#items');
    let carrito = [];
    let total = 0;
    let $carrito = document.querySelector('#carrito');
    let $total = document.querySelector('#total');
    let $botonVaciar = document.querySelector('#boton-vaciar');

    // Funciones
    function renderItems() {
        for (let info of baseDeDatos) {
            // Estructura
            let miNodo = document.createElement('div');
            miNodo.classList.add('tarjeta');
            // Body
            let miNodoCardBody = document.createElement('div');
            miNodoCardBody.classList.add('cuerpoCarta');
            // Titulo
            let miNodoTitle = document.createElement('h5');
            miNodoTitle.classList.add('tituloTarjeta');
            miNodoTitle.textContent = info['nombre'];
            // Imagen
            let miNodoImagen = document.createElement('img');
            miNodoImagen.classList.add('imagenTarjeta');
            miNodoImagen.setAttribute('src', info['imagen']);
            // Precio
            let miNodoPrecio = document.createElement('p');
            miNodoPrecio.classList.add('textoTarjeta');
            miNodoPrecio.textContent = info['precio'] + '$';
            // Boton 
            let miNodoBoton = document.createElement('button');
            miNodoBoton.classList.add('agregar');
            miNodoBoton.textContent = '+';
            miNodoBoton.setAttribute('marcador', info['id']);
            miNodoBoton.addEventListener('click', anyadirCarrito);
            // Insertamos
            miNodoCardBody.appendChild(miNodoImagen);
            miNodoCardBody.appendChild(miNodoTitle);
            miNodoCardBody.appendChild(miNodoPrecio);
            miNodoCardBody.appendChild(miNodoBoton);
            miNodo.appendChild(miNodoCardBody);
            $items.appendChild(miNodo);
        }
    }

    function anyadirCarrito () {
        // Añadimos el Nodo a nuestro carrito
        carrito.push(this.getAttribute('marcador'))
        // Calculo el total
        calcularTotal();
        // Renderizamos el carrito 
        renderizarCarrito();
    }

    function renderizarCarrito() {
        // Vaciamos todo el html
        $carrito.textContent = '';
        // Quitamos los duplicados
        let carritoSinDuplicados = [...new Set(carrito)];
        // Generamos los Nodos a partir de carrito
        carritoSinDuplicados.forEach(function (item, indice) {
            // Obtenemos el item que necesitamos de la variable base de datos
            let miItem = baseDeDatos.filter(function(itemBaseDatos) {
                return itemBaseDatos['id'] == item;
            });
            // Cuenta el número de veces que se repite el producto
            let numeroUnidadesItem = carrito.reduce(function (total, itemId) {
                return itemId === item ? total += 1 : total;
            }, 0);
            // Creamos el nodo del item del carrito
            let miNodo = document.createElement('li');
            miNodo.classList.add('listaCarrito');
            miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0]['nombre']} - ${miItem[0]['precio']}$`;
            // Boton de borrar
            let miBoton = document.createElement('button');
            miBoton.classList.add('cerrar');
            miBoton.textContent = 'X';
            miBoton.style.marginLeft = '1rem';
            miBoton.setAttribute('item', item);
            miBoton.addEventListener('click', borrarItemCarrito);
            // Mezclamos nodos
            miNodo.appendChild(miBoton);
            $carrito.appendChild(miNodo);
        })
    }

    function borrarItemCarrito() {
        console.log()
        // Obtenemos el producto ID que hay en el boton pulsado
        let id = this.getAttribute('item');
        // Borramos todos los productos
        carrito = carrito.filter(function (carritoId) {
            return carritoId !== id;
        });
        // volvemos a renderizar
        renderizarCarrito();
        // Calculamos de nuevo el precio
        calcularTotal();
    }

    function calcularTotal() {
        // Limpiamos precio anterior
        total = 0;
        // Recorremos el array del carrito
        for (let item of carrito) {
            // De cada elemento obtenemos su precio
            let miItem = baseDeDatos.filter(function(itemBaseDatos) {
                return itemBaseDatos['id'] == item;
            });
            total = total + miItem[0]['precio'];
        }
        // Formateamos el total para que solo tenga dos decimales
        let totalDosDecimales = total.toFixed(2);
        // Renderizamos el precio en el HTML
        $total.textContent = totalDosDecimales;
    }

    function vaciarCarrito() {
        // Limpiamos los productos guardados
        carrito = [];
        // Renderizamos los cambios
        renderizarCarrito();
        calcularTotal();
    }

    // Eventos
    $botonVaciar.addEventListener('click', vaciarCarrito);

    // Inicio
    renderItems();


    changeContrast();
function changeContrast() {
	
	var R, G, B, C, L;
	
	$( "button, .tarjeta" ).each(function() {
 
		R = (Math.floor(Math.random() * 256));
		G = (Math.floor(Math.random() * 256));
		B = (Math.floor(Math.random() * 256));
 
		$( this ).css( 'background-color', 'rgb(' + R + ',' + G + ',' + B + ')' );
 
		C = [ R/255, G/255, B/255 ];
 
		for ( var i = 0; i < C.length; ++i ) {
 
		if ( C[i] <= 0.03928 ) {
 
		C[i] = C[i] / 12.92
 
		} else {
 
		C[i] = Math.pow( ( C[i] + 0.055 ) / 1.055, 2.4);
 
		}
 
		}
 
		L = 0.2126 * C[0] + 0.7152 * C[1] + 0.0722 * C[2];
 
		if ( L > 0.179 ) {
 
		$( this ).css( 'color', 'black' );
 
		} else {
 
		$( this ).css( 'color', 'white' );
 
		}
 
	});
 
}