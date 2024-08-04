import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/team">Team</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/donation">Donation</Link>
        <Link to="/admin">Admin</Link>
      </nav>
    </header>
  );
};

export default Header;
