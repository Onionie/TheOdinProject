'use strict';
// DOM selecting elements
// Screen
const previousResult = document.querySelector('.history-container');
const currentInput = document.querySelector('.current-container');

const keyClear = document.querySelector('.calculator-clear');
const keyDelete = document.querySelector('.calculator-delete');

// Buttons
const keyPeriod = document.querySelector('.button-period');
const keyEqual = document.querySelector('.button-equal');

// All number buttons and operator buttons
const buttonOperators = document.querySelectorAll('.button-operator');
const buttonNumbers = document.querySelectorAll('.button-num');

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
  if (num2 === 0) {
    return "Can't Divide by Zero";
  } else {
    return num1 / num2;
  }
};

// Operator that calls in specific function
function operate(operator, num1, num2) {
  console.log(operator);
  console.log(typeof operator);
  console.log(num1);
  console.log(num2);

  if (operator === '+') {
    add(num1, num2);
  } else if (operator === '-') {
    subtract(num1, num2);
  } else if (operator === '*') {
    multiply(num1, num2);
  } else if (operator === '/') {
    divide(num1, num2);
  } else {
    return 'Wrong operator';
  }

  // switch (operator) {
  //   case '+':
  //     add(num1, num2);
  //     break;
  //   case '-':
  //     subtract(num1, num2);
  //     break;
  //   case '*':
  //     multiply(num1, num2);
  //     break;
  //   case '/':
  //     divide(num1, num2);
  //     break;
  //   default:
  //     console.log('Something is not right');
  // }
}

// const operatorExists = (array) => {
//   if (
//     array.findIndex('+') ||
//     array.findIndex('-') ||
//     array.findIndex('*') ||
//     array.findIndex('/')
//   ) {
//     console.log(array);
//     return true;
//   }
// };

let numbersArr = [];

let displayCurrentInput = '';
let displayPreviousResult = '';
let operatorIs;

const displayKey = (key) => {
  displayCurrentInput += key;
  console.log(displayCurrentInput);
  currentInput.textContent = displayCurrentInput;
};

const resetScreen = () => {
  displayCurrentInput = '';
  displayPreviousResult = '';
  currentInput.textContent = displayCurrentInput;
  previousResult.textContent = displayPreviousResult;
  numbersArr = [];
};

const operatorClicked = (string, operator) => {
  const newString = string.replace(/[^a-zA-Z0-9]/g, '');
  const setInputToNum = Number(newString);
  numbersArr.push(setInputToNum);
  console.log(numbersArr);

  operatorIs = operator;
  console.log(operatorIs);

  console.log(typeof setInputToNum);
};

////////////// Pressing Keys //////////////

// Add eventListener to each buttonNumbers
// And get its textContent to display in the screen
for (let i = 0; i < buttonNumbers.length; i++) {
  buttonNumbers[i].addEventListener('click', () => {
    displayKey(buttonNumbers[i].textContent);
  });
}

// eventListener to operators
for (let i = 0; i < buttonOperators.length; i++) {
  buttonOperators[i].addEventListener('click', () => {
    displayKey(buttonOperators[i].textContent);
    displayPreviousResult = displayCurrentInput;
    previousResult.textContent = displayPreviousResult;
    operatorClicked(displayCurrentInput, buttonOperators[i].textContent);
    displayCurrentInput = '';
    currentInput.innerHTML = displayCurrentInput;
  });
}

// addEventListener to dot
keyPeriod.addEventListener('click', () => {
  displayKey('.');
});

let answer;

// addEventListener to equal button
keyEqual.addEventListener('click', () => {
  const secondNum = Number(displayCurrentInput);
  numbersArr.push(secondNum);
  displayPreviousResult += displayCurrentInput;
  previousResult.textContent = displayPreviousResult;
  console.log(numbersArr);
  console.log(operatorIs);
  console.log(typeof operatorIs);

  if (operatorIs === '+') {
    answer = add(numbersArr[0], numbersArr[1]);
  } else if (operatorIs === '-') {
    answer = subtract(numbersArr[0], numbersArr[1]);
  } else if (operatorIs === '*') {
    answer = multiply(numbersArr[0], numbersArr[1]);
  } else if (operatorIs === '/') {
    answer = divide(numbersArr[0], numbersArr[1]);
  } else {
    return 'Wrong operator';
  }
  currentInput.textContent = answer;
});

// Clear Current and History
keyClear.addEventListener('click', () => {
  resetScreen();
});

currentInput.innerHTML = '0';
