import React, { useState } from "react";

const TodoForm = ({ todos, setTodos }) => {
  const [value, setValue] = useState("");

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <>
      <input
        type="text"
        className="input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleSubmit}>add</button>
    </>
  );
};

export default TodoForm;
