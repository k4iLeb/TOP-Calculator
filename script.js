// ================= SELECTORS =====================
const body = document.querySelector("body");
const bntContainer = document.querySelector(".btns-container");
const buttons = document.querySelectorAll(".btns");
const display = document.querySelector(".display");

// ================= VARIABLES =====================

let numOne = "";
// console.log(numOne);

let operator = "";
// console.log(operator);

let numTwo = "";

display.textContent = numOne;

// ============= FUNCTIONALITY =========================

buttons.forEach((x) =>
  x.addEventListener("click", (e) => {
    const button = e.target;
    // **** CLEAR ****
    if (button.id == "clear") {
      numOne = "";
      numTwo = "";
      operator = "";
      display.textContent = 0;
    } else if (button.id == "divide") {
      if (numTwo == "") {
        operator = button.id;
      }
    } else if (button.id == "multiply") {
      if (numTwo == "") {
        operator = button.id;
      }
    } else if (button.id == "subtract") {
      if (numTwo == "") {
        operator = button.id;
      }
    } else if (button.id == "add") {
      if (numTwo == "") {
        operator = button.id;
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
      console.log(numOne);
      console.log(numTwo);
      console.log(operator);
    } else {
      // **** DIGIT BTNS ****
      // IF numTwo IS ""
      if (numTwo == "" && !operator) {
        numOne += button.id;
        display.textContent = numOne;
      } else {
        numTwo += button.id;
        display.textContent = numTwo;
      }
      // console.log(display.textContent);
    }

    // console.log(button.id);
  })
);

// console.log(buttons);

// ================ BUTTON EFFECTS =================

buttons.forEach((x) =>
  x.addEventListener("mousedown", (e) => {
    const button = e.target;
    button.setAttribute(
      "style",
      "box-shadow: inset 0px 0px 5px rgb(53, 52, 52)"
    );
  })
);

document.addEventListener("mouseup", () => {
  for (let button of buttons) {
    button.setAttribute("style", "box-shadow: 0");
  }
});
