const formInput = document.querySelector("input");
formInput.addEventListener("blur", (event) => {
  if (
    event.currentTarget.value.length !== +formInput.getAttribute("data-length")
  ) {
    event.currentTarget.classList.add("invalid");
    event.currentTarget.classList.remove("valid");
  } else {
    event.currentTarget.classList.add("valid");
    event.currentTarget.classList.remove("invalid");
  }
});
