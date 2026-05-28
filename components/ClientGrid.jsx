"use client";

export default function ClientGrid() {
  const clients = [
    { name: "Lupin", logo: "/images/lupin-logo.png" },
    { name: "Mahindra", logo: "/images/mahindra-logo.png" },
    { name: "NTPC", logo: "/images/ntpc-logo.png" },
    { name: "Pidilite", logo: "/images/pidilite-logo.png" },
    { name: "Reliance", logo: "/images/reliance-logo.png" },
    { name: "Suzuki", logo: "/images/suzuki-logo.png" },
  ];

  return (
    <section className="client-section">
      <h2 className="section-title">Our clients</h2>
      <div className="client-row">
        {clients.map((client, index) => (
          <div key={index} className="client-item">
            <img src={client.logo} alt={client.name} className="client-logo" />
          </div>
        ))}
      </div>

      <style jsx>{`
        .client-section { padding: 60px 20px; background-color: #fff; text-align: center; }
        .section-title { color: #3f51b5; font-size: 28px; margin-bottom: 40px; text-transform: uppercase; }
        
        /* THE ONE-LINE LAYOUT */
        .client-row {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap; /* Allows wrapping on very small mobile screens */
          gap: 40px;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .client-item { flex: 0 0 auto; }
        
        .client-logo {
          max-height: 50px;
          width: auto;
          object-fit: contain;
          filter: grayscale(100%);
          transition: all 0.3s ease;
        }
        
        .client-item:hover .client-logo {
          filter: grayscale(0%);
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
}