import React from 'react';
import '../components/css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container1">
        <div className="footer-content">
          <div className="footer-section">
            <h3>About</h3>
            <p>This is a Medium clone built with ReactJS for end term .</p>
          </div>
          <div className="footer-section">
            <h3>Explore</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Social Media</h3>
            <ul>
              <li><a href="https://twitter.com">Twitter</a></li>
              <li><a href="https://facebook.com">Facebook</a></li>
              <li><a href="https://instagram.com">Instagram</a></li>
              <li><a href="https://linkedin.com">LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Medium Clone. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
