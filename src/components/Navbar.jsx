import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
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
          <Link to="/" className="nav-brand">
            Brand Name
          </Link>
          <div className="nav-toggler" onClick={handleNavToggle}>
            <i className={"fas " + (toggle ? "fa-times" : "fa-bars")}></i>
          </div>
        </div>
        <div className={"nav-collapse" + (toggle ? " show" : "")}>
          <div className="navbar-list">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/services" className="nav-link">
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/blog" className="nav-link">
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link">
                Contact
              </NavLink>
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
