import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <h3 className="footer-logo-title">Bella Bride Wedding Salon</h3>
            <p className="footer-location">Chicago, IL</p>
            <p className="footer-tagline">Making bridal dreams come true with timeless elegance.</p>
          </div>

          <div className="footer-nav">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#dresses">Dresses</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Location & Hours</h4>
            <p>123 Bridal Way, Suite 100</p>
            <p>Chicago, IL 60601</p>
            <p>Mon - Sun: By Appointment</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Bella Bride Wedding Salon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
