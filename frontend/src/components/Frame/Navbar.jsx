import React from 'react';
import logo from '../../assets/uwi-mona-guild-banner.png';
import * as assets from '../../assets';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/">
          <img src={assets.banner} alt="Guild Banner" />
        </a>
        <div className="navbar__toggle" id="mobile-menu">
                <span className="bar"></span>
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