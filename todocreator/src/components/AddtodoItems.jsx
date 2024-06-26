import React, { useState } from 'react';
import { UseTodo } from '../contexts/TodoContext';

function AddtodoItems({ todo }) {
  const [iseditable, setiseditable] = useState(false);
  const [todoMsg, settodomsg] = useState(todo.todo);

  const { UpdateTodo, DeleteTodo, toggleComplete } = UseTodo();

  const update = () => {
    UpdateTodo(todo.id, { ...todo, todo: todoMsg });
    setiseditable(false); 
  };

  const togglecompleted = () => {
    toggleComplete(todo.id);
  };

  return (
    <div
      className={`flex items-center border text-black p-4 rounded-md ${todo.complete ? "bg-slate-400" : "bg-lime-100"}`}
    >
      <input
        className="mr-4 cursor-pointer"
        type="checkbox"
        checked={todo.complete}
        onChange={togglecompleted}
      />
      <input
        type="text"
        value={todoMsg}
        className={`flex-1 bg-transparent ${iseditable ? "px-2 py-2 border-black" : "border-transparent"} focus:outline-none`}
        readOnly={!iseditable}
        onChange={(e) => settodomsg(e.target.value)}
      />
      <button
        className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
        onClick={() => {
          if (todo.complete) return;
          if (iseditable) {
            update();
          } else {
            setiseditable((prev) => !prev);
          }
        }}
      >
        <i className={`fas ${iseditable ? 'fa-save' : 'fa-edit'}`}></i>
      </button>
      <button
        className="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
        onClick={() => {
          DeleteTodo(todo.id);
        }}
      >
        <i className="fas fa-trash-alt"></i>
      </button>
    </div>
  );
}

export default AddtodoItems;
