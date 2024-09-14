const Header = () => {
  return `
         <header class="app-header">
            <h1>Todo List</h1>
            <div class="input-header">
            <input type="text" placeholder="Please enter task name" id="todo-input"/ >  
            <button id="add-todo">Add TODO</button>
            </div>
            </header>
            <div class="divider"></div>
        `;
};
export default Header;
