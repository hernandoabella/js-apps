const change = document.getElementById('change');
const color = document.getElementById('color');
const body = document.body;

change.addEventListener('click', changeBG);

function changeBG() {
	const col1 = getRandomRGB();
	const col2 = getRandomRGB();
	const col3 = getRandomRGB();
	const colorString = `rgb(${col1}, ${col2}, ${col3})`;
	body.style.background = colorString;
	color.innerText = colorString;
}

function getRandomRGB() {
	return Math.floor(Math.random() * 256);
}