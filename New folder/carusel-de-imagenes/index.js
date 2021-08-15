const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");
const container = document.querySelector(".images");

let counter = 0;
nextBtn.addEventListener(
	"click",
	(nextSlide = () => {
		container.animate([{ opacity: 0.2 }, { opacity: 1 }], { duration: 500 }, { fill: "forwards" });
		if (counter === 5) {
			counter = -1;
		}
		counter++;
		container.style.backgroundImage = `url(images/bcg-${counter}.jpg)`;
	}),
);

prevBtn.addEventListener(
	"click",
	(prevSlide = () => {
		container.animate([{ opacity: 0.2 }, { opacity: 1 }], { duration: 500 }, { fill: "forwards" });
		if (counter === 0) {
			counter = 5;
		}
		counter--;
		container.style.backgroundImage = `url(images/bcg-${counter}.jpg)`;
	}),
);
