const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "toDos";

let toDos = [];

function deleteToDo(event) {
  const deleteLi = event.target.parentElement;
  deleteLi.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(deleteLi.id));
  savetoDos();
}

function savetoDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "✖︎";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newToDosObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newToDosObj);
  paintToDo(newToDosObj);
  savetoDos();
}

todoForm.addEventListener("submit", handleToDoSubmit);

const saveToDos = localStorage.getItem(TODOS_KEY);

if (saveToDos !== null) {
  const paredToDos = JSON.parse(saveToDos);
  toDos = paredToDos;
  paredToDos.forEach(paintToDo);
}
