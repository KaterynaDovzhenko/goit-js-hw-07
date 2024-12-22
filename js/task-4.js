const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = formEl.elements.email.value;
  const password = formEl.elements.password.value;

  if (!email || !password) {
    alert("All form fields must be filled in");
    return;
  }

  const formData = {
    [formEl.elements.email.name]: email,
    [formEl.elements.password.name]: password,
  };
  console.log(formData);
  formEl.reset();
});
