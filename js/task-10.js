function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let defAmount = 0;
const elControls = document.querySelector("#controls");
const input = document.querySelector("input");
const btnCreate = document.querySelectorAll("button")[0];
const btnDestroy = document.querySelectorAll("button")[1];
const form = document.querySelector("#boxes");
btnCreate.addEventListener("click", createBoxes);
btnDestroy.addEventListener("click", destroyBoxes);

function createBoxes(event) {
  let amount = input.value;
  const boxes = [];
  if (amount > 0) {
    for (let i = 0; i < amount; i += 1) {
      const divEl = document.createElement("div");
      divEl.style.width = 30 + 10 * (defAmount + i) + "px";
      divEl.style.height = 30 + 10 * (defAmount + i) + "px";
      divEl.style.backgroundColor = getRandomHexColor();
      boxes.push(divEl);
    }
  }
  defAmount += Number(amount);
  form.append(...boxes);
}

function destroyBoxes() {
  form.innerHTML = "";
  defAmount = 0;
}
