import React, {useEffect, useRef, useState} from 'react';
import * as assets from '../../assets';
import './Components.css'


const Navbar = () => {

  /*const navbarRef = React.useRef(null);
  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      
      if (prevScrollPos > currentScrollPos) {
        navbarRef.current.style.top = "0";
      } else {
        navbarRef.current.style.top = "-200px";
      }
      
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);}, []);
*/
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