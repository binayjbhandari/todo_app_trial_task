// src/services/todoService.js
export function getTodos() {
  return JSON.parse(localStorage.getItem('todos')) || [];
}

export function addTodo(newTodo) {
  const todos = getTodos();
  const maxId = todos.length > 0 ? Math.max(...todos.map((t) => t.id)) : 0;
  const todoWithId = { ...newTodo, id: maxId + 1 };
  todos.push(todoWithId);
  localStorage.setItem('todos', JSON.stringify(todos));
}

export function updateTodo(id, updatedTodo) {
  const todos = getTodos();
  const index = todos.findIndex((t) => t.id === id);
  if (index !== -1) {
    todos[index] = { ...todos[index], ...updatedTodo };
    localStorage.setItem('todos', JSON.stringify(todos));
  }
}

export function deleteTodo(id) {
  const todos = getTodos();
  const filtered = todos.filter((t) => t.id !== id);
  localStorage.setItem('todos', JSON.stringify(filtered));
}