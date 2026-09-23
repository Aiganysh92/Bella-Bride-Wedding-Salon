import React from 'react';

const servicesData = [
  {
    id: 1,
    title: 'Bridal Consultation',
    icon: (
      <svg className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
        <path d="M12 8V12L15 15" />
      </svg>
    ),
    description: 'One-on-one personal styling session with our experienced bridal consultants in a private suite.'
  },
  {
    id: 2,
    title: 'Dress Fitting',
    icon: (
      <svg className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20.38 3.46L16 2 12 3.46 8 2 3.62 3.46 3 10C3 15.55 6.84 20.74 12 22C17.16 20.74 21 15.55 21 10L20.38 3.46Z" />
        <path d="M12 7V13" />
        <path d="M9 10H15" />
      </svg>
    ),
    description: 'Precision fitting sessions to ensure your gown tailored flawlessly to your unique silhouette.'
  },
  {
    id: 3,
    title: 'Alterations',
    icon: (
      <svg className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    description: 'In-house expert seamstress alterations guaranteeing comfort, perfection, and effortless movement.'
  },
  {
    id: 4,
    title: 'Accessories',
    icon: (
      <svg className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
      </svg>
    ),
    description: 'Exquisite bridal veils, tiaras, headpieces, jewelry, and belts to complete your wedding vision.'
  }
];

export default function Services() {
  return (
    <section id="services" className="section services-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-subtitle">Our Expertise</span>
          <h2 className="section-title">Exclusive Salon Services</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            We provide an end-to-end magical bridal experience tailored around your journey to the altar.
          </p>
        </div>

        <div className="services-grid">
          {servicesData.map((service) => (
            <div className="service-card" key={service.id}>
              <div className="service-icon-wrapper">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
