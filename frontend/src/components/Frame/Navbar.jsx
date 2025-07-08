import React from 'react';
import * as assets from '../../assets';
import styles from './Navbar.module.css'
import{ useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/">
          <img className={styles.logo_image} src={assets.guild_logo} alt="Guild logo" />
        </a>
      </div>
      
      <div
        id="mobile-menu"
        className={`navbar__toggle ${menuOpen ? "is-active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      {/* Links */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
         <li>
          <input
            type="text"
            placeholder="Search..."
            className="mobile-search"
          />
        </li>
        <Link to='/'><li>Home</li></Link>
        <Link to='/'><li>The Guild Council</li></Link>
        <Link to='/events'><li>Events</li></Link>
        <Link to='/News'><li>News & Updates</li></Link>
      </ul>

    </nav>
  );
};

export default Navbar;