import React from "react";

const TodoList = ({ todos, setTodos }) => {
  const Todo = ({ todo }) => {
    return (
      <div
        className="todo"
        style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      >
        {todo.text}
        <div>
          <button>done</button>
          <button>x</button>
        </div>
      </div>
    );
  };

  return todos.map((todo, index) => <Todo key={index} todo={todo} />);
};

export default TodoList;
