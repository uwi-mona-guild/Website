import React from 'react';
import logo from '../assets/uwi_logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/">
          <img src={logo} alt="UWI Logo" />
        </a>
        <div class="navbar__toggle" id="mobile-menu">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
        </div>
      </div>
      <ul className="nav-links">
        <li className="active">Home</li>
        <li>The Guild Council</li>
        <li>Events</li>
        <li>News & Updates</li>
      </ul>
    </nav>
  );
};

export default Navbar;