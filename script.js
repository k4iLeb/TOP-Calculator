// ================= SELECTORS =====================
const body = document.querySelector("body");
const bntContainer = document.querySelector(".btns-container");
const buttons = document.querySelectorAll(".btns");
const display = document.querySelector(".display");

// ================= VARIABLES =====================

let numOne = 0;
let operator = "";
let numTwo = "";
let result = "";
display.textContent = numOne;

// ============= FUNCTIONALITY =========================

buttons.forEach((x) =>
  x.addEventListener("click", (e) => {
    const button = e.target;
    // **** CLEAR ****
    if (button.id == "clear") {
      numOne = 0;
      numTwo = "";
      operator = "";
      result = "";
      display.textContent = numOne;
      checkOperator();
    } else if (button.id == "divide") {
      if (numTwo == "") {
        operator = button.id;
      } else {
        operate(numOne, numTwo, operator);
        continueCalcs(button.id);
      }
      checkOperator();
    } else if (button.id == "multiply") {
      if (numTwo == "") {
        operator = button.id;
      } else {
        operate(numOne, numTwo, operator);
        continueCalcs(button.id);
      }
      checkOperator();
    } else if (button.id == "subtract") {
      if (numTwo == "") {
        operator = button.id;
      } else {
        operate(numOne, numTwo, operator);
        continueCalcs(button.id);
      }
      checkOperator();
    } else if (button.id == "add") {
      if (numTwo == "") {
        operator = button.id;
      } else {
        operate(numOne, numTwo, operator);
        continueCalcs(button.id);
      }
      checkOperator();
    } else if (button.id == "comma") {
      // **** COMMA ****;
      if (numTwo == "" && !operator) {
        if (numOne == 0) {
          numOne = "0.";
          display.textContent = numOne;
        }
        if (!numOne.includes(".")) {
          numOne += ".";
          display.textContent = numOne;
        }
      } else if (operator) {
        if (!numTwo.includes(".")) {
          numTwo += ".";
          display.textContent = numTwo;
        }
      }
    } else if (button.id == "operator") {
      // **** OPERATOR ****
      if (numTwo == "" || !numTwo) {
        return;
      }

      operate(numOne, numTwo, operator);
      operator = "";
      checkOperator();
    } else if (button.id == "backspace") {
      // **** BACKSPACE ****
      if (numOne && !operator && !result) {
        numOne = numOne.slice(0, numOne.length - 1);
        display.textContent = numOne;
      }
      if (numTwo && operator) {
        numTwo = numTwo.slice(0, numTwo.length - 1);
        display.textContent = numTwo;
      }
    } else {
      // **** DIGIT BTNS ****
      // IF numTwo IS ""
      if (numTwo == "" && !operator && !result) {
        if (numOne.toString().length < 8) {
          if (
            numOne.toString().startsWith("0") &&
            !numOne.toString().includes(".")
          ) {
            numOne = button.value;
            display.textContent = numOne;
          } else {
            numOne += button.value;
            display.textContent = numOne;
          }
        }
      } else if (operator) {
        if (numTwo.toString().length < 8) {
          numTwo += button.value;
          display.textContent = numTwo;
        }
      }
    }
  })
);

// **** KEYBOARD SUPPORT ****

document.addEventListener("keypress", (e) => {
  // **** DIGITS ****
  if (/[0-9]/.test(e.key)) {
    if (numTwo == "" && !operator && !result) {
      if (numOne.toString().length < 8) {
        if (
          numOne.toString().startsWith("0") &&
          !numOne.toString().includes(".")
        ) {
          numOne = e.key;
          display.textContent = numOne;
        } else {
          numOne += e.key;
          display.textContent = numOne;
        }
      }
    } else if (operator) {
      if (numTwo.toString().length < 8) {
        numTwo += e.key;
        display.textContent = numTwo;
      }
    }
  }
  // **** COMMA ****
  if (/[.]/.test(e.key)) {
    if (numTwo == "" && !operator) {
      if (numOne == 0) {
        numOne = "0.";
        display.textContent = numOne;
      }
      if (!numOne.includes(".")) {
        numOne += ".";
        display.textContent = numOne;
      }
    } else if (operator) {
      if (!numTwo.includes(".")) {
        numTwo += ".";
        display.textContent = numTwo;
      }
    }
  }
  // **** OPERATE ****
  if (e.key == "=" || e.key == "Enter") {
    if (numTwo == "" || !numTwo) {
      return;
    }

    operate(numOne, numTwo, operator);
    operator = "";
    checkOperator();
  }
  // **** CALCS ****
  if (/[-+/*]/.test(e.key)) {
    if (e.key == "/") {
      if (numTwo == "") {
        operator = "divide";
      } else {
        operate(numOne, numTwo, operator);
        continueCalcs("divide");
      }
    } else if (e.key == "*") {
      if (numTwo == "") {
        operator = "multiply";
      } else {
        operate(numOne, numTwo, operator);
        continueCalcs("multiply");
      }
    } else if (e.key == "-") {
      if (numTwo == "") {
        operator = "subtract";
      } else {
        operate(numOne, numTwo, operator);
        continueCalcs("subtract");
      }
    } else if (e.key == "+") {
      if (numTwo == "") {
        operator = "add";
      } else {
        operate(numOne, numTwo, operator);
        continueCalcs("add");
      }
    }
    checkOperator();
  }
  // **** CLEAR ****
  if (e.key == "c") {
    numOne = 0;
    numTwo = "";
    operator = "";
    result = "";
    display.textContent = numOne;
    checkOperator();
  }
});

// **** BACKSPACE ****
document.addEventListener("keydown", (e) => {
  if (e.key == "Backspace") {
    if (numOne && !operator && !result) {
      numOne = numOne.slice(0, numOne.length - 1);
      display.textContent = numOne;
    }
    if (numTwo && operator) {
      numTwo = numTwo.slice(0, numTwo.length - 1);
      display.textContent = numTwo;
    }
  }
});

// **** FUNCTIONS ****

function operate(numOne, numTwo, operator) {
  numOne = Number(numOne);
  numTwo = Number(numTwo);
  if (operator == "add") {
    result = (numOne + numTwo).toFixed(2);
  }
  if (operator == "subtract") {
    result = (numOne - numTwo).toFixed(2);
  }
  if (operator == "multiply") {
    result = (numOne * numTwo).toFixed(2);
  }
  if (operator == "divide") {
    if (numTwo == 0) {
      alert("Can't Divide by 0!");
      result = numOne;
    } else {
      result = (numOne / numTwo).toFixed(2);
    }
  }
  numOne = result;
  if (numOne.toString().length > 20) numOne = NaN;
  display.textContent = numOne;
}

function continueCalcs(button) {
  numOne = result;
  numTwo = "";
  operator = button;
}

// **** CHANGE COLOR FOR SELECTED OPERATOR *****
function checkOperator() {
  let btns = document.querySelectorAll(".calc-btns");
  if (operator) {
    btns.forEach((button) => (button.style.backgroundColor = "#EBCB64"));
    let button = document.querySelector(`#${operator}`);
    button.style.backgroundColor = "#DBB539";
  } else {
    btns.forEach((button) => (button.style.backgroundColor = "#EBCB64"));
  }
}

// ================ BUTTON EFFECTS =================
// **** MOUSEDOWN & MOUSEUP ANIMATIONS ****
buttons.forEach((x) =>
  x.addEventListener("mousedown", (e) => {
    const button = e.target;
    button.style.boxShadow = "inset 0px 0px 5px rgb(53, 52, 52)";
  })
);

document.addEventListener("mouseup", () => {
  for (let button of buttons) {
    button.style.boxShadow = "none";
  }
});

// ================ KEYBOARD EFFECTS =================

document.addEventListener("keydown", (e) => {
  if (/[0-9/+\-=*\.]/.test(e.key)) {
    let value;
    switch (e.key) {
      case ".":
        value = "comma";
        break;
      case "0":
        value = "zero";
        break;
      case "1":
        value = "one";
        break;
      case "2":
        value = "two";
        break;
      case "3":
        value = "three";
        break;
      case "4":
        value = "four";
        break;
      case "5":
        value = "five";
        break;
      case "6":
        value = "six";
        break;
      case "7":
        value = "seven";
        break;
      case "8":
        value = "eight";
        break;
      case "9":
        value = "nine";
        break;
      case "Backspace":
        value = "backspace";
        break;
      case "-":
        value = "subtract";
        break;
      case "+":
        value = "add";
        break;
      case "*":
        value = "multiply";
        break;
      case "/":
        value = "divide";
        break;
      case "=":
        value = "operator";
        break;
      case "c":
        value = "clear";
        break;
      default:
        break;
    }
    let button = document.querySelector(`#${value}`);
    button.style.boxShadow = "inset 0px 0px 5px rgb(53, 52, 52)";
  }
  if (e.key == "Backspace") {
    let button = document.querySelector("#backspace");
    button.style.boxShadow = "inset 0px 0px 5px rgb(53, 52, 52)";
  }
  if (e.key == "Enter") {
    let button = document.querySelector("#operator");
    button.style.boxShadow = "inset 0px 0px 5px rgb(53, 52, 52)";
  }
});

document.addEventListener("keyup", (e) => {
  if (/[0-9/+\-=*\.]/.test(e.key)) {
    let value;
    switch (e.key) {
      case ".":
        value = "comma";
        break;
      case "0":
        value = "zero";
        break;
      case "1":
        value = "one";
        break;
      case "2":
        value = "two";
        break;
      case "3":
        value = "three";
        break;
      case "4":
        value = "four";
        break;
      case "5":
        value = "five";
        break;
      case "6":
        value = "six";
        break;
      case "7":
        value = "seven";
        break;
      case "8":
        value = "eight";
        break;
      case "9":
        value = "nine";
        break;
      case "Backspace":
        value = "backspace";
        break;
      case "-":
        value = "subtract";
        break;
      case "+":
        value = "add";
        break;
      case "*":
        value = "multiply";
        break;
      case "/":
        value = "divide";
        break;
      case "=":
        value = "operator";
        break;
      case "c":
        value = "clear";
        break;
      default:
        break;
    }
    let button = document.querySelector(`#${value}`);
    button.style.boxShadow = "none";
  }
  if (e.key == "Backspace") {
    let button = document.querySelector("#backspace");
    button.style.boxShadow = "none";
  }
  if (e.key == "Enter") {
    let button = document.querySelector("#operator");
    button.style.boxShadow = "none";
  }
});
