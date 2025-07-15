const calc = document.getElementById("calc");
const toggle = document.getElementById("toggle-mode");
const toggleText = document.getElementById("toggle-text");
const expression = document.getElementById("expression");
const result = document.getElementById("result");

toggle.addEventListener("change", () => {
  if (toggle.checked) {
    calc.classList.remove("theme-light");
    calc.classList.add("theme-dark");
    toggleText.textContent = "🌙 Switch to Light";
  } else {
    calc.classList.remove("theme-dark");
    calc.classList.add("theme-light");
    toggleText.textContent = "🌞 Switch to Dark";
  }
});

let currentExp = "";

function clearCalc() {
  currentExp = "";
  expression.innerText = "";
  result.innerText = "0";
}

function calculate() {
  try {
    const evalResult = eval(currentExp.replace("x", "*"));
    result.innerText = evalResult;
  } catch {
    result.innerText = "Error";
  }
}

function appendValue(val) {
  if (val === "+/-") {
    if (currentExp) {
      currentExp = `(${currentExp})`;
    }
  } else {
    currentExp += val;
  }
  expression.innerText = currentExp;
}
