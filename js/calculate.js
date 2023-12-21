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

// Calculate Variable 

const calculateResult = `<div class="text-xl flex justify-between items-center">
                        <p id="header-name"></p>
                        <p> <span id="calculate-value">12</span>cm <sup>2</sup></p>
                        <button class="bg-[#1090d8] py-2 px-3 rounded-md text-white font-semibold">Covert to m <sup>2</sup></button>
                    </div> `;

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
  const parent = document.getElementById("result-parent");
  parent.innerHTML = calculateResult;
});



// document.getElementById("add-btn").addEventListener("click", () => {
//   const parent = document.getElementById("result-parent");
//   parent.innerHTML = calculateResult;
// });

