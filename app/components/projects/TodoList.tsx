"use client";

import React, { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState(["Learn HTML", "Learn CSS", "Learn JS"]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, input.trim()]);
      setInput("");
    }
  };

  const removeTodo = (idx: number) => {
    setTodos(todos.filter((_, i) => i !== idx));
  };

  return (
    <div className="flex items-center justify-center h-96">
      <div className="dark:bg-[#303030] p-6 rounded-lg border-2 w-full max-w-xs">
        <div className="flex gap-2 mb-4">
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === "Enter" && addTodo()}
            placeholder="Add a task..."
            className="flex-1 px-3 py-2 border rounded-lg text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
          <button onClick={addTodo} className="px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm font-semibold">Add</button>
        </div>
        <ul className="space-y-2">
          {todos.map((todo, idx) => (
            <li key={idx} className="flex items-center justify-between bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded-lg text-sm">
              <span className="text-gray-800 dark:text-gray-200">{todo}</span>
              <button onClick={() => removeTodo(idx)} className="text-red-500 hover:text-red-700 font-bold ml-2">&times;</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
