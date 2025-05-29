import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="text-white py-5" style={{ backgroundColor: "#333" }}>
      <div className="container">
        <div className="row border-bottom">
          {/* About Us Section */}
          <div className="col-md-4 mb-4">
            <Link to="/About">
              <img
                src="media/images/peterpic.jpg"
                alt="logo"
                className="mb-3 rounded-circle"
                style={{ width: "130px", height: "130px" }}
              />
            </Link>
            <h5>
              <b>Peter, Founder&CEO of SonyCom</b>
            </h5>
            <p>
              Empowering your growth with top-notch projects and insightful blogs—connect with us to unlock your full potential.
            </p>
          </div>

          <div className="col-md-2"></div>

          {/* Quick Links Section */}
          <div className="col-md-3 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-white text-decoration-none">Home</Link></li>
              <li><Link to="/blog" className="text-white text-decoration-none">Blogs</Link></li>
              <li><Link to="/Services" className="text-white text-decoration-none">Services</Link></li>
              <li><Link to="/Contact" className="text-white text-decoration-none">Contact Us</Link></li>
              <li><Link to="/About" className="text-white text-decoration-none">About Us</Link></li>
            </ul>
          </div>

          {/* Contact Info & Social Media */}
          <div className="col-md-3 mb-4">
            <h5>Contact Us</h5> 
            <h5><img src="/media/images/mailicon.png" alt="mailicon"style={{height:"25px"}} /> <a href="mailto:albenusm@gmail.com" className="text-white" style={{textDecoration:"none"}}>albenusm@gmail.com</a></h5>
            {/* <p>Phone:</p> */}   
              <h5><img src="/media/images/contact-icon.png" alt="contact-icon"style={{height:"25px"}} /> +91 785 797 1928</h5> 
              <h5><img src="/media/images/contact-icon.png" alt="contact-icon"style={{height:"25px"}} /> +91 935 283 1556</h5>    <br />
            <h5>Follow Us</h5>
            <div className="d-flex">
              <a href="https://www.facebook.com/albenus.murmu.58" className="text-white me-3"><i className="fab fa-facebook-f"></i></a>
              <a href="https://x.com/AlbenusMur63460" className="text-white me-3"><i className="fab fa-twitter"></i></a>
              <a href="https://www.linkedin.com/in/albenus-murmu-339ba128a/" className="text-white me-3"><i className="fab fa-linkedin-in"></i></a>
              <a href="https://www.instagram.com/albenus.pieter/" className="text-white me-3"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>

        {/* Policy Links */}
        <div className="d-flex justify-content-center mt-5">
          <ul className="list-unstyled d-flex gap-3">
            <li><Link to="#" className="text-white text-decoration-none">Terms of Service</Link></li>
            <li><Link to="#" className="text-white text-decoration-none">Privacy</Link></li>
            <li><Link to="#" className="text-white text-decoration-none">Content Policy</Link></li>
          </ul>
        </div>

        {/* Copyright */}
        <div className="d-flex justify-content-center mt-2">
          <p className="text-primary mb-0">
            © {new Date().getFullYear()}{" "}
            <Link to="#" style={{ textDecoration: "none", color: "whitesmoke" }}>
              SonyCom. All rights reserved.
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
