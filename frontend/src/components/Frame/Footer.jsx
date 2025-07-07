import React, { useState, useEffect } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaArrowUp,FaFacebookF, FaInstagram, FaYoutube, FaGlobe, FaTiktok } from 'react-icons/fa'; 
import { FaXTwitter, } from 'react-icons/fa6';

import './Footer.css'; 
import { guild_logo } from '../../assets';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    
    // Show footer when scrolled 100px or when near bottom
    setIsVisible(scrollPosition > 100 || 
                scrollPosition + windowHeight >= documentHeight - 100);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`footer-container ${isVisible ? 'float-in' : ''}`}>
      {/* Main Content Section */}
      <div className="footer-content">
        {/* Contact Info */}
        <div className="footer-contact-section">
          <h3>CONTACT US</h3>
          <div className="footer-contact-grid">
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <div>
                <p><strong>ADDRESS</strong></p>
                <p>UWI Mona, Kingston 7, Jamaica</p>
              </div>
            </div>
            <div className="contact-item">
              <FaPhoneAlt className="contact-icon" />
              <div>
                <p><strong>PHONE NUMBER</strong></p>
                <p>(876) 111-1111</p>
              </div>
            </div>
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <div>
                <p><strong>EMAIL</strong></p>
                <p>uwimonaguildweb@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media Bar */}
      <div className="social-media-bar">
        <div className="social-icons">
          <a href="https://www.mona.uwi.edu/" target="_blank" rel="noopener noreferrer"><FaGlobe /></a>
          <a href="https://www.tiktok.com/@uwimonaguild" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
          <a href="https://www.instagram.com/uwimonaguild?utm_source=ig_web_button_share_sheet&igsh=MXdoOGg0eW1qbXIwaw==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://www.youtube.com/@UWITVGlobal" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          <a href="https://x.com/uwimonaguild?lang=en" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
        </div>
      </div>

      {/* Map */}
      <div className="footer-map-container">
        <iframe
          title="UWI Mona Campus Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3793.963040822402!2d-76.7517889248804!3d18.00666498220814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8edb3f8a8c5d0a3b%3A0x4a501367f089ad5!2sThe%20University%20of%20the%20West%20Indies%2C%20Mona!5e0!3m2!1sen!2sjm!4v1620000000000!5m2!1sen!2sjm"
          className="footer-map"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* Copyright Section */}
      <div className="copyright-section">
        <p>© {new Date().getFullYear()} The UWI Mona Guild. All Rights Reserved.</p>
      </div>

      {/* Scroll To Top Button */}
      {isVisible && (
        <button onClick={scrollToTop} className="back-to-top">
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default Footer;