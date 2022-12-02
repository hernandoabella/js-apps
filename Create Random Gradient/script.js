const randomButton = document.querySelector(".random");
const copyButton = document.querySelector(".copy");
const textarea = document.querySelector("textarea");
let style = "";
const blendModes = [
"normal",
"multiply",
"screen",
"overlay",
"lighten",
"hard-light",
"soft-light",
"hue",
"color"
];
function generateGradient() {
let gradient = "",
mode = "";
for (let i = 0; i < 4; i++) {
const deg = Math.floor(Math.random() * 180);
const firstColor = randomColor({
luminosity: "bright",
hue: "blue",
format: "rgba"
});
const lastColor = randomColor({
luminosity: "light",
hue: "red",
format: "rgba",
alpha: 0.5
});
const firstSpread = Math.floor(Math.random() * 90);
const lastSpread = Math.floor(Math.random() * 180);
mode += `${blendModes[Math.floor(Math.random() * blendModes.length)]},`;
gradient += `linear-gradient(${deg}deg, ${firstColor} ${firstSpread}%, ${lastColor} ${lastSpread}%),`;
}
style = `background-image: ${gradient.slice(0,-1)}; background-blend-mode: ${mode.slice(0, -1)};`
document.body.setAttribute("style", style);
}
generateGradient();
randomButton.addEventListener("click", generateGradient);
copyButton.addEventListener("click", () => {
textarea.value = style;
document.execCommand('copy', textarea.select());
copyButton.innerText = 'Copied';
setTimeout(() => {
copyButton.innerText = 'Copy';
}, 400);
});