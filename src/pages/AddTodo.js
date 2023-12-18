import React, { useState } from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
export const AddTodo = ({ addTodo }) => {
  const [todo, setTodo] = useState({ title: '', desc: '' });

  const { title, desc } = todo;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodo({
      ...todo,
      [name]: value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert('Title or Description cannot be blank');
    } else {
      addTodo(title, desc);
      setTodo({ title: '', desc: '' });
    }
  };

  return (
    <div className="container my-3">
      <nav className="tabs">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </nav>
      <Header /><br />
      <h3>Add a Todo</h3><br/>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Todo Title
          </label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={handleChange}
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Todo Description
          </label>
          <input
            type="text"
            name="desc"
            value={desc}
            onChange={handleChange}
            className="form-control"
            id="desc"
          />
        </div>
        <button type="submit" className="btn btn-sm btn-success">
          Add Todo
        </button>
      </form>
    </div>
  );
};