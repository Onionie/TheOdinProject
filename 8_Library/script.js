'use strict';

// Selecting Elements
const addButton = document.querySelector('.add-book-button');
const overlay = document.querySelector('.overlay');

// modal
addButton.addEventListener('click', () => {
  overlay.classList.remove('hidden');
});

overlay.addEventListener('click', () => {
  overlay.classList.add('hidden');
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
