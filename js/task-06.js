const formInput = document.querySelector("input");
console.log(formInput);
formInput.addEventListener("blur", (event) => {
  console.log(event.currentTarget.value);
  console.log(formInput.getAttribute("data-length"));
  if (
    event.currentTarget.value.length !== +formInput.getAttribute("data-length")
  ) {
    if (event.currentTarget.classList.contains("valid")) {
      event.currentTarget.classList.remove("valid");
    }
    event.currentTarget.classList.add("invalid");
  } else {
    if (event.currentTarget.classList.contains("invalid")) {
      event.currentTarget.classList.remove("invalid");
    }
    event.currentTarget.classList.add("valid");
  }
});
