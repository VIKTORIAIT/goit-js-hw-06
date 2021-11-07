const spanValue = document.querySelector("#value");
let counterValue = 0;
const counterDiv = document.querySelector("#counter");
const arrBtn = counterDiv.querySelectorAll("button");

arrBtn[0].addEventListener("click", () => {
  console.log("I am clicked");
  spanValue.innerHTML = --counterValue;
});

arrBtn[1].addEventListener("click", () => {
  console.log("I am clicked");
  spanValue.innerHTML = ++counterValue;
});
