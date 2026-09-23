import { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="navbar">
      <div className="container navbar-container">
        <a href="#home" className="navbar-logo">
          Bella Bride
          <span className="navbar-logo-sub">Wedding Salon</span>
        </a>

        <button
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle Navigation"
        >
          <span className="hamburger"></span>
        </button>

        <nav className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="#dresses" onClick={() => setIsMenuOpen(false)}>Dresses</a>
          <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
