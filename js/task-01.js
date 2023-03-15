const list = document.querySelector("#categories");
const categoriesAmount = list.children.length;
console.log(`Number of categories: ${categoriesAmount}`);

const category = list.querySelectorAll("li.item");
category.forEach((list) => {
  const topic = list.querySelector("h2").textContent;
  const elementsAmount = list.lastElementChild.children.length;
  console.log(`Category: ${topic}`);
  console.log(`Elements: ${elementsAmount}`);
});
