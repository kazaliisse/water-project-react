import React from 'react';
import './styles/About.css';
import aboutImage from '../assets/about-image.jpeg';

const About = () => {
  return (
    <div className="about">
      <div className="about-content">
        <img className="about-image" src={aboutImage} alt="About Us" />
        <div className="about-text">
          <p>Our organization is dedicated to managing water resources to ensure sustainable water usage for future generations. We believe in the power of community and education to make a lasting impact.</p>
        </div>
      </div>
      <div className="cards">
        <div className="card">
          <h3>Our Mission</h3>
          <p>To implement innovative water conservation strategies that promote sustainable water use and protect natural water resources.</p>
        </div>
        <div className="card">
          <h3>Our Vision</h3>
          <p>To create a world where every community has access to clean and sustainable water resources, fostering a healthier and more equitable planet.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
