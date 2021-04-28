// get the modal
let modal = document.getElementById("modal-form")

// get the button that opens the modal
let btn = document.getElementById("modal-button")

// get the <span> element that closes the modal
let span = document.querySelector(".close")

// when the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block"
}

// when the user clicks on the close button, close the modal
span.onclick = function() {
  modal.style.display = "none"
}
