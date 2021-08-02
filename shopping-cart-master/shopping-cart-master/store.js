import items from "./items.json";
import formatCurrency from "./util/formatCurrency.js";
import { addItemToCart } from "./shoppingCart.js";
const itemsTemplate = document.querySelector(".store-item-template");
const storeItemContainer = document.querySelector("[data-store-container]");

export function setupStore() {
    if (storeItemContainer == null) return;

    document.addEventListener("click", e => {
        if (e.target.matches("[data-add__to__cart--btn]")) {
            const itemId = e.target.closest("[data-item-container]").dataset
                .itemId;

            addItemToCart(parseInt(itemId));
        }
    });

    items.forEach(item => renderStoreItems(item));
}

function renderStoreItems(item) {
    const storeItem = itemsTemplate.content.cloneNode(true);

    const itemContainer = storeItem.querySelector("[data-item-container]");
    itemContainer.dataset.itemId = item.id;

    const itemName = storeItem.querySelector("[data-item-name]");
    itemName.innerText = item.name;

    const itemCategory = storeItem.querySelector("[data-item-category]");
    itemCategory.innerHTML = item.category;

    const itemPrice = storeItem.querySelector("[data-item-price]");
    itemPrice.innerText = formatCurrency(item.priceCents / 100);

    const itemImg = storeItem.querySelector("[data-img-src]");
    itemImg.src = `https://dummyimage.com/420x260/${item.imageColor}/${item.imageColor}`;

    storeItemContainer.appendChild(storeItem);
}
