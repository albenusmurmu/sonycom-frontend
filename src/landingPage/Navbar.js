import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Custom styles                                                                                    
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Needed for Collapse to work

function Navbar() {
  // Function to close the mobile menu
  const closeNavbar = () => {
    const navbar = document.getElementById("navbarSupportedContent");
    if (navbar.classList.contains("show")) {
      const bsCollapse = new window.bootstrap.Collapse(navbar, { toggle: true });
      bsCollapse.hide();
    }
  };

  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{
        backgroundColor: "#f6f3ed",
        zIndex: 1000,
        position: "sticky",
        top: 0,
        height: "80px",
        padding: "0 2rem",
        width: "100%",
      }}
    >
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/" onClick={closeNavbar}>
          <img
            src="media/images/SonyConMainLogo.png"
            alt="Logo"
            style={{
              width: "3rem",
              height: "3rem",
              borderRadius: "50%",
              marginRight: "0.5rem",
            }}
          />
          <span
            className="ms-2 fw-bold"
            style={{
              color: "rgba(128, 41, 86, 0.8)",
              letterSpacing: "0.2rem",
            }}
          >
            SonyCom
          </span>
        </Link>

        {/* Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Menu */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0 d-flex align-items-center">
            <li className="nav-item">
              <Link className="nav-link active" to="/About" onClick={closeNavbar}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/blog" onClick={closeNavbar}>
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                href="https://my-portfolio-g1uw.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeNavbar}
              >
                Portfolio
              </a>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" to="/Contact" onClick={closeNavbar}>
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/services" onClick={closeNavbar}>
                Services
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
