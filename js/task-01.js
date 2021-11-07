"use strict";
const listWithId = document.querySelectorAll(".item");
const listWithIdNumber = listWithId.length;
console.log(`Number of categories: ${listWithIdNumber}`);

listWithId.forEach((item, index) => {
  console.log("Category:", item.querySelector("h2").textContent);
  console.log("Elements:", item.querySelectorAll("li").length);
});
