const input = document.querySelector("input#name-input");
const span = document.querySelector("span#name-output");

const rename = () => {
  if (!input.value) {
    span.textContent = "Anonymous";
  } else {
    span.textContent = input.value;
  }
};

input.addEventListener("input", rename);
