import './Services.css';

const services = [
  {
    id: 1,
    icon: '💎',
    title: 'Bridal Consultation',
    description: 'Enjoy a private, relaxed 90-minute appointment with your personal bridal stylist to explore styles and find your ideal look.'
  },
  {
    id: 2,
    icon: '🪡',
    title: 'Dress Fitting',
    description: 'Precision fitting sessions designed to ensure your gown drapes gracefully and accentuates your unique silhouette.'
  },
  {
    id: 3,
    icon: '✂️',
    title: 'Alterations',
    description: 'In-house expert tailoring and custom adjustments performed with delicate attention to every seam and detail.'
  },
  {
    id: 4,
    icon: '👑',
    title: 'Accessories',
    description: 'Complete your bridal ensemble with our curated selection of veils, headpieces, jewelry, and shoes.'
  }
];

function Services() {
  return (
    <section id="services" className="section services-section">
      <div className="container">
        <h2 className="section-title">Exclusive Bridal Services</h2>
        <p className="section-subtitle">
          From your initial consultation to your final fitting, we offer full-service care for your wedding attire.
        </p>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
