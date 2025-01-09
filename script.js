// ================= SELECTORS =====================
const body = document.querySelector("body");
const bntContainer = document.querySelector(".btns-container");
const buttons = document.querySelectorAll(".btns");

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

// ============= FUNCTIONALITY =========================

buttons.forEach((x) =>
  x.addEventListener("click", (e) => {
    // console.log(e.target.style);
  })
);

// console.log(buttons);
