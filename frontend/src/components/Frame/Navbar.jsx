import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as assets from '../../assets';
import styles from './Navbar.module.scss';

const Navbar = () => {
  // const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <a href="/">
          <img className={styles.logoImage} src={assets.guild_web_logo} alt="Guild Logo" />
        </a>
      </div>
      
      {/* Mobile Menu */}
      {/* <div
        id="mobile-menu"
        className={`${styles.navbar__toggle} ${menuOpen ? "is-active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div> */}

      {/* Links */}
      {/* <ul className={`${styles.navLinks} ${menuOpen ? "active" : ""}`}> */}
      <ul className={styles.navLinks}>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/guild'>The Guild Council</Link></li>
        <li><Link to='/events'>Events</Link></li>
        <li><Link to='/'>Advisories</Link></li>
      </ul>

      {/* Search bar */}
      <form className={styles.searchForm}>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Search..."
        />
      </form>

    </nav>
  );
};

export default Navbar;