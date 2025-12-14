import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TodoList from './pages/TodoList';
import CreateTodo from './pages/CreateTodo';
import EditTodo from './pages/EditTodo';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/todos" element={<TodoList />} />
          <Route path="/todos/create" element={<CreateTodo />} />
          <Route path="/todos/:id/edit" element={<EditTodo />} />
          <Route path="*" element={<div className="text-center text-2xl mt-10">404 - Not Found</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
