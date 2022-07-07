// DOM selecting elements
// Screen
const previousResult = document.querySelector('.history-container');
const currentInput = document.querySelector('.current-container');

const keyClear = document.querySelector('.calculator-clear');
const keyDelete = document.querySelector('.calculator-delete');

// Buttons
const key0 = document.querySelector('.button-0');
const key1 = document.querySelector('.button-1');
const key2 = document.querySelector('.button-2');
const key3 = document.querySelector('.button-3');
const key4 = document.querySelector('.button-4');
const key5 = document.querySelector('.button-5');
const key6 = document.querySelector('.button-6');
const key7 = document.querySelector('.button-7');
const key8 = document.querySelector('.button-8');
const key9 = document.querySelector('.button-9');
const keyAdd = document.querySelector('.button-add');
const keySubtract = document.querySelector('.button-subtract');
const keyMultiply = document.querySelector('.button-multiply');
const keyDivide = document.querySelector('.button-divide');

// Simple Math Functions
const add = (num1, num2) => {
  return num1 + num2;
};

const subtract = (num1, num2) => {
  return num1 - num2;
};

const multiply = (num1, num2) => {
  return num1 * num2;
};

const divide = (num1, num2) => {
  return num1 / num2;
};

// Operator that calls in specific function
const operate = (operator, num1, num2) => {
  switch (operator) {
    case addition:
      add(num1, num2);
      break;
    case subtraction:
      subtract(num1, num2);
      break;
    case multiplication:
      multiply(num1, num2);
      break;
    case division:
      divide(num1, num2);
      break;
    default:
      console.log('Something is not right');
  }
};

const operatorExists = (array) => {
  if (
    array.findIndex('+') ||
    array.findIndex('-') ||
    array.findIndex('*') ||
    array.findIndex('/')
  ) {
    console.log(array);
    return true;
  }
};

let displayCurrentInput = []; //Array?
let displayPreviousResult = [];

const displayKey = (key) => {
  displayCurrentInput.push(key);
  console.log(displayCurrentInput);
  currentInput.innerHTML = displayCurrentInput;
};

// OnClick Listeners
key1.addEventListener('click', function () {
  displayKey(1);
  operatorExists(displayCurrentInput);
});

// Clear Current and History
keyClear.addEventListener('click', () => {
  displayCurrentInput = [];
  displayPreviousResult = [];
  currentInput.innerHTML = displayCurrentInput;
  previousResult.innerHTML = displayPreviousResult;
});

previousResult.innerHTML = '1234'; //Change display?
