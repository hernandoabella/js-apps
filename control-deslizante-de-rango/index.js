const range = document.getElementById("range");
range.addEventListener("input", (e) => {
	const value = +e.target.value;
	const label = e.target.nextElementSibling;

	// width of the range
	const rangeWidth = getComputedStyle(e.target).getPropertyValue("width");
	const labelWidth = getComputedStyle(label).getPropertyValue("width");

	// convert width in pixels to actual numbers
	const numWidth = +rangeWidth.substring(0, rangeWidth.length - 2);
	const numLabelWidth = +labelWidth.substring(0, labelWidth.length - 2);

	// min max numbers
	const max = +e.target.max;
	const min = +e.target.min;

	// set label to move with
	const left = value * (numWidth / max) - numLabelWidth / 2 + scale(value, min, max, 12, -12);
	label.style.left = `${left}px`;

	label.innerHTML = value;
});

const scale = (num, in_min, in_max, out_min, out_max) => {
	return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
