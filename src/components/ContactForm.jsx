import { useState } from 'react';
import './ContactForm.css';

function ContactForm() {
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

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">Book an Appointment</h2>
        <p className="section-subtitle">
          We would love to welcome you to our Chicago salon. Schedule your private consultation today.
        </p>

        <div className="contact-container">
          {submitted ? (
            <div className="form-success-message">
              <h3>Thank You, {formData.name || 'Bride'}!</h3>
              <p>Your appointment request has been submitted successfully.</p>
              <p>We will contact you shortly at {formData.email || 'your email'} to confirm your appointment date.</p>
              <button
                className="btn btn-outline"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', phone: '', weddingDate: '', message: '' });
                }}
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form className="appointment-form" onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Jane Doe"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="jane@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="(312) 555-0199"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="weddingDate">Wedding Date</label>
                  <input
                    type="date"
                    id="weddingDate"
                    name="weddingDate"
                    value={formData.weddingDate}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group full-width">
                <label htmlFor="message">Message / Preferences</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your style preferences, gown budget, or any special requests..."
                ></textarea>
              </div>

              <div className="form-actions">
                <button type="submit" className="btn btn-primary btn-submit">
                  Book Appointment
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
