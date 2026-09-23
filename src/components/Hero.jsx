import './Hero.css';

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-overlay"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <span className="hero-tagline">Bella Bride Wedding Salon</span>
          <h1 className="hero-title">Find the Dress of Your Dreams</h1>
          <p className="hero-subtitle">Elegant bridal gowns for your perfect day.</p>
          <div className="hero-buttons">
            <a href="#dresses" className="btn btn-primary">View Collection</a>
            <a href="#contact" className="btn btn-outline">Book Appointment</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
