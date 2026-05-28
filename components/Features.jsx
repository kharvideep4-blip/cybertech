"use client";

export default function Features() {
  const featuresList = [
    {
      title: "9+ LOCATIONS",
      desc: "With 9+ global locations, we deliver local support with a worldwide reach—ensuring fast response and reliable solutions, wherever you are.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1e88e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
          <path d="M2 12h20"/>
        </svg>
      ),
      accentColor: "#1e88e5",
      bgCircle: "rgba(30, 136, 229, 0.08)",
      glowShadow: "0 20px 38px rgba(30, 136, 229, 0.15)"
    },
    {
      title: "25 YR LEADING EXPERTS",
      desc: "Top-skilled and certified professionals with over 25 years of combined experience in cybersecurity and data infrastructure solutions.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffb300" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      ),
      accentColor: "#ffb300",
      bgCircle: "rgba(255, 179, 0, 0.08)",
      glowShadow: "0 20px 38px rgba(255, 179, 0, 0.15)"
    },
    {
      title: "SECURE RECOVERY",
      desc: "Advanced tools and proven techniques to recover your critical data securely and efficiently, minimizing downtime and risk.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2e7d32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
      accentColor: "#2e7d32",
      bgCircle: "rgba(46, 125, 50, 0.08)",
      glowShadow: "0 20px 38px rgba(46, 125, 50, 0.15)"
    }
  ];

  return (
    <section style={{
      /* UPDATED FEATURE: Uses your new white-bg circuit asset instead of flat #fff */
      backgroundColor: "#ffffff",
      backgroundImage: "url('/images/white-bg.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      
      padding: "10px max(4%, 24px) 100px max(4%, 24px)",
      marginTop: "-60px", 
      position: "relative",
      zIndex: 10,
      fontFamily: "sans-serif"
    }}>
      <div style={{
        maxWidth: 1280,
        margin: "0 auto"
      }}>
        
        {/* MAIN SECTION HEADER */}
        <div style={{
          textAlign: "center",
          marginBottom: "40px"
        }}>
          <h2 style={{
            color: "#0d47a1",
            fontSize: "clamp(24px, 2.5vw, 36px)",
            fontWeight: 800,
            letterSpacing: "0.5px",
            margin: "0 0 12px 0"
          }}>
            Why The CyberTech
          </h2>
          <div style={{
            width: "44px",
            height: "4px",
            background: "#0d47a1",
            borderRadius: "2px",
            margin: "0 auto"
          }} />
        </div>

        {/* THREE-COLUMN RESPONSIVE FEATURE CONTAINER */}
        <div className="features-grid-layout" style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "32px",
          marginTop: "-20px" 
        }}>
          {featuresList.map((item, index) => (
            <div 
              key={index}
              className="feature-card-item"
              style={{
                /* Set a semi-transparent white card background to let the background circuits 
                   underneath subtly blend behind the card edges if they overlap */
                background: "rgba(255, 255, 255, 0.94)",
                border: "1px solid rgba(0, 0, 0, 0.06)",
                borderRadius: "24px",
                padding: "44px 32px",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.04)",
                transition: "all 0.4s cubic-bezier(0.25, 1, 0.5, 1)",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                position: "relative",
                cursor: "pointer",
                backdropFilter: "blur(4px)"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-12px) scale(1.03)";
                e.currentTarget.style.boxShadow = item.glowShadow;
                e.currentTarget.style.borderColor = item.accentColor;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.04)";
                e.currentTarget.style.borderColor = "rgba(0, 0, 0, 0.06)";
              }}
            >
              {/* TOP WRAPPER: ICON + ACCENT TITLE */}
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                marginBottom: "24px",
                width: "100%"
              }}>
                {/* SVG Vector Frame */}
                <div style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  background: item.bgCircle,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  transition: "transform 0.4s ease"
                }}
                className="icon-pod"
                >
                  {item.icon}
                </div>

                {/* Card Header Content */}
                <div style={{ width: "100%" }}>
                  <h3 style={{
                    color: item.accentColor,
                    fontSize: "18px",
                    fontWeight: 800,
                    letterSpacing: "0.5px",
                    margin: "0 0 8px 0"
                  }}>
                    {item.title}
                  </h3>
                  <div style={{
                    width: "32px",
                    height: "3px",
                    background: item.accentColor,
                    borderRadius: "1.5px"
                  }} />
                </div>
              </div>

              {/* DESCRIPTION TEXT BLOCK */}
              <p style={{
                color: "#455a64",
                fontSize: "14px",
                lineHeight: "1.65",
                margin: 0,
                fontWeight: 400
              }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>

      {/* COMPONENT MEDIA QUERIES FOR SEAMLESS BREAKPOINTS */}
      <style jsx>{`
        @media (max-width: 992px) {
          .features-grid-layout {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
            maxWidth: 540px;
            margin: -10px auto 0 auto !important;
          }
          .feature-card-item {
            padding: 36px 24px !important;
          }
        }
        
        .feature-card-item:hover .icon-pod {
          transform: scale(1.1) rotate(5deg);
        }
      `}</style>
    </section>
  );
}