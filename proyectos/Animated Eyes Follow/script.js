const eye = document.querySelector('.iris');
window.addEventListener('mousemove', (event) => {
const x = -(window.innerWidth / 2 - event.pageX) / 35;
const y = -(window.innerHeight / 2 - event.pageY) / 35;
eye.style.transform = `rotate(-45deg) translateY(${y}px) translateX(${x}px)`;
});