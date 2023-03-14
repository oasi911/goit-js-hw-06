const list = document.querySelector("#categories");
const categoriesAmount = list.children.length;
console.log(`Number of categories: ${categoriesAmount}`);

const category = list.querySelectorAll("li.item");
category.forEach((list, index) => {
  const topic = category[index].querySelector("h2").textContent;
  const elementsAmount = category[index].lastElementChild.children.length;
  console.log(`Category: ${topic}`);
  console.log(`Elements: ${elementsAmount}`);
});
