const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listIngridients = document.querySelector("#ingredients");

const arrayOfLiItems = ingredients.map((el) => {
  const liItem = document.createElement("li");
  liItem.textContent = el;
  liItem.classList.add("item");
  return liItem;
});

listIngridients.append(...arrayOfLiItems);
