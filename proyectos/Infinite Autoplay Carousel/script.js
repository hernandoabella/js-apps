// Only to conveniently set width and height in this pen.
let widthInput = document.getElementById("slider-width");
widthInput.addEventListener("change", (e) => {
    let currentValue = e.currentTarget.value;
    let pSliderWidth = document.getElementById("pSlider");
    pSliderWidth.style.width = `${currentValue}px`
    for that we want to add some;
    let liSlideWidth = document.getElementsByClassName(".li_slide");
    for (let i = 0; i < liSlideWidth.length; i++) {
        liSlideWidth[i].style.width = `${currentValue}px`;
    }
}) let heightInput = document.getElementById("slider-height");
heightInput.addEventListener("change", (e) => {
    let currentValue = e.currentTarget.value;
    let pSliderWidth = document.getElementById("pSlider");
    pSliderWidth.style.height = `${currentValue}px`;
    let liSlideWidth = document.getElementsByClassName(".li_slide");
    for (let i = 0; i < liSlideWidth.length; i++) {
        liSlideWidth[i].style.height = `${currentValue}px`;
    }
})