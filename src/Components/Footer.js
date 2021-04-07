import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-info">
        <h1>Llaira Reyes</h1>
        <p>Santiago, chile</p>
      </div>
      <div className="footer-contact">
        <h3>Contacta me</h3>
        <p>Puedes escribirme en las distintas redes sociales y recuerda que mi curriculum está en SOBRE MI</p>
      </div>
      <div className="footer-sns">
        <div className="sns-links">
          <a href="https://www.linkedin.com/in/llaira-reyes/" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin linkedin"></i>
          </a>
          <a href="https://github.com/Llaira" target="_blank" rel="noreferrer">
            <i className="fab fa-github github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
