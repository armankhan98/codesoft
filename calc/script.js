let currentNumber = "";
let previousNumber = "";
let operator = "";

const display = document.getElementById("display");

function appendNumber(number) {
  currentNumber += number;
  display.innerText = currentNumber;
}

function selectOperator(op) {
  previousNumber = currentNumber;
  currentNumber = "";
  operator = op;
}

function clearDisplay() {
  currentNumber = "";
  previousNumber = "";
  operator = "";
  display.innerText = "";
}

function calculate() {
  let result = 0;
  const prevNum = parseFloat(previousNumber);
  const currNum = parseFloat(currentNumber);

  if (operator === "+") {
    result = prevNum + currNum;
  } else if (operator === "-") {
    result = prevNum - currNum;
  } else if (operator === "*") {
    result = prevNum * currNum;
  } else if (operator === "/") {
    if (currNum === 0) {
      alert("Division by zero!");
      return;
    }
    result = prevNum / currNum;
  }

  currentNumber = result.toString();
  display.innerText = currentNumber;
}
