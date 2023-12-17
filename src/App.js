import React, { useState, useEffect } from 'react';
import { Todos } from "./pages/Todos";
import { AddTodo } from "./pages/AddTodo";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';

function App() {
  // Your existing code for the ToDo list
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    const updatedTodos = todos.filter((e) => e !== todo);
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const addTodo = (title, desc) => {
    const sno = todos.length === 0 ? 0 : todos[todos.length - 1].sno + 1;
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
      completed: false,
    };
    setTodos([...todos, myTodo]);
  };

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleToggleComplete = (todo) => {
    const updatedTodos = todos.map((item) =>
      item.sno === todo.sno ? { ...item, completed: !item.completed } : item
    );
    setTodos(updatedTodos);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/todo" element={<>
          <AddTodo addTodo={addTodo} />
          <Todos todos={todos} onDelete={onDelete} onToggleComplete={handleToggleComplete} />
        </>} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
