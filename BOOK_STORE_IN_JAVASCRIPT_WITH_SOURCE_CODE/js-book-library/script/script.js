let formInput = document.querySelectorAll('.form-input') // getting the form input
let formBookSubmit = document.getElementById('new-book-form') // getting the DOM
let cardContainer = document.querySelector('.card-container') // getting the card container
let totalBooks = document.querySelector('.total-books') // getting total books DOM

// array for saving book data
let myLibrary = []

function Book(title, author, pages, hasBeenRead) {
  this.bookId = myLibrary.length
  this.title = title
  this.author = author
  this.pages = pages
  this.hasBeenRead = hasBeenRead
}
Book.prototype.saveBook = function() {
  // arrange the object to push
  let bookToSave = {
    bookId: this.bookId,
    title: this.title,
    author: this.author,
    pages: this.pages,
    hasBeenRead: this.hasBeenRead
  }

  myLibrary.unshift(bookToSave)

  render() // rendering list of book
}

function addBookToLibrary(e) {
  e.preventDefault() // preventing browser to reload

  let bookTitle = e.target[0].value // getting book title
  let bookAuthor = e.target[1].value // getting book author
  let bookPages = e.target[2].value // getting book pages
  let hasBeenRead = e.target[3].value // getting has been read

  let insertBook = new Book(bookTitle, bookAuthor, bookPages, hasBeenRead)

  insertBook.saveBook()

  // close the modal after insert the book
  modal.style.display = "none"

  // clear the form after submit
  formInput.forEach(function(item, index){
    item.value = ''
  })

  let deleteButton = document.querySelectorAll('.delete-button') // getting the delete button
  deleteButton.forEach(key => key.addEventListener('click', deleteFunc))
}

// render array to HTML
function render() {
  // remove card before adding new one
  cardContainer.innerHTML = ''

  myLibrary.forEach(function(currentValue, index) {
    cardContainer.innerHTML += cardElement(currentValue)
  })

  // rendering total books
  renderBooks()
}

// rendering total of the book
function renderBooks(){
  totalBooks.innerHTML = myLibrary.length
}

// card element
function cardElement(data) {
  return `
  <div class="card">
    <div class="card-top">
      <div class="content">
        <div class="left-side">
          <p>${data.hasBeenRead}</p>
        </div> <!-- left-side -->
        <div class="right-side">
          <p class="title"><b>${data.title}</b></p>
          <p>${data.author} - ${data.pages} pages</p>
        </div> <!-- right-side -->
      </div>
    </div> <!-- card-top -->
    <div class="card-bottom">
      <button class="read-button"><b>read</b></button>
      <button class="delete-button" data-book="${data.bookId}${data.pages}">delete</button>
    </div> <!-- card-bottom -->
  </div> <!-- card -->
  `
}

// function for deleting the book data
function deleteFunc(e){
  
  console.log(e.target.dataset.book)

}



render()

// form submit eventListener
formBookSubmit.addEventListener('submit', addBookToLibrary)
