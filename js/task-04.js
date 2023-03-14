const decrement = document.querySelector("button[data-action='decrement']");
const increment = document.querySelector("button[data-action='increment']");
const value = document.querySelector("#value");
let counterValue = 0;

const decrementFunc = () => {
  counterValue -= 1;
  value.textContent = counterValue;
};
const incrementFunc = () => {
  counterValue += 1;
  value.textContent = counterValue;
};

decrement.addEventListener("click", decrementFunc);
increment.addEventListener("click", incrementFunc);
