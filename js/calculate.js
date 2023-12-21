function randomRGBColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const bgColoe = "rgb(" + r + "," + g + "," + b + ")";
  return bgColoe;
}

document.getElementById("bg-color-1").addEventListener("mouseenter", () => {
  document.getElementById("bg-color-1").style.backgroundColor =
    randomRGBColor();
});

// Thir is Globle Scope

const a = 0.5;
const firstInput = document.getElementById("input-11");
const secondInput = document.getElementById("second-input");

function getCalculate() {
  const firstInputString = firstInput.value;
  firstInput.value = "";
  const firstInputIs = parseFloat(firstInputString);

  const secondInputString = secondInput.value;
  secondInput.value = "";
  const secondInputIs = parseFloat(secondInputString);

  const inputResultString = a * firstInputIs * secondInputIs;
  const inputResult = parseFloat(inputResultString);

  const headerName1 = document.getElementById("header-name-1");
  const headerName1Is = headerName1.innerText;

  const calculateHeaderName = document.getElementById("header-name");
  calculateHeaderName.innerText = headerName1Is;

  const caculateValue = document.getElementById("calculate-value");
  caculateValue.innerText = inputResult;
}

document.getElementById("calculate-btn-1").addEventListener("click", () => {
  getCalculate();
});
