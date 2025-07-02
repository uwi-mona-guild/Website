import React, { useState, useEffect } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaPhone, FaArrowUp } from 'react-icons/fa';
import { FaTwitter, FaLinkedin, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import 'index.css';
import { logo } from '../../assets';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      <footer className={`footer-container ${isVisible ? 'visible' : ''}`}>
        {/* Full-width Social Media Bar */}
        <div className="social-media-bar">
          <div className="social-icons">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="footer-content">
          <div className="footer-logo-section">
            <img src={logo} alt="UWI Mona Guild Logo" className="footer-logo" />
            <p className="footer-description">
              The UWI Mona Guild represents and serves all students at the University of the West Indies, Mona Campus.
            </p>
          </div>

          <div className="footer-contact-section">
            <h3>CONTACT US</h3>
            <div className="contact-info">
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <span>UWI Mona, Kingston 7, Jamaica</span>
              </div>
              <div className="contact-item">
                <FaPhoneAlt className="contact-icon" />
                <span>(876) 555-1234</span>
              </div>
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <span>info@uwimonaguild.com</span>
              </div>
            </div>
          </div>

          <div className="footer-map">
            <iframe
              title="UWI Mona Campus Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3793.963040822402!2d-76.7517889248804!3d18.00666498220814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8edb3f8a8c5d0a3b%3A0x4a501367f089ad5!2sThe%20University%20of%20the%20West%20Indies%2C%20Mona!5e0!3m2!1sen!2sjm!4v1620000000000!5m2!1sen!2sjm"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy">
            </iframe>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="copyright-section">
          <p>© {new Date().getFullYear()} UWI Mona Guild. All Rights Reserved.</p>
        </div>

        {/* Back to Top Button */}
        {isVisible && (
          <button onClick={scrollToTop} className="back-to-top">
            <FaArrowUp />
          </button>
        )}
      </footer>
    </>
  );
};

export default Footer;