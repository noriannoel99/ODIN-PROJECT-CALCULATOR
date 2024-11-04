// 1. press one number - save that number
// 2. press operator - save that operator
// 3. press second number - save second number
// 4. press equal sign = make calculation

let firstNumber;
let secondNumber;
let step = 0;
let operation;
let result = 0;

let numArray = [];
let secondNumArray = [];

let display = document.getElementById("display");

function getNumber(num) {
  if (step === 0 || step === 1) {
    numArray.push(num);
    step = 1;
    firstNumber = Number(numArray.join(""));
    display.value = firstNumber;
  } else if (step === 2) {
    secondNumArray.push(num);
    secondNumber = Number(secondNumArray.join(""));
    display.value = secondNumber;
  }
}

function getOperator(op) {
  step = 2;
  operation = op;
}

function clearDisplay() {
  display.value = 0;
  firstNumber = null;
  secondNumber = null;
  step = 0;
  operation = null;
  result = 0;
  numArray = [];
  secondNumArray = [];
}

const calculateEquals = () => {
  if (operation === "+") {
    result = firstNumber + secondNumber;
    display.value = result;
  } else if (operation === "-") {
    result = firstNumber - secondNumber;
    display.value = result;
  } else if (operation === "*") {
    result = firstNumber * secondNumber;
    display.value = result;
  } else if (operation === "/") {
    result = firstNumber / secondNumber;
    display.value = result;
  }
};

function delLastInput() {
  if (step === 1 && numArray.length > 0) {
    numArray.pop();
    firstNumber = numArray.length > 0 ? Number(numArray.join("")) : 0;
    display.value = firstNumber;
  } else if (step === 2 && secondNumArray.length > 0) {
    secondNumArray.pop();
    secondNumber =
      secondNumArray.length > 0 ? Number(secondNumArray.join("")) : 0;
    display.value = secondNumber;
  }
}

function addDecimal() {
  if (step === 1) {
    if (!numArray.includes(".")) {
      numArray.push(".");
      display.value = numArray.join("");
    }
  } else if (step === 2) {
    if (!secondNumArray.includes(".")) {
      secondNumArray.push(".");
      display.value = secondNumArray.join("");
    }
  }
}