
import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi"; // Icons from react-icons

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="n-wrapper" id="Navbar">
      {/* Left Side */}
      <div className="n-left">
        <div className="n-name">
          Medi<span className="highlight">Care+</span>
        </div>
      </div>

      {/* Hamburger Icon (Mobile Only) */}
      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </div>

      {/* Right Side */}
      <div className={`n-right ${menuOpen ? "open" : ""}`}>
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            {["Home", "About", "Services", "News"].map((section, idx) => (
              <li key={idx}>
                <Link
                  activeClass="active"
                  to={section.toLowerCase()}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  onClick={closeMenu}
                >
                  {section}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Link to="contact" spy={true} smooth={true} offset={-100} onClick={closeMenu}>
          <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
