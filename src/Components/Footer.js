import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-info">
        <h1>Your Name</h1>
        <p>Based in Your City</p>
      </div>
      <div className="footer-contact">
        <h3>Contacta me</h3>
        <p>And let's get down to work</p>
      </div>
      <div className="footer-sns">
        <div className="design-by">Design By Your Name</div>
        <div className="sns-links">
          <a href="https://www.linkedin.com/in/llaira-reyes/" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin linkedin"></i>
          </a>
          <a href="https://github.com/Llaira" target="_blank" rel="noreferrer">
            <i className="fab fa-github github"></i>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook facebook"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
