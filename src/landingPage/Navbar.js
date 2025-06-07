import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom"; // Use NavLink for active styles
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
  // State to manage whether the navbar is collapsed or expanded
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  // Toggles the state
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  // Closes the menu when a link is clicked
  const closeMenu = () => setIsNavCollapsed(true);

  return (
    <nav className="navbar navbar-expand-lg border-bottom sticky-top">
      <div className="container-fluid">
        {/* Logo and Brand Name */}
        <Link className="navbar-brand d-flex align-items-center" to="/" onClick={closeMenu}>
          <img
            src="media/images/SonyConMainLogo.png"
            alt="Logo"
            className="navbar-logo"
          />
          <span className="navbar-brand-name ms-2 fw-bold">SonyCom</span>
        </Link>

        {/* Toggle Button for Mobile */}
        <button
          className={`navbar-toggler ${!isNavCollapsed ? "" : "collapsed"}`}
          type="button"
          aria-controls="navbarSupportedContent"
          aria-expanded={!isNavCollapsed}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse} // Use the state handler
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Menu */}
        {/* The 'show' class is now controlled by React state */}
        <div
          className={`collapse navbar-collapse ${!isNavCollapsed ? "show" : ""}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
            <li className="nav-item">
              {/* Use NavLink to get the .active class automatically */}
              <NavLink className="nav-link" to="/About" onClick={closeMenu}>
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/blog" onClick={closeMenu}>
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              {/* For external links, a standard <a> tag is correct */}
              <a
                className="nav-link"
                href="https://my-portfolio-g1uw.onrender.com"
                onClick={closeMenu}
              >
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Contact" onClick={closeMenu}>
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/services" onClick={closeMenu}>
                Services
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;