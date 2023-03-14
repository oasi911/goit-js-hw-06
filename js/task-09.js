function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const text = document.querySelector("span.color");
const changeBtn = document.querySelector("button.change-color");

const changeColor = () => {
  const newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  text.textContent = newColor;
};

changeBtn.addEventListener("click", changeColor);
