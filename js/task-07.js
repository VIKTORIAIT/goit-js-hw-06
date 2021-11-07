const inputSlider = document.querySelector("#font-size-control");
const textSpan = document.querySelector("#text");

inputSlider.addEventListener("input", (event) => {
  textSpan.style.fontSize = `${event.currentTarget.value}px`;
});
