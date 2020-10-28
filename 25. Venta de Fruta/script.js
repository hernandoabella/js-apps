const agregarBoton = document.getElementById('add-btn');
const lista = document.getElementById('list');
const entradaFruta = document.getElementById('fruit-name');
const entradaPrecio = document.getElementById('fruit-price');
const entradaCantidad = document.getElementById('fruit-quantity');
const totalPrice = document.getElementById('total-price');
const fruitBasket = document.getElementById('fruit-basket');
const totalDiv = document.getElementById('total-div');

const fruitList = [];
let total = 0;

const state = {};

agregarBoton.addEventListener('click', (e)=> {
    e.preventDefault();
    const fruitName = capitalize(entradaFruta.value);
    const fruitPrice = entradaPrecio.value;
    const fruitQuantity = entradaCantidad.value;
    if(fruitName !== '' && !fruitList.includes(fruitName)) {

        state[`${fruitName}`] = { 
            price: `${fruitPrice}`,
            quantity: `${fruitQuantity}`
        };

        fruitList.push(fruitName);
        
        renderList();

        total += parseFloat(fruitPrice) * parseInt(fruitQuantity);
        entradaFruta.value = '';
        entradaCantidad.value = '1';
        entradaPrecio.value = '';
        renderTotal();
    }
});

lista.addEventListener('click', (e)=>{
    const element = e.target;
    if(element.classList[0] === 'button') {
        const elementNode = element.parentElement;
        const elementDataName = element.dataset.name;
        let elementDataPrice = parseFloat(element.dataset.price);
        let elementDataQuantity = parseInt(element.dataset.quantity);
        total = total - (parseFloat(elementDataPrice) * parseInt(elementDataQuantity));
        elementNode.remove();
        if(fruitList.includes(elementDataName))
        {
            const index = fruitList.indexOf(elementDataName);
            fruitList.splice(index,1);
            delete state[`${elementDataName}`];
        }

        renderList();
        renderTotal();
    }
});

totalPrice.addEventListener('click', () => {

    totalDiv.classList.toggle('hidden');
    renderTotal();
    
})

fruitBasket.addEventListener('click', () => {
    lista.classList.toggle('hidden');
})

const renderList = () => {
    lista.innerHTML = '';
    
    //console.log(quantityInput.value);
    // Ajustando los items en orden alfabetico
    fruitList.sort();
    fruitList.forEach((fruit) => {        

        itemHtml = `
            <div class="mt-sm-3 bg-light alert flexview">
                <p class="large">${fruit}</p>
                <button type="button" class="button col-sm-2 remove-btn" data-name="${fruit}" data-price="${state[`${fruit}`].price}" data-quantity="${state[`${fruit}`].quantity}">Remove</button>
            </div>`;    
        lista.insertAdjacentHTML('beforeend', itemHtml);
    })
}

const renderTotal = () => {
    totalDiv.innerHTML = '';
    //const html = `Total : <span>${total}</span>`;
    const html = `<p class="display-4">Total: <span>${total}</span></p>`;
    totalDiv.insertAdjacentHTML('afterbegin', html);
}

const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
