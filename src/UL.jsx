import React from "react";


const Todo = ({ todo, toggleTask, removeTask }) => {
  const resolvedClass= {
    taxtDecoration: 'line-through',
    Opasity: '0,5'
  }
  return (
    <div className="item-todo">
      <div
        className = {todo.completed ? "item-text strike" : "item-text"}
        style = {todo.completed ? resolvedClass:{}}
      >
        {todo.task}
      </div>
      <div className="item-delete" onClick={() => removeTask(todo.id)}>
        x
      </div>
      <div>
      <input
        type = "checkbox"
        onChange = {() => toggleTask(todo.id)}
        defaultChecked = {todo.completed}
        className = "checkbox-round"
      />
      </div>
    </div>
  );
};
export default Todo