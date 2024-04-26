import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">Your Logo</div>
      <ul className="nav-links">
        <li className="nav-link">Home</li>
        <li className="nav-link">About</li>
        <li className="nav-link">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;