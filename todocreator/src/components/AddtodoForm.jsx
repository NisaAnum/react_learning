import React, { useState } from 'react';
import { UseTodo } from '../contexts/TodoContext'; 

function AddtodoForm() {
  const [todo, settodo] = useState(""); // Initialize to an empty string

  const { AddTodo } = UseTodo();

  const add = (e) => {
    e.preventDefault();
    if (!todo) return;
    AddTodo({ todo, complete: false }); 
    settodo(""); // Reset the input field
  };

  return (
    <form onSubmit={add} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="flex items-center mb-4">
        <input 
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          type="text" 
          placeholder="TODO" 
          value={todo} 
          onChange={(e) => settodo(e.target.value)} 
        />
        <button 
          className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
          type="submit"
        >
          Add
        </button>
      </div>
    </form>
  );
}

export default AddtodoForm;
