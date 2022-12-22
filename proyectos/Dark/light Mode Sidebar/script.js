const body = document.querySelector("body");
const sidebar = document.querySelector("nav");
const toggle = document.querySelector(".toggle");
const searchBox = document.querySelector(".search-box");
const modeSwitch = document.querySelector(".toggle-switch");
const modeText = document.querySelector(".mode-text");
toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
});
searchBox.addEventListener("click", () => {
    sidebar.classList.remove("close");
});
modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");
    modeText.innerText = body.classList.contains("dark")
        ? "Light Mode"
        : "Dark Mode";
});