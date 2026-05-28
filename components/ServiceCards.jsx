"use client";

const services = [
  {
    id: 1, title: "DATA RECOVERY", titleColor: "#1565c0", accentColor: "#1565c0", btnBg: "#1565c0", btnColor: "#fff",
    description: "Recover lost, deleted or inaccessible data from any device or storage system with advanced tools and proven techniques.",
    bgColor: "rgba(21,101,192,0.08)",
    icon: (
      <svg viewBox="0 0 70 70" fill="none" width="100%" height="100%">
        <circle cx="35" cy="35" r="32" fill="rgba(21,101,192,0.1)" />
        <rect x="14" y="20" width="26" height="18" rx="3" fill="none" stroke="#1565c0" strokeWidth="2"/>
        <circle cx="27" cy="29" r="5" fill="none" stroke="#1565c0" strokeWidth="2"/>
        <circle cx="27" cy="29" r="2" fill="#1565c0"/>
        <rect x="33" y="23" width="5" height="1.5" rx="0.75" fill="#1565c0" opacity="0.6"/>
        <rect x="33" y="27" width="5" height="1.5" rx="0.75" fill="#1565c0" opacity="0.6"/>
        <circle cx="46" cy="44" r="10" fill="rgba(21,101,192,0.1)" stroke="#1565c0" strokeWidth="1.5"/>
        <circle cx="46" cy="44" r="4" fill="none" stroke="#1565c0" strokeWidth="2"/>
        <line x1="49" y1="47" x2="53" y2="51" stroke="#1565c0" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 2, title: "RANSOMWARE RECOVERY", titleColor: "#c62828", accentColor: "#c62828", btnBg: "#c62828", btnColor: "#fff",
    description: "Rapid response, secure recovery and business continuity after ransomware attacks. Restore. Recover. Restart.",
    bgColor: "rgba(198,40,40,0.07)",
    icon: (
      <svg viewBox="0 0 70 70" fill="none" width="100%" height="100%">
        <circle cx="35" cy="35" r="32" fill="rgba(198,40,40,0.1)"/>
        <rect x="22" y="34" width="26" height="18" rx="3" fill="rgba(198,40,40,0.15)" stroke="#c62828" strokeWidth="2"/>
        <path d="M26 34V26C26 20.5 29.8 18 35 18C40.2 18 44 20.5 44 26V34" stroke="#c62828" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="35" cy="43" r="3.5" fill="#c62828"/>
      </svg>
    ),
  },
  {
    id: 3, title: "DATA MIGRATION", titleColor: "#2e7d32", accentColor: "#2e7d32", btnBg: "#2e7d32", btnColor: "#fff",
    description: "Seamless and secure migration across systems, platforms and cloud environments.",
    bgColor: "rgba(46,125,50,0.07)",
    icon: (
      <svg viewBox="0 0 70 70" fill="none" width="100%" height="100%">
        <circle cx="35" cy="35" r="32" fill="rgba(46,125,50,0.1)"/>
        <path d="M35 14 L35 30" stroke="#2e7d32" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M28 22 L35 14 L42 22" stroke="#2e7d32" strokeWidth="2.5" strokeLinecap="round"/>
        <rect x="26" y="45" width="18" height="10" rx="2" fill="rgba(46,125,50,0.15)" stroke="#2e7d32" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    id: 4, title: "CYBER SECURITY", titleColor: "#6a1b9a", accentColor: "#6a1b9a", btnBg: "#6a1b9a", btnColor: "#fff",
    description: "Protect your organization with proactive security, vulnerability management and threat detection strategies.",
    bgColor: "rgba(106,27,154,0.07)",
    icon: (
      <svg viewBox="0 0 70 70" fill="none" width="100%" height="100%">
        <circle cx="35" cy="35" r="32" fill="rgba(106,27,154,0.1)"/>
        <path d="M35 10 L52 18 L52 40 C52 50 44 57 35 61 C26 57 18 50 18 40 L18 18 Z" fill="rgba(106,27,154,0.15)" stroke="#6a1b9a" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    id: 5, title: "CYBER FORENSICS", titleColor: "#e65100", accentColor: "#e65100", btnBg: "#e65100", btnColor: "#fff",
    description: "Investigate, analyze and uncover digital evidence with industry-leading forensic expertise.",
    bgColor: "rgba(230,81,0,0.07)",
    icon: (
      <svg viewBox="0 0 70 70" fill="none" width="100%" height="100%">
        <circle cx="35" cy="35" r="32" fill="rgba(230,81,0,0.1)"/>
        <circle cx="32" cy="32" r="16" fill="rgba(230,81,0,0.1)" stroke="#e65100" strokeWidth="2"/>
        <line x1="49" y1="49" x2="54" y2="54" stroke="#e65100" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 6, title: "DATA CENTER CONSULTING", titleColor: "#0277bd", accentColor: "#0277bd", btnBg: "#0277bd", btnColor: "#fff",
    description: "Design, plan and optimize high-performance, scalable and future-ready data center infrastructure.",
    bgColor: "rgba(2,119,189,0.07)",
    icon: (
      <svg viewBox="0 0 70 70" fill="none" width="100%" height="100%">
        <circle cx="35" cy="35" r="32" fill="rgba(2,119,189,0.1)"/>
        <rect x="20" y="14" width="30" height="36" rx="2" fill="rgba(2,119,189,0.1)" stroke="#0277bd" strokeWidth="1.5"/>
      </svg>
    ),
  },
];

export default function ServiceCards() {
  return (
    <section className="services-section">
      <div className="services-header">
        <h2 className="services-main-title">Our Services</h2>
        <div className="services-title-line" />
      </div>

      <div className="services-inner">
        {services.map((service) => (
          <div key={service.id} className="scard">
            <div className="scard-icon-wrap" style={{ background: service.bgColor }}>
              <div className="svg-container">{service.icon}</div>
            </div>
            <div className="scard-content">
              <h3 className="scard-title" style={{ color: service.titleColor }}>
                {service.title}
              </h3>
              <div className="scard-line" style={{ background: service.accentColor }} />
              <p className="scard-desc">{service.description}</p>
              <button
                className="scard-btn"
                style={{ background: service.btnBg, color: service.btnColor }}
              >
                Learn more <span className="btn-arrow">›</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .services-section {
          background-image: url('/images/white-bg.png');
          background-size: cover;
          background-position: center;
          padding: 80px min(4%, 40px);
        }
        .services-header {
          text-align: center;
          margin-bottom: 50px;
        }
        .services-main-title {
          color: #0d47a1;
          font-size: clamp(26px, 2.8vw, 38px);
          font-weight: 800;
          letter-spacing: 0.5px;
          margin: 0 0 12px 0;
          font-family: sans-serif;
        }
        .services-title-line {
          width: 44px;
          height: 4px;
          background: #0d47a1;
          border-radius: 2px;
          margin: 0 auto;
        }
        .services-inner {
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
        }
        .scard {
          background: #fff;
          border-radius: 16px;
          padding: 24px;
          display: flex;
          align-items: flex-start;
          gap: 20px;
          border: 1px solid rgba(0, 0, 0, 0.03);
          box-shadow: 0 4px 20px rgba(0,0,0,0.04);
          transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.4s cubic-bezier(0.25, 1, 0.5, 1);
        }
        .scard:hover {
          transform: translateY(-8px) scale(1.01);
          box-shadow: 0 20px 35px rgba(0, 0, 0, 0.08);
          border-color: rgba(0, 0, 0, 0.08);
        }
        .scard-icon-wrap {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          overflow: hidden; /* Fixes icon breakout */
          transition: transform 0.4s ease;
        }
        .scard:hover .scard-icon-wrap {
          transform: scale(1.08);
        }
        .svg-container {
          width: 44px;
          height: 44px;
        }
        .scard-content {
          flex: 1;
          min-width: 0;
        }
        .scard-title {
          font-size: 15px;
          font-weight: 900;
          margin: 0 0 8px;
          letter-spacing: 0.5px;
          font-family: 'Arial Black', sans-serif;
        }
        .scard-line {
          width: 36px;
          height: 3px;
          border-radius: 2px;
          margin-bottom: 10px;
          transition: width 0.3s ease;
        }
        .scard:hover .scard-line {
          width: 50px;
        }
        .scard-desc {
          color: #444;
          font-size: 13.5px;
          line-height: 1.65;
          margin: 0 0 16px;
        }
        .scard-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 9px 20px;
          border-radius: 30px;
          border: none;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          transition: transform 0.3s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.3s ease;
        }
        .scard:hover .scard-btn {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
        .btn-arrow {
          font-size: 16px;
          font-weight: 900;
          transition: transform 0.2s ease;
        }
        .scard-btn:hover .btn-arrow {
          transform: translateX(3px);
        }
        @media (max-width: 480px) {
          .scard {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          .scard-icon-wrap {
            margin-bottom: 4px;
          }
          .scard-line {
            margin: 0 auto 12px;
          }
        }
      `}</style>
    </section>
  );
}