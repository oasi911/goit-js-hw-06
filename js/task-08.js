const form = document.querySelector("form.login-form");

const submitResult = (event) => {
  event.preventDefault();

  const mailValue = event.target.elements.email.value;
  const mailType = [event.target.elements.email.type];
  const passValue = event.target.elements.password.value;
  const passType = [event.target.elements.password.type];

  let formData = {
    [mailType]: mailValue,
    [passType]: passValue,
  };

  if (mailValue === "" || passValue === "") {
    alert("Все поля должны быть заполнены");
  }

  event.target.reset();

  console.log(formData);
};

form.addEventListener("submit", submitResult);
