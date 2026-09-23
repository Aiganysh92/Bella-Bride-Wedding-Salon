import React from 'react';

const dressesData = [
  {
    id: 1,
    name: 'Isabella',
    description: 'A timeless A-line gown crafted with delicate lace detailing and a flowing tulle skirt.',
    price: '$1,850',
    tag: 'Bestseller',
    svgType: 'a-line'
  },
  {
    id: 2,
    name: 'Sophia',
    description: 'Sleek mermaid silhouette with intricate beadwork and an open back design.',
    price: '$2,100',
    tag: 'New Collection',
    svgType: 'mermaid'
  },
  {
    id: 3,
    name: 'Aurora',
    description: 'Regal ballgown featuring a sweetheart neckline and subtle shimmer underlay.',
    price: '$2,400',
    tag: 'Featured',
    svgType: 'ballgown'
  },
  {
    id: 4,
    name: 'Olivia',
    description: 'Modern bohemian sheath dress with soft chiffon, bell sleeves, and embroidery.',
    price: '$1,650',
    tag: 'Popular',
    svgType: 'sheath'
  },
  {
    id: 5,
    name: 'Grace',
    description: 'Classic satin gown with off-the-shoulder straps, pockets, and a dramatic train.',
    price: '$1,950',
    tag: 'Classic',
    svgType: 'satin'
  },
  {
    id: 6,
    name: 'Victoria',
    description: 'Glamorous fit-and-flare gown with 3D floral appliqués and crystal buttons.',
    price: '$2,300',
    tag: 'Exclusive',
    svgType: 'fit-flare'
  }
];

function DressSVG({ type }) {
  return (
    <svg viewBox="0 0 200 260" className="dress-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="dressGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fff9f9" />
          <stop offset="100%" stopColor="#f7e8eb" />
        </linearGradient>
        <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#e8c5ce" />
          <stop offset="100%" stopColor="#d4a3b0" />
        </linearGradient>
      </defs>

      {/* Dress Background Frame */}
      <rect x="0" y="0" width="200" height="260" rx="8" fill="#fdfbf9" />
      <circle cx="100" cy="80" r="60" fill="#f8ecee" opacity="0.5" />

      {/* Mannequin / Dress Form Hanger */}
      <path d="M90,30 Q100,20 110,30 Q100,22 90,30 Z" fill="#b08b95" />
      <line x1="100" y1="22" x2="100" y2="40" stroke="#b08b95" strokeWidth="2" />

      {/* Dress Silhouettes based on type */}
      {type === 'a-line' && (
        <>
          <path d="M85,45 Q100,52 115,45 L120,80 Q100,85 80,80 Z" fill="url(#dressGrad)" stroke="#d4a3b0" strokeWidth="1.5" />
          <path d="M80,80 Q100,85 120,80 L150,220 Q100,230 50,220 Z" fill="url(#dressGrad)" stroke="#d4a3b0" strokeWidth="1.5" />
          <rect x="80" y="78" width="40" height="5" fill="url(#accentGrad)" rx="2" />
          <path d="M85,45 Q100,55 115,45" fill="none" stroke="#d4a3b0" strokeWidth="1" strokeDasharray="2,2" />
        </>
      )}

      {type === 'mermaid' && (
        <>
          <path d="M85,45 Q100,55 115,45 L112,120 Q100,125 88,120 Z" fill="url(#dressGrad)" stroke="#d4a3b0" strokeWidth="1.5" />
          <path d="M88,120 Q100,125 112,120 L145,225 Q100,235 55,225 Z" fill="url(#dressGrad)" stroke="#d4a3b0" strokeWidth="1.5" />
          <path d="M92,75 Q100,80 108,75" stroke="#e8c5ce" strokeWidth="2" fill="none" />
        </>
      )}

      {type === 'ballgown' && (
        <>
          <path d="M85,45 Q100,50 115,45 L118,75 Q100,80 82,75 Z" fill="url(#dressGrad)" stroke="#d4a3b0" strokeWidth="1.5" />
          <path d="M82,75 Q100,80 118,75 L165,220 Q100,235 35,220 Z" fill="url(#dressGrad)" stroke="#d4a3b0" strokeWidth="1.5" />
          <circle cx="100" cy="76" r="3" fill="#d4a3b0" />
        </>
      )}

      {type === 'sheath' && (
        <>
          <path d="M82,45 L118,45 L115,220 Q100,225 85,220 Z" fill="url(#dressGrad)" stroke="#d4a3b0" strokeWidth="1.5" />
          <path d="M82,45 L70,75 L84,70 Z" fill="url(#dressGrad)" stroke="#d4a3b0" strokeWidth="1" />
          <path d="M118,45 L130,75 L116,70 Z" fill="url(#dressGrad)" stroke="#d4a3b0" strokeWidth="1" />
        </>
      )}

      {type === 'satin' && (
        <>
          <path d="M78,52 C85,45 115,45 122,52 L118,80 L82,80 Z" fill="url(#dressGrad)" stroke="#d4a3b0" strokeWidth="1.5" />
          <path d="M82,80 L118,80 L155,220 Q100,230 45,220 Z" fill="url(#dressGrad)" stroke="#d4a3b0" strokeWidth="1.5" />
          <path d="M78,52 Q100,60 122,52" stroke="#d4a3b0" strokeWidth="1.5" fill="none" />
        </>
      )}

      {type === 'fit-flare' && (
        <>
          <path d="M85,45 Q100,50 115,45 L110,105 Q100,110 90,105 Z" fill="url(#dressGrad)" stroke="#d4a3b0" strokeWidth="1.5" />
          <path d="M90,105 Q100,110 110,105 L140,220 Q100,230 60,220 Z" fill="url(#dressGrad)" stroke="#d4a3b0" strokeWidth="1.5" />
          <circle cx="100" cy="60" r="1.5" fill="#d4a3b0" />
          <circle cx="100" cy="70" r="1.5" fill="#d4a3b0" />
          <circle cx="100" cy="80" r="1.5" fill="#d4a3b0" />
        </>
      )}

      {/* Floral subtle accent */}
      <path d="M95,235 C98,230 102,230 105,235 C108,240 100,245 95,235 Z" fill="#e8c5ce" opacity="0.6" />
    </svg>
  );
}

export default function DressCollection() {
  return (
    <section id="dresses" className="section dresses-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-subtitle">Bridal Collection</span>
          <h2 className="section-title">Wedding Dress Collection</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Discover our hand-picked selection of breathtaking wedding gowns crafted to capture your unique style and beauty.
          </p>
        </div>

        <div className="dresses-grid">
          {dressesData.map((dress) => (
            <div className="dress-card" key={dress.id}>
              <div className="dress-image-container">
                <span className="dress-badge">{dress.tag}</span>
                <DressSVG type={dress.svgType} />
              </div>
              <div className="dress-info">
                <h3 className="dress-name">{dress.name}</h3>
                <p className="dress-description">{dress.description}</p>
                <div className="dress-footer">
                  <span className="dress-price">{dress.price}</span>
                  <a href="#contact" className="btn btn-sm btn-outline">
                    Book Fitting
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
