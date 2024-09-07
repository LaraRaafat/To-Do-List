import React, { useState } from 'react';
import TodoList from './Components/TodoList';
import AddTodo from './Components/AddTodo';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text, date) => {
    const newTodo = { id: Date.now(), text, date, completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  return (
    <div className="app">
      <h1>To Do List</h1>
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} editTodo={editTodo} />
      <button className="clear-btn" onClick={clearCompleted}>Clear Completed</button>
    </div>
  );
};

export default App;
