import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <span className="hero-badge">Exclusive Bridal Elegance</span>
        <h1 className="hero-title">Find the Dress of Your Dreams</h1>
        <p className="hero-subtitle">
          Elegant bridal gowns for your perfect day.
        </p>
        <div className="hero-buttons">
          <a href="#dresses" className="btn btn-primary">
            View Collection
          </a>
          <a href="#contact" className="btn btn-secondary">
            Book Appointment
          </a>
        </div>
      </div>
    </section>
  );
}
