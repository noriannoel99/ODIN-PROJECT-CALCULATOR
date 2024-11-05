// 1. press first number - save that number
// 2. press operator - save that operator
// 3. press second number - save second number
// 4. press equal sign - make calculation
// 5. result become first number - to continue the calculation

let firstNumber;
let secondNumber;
let step = 0;
let operation;
let result = 0;

let numArray = [];
let secondNumArray = [];

let display = document.getElementById("display");
let calculationDisplay = document.getElementById("calculationDisplay");

function getNumber(num) {
  if (step === 0 || step === 1) {
    numArray.push(num);
    step = 1;
    firstNumber = Number(numArray.join(""));
    display.value = firstNumber;
    calculationDisplay.value =
      firstNumber + (operation ? ` ${operation} ` : "");
  } else if (step === 2) {
    secondNumArray.push(num);
    secondNumber = Number(secondNumArray.join(""));
    display.value = secondNumber;
    calculationDisplay.value = `${firstNumber} ${operation} ${secondNumber}`;
  }
}

function getOperator(op) {
  if (step === 1) {
    step = 2;
    operation = op;
    calculationDisplay.value = `${firstNumber} ${operation}`;
  }
}

function clearDisplay() {
  display.value = 0;
  calculationDisplay.value = "";
  firstNumber = null;
  secondNumber = null;
  step = 0;
  operation = null;
  result = 0;
  numArray = [];
  secondNumArray = [];
}

const calculateEquals = () => {
  if (operation && secondNumber != null) {
    if (operation === "+") {
      result = firstNumber + secondNumber;
    } else if (operation === "-") {
      result = firstNumber - secondNumber;
    } else if (operation === "*") {
      result = firstNumber * secondNumber;
    } else if (operation === "/") {
      result = secondNumber !== 0 ? firstNumber / secondNumber : "Error"; // Avoid division by zero
    }
    calculationDisplay.value = `${firstNumber} ${operation} ${secondNumber} =`;
    display.value = result;
    firstNumber = result; // Set result as the first number for further calculations
    numArray = [result]; // Update numArray to allow further operations
    secondNumArray = [];
    step = 1; // Reset step to accept a new operator
    secondNumber = null;
    operation = null;
  }
};

function delLastInput() {
  if (step === 1 && numArray.length > 0) {
    numArray.pop();
    firstNumber = numArray.length > 0 ? Number(numArray.join("")) : 0;
    display.value = firstNumber;
    calculationDisplay.value =
      firstNumber + (operation ? ` ${operation} ` : "");
  } else if (step === 2 && secondNumArray.length > 0) {
    secondNumArray.pop();
    secondNumber =
      secondNumArray.length > 0 ? Number(secondNumArray.join("")) : 0;
    calculationDisplay.value = `${firstNumber} ${operation} ${secondNumber}`;
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
