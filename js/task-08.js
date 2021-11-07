"use strict";
const form = document.querySelector("form");
form.addEventListener("submit", onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  if (formElements.email.value === "" || formElements.password.value === "") {
    alert("Please fill in all the fields!");
    return;
  }

  const mail = formElements.email.value;
  const pass = formElements.password.value;
  const formData = { mail, pass };
  console.log(formData);
  event.currentTarget.reset();
}
