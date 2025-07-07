// import React, {useEffect, useRef, useState} from 'react';
import * as assets from '../../assets';
import styles from './Navbar.module.css';

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
    <nav className={styles.navbar}>
      <div>
        <a href='/'>
          <img className={styles.logo_image} src={assets.guild_web_logo} alt="UWI Mona Guild Logo" />
        </a>
      </div>
        {/* Mobile view. Commented out temporarily */}
        {/* <div className="navbar__toggle" id="mobile-menu">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
        </div> */}
      <ul className={styles.nav_links}>
        <li><a href='/'>Home</a></li>
        <li><a href='/'>The Guild Council</a></li>
        <li><a href='/events'>Events</a></li>
        <li><a href='/'>Advisories</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;