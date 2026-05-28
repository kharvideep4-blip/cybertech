"use client";

const services = [
  {
    id: 1,
    title: "DATA RECOVERY",
    titleColor: "#1565c0",
    lineColor: "#1565c0",
    btnBg: "#1565c0",
    desc: "Recover lost, deleted or inaccessible data from any device or storage system with advanced tools and proven techniques.",
    iconBg: "rgba(21,101,192,0.10)",
    icon: (
      <svg width="58" height="58" viewBox="0 0 58 58" fill="none">
        <circle cx="29" cy="29" r="26" fill="rgba(21,101,192,0.1)"/>
        <ellipse cx="29" cy="29" rx="15" ry="10" stroke="#1565c0" strokeWidth="2.5" fill="none"/>
        <ellipse cx="29" cy="26" rx="15" ry="10" stroke="#1565c0" strokeWidth="2" fill="rgba(21,101,192,0.08)"/>
        <ellipse cx="29" cy="23" rx="15" ry="10" stroke="#1565c0" strokeWidth="2" fill="rgba(21,101,192,0.08)"/>
        <path d="M22 32 C22 35 26 36 29 36 C32 36 36 35 36 32" stroke="#1565c0" strokeWidth="2" fill="none"/>
        <path d="M26 29 Q29 31 32 29" stroke="#1565c0" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <circle cx="41" cy="41" r="8" fill="rgba(21,101,192,0.1)" stroke="#1565c0" strokeWidth="1.5"/>
        <circle cx="41" cy="41" r="3.5" stroke="#1565c0" strokeWidth="1.5" fill="none"/>
        <line x1="43.5" y1="43.5" x2="47" y2="47" stroke="#1565c0" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    id: 2,
    title: "RANSOMWARE RECOVERY",
    titleColor: "#b71c1c",
    lineColor: "#b71c1c",
    btnBg: "#b71c1c",
    desc: "Rapid response, secure recovery and business continuity after ransomware attacks. Restore. Recover. Restart.",
    iconBg: "rgba(183,28,28,0.10)",
    icon: (
      <svg width="58" height="58" viewBox="0 0 58 58" fill="none">
        <circle cx="29" cy="29" r="26" fill="rgba(183,28,28,0.1)"/>
        <rect x="16" y="27" width="26" height="19" rx="3" stroke="#c62828" strokeWidth="2.5" fill="rgba(198,40,40,0.12)"/>
        <path d="M20 27V21C20 15.5 23.5 13 29 13C34.5 13 38 15.5 38 21V27" stroke="#c62828" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
        <circle cx="29" cy="36.5" r="3.5" fill="#c62828"/>
        <rect x="27.5" y="36.5" width="3" height="5" rx="1" fill="#9a1212"/>
      </svg>
    )
  },
  {
    id: 3,
    title: "DATA MIGRATION",
    titleColor: "#1b5e20",
    lineColor: "#1b5e20",
    btnBg: "#1b5e20",
    desc: "Seamless and secure migration across systems, platforms and cloud environments.",
    iconBg: "rgba(27,94,32,0.10)",
    icon: (
      <svg width="58" height="58" viewBox="0 0 58 58" fill="none">
        <circle cx="29" cy="29" r="26" fill="rgba(27,94,32,0.1)"/>
        <path d="M12 30 C14 22 21 18 29 18 C37 18 44 22 46 30" stroke="#2e7d32" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <path d="M17 24 Q29 14 41 24" stroke="#2e7d32" strokeWidth="2.5" fill="rgba(46,125,50,0.12)" strokeLinecap="round"/>
        <path d="M24 20 L29 14 L34 20" stroke="#2e7d32" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <path d="M29 28 L29 42" stroke="#2e7d32" strokeWidth="1.5" strokeDasharray="3 2"/>
        <rect x="22" y="38" width="14" height="8" rx="2" stroke="#2e7d32" strokeWidth="1.5" fill="rgba(46,125,50,0.1)"/>
        <rect x="25" y="40" width="3.5" height="4" rx="0.5" fill="#2e7d32" opacity="0.6"/>
        <rect x="30" y="40" width="3.5" height="4" rx="0.5" fill="#2e7d32" opacity="0.8"/>
      </svg>
    )
  },
  {
    id: 4,
    title: "CYBER SECURITY",
    titleColor: "#4a148c",
    lineColor: "#4a148c",
    btnBg: "#6a1b9a",
    desc: "Protect your organization with proactive security, vulnerability management and threat detection strategies.",
    iconBg: "rgba(74,20,140,0.10)",
    icon: (
      <svg width="58" height="58" viewBox="0 0 58 58" fill="none">
        <circle cx="29" cy="29" r="26" fill="rgba(74,20,140,0.1)"/>
        <path d="M29 10 L44 17 L44 36 C44 44 37 50 29 53 C21 50 14 44 14 36 L14 17 Z" stroke="#7b1fa2" strokeWidth="2" fill="rgba(106,27,154,0.12)"/>
        <rect x="22" y="28" width="14" height="12" rx="2" stroke="#7b1fa2" strokeWidth="1.8" fill="rgba(106,27,154,0.2)"/>
        <path d="M24 28V24C24 21 26.2 19 29 19C31.8 19 34 21 34 24V28" stroke="#7b1fa2" strokeWidth="2" strokeLinecap="round" fill="none"/>
        <circle cx="29" cy="34" r="2.5" fill="#7b1fa2"/>
      </svg>
    )
  },
  {
    id: 5,
    title: "CYBER FORENSICS",
    titleColor: "#e65100",
    lineColor: "#e65100",
    btnBg: "#e65100",
    desc: "Investigate, analyze and uncover digital evidence with industry-leading forensic expertise.",
    iconBg: "rgba(230,81,0,0.10)",
    icon: (
      <svg width="58" height="58" viewBox="0 0 58 58" fill="none">
        <circle cx="29" cy="29" r="26" fill="rgba(230,81,0,0.1)"/>
        <circle cx="26" cy="25" r="13" stroke="#e65100" strokeWidth="2" fill="rgba(230,81,0,0.08)"/>
        <circle cx="26" cy="25" r="8" stroke="#e65100" strokeWidth="1.5" fill="none" opacity="0.5"/>
        <circle cx="26" cy="25" r="4" stroke="#e65100" strokeWidth="1.5" fill="none" opacity="0.4"/>
        <path d="M18 18 Q26 14 34 18 Q38 26 34 34 Q26 38 18 34 Q14 26 18 18Z" stroke="#e65100" strokeWidth="1" fill="none" opacity="0.2"/>
        <circle cx="42" cy="42" r="9" stroke="#e65100" strokeWidth="2" fill="rgba(230,81,0,0.1)"/>
        <circle cx="42" cy="42" r="4" stroke="#e65100" strokeWidth="2" fill="none"/>
        <line x1="45" y1="45" x2="50" y2="50" stroke="#e65100" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    id: 6,
    title: "DATA CENTER CONSULTING",
    titleColor: "#01579b",
    lineColor: "#01579b",
    btnBg: "#0277bd",
    desc: "Design, plan and optimize high-performance, scalable and future-ready data center infrastructure.",
    iconBg: "rgba(1,87,155,0.10)",
    icon: (
      <svg width="58" height="58" viewBox="0 0 58 58" fill="none">
        <circle cx="29" cy="29" r="26" fill="rgba(1,87,155,0.1)"/>
        <rect x="12" y="12" width="34" height="32" rx="2" stroke="#0277bd" strokeWidth="1.8" fill="rgba(2,119,189,0.08)"/>
        <rect x="16" y="16" width="11" height="12" rx="1" stroke="#0277bd" strokeWidth="1.2" fill="rgba(2,119,189,0.12)"/>
        <rect x="31" y="16" width="11" height="12" rx="1" stroke="#0277bd" strokeWidth="1.2" fill="rgba(2,119,189,0.12)"/>
        <rect x="16" y="31" width="11" height="10" rx="1" stroke="#0277bd" strokeWidth="1.2" fill="rgba(2,119,189,0.12)"/>
        <rect x="31" y="31" width="11" height="10" rx="1" stroke="#0277bd" strokeWidth="1.2" fill="rgba(2,119,189,0.12)"/>
        <rect x="18" y="18" width="6" height="1.5" rx="0.5" fill="#0277bd" opacity="0.8"/>
        <rect x="33" y="18" width="6" height="1.5" rx="0.5" fill="#0277bd" opacity="0.8"/>
        <line x1="22" y1="46" x2="36" y2="46" stroke="#0277bd" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="25" y1="44" x2="25" y2="46" stroke="#0277bd" strokeWidth="1.5"/>
        <line x1="33" y1="44" x2="33" y2="46" stroke="#0277bd" strokeWidth="1.5"/>
      </svg>
    )
  }
];

export default function ServiceCards() {
  return (
    <section style={{
      backgroundImage: "url('/images/white-bg.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      padding: "60px 48px"
    }}>
      <div style={{
        maxWidth: 1280,
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 24
      }}>
        {services.map(s => (
          <div key={s.id} style={{
            background: "#fff",
            borderRadius: 16,
            padding: "28px 24px",
            display: "flex",
            alignItems: "flex-start",
            gap: 20,
            boxShadow: "0 2px 20px rgba(0,0,0,0.07)",
            transition: "transform 0.2s, box-shadow 0.2s",
            cursor: "pointer"
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = "translateY(-4px)";
            e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,0,0,0.13)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 2px 20px rgba(0,0,0,0.07)";
          }}
          >
            {/* Icon circle */}
            <div style={{
              width: 82,
              height: 82,
              borderRadius: "50%",
              background: s.iconBg,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0
            }}>
              {s.icon}
            </div>

            {/* Text */}
            <div style={{ flex: 1 }}>
              <h3 style={{
                color: s.titleColor,
                fontFamily: "'Arial Black', sans-serif",
                fontSize: 15,
                fontWeight: 900,
                margin: "0 0 6px",
                letterSpacing: 0.4
              }}>{s.title}</h3>
              <div style={{
                width: 34,
                height: 3,
                background: s.lineColor,
                borderRadius: 2,
                marginBottom: 10
              }} />
              <p style={{
                color: "#444",
                fontSize: 13.5,
                lineHeight: 1.65,
                margin: "0 0 16px"
              }}>{s.desc}</p>
              <button style={{
                background: s.btnBg,
                color: "#fff",
                border: "none",
                borderRadius: 30,
                padding: "9px 22px",
                fontSize: 13,
                fontWeight: 700,
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                letterSpacing: 0.3,
                transition: "opacity 0.2s, transform 0.15s"
              }}
              onMouseEnter={e => { e.currentTarget.style.opacity = "0.87"; e.currentTarget.style.transform = "scale(1.03)"; }}
              onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "scale(1)"; }}
              >
                Learn more <span style={{ fontSize: 16, fontWeight: 900 }}>›</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
