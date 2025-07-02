import React from 'react';
import * as assets from '../../assets';
import './Components.css'


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/">
          <img className="logo-image" src={assets.logo} alt="Guild logo" />
        </a>
        <div className="navbar__toggle" id="mobile-menu">
                <span className="bar"></span>a
                <span className="bar"></span>
                <span className="bar"></span>
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