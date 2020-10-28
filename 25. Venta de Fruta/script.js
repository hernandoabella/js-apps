const addButton = document.getElementById('add-btn');
const list = document.getElementById('list');
const fruitInput = document.getElementById('fruit-name');
const priceInput = document.getElementById('fruit-price');
const quantityInput = document.getElementById('fruit-quantity');
const totalPrice = document.getElementById('total-price');
const fruitBasket = document.getElementById('fruit-basket');
const totalDiv = document.getElementById('total-div');

const fruitList = [];
let total = 0;

const state = {};

addButton.addEventListener('click', (e)=> {
    e.preventDefault();
    const fruitName = capitalize(fruitInput.value);
    const fruitPrice = priceInput.value;
    const fruitQuantity = quantityInput.value;
    if(fruitName !== '' && !fruitList.includes(fruitName)) {

        state[`${fruitName}`] = { 
            price: `${fruitPrice}`,
            quantity: `${fruitQuantity}`
        };

        fruitList.push(fruitName);
        
        renderList();

        total += parseFloat(fruitPrice) * parseInt(fruitQuantity);
        fruitInput.value = '';
        quantityInput.value = '1';
        priceInput.value = '';
        renderTotal();
    }
});

list.addEventListener('click', (e)=>{
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
    list.classList.toggle('hidden');
})

const renderList = () => {
    list.innerHTML = '';
    
    //console.log(quantityInput.value);
    // Setting the items in alphabetical order
    fruitList.sort();
    fruitList.forEach((fruit) => {        

        itemHtml = `
            <div class="mt-sm-3 bg-light alert flexview">
                <p class="large">${fruit}</p>
                <button type="button" class="button col-sm-2 remove-btn" data-name="${fruit}" data-price="${state[`${fruit}`].price}" data-quantity="${state[`${fruit}`].quantity}">Remove</button>
            </div>`;    
        list.insertAdjacentHTML('beforeend', itemHtml);
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
