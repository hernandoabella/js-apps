const draggableList = document.getElementById("draggable-list");
const check = document.getElementById("check");
const longestServing = [
	"Paul Biya",
	"Teodoro Obiang Nguema Mbasogo",
	"Ali Khamenei",
	"Dennis Sassou Nguesso",
	"Hun Sen",
	"Yoweri Museveni Tibuhaburwa",
	"Idriss Deby",
	"Hursultan Nazarbayev",
	"Emomali Rahmon",
	"Isaias Afwerki",
	"Alexander Lukashenko",
	"Daniel Ortega",
];

// store list items
const listItems = [];
let dragStartIndex;

createList();
// insert list items into DOM
function createList() {
	[...longestServing]
		.map((a) => ({ value: a, sort: Math.random() }))
		.sort((a, b) => a.sort - b.sort)
		.map((a) => a.value)
		.forEach((person, index) => {
			const listItem = document.createElement("li");

			listItem.setAttribute("data-index", index);
			listItem.innerHTML = `
            <span class="number">${index + 1}</span>
            <div class="draggable" draggable="true">
                <p class="person-name">${person}</p>
                <i class="fas fa-grip-lines"></i>
            </div>
        `;

			listItems.push(listItem);
			draggableList.appendChild(listItem);
		});

	addEventListeners();
}

//functions
function dragStart() {
	dragStartIndex = +this.closest("li").getAttribute("data-index");
}

function dragEnter() {
	this.classList.add("over");
}

function dragOver(e) {
	e.preventDefault();
}

function dragLeave() {
	this.classList.remove("over");
}

function dragDrop() {
	const dragEndIndex = +this.getAttribute("data-index");
	swapItems(dragStartIndex, dragEndIndex);
	this.classList.remove("over");
}

// function swap items that are draggable
function swapItems(fromIndex, toIndex) {
	const itemOne = listItems[fromIndex].querySelector(".draggable");
	const itemTwo = listItems[toIndex].querySelector(".draggable");

	listItems[fromIndex].appendChild(itemTwo);
	listItems[toIndex].appendChild(itemOne);
}

// check order of list items
function checkOrder() {
	listItems.forEach((listItem, index) => {
		const personName = listItem.querySelector(".draggable").innerText.trim();

		if (personName !== longestServing[index]) {
			listItem.classList.add("wrong");
		} else {
			listItem.classList.remove("wrong");
			listItem.classList.add("right");
		}
	});
}

// event listeners
function addEventListeners() {
	const draggables = document.querySelectorAll(".draggable");
	const dragListItems = document.querySelectorAll(".draggable-list li");

	draggables.forEach((draggable) => {
		draggable.addEventListener("dragstart", dragStart);
	});

	dragListItems.forEach((item) => {
		item.addEventListener("dragover", dragOver);
		item.addEventListener("drop", dragDrop);
		item.addEventListener("dragenter", dragEnter);
		item.addEventListener("dragleave", dragLeave);
	});
}

// check order
check.addEventListener("click", checkOrder);
