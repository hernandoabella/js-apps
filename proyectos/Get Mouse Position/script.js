const text = document.querySelector('.mainText');
const mainContainer = document.querySelector('.container');
mainContainer.addEventListener("mousemove", runEvent);
//event handler
function runEvent(e){
e.preventDefault();
//print Coordinates of the mouse on move on the targeted element:
text.textContent = `MouseX: ${e.offsetX}, MouseY: ${e.offsetY}`;
//change body background color taking the coordinates as values of rgb:
document.body.style.backgroundColor = `rgb(${e.offsetX}, 180, ${e.offsetY})`;
}