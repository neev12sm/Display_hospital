


import React from 'react';
import { Link } from "react-scroll";
import './Footer.css';

// FontAwesome Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div>
      {/* Header */}
      <header className="footer-header">
        <div className="footer-logo">
          <span className="logo-blue">Medi</span>
          <span className="logo-orange">Care+</span>
        </div>
        <nav className="footer-nav">
          <Link className="footer-link" activeClass="active" to="Navbar" spy={true} smooth={true}>Home</Link>
          <Link className="footer-link" to="about" spy={true} smooth={true}>About</Link>
          <Link className="footer-link" to="services" spy={true} smooth={true}>Services</Link>
          <Link className="footer-link" to="news" spy={true} smooth={true}>News</Link>
        </nav>
      </header>

      {/* Footer */}
      <footer className="footer-main">
        <div className="footer-social-icons">
          <div className="footer-icon">
            <FontAwesomeIcon icon={faFacebookF} color="black" />
          </div>
          <div className="footer-icon">
            <FontAwesomeIcon icon={faGoogle} color="black" />
          </div>
          <div className="footer-icon">
            <FontAwesomeIcon icon={faXTwitter} color="black" />
          </div>
        </div>
        <p className="footer-copy">©2023 - 0109</p>
      </footer>
    </div>
  );
};

export default Footer;
