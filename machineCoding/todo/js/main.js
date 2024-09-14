import Header from "../components/Header.js";
import TodoList from "../components/TodoList.js";
import { loadTodo, saveTodo } from "../utils/utils.js";

const headerContainer = document.getElementById("header");
const todoList = document.getElementById("todo-list-container");
let isEdit = false;
let todos = loadTodo() || [];
const render = () => {
  headerContainer.innerHTML = Header();
  todoList.innerHTML = TodoList(todos);
  console.log(isEdit);
  document
    .getElementById("add-todo")
    .addEventListener("click", isEdit ? updateTodo : addTodo);
  todoList.addEventListener("click", (event) => {
    if (event.target && event.target.id === "delete-btn") {
      const id = event.target.dataset.id;
      deleteTodo(id);
    }
    if (event.target && event.target.id === "edit-btn") {
      const id = event.target.dataset.id;
      editTodo(id);
    }
  });
};
const addTodo = () => {
  const inputTodo = document.getElementById("todo-input");
  if (!inputTodo.value) {
    alert("please enter task !");
    return;
  }
  const todoObj = {
    task: inputTodo.value,
    id: crypto.randomUUID(),
    complete: false,
  };
  todos = [todoObj, ...todos];
  saveTodo(todos);
  headerContainer.innerHTML = "";
  render();
};

const deleteTodo = (id) => {
  todos = todos.filter((item) => item.id !== id);
  saveTodo(todos);
  render();
};

const editTodo = (id) => {
  console.log(isEdit);
  if (id) {
    const todoEdit = todos.find((item) => item.id === id);
    const todoInput = document.getElementById("todo-input");
    todoInput.value = todoEdit.task;
    isEdit = true;
    document.getElementById("add-todo").innerText = "Update Todo";
  }
};
const updateTodo = () => {
  const editText = document.getElementById("input-todo");
  console.log(editText.value);
};
render();
