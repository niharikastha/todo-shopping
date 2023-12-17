// src/pages/Contact.js
import React, { useState } from 'react';
import './Contact.css'; // Import the Contact.css file for styling
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { name, email, message });
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="contact-container">
      <nav className="tabs">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Header /><br />

      <div className="contact-content">
        <h1>Contact Us</h1><br/>
        <p>Feel free to reach out to us with any inquiries or feedback.</p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>

          <button type="submit">Submit</button>
        </form>
        <br/><br/><br/>
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>Email: todo_shopping@email.com</p>
          <p>Phone: +91 123456789</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
