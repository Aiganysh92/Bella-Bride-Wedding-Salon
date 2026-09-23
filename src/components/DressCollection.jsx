import './DressCollection.css';

const dresses = [
  {
    id: 1,
    name: 'Isabella',
    description: 'A timeless A-line gown crafted with delicate lace embroidery and a sweeping cathedral train.',
    price: '$1,850',
    tag: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 2,
    name: 'Sophia',
    description: 'An elegant mermaid dress featuring a sweetheart neckline and subtle crystal embellishments.',
    price: '$2,100',
    tag: 'New Arrival',
    image: 'https://images.unsplash.com/photo-1546804784-896d0dca3800?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 3,
    name: 'Aurora',
    description: 'Ethereal ballgown with layered tulle skirt, illusion bodice, and delicate floral applique.',
    price: '$1,950',
    tag: 'Romantic',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 4,
    name: 'Olivia',
    description: 'Modern minimalist silk crepe sheath gown with an open back and graceful silhouette.',
    price: '$1,650',
    tag: 'Modern Classic',
    image: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 5,
    name: 'Grace',
    description: 'Vintage-inspired column gown with full-length lace sleeves and a dramatic keyhole back.',
    price: '$2,250',
    tag: 'Exclusive',
    image: 'https://images.unsplash.com/photo-1549416878-b9ca95e26903?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 6,
    name: 'Victoria',
    description: 'Regal mikado satin ballgown with off-the-shoulder neckline and hidden side pockets.',
    price: '$2,400',
    tag: 'Royal Elegance',
    image: 'https://images.unsplash.com/photo-1585241936939-be20277b32cd?auto=format&fit=crop&w=600&q=80'
  }
];

function DressCollection() {
  return (
    <section id="dresses" className="section dresses-section">
      <div className="container">
        <h2 className="section-title">Our Wedding Dress Collection</h2>
        <p className="section-subtitle">
          Handcrafted gowns designed to bring your bridal dreams to life. Discover timeless beauty and exquisite detailing.
        </p>

        <div className="dress-grid">
          {dresses.map((dress) => (
            <div key={dress.id} className="dress-card">
              <div className="dress-image-wrapper">
                <img
                  src={dress.image}
                  alt={`Wedding dress ${dress.name}`}
                  className="dress-image"
                  onError={(e) => {
                    // Fallback to stylized placeholder if image load fails
                    e.target.onerror = null;
                    e.target.style.display = 'none';
                    e.target.parentElement.classList.add('placeholder-fallback');
                  }}
                />
                <span className="dress-tag">{dress.tag}</span>
              </div>
              <div className="dress-info">
                <div className="dress-header">
                  <h3 className="dress-name">{dress.name}</h3>
                  <span className="dress-price">{dress.price}</span>
                </div>
                <p className="dress-description">{dress.description}</p>
                <a href="#contact" className="dress-action">Book Fitting &rarr;</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DressCollection;
