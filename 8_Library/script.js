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

const createCards = function () {
  // Creating HTML Elements
  const bookCard = document.createElement('div');
  bookCard.classList.add('card');

  const bookTitle = document.createElement('div');
  bookTitle.classList.add('card-title');
  bookTitle.textContent = 'The Greatest Showman';

  const bookAuthor = document.createElement('div');
  bookAuthor.classList.add('card-author');
  bookAuthor.textContent = 'F. Scott Barnes';

  const bookPages = document.createElement('div');
  bookPages.classList.add('card-pages');
  bookPages.textContent = '231';

  const bookRead = document.createElement('div');
  bookRead.classList.add('card-read');

  const bookRemove = document.createElement('div');
  bookRemove.classList.add('card-remove');

  cardsDiv.append(bookCard);
  bookCard.append(bookTitle);
  bookTitle.after(bookAuthor);
  bookAuthor.after(bookPages);
};

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
    createCards();
    console.log('Submit Clicked');
  }
});

let myLibrary = [];

const Book = function (title, author, numOfPages, read) {
  this.title = title;
  this.author = author;
  this.numOfPages = numOfPages;
  this.read = read;
};

const addBookToLibrary = function (obj) {
  myLibrary.push(obj);
};

const displayAllBooks = function (arrayOfBooks) {};

Book.prototype.info = function () {
  return `${this.title} by ${this.author}, ${this.numOfPages} pages, ${this.read}`;
};

const theHobbit = new Book(
  'The Hobbit',
  'J.R.R. Tolkien',
  295,
  'has not read yet'
);
console.log(theHobbit.info());
addBookToLibrary(theHobbit);
console.log(myLibrary);
