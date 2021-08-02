const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playIt);

keys.forEach(key =>
  key.addEventListener("click", function(e) {
    let value = key.getAttribute("data-key");
    const audio = document.querySelector(`audio[data-key="${value}"]`);
    const key_data = document.querySelector(`div[data-key="${value}"]`);
    if (audio) {
      key_data.classList.add("playing");
      audio.currentTime = 0;
      audio.play();
    }
  })
);

function removeTransition(e) {
  if (e.propertyName == "transform") e.target.classList.remove("playing");
}

function playIt(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (audio) {
    key.classList.add("playing");
    audio.currentTime = 0;
    audio.play();
  }
}
