const toggles = document.querySelectorAll('.toggle');
const good = document.getElementById('good');
const cheap = document.getElementById('cheap');
const fast = document.getElementById('fast');

toggles.forEach(toggle => {
	toggle.addEventListener('change', (e) => {
		doTheTrick(e.target)
	});
});

function doTheTrick(theClickedOne) {
	// if all 3 are checked
	if(good.checked && cheap.checked && fast.checked) {
		// check to see which one was clicked and toggle another one
		if(good === theClickedOne) {
			fast.checked = false;
		}
		
		if(cheap === theClickedOne) {
			good.checked = false;
		}
		
		if(fast === theClickedOne) {
			cheap.checked = false;
		}
	}
}

