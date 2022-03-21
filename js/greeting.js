const logInForm = document.querySelector(".login-form");
const logInInput = document.querySelector(".login-form input");
const greeting = document.querySelector("#greeting");
const link = document.querySelector("a");

const HIDDEN_CLASS_NAME = "hidden";
const USERNAME_KEY = "userName";

const savedUserName = localStorage.getItem(USERNAME_KEY);

function onLogInSubmit(event) {
  const userName = logInInput.value;
  event.preventDefault();
  logInForm.classList.add(HIDDEN_CLASS_NAME);
  localStorage.setItem(USERNAME_KEY, userName);
  paintGreetings(userName);
}

function paintGreetings(userInfo) {
  greeting.innerText = `Hello ${userInfo}`;
  greeting.classList.remove(HIDDEN_CLASS_NAME);
}

if (savedUserName === null) {
  logInForm.addEventListener("submit", onLogInSubmit);
} else {
  logInForm.classList.add(HIDDEN_CLASS_NAME);
  paintGreetings(savedUserName);
}
