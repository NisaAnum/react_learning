import { useEffect, useState } from 'react';
import './App.css';
import { TodoProvider } from './contexts/TodoContext';
import AddtodoItems from './components/AddtodoItems';
import AddtodoForm from './components/AddtodoForm';

function App() {
  const [todos, setTodos] = useState([]);

  const AddTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const UpdateTodo = (id, updatedTodo) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? updatedTodo : todo))
    );
  };

  const DeleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : todo
      )
    );
  };

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos && storedTodos.length > 0) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider value={{ todos, AddTodo, UpdateTodo, DeleteTodo, toggleComplete }}>
      <div className="max-w-lg mx-auto p-4">
        <AddtodoForm />
        <div className="mt-4 space-y-4">
          {todos.map((todo) => (
            <div key={todo.id} className="bg-white shadow-md rounded-lg p-4">
              <AddtodoItems todo={todo} />
            </div>
          ))}
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
