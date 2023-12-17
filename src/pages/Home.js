import React from 'react';
import './Home.css';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container">
      <nav className="tabs">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </nav>
      <Header /><br />
      <h1 className="main-heading">
        Welcome to our Productivity Hub!
      </h1>

      <section>
        <p className="section-description">
          Elevate your productivity with our seamlessly integrated ToDo List and Shopping Cart application.
        </p><br />
        <div className="project-section">
          <div className="feature todo-list" >
            <h2 className="feature-heading">To-Do List</h2>
            <p className="feature-description">
              Effortlessly manage your tasks. Add, complete, or remove tasks with ease. Keep track of your progress and stay organized.
            </p>
            <Link to="/todo" className="feature-button">Explore To-Do List</Link>
          </div>

          <div className="feature shopping-cart">
            <h2 className="feature-heading">Shopping Cart</h2>
            <p className="feature-description">
              Simplify your shopping experience. Add, remove items, and keep an eye on your shopping cart details. Enjoy a stress-free shopping journey.
            </p>
            <Link to="/shoppingcart" className="feature-button">Explore Shopping Cart</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
