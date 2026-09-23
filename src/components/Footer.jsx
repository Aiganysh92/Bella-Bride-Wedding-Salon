import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <h3 className="footer-logo">Bella Bride</h3>
          <p className="footer-tagline">Wedding Salon</p>
          <p className="footer-location">Chicago, IL</p>
        </div>

        <div className="footer-links-group">
          <h4>Quick Links</h4>
          <nav className="footer-nav">
            <a href="#home">Home</a>
            <a href="#dresses">Dresses</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>

        <div className="footer-info">
          <h4>Visit Us</h4>
          <p>123 Bridal Lane, Suite 100</p>
          <p>Chicago, IL 60601</p>
          <p>By Appointment Only</p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Bella Bride Wedding Salon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
