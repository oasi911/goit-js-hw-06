const input = document.querySelector("#validation-input");

const equivalence = () => {
  const dataLength = input.getAttribute("data-length");
  const valueLength = input.value.length;

  if (valueLength === Number(dataLength)) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
};

input.addEventListener("blur", equivalence);
