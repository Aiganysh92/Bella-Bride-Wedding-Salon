import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    weddingDate: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      weddingDate: '',
      message: ''
    });
    setSubmitted(false);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-subtitle">Get In Touch</span>
          <h2 className="section-title">Book an Appointment</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Schedule a private fitting session with our expert bridal consultants. We look forward to celebrating with you!
          </p>
        </div>

        <div className="contact-wrapper">
          <div className="contact-info-card">
            <h3>Visit Our Boutique</h3>
            <p className="contact-address">
              <strong>Bella Bride Wedding Salon</strong><br />
              123 Bridal Way, Suite 100<br />
              Chicago, IL 60601
            </p>
            <div className="contact-details">
              <p><strong>Phone:</strong> (312) 555-0199</p>
              <p><strong>Email:</strong> info@bellabridewedding.com</p>
              <p><strong>Hours:</strong> Tue - Sun: 10:00 AM - 6:00 PM</p>
            </div>
            <div className="contact-note">
              Appointments are recommended for personalized fitting experiences.
            </div>
          </div>

          <div className="contact-form-card">
            {submitted ? (
              <div className="form-success-message">
                <div className="success-icon">✓</div>
                <h3>Appointment Requested!</h3>
                <p>
                  Thank you, <strong>{formData.name || 'Bride'}</strong>! We have received your booking request for <strong>{formData.weddingDate || 'your special day'}</strong>.
                </p>
                <p className="success-subtext">
                  Our bridal consultant will contact you at {formData.email || 'your email'} shortly to confirm your appointment.
                </p>
                <button className="btn btn-primary" onClick={handleReset}>
                  Book Another Appointment
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="appointment-form">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Your Full Name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      placeholder="(312) 555-0123"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="weddingDate">Wedding Date *</label>
                  <input
                    type="date"
                    id="weddingDate"
                    name="weddingDate"
                    required
                    value={formData.weddingDate}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Tell us about your dress vision, style preferences, or any questions..."
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-full">
                  Book Appointment
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
