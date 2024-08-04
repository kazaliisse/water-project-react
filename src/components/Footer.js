import React from 'react';
import './styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>About Us</h3>
        <p>Water Resource Management is dedicated to ensuring sustainable water resources for future generations.</p>
      </div>
      <div className="footer-section">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/team">Our Team</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Address</h3>
        <p>Alrahma-street</p>
        <p>Near to Hidig Palaza</p>
        <p>0743789242</p>
      </div>
      <div className="footer-section">
        <h3>Location</h3>
        <p>kenya/Nairobi</p>
        <p>Garissa</p>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Water Resource Management. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
