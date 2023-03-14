const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

const listElements = ingredients.map((ingredient) => {
  const element = document.createElement("li");
  element.classList.add(ingredient);
  element.setAttribute("class", "item");
  element.textContent = ingredient;
  return element;
});

list.append(...listElements);
