import './About.css';

function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-card">
          <span className="about-badge">Our Story</span>
          <h2 className="about-title">Welcome to Bella Bride</h2>
          <p className="about-text">
            Bella Bride Wedding Salon helps every bride find a dress that makes her feel beautiful and confident on her special day.
          </p>
          <div className="about-features">
            <div className="about-feature">
              <span className="feature-number">10+</span>
              <span className="feature-label">Years of Elegance</span>
            </div>
            <div className="about-feature">
              <span className="feature-number">1,000+</span>
              <span className="feature-label">Happy Brides</span>
            </div>
            <div className="about-feature">
              <span className="feature-number">100%</span>
              <span className="feature-label">Personalized Care</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
