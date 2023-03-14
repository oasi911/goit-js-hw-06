const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const list = document.querySelector(".gallery");
list.style.display = "flex";
list.style.listStyle = "none";

list.insertAdjacentHTML(
  "beforeend",
  images
    .map(
      (image) =>
        `<li class="item"><img src="${image.url}" alt="${image.alt}"></li>`
    )
    .join("")
);

const items = list.querySelectorAll("li");
items.forEach((item) => {
  item.style.display = "flex";
  item.style.margin = "15px";
  const image = item.querySelector("img");
  image.style.width = "500px";
});
