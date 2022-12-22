const container = document.querySelector(".container");
const imageURL = "https://source.unsplash.com/random/";

// number of rows on page
let rows = 10;

// generate images
for (let i = 0; i < rows * 3; i++) {
	const image = document.createElement("img");
	image.src = `${imageURL}${getImageResolution()}`;
	container.appendChild(image);
}

// function to get image resolution
function getImageResolution() {
	return `${getRandomSize()}x${getRandomSize()}`;
}

// function to get random size
function getRandomSize() {
	return Math.floor(Math.random() * 10) + 310;
}
