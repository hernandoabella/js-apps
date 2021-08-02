import items from "./items.json";
import formatCurrency from "./util/formatCurrency.js";

const showCartButton = document.querySelector("[data-show-cart-btn]");
const cartContainer = document.querySelector("[data-cart-container-element]");
const cartTemplate = document.querySelector("#cart-item-template");
const itemsCartContainer = document.querySelector(
    "[data-items-cart-container]"
);
const itemQuantityIndicator = document.querySelector(
    "[data-items-quantity-indicator]"
);
const cartTotal = document.querySelector("[data-total-price]");
const cartSection = document.querySelector("[data-cart]");
const SESSION_STORAGE_KEY = "SESSION-STORAGE__cart";
let shoppingCart = loadCart();

// Show/hide the cart when clicked

export function setupShoppingCart() {
    renderCart();
}
showCartButton.addEventListener("click", e => {
    cartContainer.classList.toggle("invisible");
});

// Handle click event for adding
export function addItemToCart(id) {
    const existingItem = shoppingCart.find(entry => entry.id === id);
    // Handle multiple of the same items in the cart
    if (existingItem) {
        existingItem.quantity++;
    }
    if (!existingItem) {
        shoppingCart.push({ id: id, quantity: 1 });
    }
    renderCart();
    saveCart();
}

function renderCart() {
    if (shoppingCart.length === 0) {
        hideCart();
    } else {
        showCart();
        renderCartItems();
    }
}

// Show/hide cart button when it has no items or when it goes from 0 to 1 item
function hideCart() {
    cartSection.classList.add("invisible");
    cartContainer.classList.add("invisible");
}

function showCart() {
    cartSection.classList.remove("invisible");
}

function renderCartItems() {
    itemsCartContainer.innerHTML = "";
    itemQuantityIndicator.innerText = shoppingCart.length;

    // Calculate an accurate total
    const totalCents = shoppingCart.reduce((sum, entry) => {
        const item = items.find(i => i.id === entry.id);
        return (sum += item.priceCents * entry.quantity);
    }, 0);

    cartTotal.innerText = formatCurrency(totalCents / 100);

    // Add items to cart
    shoppingCart.forEach(entry => {
        const item = items.find(i => i.id === entry.id);

        const cartItem = cartTemplate.content.cloneNode(true);

        const itemContainer = cartItem.querySelector("[data-item]");
        itemContainer.dataset.itemId = item.id;

        const itemName = cartItem.querySelector("[data-name]");
        itemName.innerText = item.name;

        if (entry.quantity > 1) {
            const quantityContainer = cartItem.querySelector("[data-quantity]");
            quantityContainer.innerText = `x${entry.quantity}`;
        }

        const itemPrice = cartItem.querySelector("[data-item-price]");
        itemPrice.innerText = formatCurrency(
            (item.priceCents * entry.quantity) / 100
        );

        const itemImg = cartItem.querySelector("[data-item-img]");
        itemImg.src = `https://dummyimage.com/210x130/${item.imageColor}/${item.imageColor}`;

        itemsCartContainer.appendChild(cartItem);
    });
}

// Remove items from cart
function removeCartItem() {
    document.addEventListener("click", e => {
        if (e.target.matches("[data-remove-from-cart-button]")) {
            const itemId = parseInt(
                e.target.closest("[data-item]").dataset.itemId
            );
            shoppingCart = shoppingCart.filter(i => i.id !== itemId);
            setupShoppingCart();
            saveCart();
        }
    });
}

removeCartItem();

// Add session storage
function saveCart() {
    sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(shoppingCart));
}

function loadCart() {
    const cart = sessionStorage.getItem(SESSION_STORAGE_KEY);
    return JSON.parse(cart) || [];
}
