import React from 'react';

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="section-container">
        <div className="about-content-wrapper">
          <div className="about-image-column">
            <div className="about-card-decorative">
              <div className="about-seal">
                <span>Est. 2018</span>
              </div>
              <div className="about-quote">
                "Where love stories meet high couture."
              </div>
            </div>
          </div>
          <div className="about-text-column">
            <span className="section-subtitle">Our Philosophy</span>
            <h2 className="section-title">About Bella Bride</h2>
            <div className="section-divider align-left"></div>
            <p className="about-text-primary">
              Bella Bride Wedding Salon helps every bride find a dress that makes her feel beautiful and confident on her special day.
            </p>
            <p className="about-text-secondary">
              Located in the heart of Chicago, our salon offers a curated collection of world-class bridal gowns and personalized consultation experiences. From classic silhouettes to contemporary masterpieces, we believe every bride deserves an unforgettable fitting experience.
            </p>
            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">1,200+</span>
                <span className="stat-label">Happy Brides</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">150+</span>
                <span className="stat-label">Gown Styles</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Personalized</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
