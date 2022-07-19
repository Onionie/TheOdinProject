'use strict';

// Selecting Elements
const addButton = document.querySelector('.add-book-button');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const submitBtn = document.querySelector('.submit-button');

// Functions
const hideModal = () => {
  overlay.classList.add('hidden');
  modal.classList.add('hidden');
};

const showModal = () => {
  overlay.classList.remove('hidden');
  modal.classList.remove('hidden');
};

// Event Listeners
addButton.addEventListener('click', () => {
  showModal();
});

overlay.addEventListener('click', () => {
  hideModal();
});

submitBtn.addEventListener('click', () => {
  hideModal();
  console.log('Submit Clicked');
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
