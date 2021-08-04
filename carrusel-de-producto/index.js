// add prev & next functionality
// remove 'active' class from all thumbnail maps
// use thumbnail of selected item as selector - remove 'active' class first
// match thumbnail index to display index
const nextBtn = document.querySelector("#nextBtn");
const prevBtn = document.querySelector("#prevBtn");
const slides = document.querySelectorAll(".slide");
const slidesContainer = document.querySelector(".slides-container");
const items = document.querySelectorAll(".items");

const slideWidth = slides[0].clientWidth;
let index = 0;

// next button functionality
nextBtn.addEventListener("click", () => {
	index++;
	slidesContainer.style.transform = `translateX(${-slideWidth * index}px)`;

	// remove 'active' class from thumbnails
	items.forEach((item) => item.classList.remove("active"));

	// continuos scroll
	if (index > slides.length - 1) {
		index = 0;
		slidesContainer.style.transform = `translateX(0px)`;
		items[index].classList.add("active");
	} else {
		items[index].classList.add("active");
	}
});

// previous button functionality
prevBtn.addEventListener("click", () => {
	index--;
	slidesContainer.style.transform = `translateX(${-slideWidth * index}px)`;

	// remove 'active' class from thumbnails
	items.forEach((item) => item.classList.remove("active"));

	// continuos scroll
	if (index < 0) {
		index = slides.length - 1;
		slidesContainer.style.transform = `translateX(${-slideWidth * index}px)`;
		items[index].classList.add("active");
	} else {
		items[index].classList.add("active");
	}
});

// match thumbnail index to display index
items.forEach((item, itemIndex) => {
	item.addEventListener("click", () => {
		items.forEach((item) => item.classList.remove("active"));

		// match thumbnail to index
		index = itemIndex;
		item.classList.add("active");
		slidesContainer.style.transform = `translateX(${-slideWidth * index}px)`;
	});
});
