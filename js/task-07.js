const fontSizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

const fontSizeControlFn = () =>
  (text.style.fontSize = `${fontSizeControl.value}px`);

fontSizeControlFn();

fontSizeControl.addEventListener("input", fontSizeControlFn);
