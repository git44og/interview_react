import React, { useState } from "react";
import "./App.css";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([
    {
      text: "Meet friend for lunch",
    },
    {
      text: "Build really cool todo app",
    },
    {
      text: "Do some sports",
    },
  ]);

  return (
    <div className="app">
      <h1>ToDo App</h1>
      <div className="todo-list">
        <TodoList todos={todos} setTodos={setTodos} />
        <TodoForm todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}

export default App;
