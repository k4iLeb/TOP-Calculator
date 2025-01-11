// ================= SELECTORS =====================
const body = document.querySelector("body");
const bntContainer = document.querySelector(".btns-container");
const buttons = document.querySelectorAll(".btns");
const display = document.querySelector(".display");

// ================= VARIABLES =====================

let numOne = 0;
// console.log(numOne);

let operator = "";
// console.log(operator);

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
    } else if (button.id == "divide") {
      if (numTwo == "") {
        operator = button.id;
      } else {
        operate(numOne, numTwo, operator);
        continueCalcs(button.id);
      }
    } else if (button.id == "multiply") {
      if (numTwo == "") {
        operator = button.id;
      } else {
        operate(numOne, numTwo, operator);
        continueCalcs(button.id);
      }
    } else if (button.id == "subtract") {
      if (numTwo == "") {
        operator = button.id;
      } else {
        operate(numOne, numTwo, operator);
        continueCalcs(button.id);
      }
    } else if (button.id == "add") {
      if (numTwo == "") {
        operator = button.id;
      } else {
        operate(numOne, numTwo, operator);
        continueCalcs(button.id);
      }
    } else if (button.id == "comma") {
      // **** COMMA ****;
      if (numTwo == "") {
        if (!numOne.includes(".")) {
          numOne += ".";
          display.textContent = numOne;
        }
      } else {
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
      // display.textContent = result;
      operator = "";
      // console.log(`numOne :${Number(numOne)}`);
      // console.log(`numOne :${Number(numTwo)}`);
      // console.log(`operator :${operator}`);
      // console.log(`result :${result}`);
    } else {
      // **** DIGIT BTNS ****
      // IF numTwo IS ""
      if (numTwo == "" && !operator && !result) {
        numOne += button.id;
        display.textContent = numOne;
      }
      // else if (numOne != "" && operator) {
      //   numTwo += button.id;
      //   display.textContent = numTwo;
      // }
      else {
        numTwo += button.id;
        display.textContent = numTwo;
      }
      // console.log(display.textContent);
    }

    // console.log(button.id);
  })
);

function operate(numOne, numTwo, operator) {
  numOne = Number(numOne);
  numTwo = Number(numTwo);
  if (operator == "add") {
    result = (Math.round(numOne + numTwo) * 100) / 100;
  }
  if (operator == "subtract") {
    result = (Math.round(numOne - numTwo) * 100) / 100;
  }
  if (operator == "multiply") {
    result = (Math.round(numOne * numTwo) * 100) / 100;
  }
  if (operator == "divide") {
    result = (Math.round(numOne / numTwo) * 100) / 100;
  }
  numOne = result;
  if (numOne.toString().length > 10) numOne = NaN;
  display.textContent = numOne;
}

function continueCalcs(button) {
  numOne = result;
  numTwo = "";
  operator = button;
}

// console.log(buttons);

// ================ BUTTON EFFECTS =================
// **** MOUSEDOWN & MOUSEUP ANIMATIONS ****
buttons.forEach((x) =>
  x.addEventListener("mousedown", (e) => {
    const button = e.target;
    // console.log(button.classList);
    if (!button.classList.contains("calc-btns")) {
      // console.log("hi");
      button.setAttribute(
        "style",
        "box-shadow: inset 0px 0px 5px rgb(53, 52, 52)"
      );
    } else {
      button.setAttribute(
        "style",
        "box-shadow: inset 0px 0px 5px rgb(53, 52, 52); background-color: rgb(226, 179, 26)"
      );
    }
  })
);

document.addEventListener("mouseup", () => {
  for (let button of buttons) {
    if (!button.classList.contains("calc-btns")) {
      button.setAttribute("style", "box-shadow: 0");
    } else {
      if (operator != button.id) {
        button.setAttribute(
          "style",
          "box-shadow: 0; background-color: #f1c956"
        );
      }
    }
  }
});

// **** TODO => CHANGE COLOR FOR SELECTED OPERATOR *****
const calcBtns = [...buttons].filter(
  (x) =>
    x.classList.contains("calc-btns") || x.classList.contains("operator-btn")
);

calcBtns.forEach((button) =>
  button.addEventListener("click", (e) => {
    calcBtns.forEach((x) => {
      if (x.id != "operator") {
        x.setAttribute("style", "box-shadow: 0; background-color: #f1c956");
      }
    });
    if (button.id != "operator") {
      e.target.style.backgroundColor = "rgb(226, 179, 26)";
    }
  })
);

// calcBtns.forEach((button) => {
//   button.addEventListener("mouseup", () => {
//     button.setAttribute("style", "box-shadow: 0");
//     console.log(button.style);

//     // if (x.id != "operator") {
//     //   console.log(button);
//     // }
//   });
// });

// const operBtn = [...buttons].filter((x) =>
//   x.classList.contains("operator-btn")
// );

// console.log(operBtn);

// operBtn.addEventListener("click", () => {
//   console.log(hi);
// });
