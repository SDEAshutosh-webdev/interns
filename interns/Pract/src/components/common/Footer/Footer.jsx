import React from "react";
import "../../../Styles/Footer.css";

const Footer = ({ darkMode, setDarkMode }) => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* About */}
        <div className="footer-section">
          <h2>🍴 Foodie</h2>
          <p>
            Delicious food delivered to your doorstep.
            Order your favorite meals anytime, anywhere.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/cart">Cart</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
              Facebook
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>

        {/* Theme Toggle */}
        <div className="footer-section">
          <h3>Theme</h3>
          <button
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Foodie. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;