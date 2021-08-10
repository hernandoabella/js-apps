const form = document.querySelector("form");
const button = document.querySelector(".add-book");
const tableBody = document.querySelector(".table-body");
const error = document.querySelector(".error");

// Factory function
const addBook = function (title, author, pages) {
  const book = {
    title: title,
    author: author,
    pages: pages
  };
  return book;
};

const myBooks = [];

button.addEventListener("click", function (e) {
  // Grab form info
  e.preventDefault();

  const inputs = form.elements;
  const titleValue = inputs["title"].value;
  const authorValue = inputs["author"].value;
  const pagesValue = inputs["pages"].value;
  if (
    titleValue.length === 0 ||
    authorValue.length === 0 ||
    pagesValue.length === 0
  ) {
    error.innerText = "Please fill all fields.";
    return;
  }

  // Create new book object
  const book = addBook(titleValue, authorValue, pagesValue);
  // add to 'myBooks' array
  myBooks.push(book);

  // Render to DOM
  addToTable();

  // Clear form
  clearForm();
});

const addToTable = function () {
  const tr = document.createElement("tr");
  for (let book in myBooks) {
    console.log(book.title);
    const rowContents = `<td>${book.title}</td><td>${book.author}</td><td>${book.pages}</td>`;
    tr.innerHTML = rowContents;
    tableBody.append(tr);
  }
};

const clearForm = function () {
  form.reset();
  error.innerText = "";
};
