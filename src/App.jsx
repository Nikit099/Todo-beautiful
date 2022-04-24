import React, {useState} from "react";

import Todo from "./UL";
import ToDoForm from "./TodoFill/Input";
import "./Game.css"
import Myimage from "./TodoFill/bg-desktop-dark.jpg"
import Footer from "./Footer";

function App() {
  const [todos, setTodos] = useState([]);

  const addTask = (userInput) => {
    if (!userInput) return;
    const newItem = {
      id: Math.random().toString(36).substr(2, 9),
      task: userInput,
      completed: false
    };
    setTodos([newItem, ...todos]);
  };

  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };
  

  const handleToggle = (id) => {
    setTodos(
      todos.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="App">
      <header>
        <h1 className = "h1" >TODO </h1>
        <img src = {Myimage} alt = ''className = "after"></img>
      </header>
      <ToDoForm addTask={addTask} />
      {todos.map((todo) => {
        return (
          <Todo
            todo={todo}
            key={todo.id}
            toggleTask={handleToggle}
            removeTask={removeTask}
            completed = {todo.completed}
          />
     
        );
      })}
      <Footer/>
    </div>
  );
}


export default App;
