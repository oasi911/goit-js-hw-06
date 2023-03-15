const form = document.querySelector("form.login-form");

const submitResult = (event) => {
  event.preventDefault();

  const mailValue = event.target.elements.email.value;
  const mailName = [event.target.elements.email.name];
  const passValue = event.target.elements.password.value;
  const passName = [event.target.elements.password.name];

  let formData = {
    [mailName]: mailValue,
    [passName]: passValue,
  };

  if (mailValue === "" || passValue === "") {
    alert("Все поля должны быть заполнены");
    return;
  }

  event.target.reset();

  console.log(formData);
};

form.addEventListener("submit", submitResult);
