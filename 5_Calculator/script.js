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
    return "Error: Can't Divide by Zero";
  } else {
    return num1 / num2;
  }
};

// Operator that calls in specific function
const operate = (operator, num1, num2) => {
  let answer;

  switch (operator) {
    case '+':
      return (answer = add(num1, num2));
    case '-':
      return (answer = subtract(num1, num2));
    case '*':
      return (answer = multiply(num1, num2));
    case '/':
      return (answer = divide(num1, num2));
    default:
      console.log('Something is not right');
  }
};

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

// Store numbers Input
let numbersArr = [];

// Store currentInput, previousInput, and the operatorInput
let currentInputDisplay = '';
let previousInputDisplay = '';
let operatorInput;

// takes in an input
// add the input to existing currentInput variable
// display currentInputDisplay in its div
const displayInput = (input) => {
  currentInputDisplay += input;
  currentInput.textContent = currentInputDisplay;
};

// Reset values
const resetScreen = () => {
  currentInputDisplay = '';
  previousInputDisplay = '';
  currentInput.textContent = currentInputDisplay;
  previousResult.textContent = previousInputDisplay;
  numbersArr = [];
};

// When an operator is clicked
// Take the string and replace the symbol with an empty string to keep numbers
// Set newString type to Number
// Push Number into numbersArr array
// operator parameter stored as operatorInput
const operatorClicked = (string, operator) => {
  const newString = string.replace(/[^a-zA-Z0-9]/g, '');
  const setInputToNum = Number(newString);
  numbersArr.push(setInputToNum);

  operatorInput = operator;
};

////////////// Pressing Keys //////////////

// Add eventListener to each buttonNumbers
// And get its textContent to display in the screen
for (let i = 0; i < buttonNumbers.length; i++) {
  buttonNumbers[i].addEventListener('click', () => {
    displayInput(buttonNumbers[i].textContent);
  });
}

// eventListener to operators
for (let i = 0; i < buttonOperators.length; i++) {
  buttonOperators[i].addEventListener('click', () => {
    displayInput(buttonOperators[i].textContent);
    previousInputDisplay = currentInputDisplay;
    previousResult.textContent = previousInputDisplay;
    operatorClicked(currentInputDisplay, buttonOperators[i].textContent);
    currentInputDisplay = '';
    currentInput.innerHTML = currentInputDisplay;
  });
}

// addEventListener to period key
keyPeriod.addEventListener('click', () => {
  displayInput('.');
});

let answer;

// addEventListener to equal button
keyEqual.addEventListener('click', () => {
  const secondNum = Number(currentInputDisplay);
  numbersArr.push(secondNum);
  previousInputDisplay += currentInputDisplay;
  previousResult.textContent = previousInputDisplay;
  console.log(...numbersArr);
  const answer = operate(operatorInput, ...numbersArr);
  currentInput.textContent = answer;
});

// Clear Current and History
keyClear.addEventListener('click', () => {
  resetScreen();
});

currentInput.innerHTML = '0';
