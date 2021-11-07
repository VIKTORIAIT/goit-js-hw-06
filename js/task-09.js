function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyTag = document.querySelector("body");
const btnColor = document.querySelector(".change-color");
const spanText = document.querySelector(".color");

btnColor.addEventListener("click", onClickBtn);

function onClickBtn(event) {
  const func = getRandomHexColor();
  bodyTag.style.backgroundColor = func;
  spanText.textContent = func;
  console.log(func);
}
