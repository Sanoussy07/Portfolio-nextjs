import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-content">
      <p>Suivez-moi sur 
        <a href="https://github.com/Sanoussy07" className="footer-link">
          <FaGithub className="footer-icon" /> GitHub
        </a> 
        et 
        <a href="https://www.linkedin.com/in/Sanoussy Barry" className="footer-link">
          <FaLinkedin className="footer-icon" /> LinkedIn
        </a>
      </p>
    </footer>
  );
};

export default Footer;
