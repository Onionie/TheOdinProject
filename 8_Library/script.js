'use strict';

// Selecting Elements
const addButton = document.querySelector('.add-book-button');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const submitBtn = document.querySelector('.submit-button');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const pagesInput = document.querySelector('#pages');
const cardsDiv = document.querySelector('.cards');
const cardRead = document.querySelector('.card-read');

// Array Books Storage
let myLibrary = [];

// Functions
const hideModal = () => {
  overlay.classList.add('hidden');
  modal.classList.add('hidden');
};

const showModal = () => {
  overlay.classList.remove('hidden');
  modal.classList.remove('hidden');
};

const resetInputFields = () => {
  titleInput.value = '';
  authorInput.value = '';
  pagesInput.value = '';
};

// Display Books (Cards)
const createCard = function (book) {
  // Creating HTML Elements
  const bookCard = document.createElement('div');
  bookCard.classList.add('card');

  const bookTitle = document.createElement('div');
  bookTitle.classList.add('card-title');
  bookTitle.textContent = `"${book.title}"`;

  const bookAuthor = document.createElement('div');
  bookAuthor.classList.add('card-author');
  bookAuthor.textContent = `${book.author}`;

  const bookPages = document.createElement('div');
  bookPages.classList.add('card-pages');
  bookPages.textContent = `${book.numOfPages} pages`;

  const bookRead = document.createElement('div');
  bookRead.classList.add('card-read');
  const bookReadAnc = document.createElement('a');
  book.read === true
    ? bookReadAnc.classList.add('read')
    : bookReadAnc.classList.add('not-read');
  bookReadAnc.textContent = `${book.read === true ? 'Read' : 'Not Read'}`;

  // Functionality?
  bookRead.addEventListener('click', function () {
    console.log('Read Clicked');
    book.read === true ? false : true;
  });

  const bookRemove = document.createElement('div');
  bookRemove.classList.add('card-remove');
  const bookRemoveAnc = document.createElement('a');
  bookRemoveAnc.classList.add('remove');
  bookRemoveAnc.textContent = 'Remove'; //Remove function

  // Inserting elements in the html
  cardsDiv.append(bookCard);
  bookCard.append(bookTitle);
  bookTitle.after(bookAuthor);
  bookAuthor.after(bookPages);
  bookPages.after(bookRead);
  bookRead.append(bookReadAnc);
  bookRead.after(bookRemove);
  bookRemove.append(bookRemoveAnc);
};

// Map through an array to display the cards
const displayAllBooks = function (arr) {
  arr.map((book) => {
    return createCard(book);
  });
};

// Card Read Exists?
const cardReadExist = function () {
  if (cardRead) {
    console.log(cardRead);
    cardRead.addEventListener('click', () => {
      console.log('Read Clicked');
    });
  } else {
    console.log('No Read Button Yet');
  }
};

// Read or Not Read toggle
const toggleRead = function () {};

// Remove Function
const RemoveBook = function () {};

// Event Listeners
addButton.addEventListener('click', () => {
  showModal();
});

overlay.addEventListener('click', () => {
  hideModal();
  resetInputFields();
});

// Submit Button
submitBtn.addEventListener('click', () => {
  // Check Fields
  if (
    titleInput.value === '' ||
    authorInput.value === '' ||
    pagesInput.value === ''
  ) {
    alert('Fill Out Fields');
  } else {
    hideModal();
    resetInputFields();
    displayAllBooks(myLibrary);
    console.log('Submit Clicked');
  }
});

const Book = function (title, author, numOfPages, read) {
  this.title = title;
  this.author = author;
  this.numOfPages = numOfPages;
  this.read = read;
};

const addBookToLibrary = function (obj) {
  // Input fields values
  myLibrary.push(obj);
};

Book.prototype.info = function () {
  return `${this.title} by ${this.author}, ${this.numOfPages} pages, ${this.read}`;
};

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);

const theGreatGatsby = new Book(
  'The Great Gatsby',
  'F. Scott Fitzgerald',
  208,
  false
);
const gameOfThrones = new Book(
  'Game Of Thrones',
  'George R.R. Martin',
  310,
  true
);

addBookToLibrary(theHobbit);
addBookToLibrary(theGreatGatsby);
addBookToLibrary(gameOfThrones);

console.log(myLibrary[0].author);
