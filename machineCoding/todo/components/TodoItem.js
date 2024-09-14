const TodoItem=(todoItem)=>{
return `
  <div class="todo-item-container">
     <div class="todo-item">${todoItem.task}</div>
     <div class="todo-btn">
     <button class="btn" id="edit-btn" data-id=${todoItem.id}>Edit</button>
     <button class="btn" id="delete-btn" data-id=${todoItem.id}>Delete</button>
     </div>
   </div>
`
}
export default TodoItem