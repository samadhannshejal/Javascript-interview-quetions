import TodoItem from "./TodoItem.js";

const TodoList = (todo) => {
  return `
    ${todo.map((item, idx) => TodoItem(item))}
      
   `;
};
export default TodoList;
