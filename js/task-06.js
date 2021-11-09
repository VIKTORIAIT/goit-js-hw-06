const formInput = document.querySelector("input");
formInput.addEventListener("blur", (event) => {
  let evCurTar = event.currentTarget;
  const toggleFunc = (a, b) => {
    evCurTar.classList.add(a);
    evCurTar.classList.remove(b);
  };
  if (evCurTar.value.length !== +formInput.getAttribute("data-length")) {
    toggleFunc("invalid", "valid");
  } else {
    toggleFunc("valid", "invalid");
  }
});
