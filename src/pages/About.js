import React from 'react';
import './About.css';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import teamMember1 from '../assets/team-member1.jpg';
import teamMember2 from '../assets/team-member2.jpg';
const About = () => {
  return (
    <div className="about-container">
      <nav className="tabs">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Header />
      <br />
      <section className="about-section">
        <h2>About Us</h2>
        <p>
          Welcome to our company! At Todo-Shopping, we are committed to delivering exceptional products and services,
          with a focus on enhancing productivity and organization for our users. Our mission is to empower individuals to efficiently manage their tasks
          through our innovative to-do list and shopping cart solutions.
        </p>
      </section>

      <section className="team-section">
        <h2>Our Team</h2>
        <div className="team-member">
          <img src={teamMember1} alt="Team Member 1" />
          <h3>Astha Niharika</h3>
          <p>Founder & CEO</p>
        </div>
        <div className="team-member">
          <img src={teamMember2} alt="Team Member 2" />
          <h3>Yash Jain</h3>
          <p>CEO</p>
        </div>
      </section>

      <section className="aboutproject-section">
        <h2>Our Projects</h2><br />
        <p>
          Welcome to our innovative project combining a ToDo List and a Shopping Cart to enhance your productivity and shopping experience.
        </p>
        <h4>To-Do List</h4>
        <p>
          Take control of your tasks with our advanced ToDo List. Add, complete, or remove tasks effortlessly. Stay organized and boost your productivity with ease.
        </p>
        <h4>Shopping Cart</h4>
        <p>
          Simplify your shopping journey with our state-of-the-art Shopping Cart. Add and remove items seamlessly. Keep track of your cart details effortlessly.
        </p>
      </section>
    </div>
  );
};

export default About;
