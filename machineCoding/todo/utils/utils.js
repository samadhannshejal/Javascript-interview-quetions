export function loadTodo(){
    const todo=localStorage.getItem('todo');
  
    return todo ? JSON.parse(todo):[];
}
export function saveTodo(todo){

   localStorage.setItem('todo',JSON.stringify(todo))
}