import React, { useState } from 'react';
import './Contact.css';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import Header from '../components/Header';

const Contact = () => {
  const navigate = useNavigate(); 

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // To manage form errors
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');

  //To validate the form inputs
  const validateForm = () => {
    let isValid = true;

    // Validate name
    if (!name.trim()) {
      setNameError('Name is required');
      isValid = false;
    } else {
      setNameError('');
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailPattern.test(email)) {
      setEmailError('Valid email is required');
      isValid = false;
    } else {
      setEmailError('');
    }

    // Validate message
    if (!message.trim()) {
      setMessageError('Message is required');
      isValid = false;
    } else {
      setMessageError('');
    }

    return isValid;
  };

  //To handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form
    if (validateForm()) {
      console.log('Form submitted:', { name, email, message });

      // Clear form inputs
      setName('');
      setEmail('');
      setMessage('');
    }
  };
  const goBack = () => {
    navigate('/');
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
          <div className="error-message">{nameError}</div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <div className="error-message">{emailError}</div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <div className="error-message">{messageError}</div>
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
      <button className="go-back-btn" onClick={goBack}>
          Back
        </button>
    </div>
  );
};

export default Contact;
