// get only unique categories
// iterate over category return buttons
// make sure to select buttons when they are available

const menu = [
	{
		id: 1,
		title: "buttermilk pancakes",
		category: "breakfast",
		price: 15.99,
		img: "./images/item-1.jpg",
		desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
	},
	{
		id: 2,
		title: "diner double",
		category: "lunch",
		price: 13.99,
		img: "./images/item-2.jpg",
		desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
	},
	{
		id: 3,
		title: "godzilla milkshake",
		category: "shakes",
		price: 6.99,
		img: "./images/item-3.jpg",
		desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
	},
	{
		id: 4,
		title: "country delight",
		category: "breakfast",
		price: 20.99,
		img: "./images/item-4.jpg",
		desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
	},
	{
		id: 5,
		title: "egg attack",
		category: "lunch",
		price: 22.99,
		img: "./images/item-5.jpg",
		desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
	},
	{
		id: 6,
		title: "oreo dream",
		category: "shakes",
		price: 18.99,
		img: "./images/item-6.jpg",
		desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
	},
	{
		id: 7,
		title: "bacon overflow",
		category: "breakfast",
		price: 8.99,
		img: "./images/item-7.jpg",
		desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
	},
	{
		id: 8,
		title: "american classic",
		category: "lunch",
		price: 12.99,
		img: "./images/item-8.jpg",
		desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
	},
	{
		id: 9,
		title: "quarantine buddy",
		category: "shakes",
		price: 16.99,
		img: "./images/item-9.jpg",
		desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
	},
	{
		id: 10,
		title: "Steak Dinner",
		category: "dinner",
		price: 44.99,
		img: "./images/item-10.jpg",
		desc: `steak and nyama fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
	},
];

const sectionMenu = document.querySelector(".section-center");
const buttonContainer = document.querySelector(".btn-container");

// load window items
window.addEventListener("DOMContentLoaded", () => {
	displayMenuItems(menu);

	// find unique categories
	const categories = menu.reduce(
		(values, item) => {
			if (!values.includes(item.category)) {
				values.push(item.category);
			}
			return values;
		},
		["all"],
	);

	// add buttons dynamically
	const categoryBtn = categories
		.map((category) => {
			return `<button class="filter-btn" type='button' data-id=${category}>${category}</button>`;
		})
		.join("");
	buttonContainer.innerHTML = categoryBtn;

	// select filter buttons
	const filterButtons = document.querySelectorAll(".filter-btn");

	// filter buttons functionality
	filterButtons.forEach((button) => {
		button.addEventListener("click", (event) => {
			const category = event.currentTarget.dataset.id;
			const menuCategory = menu.filter((menuItem) => {
				if (menuItem.category === category) {
					return menuItem;
				}
			});
			if (category === "all") {
				displayMenuItems(menu);
			} else {
				displayMenuItems(menuCategory);
			}
		});
	});
});

// display menu items
function displayMenuItems(menuItem) {
	let menuDisplay = menuItem.map((item) => {
		return ` <article class="menu-item">
        <img src=${item.img} class="photo" alt=${item.title}>
        <div class="item-info">
            <header>
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">${item.desc}</p>
        </div>
    </article>`;
	});
	menuDisplay = menuDisplay.join("");
	sectionMenu.innerHTML = menuDisplay;
}
