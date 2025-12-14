import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getTodos, deleteTodo } from '../services/todoServices';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setTodos(getTodos());
  }, []);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this todo?')) {
      deleteTodo(id);
      setTodos(getTodos());
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Todo List</h1>
        <button
          onClick={() => navigate('/todos/create')}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add New Todo
        </button>
      </div>

      {todos.length === 0 ? (
        <div className="text-center text-gray-500 mt-10">
          No todos yet. Create your first todo!
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {todos.map((todo) => (
            <div key={todo.id} className="bg-white p-6 rounded shadow">
              {todo.image && (
                <img
                  src={todo.image}
                  alt={todo.title}
                  className="w-full h-48 object-cover rounded mb-4"
                />
              )}
              <h2 className="text-xl font-semibold mb-2">{todo.title}</h2>
              {todo.description && (
                <p className="text-gray-600 mb-4">{todo.description}</p>
              )}
              <div className="flex justify-between items-center mb-4">
                <span
                  className={`px-2 py-1 rounded text-sm ${
                    todo.status === 'completed'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}
                >
                  {todo.status}
                </span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => navigate(`/todos/${todo.id}/edit`)}
                  className="flex-1 bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(todo.id)}
                  className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TodoList;
