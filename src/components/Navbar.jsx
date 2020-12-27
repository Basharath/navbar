import React, { useState } from "react";
import "./navbar.css";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  const handleNavToggle = () => {
    const state = toggle;
    setToggle(!state);
  };
  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="brand-container">
          <a href="/" className="nav-brand">
            Brand Name
          </a>
          <div className="nav-toggler" onClick={handleNavToggle}>
            <i className={"fas " + (toggle ? "fa-times" : "fa-bars")}></i>
          </div>
        </div>
        <div className={"nav-collapse" + (toggle ? " show" : "")}>
          <div className="navbar-list">
            <li className="nav-item">
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/services" className="nav-link">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a href="/about" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="/blog" className="nav-link">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a href="/contact" className="nav-link">
                Contact
              </a>
            </li>
          </div>
          <div className="navbar-social">
            <span className="icon">
              <i className="fab fa-facebook"></i>
            </span>
            <span className="icon">
              <i className="fab fa-twitter"></i>
            </span>
            <span className="icon">
              <i className="fab fa-linkedin"></i>
            </span>
            <span className="icon">
              <i className="fab fa-instagram"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
