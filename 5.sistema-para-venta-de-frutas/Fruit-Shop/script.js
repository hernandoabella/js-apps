const agregarBoton = document.getElementById('agregarBoton');
const lista = document.getElementById('lista');
const entradaFruta = document.getElementById('nombreFruta');
const entradaPrecio = document.getElementById('precioFruta');
const entradaCantidad = document.getElementById('cantidadFruta');
const precioTotal = document.getElementById('precioTotal');
const fruitBasket = document.getElementById('canastaFruta');
const totalDiv = document.getElementById('total-div');

const listaFruta = [];
let total = 0;

const estado = {};

agregarBoton.addEventListener('click', (e)=> {
    e.preventDefault();
    const nombreFruta = capitalizar(entradaFruta.value);
    const fruitPrice = entradaPrecio.value;
    const fruitQuantity = entradaCantidad.value;
    if(nombreFruta !== '' && !listaFruta.includes(nombreFruta)) {

        estado[`${nombreFruta}`] = { 
            price: `${fruitPrice}`,
            quantity: `${fruitQuantity}`
        };

        listaFruta.push(nombreFruta);
        
        renderizarLista();

        total += parseFloat(fruitPrice) * parseInt(fruitQuantity);
        entradaFruta.value = '';
        entradaCantidad.value = '1';
        entradaPrecio.value = '';
        renderTotal();
    }
});

lista.addEventListener('click', (e)=>{
    const elemento = e.target;
    if(elemento.classList[0] === 'eliminar') {
        const elementNode = elemento.parentElement;
        const elementDataName = elemento.dataset.name;
        let elementDataPrice = parseFloat(elemento.dataset.price);
        let elementDataQuantity = parseInt(elemento.dataset.quantity);
        total = total - (parseFloat(elementDataPrice) * parseInt(elementDataQuantity));
        elementNode.remove();
        if(listaFruta.includes(elementDataName))
        {
            const indice = listaFruta.indexOf(elementDataName);
            listaFruta.splice(indice, 1);
            delete estado[`${elementDataName}`];
        }

        renderizarLista();
        renderTotal();
    }
});

precioTotal.addEventListener('click', () => {
    totalDiv.classList.toggle('hidden');
    renderTotal();
});

fruitBasket.addEventListener('click', () => {
    lista.classList.toggle('hidden');
});

const renderizarLista = () => {
    lista.innerHTML = '';
    listaFruta.sort();
    listaFruta.forEach((fruit) => {        
        itemHtml = `
            <div class="contenedorLista">
                <p class="nombreFruta">${fruit}</p>
                <button type="button" class="eliminar" data-name="${fruit}" data-price="${estado[`${fruit}`].price}" data-quantity="${estado[`${fruit}`].quantity}">Eliminar</button>
            </div>`;    
        lista.insertAdjacentHTML('beforeend', itemHtml);
    });
}

const renderTotal = () => {
    totalDiv.innerHTML = '';
    const html = `<p class="total">Total: <span>${total}</span></p>`;
    totalDiv.insertAdjacentHTML('afterbegin', html);
}

const capitalizar = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
