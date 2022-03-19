const logInForm = document.querySelector(".login-form");
const logInInput = document.querySelector(".login-form input");
const greeting = document.querySelector("#greeting");
const link = document.querySelector("a");

const HIDDEN_CLASS_NAME = "hidden";

function onLogInSubmit(event) {
  const userName = logInInput.value;
  event.preventDefault();
  logInForm.classList.add(HIDDEN_CLASS_NAME);
  greeting.innerText = `Hello ${userName}`;
  greeting.classList.remove(HIDDEN_CLASS_NAME);
}

function handleLinkClick(event) {
  event.preventDefault();
  console.dir(event);
}

logInForm.addEventListener("submit", onLogInSubmit);
link.addEventListener("click", handleLinkClick);
