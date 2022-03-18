const logInForm = document.querySelector(".login-form");
const logInInput = document.querySelector(".login-form input");
const link = document.querySelector("a");

function onLogInSubmit(event) {
  const userName = logInInput.value;
  event.preventDefault();
  console.log(userName);
}

function handleLinkClick(event) {
  event.preventDefault();
  console.dir(event);
}

logInForm.addEventListener("submit", onLogInSubmit);
link.addEventListener("click", handleLinkClick);
