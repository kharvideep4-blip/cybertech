"use client";
import React from "react";

const serviceCards = [
  {
    id: 1, title: "DATA RECOVERY", color: "#00bcd4",
    border: "1.5px solid #00bcd4", glow: "0 0 16px rgba(0,188,212,0.45)",
    icon: (
      <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
        <circle cx="36" cy="36" r="25" stroke="#00bcd4" strokeWidth="2" fill="none"/>
        <rect x="20" y="24" width="20" height="14" rx="2" stroke="#00bcd4" strokeWidth="1.8" fill="none"/>
        <circle cx="30" cy="31" r="4" stroke="#00bcd4" strokeWidth="1.6" fill="none"/>
        <circle cx="30" cy="31" r="1.8" fill="#00bcd4"/>
        <rect x="34" y="26" width="4" height="1.4" rx="0.5" fill="#00bcd4" opacity="0.7"/>
        <rect x="34" y="29" width="4" height="1.4" rx="0.5" fill="#00bcd4" opacity="0.7"/>
        <circle cx="48" cy="48" r="9" stroke="#00bcd4" strokeWidth="1.8" fill="rgba(0,188,212,0.1)"/>
        <circle cx="48" cy="48" r="4.5" stroke="#00bcd4" strokeWidth="1.8" fill="none"/>
        <line x1="51" y1="51" x2="55" y2="55" stroke="#00bcd4" strokeWidth="2.2" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    id: 2, title: "RANSOMWARE RECOVERY", color: "#f44336",
    border: "1.5px solid #f44336", glow: "0 0 16px rgba(244,67,54,0.45)",
    icon: (
      <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
        <circle cx="36" cy="36" r="24" stroke="#f44336" strokeWidth="2" fill="none"/>
        <rect x="24" y="33" width="24" height="19" rx="2.5" stroke="#f44336" strokeWidth="1.8" fill="rgba(244,67,54,0.1)"/>
        <path d="M28 33V26C28 21 31.2 18 36 18C40.8 18 44 21 44 26V33" stroke="#f44336" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
        <circle cx="36" cy="42.5" r="3.5" fill="#f44336"/>
        <rect x="34.8" y="42.5" width="2.4" height="4.5" rx="1" fill="#c62828"/>
      </svg>
    )
  },
  {
    id: 3, title: "DATA MIGRATION", color: "#00e5c3",
    border: "1.5px solid #00e5c3", glow: "0 0 16px rgba(0,229,195,0.45)",
    icon: (
      <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
        <circle cx="36" cy="36" r="24" stroke="#00e5c3" strokeWidth="2" fill="none"/>
        <path d="M36 20 L36 34" stroke="#00e5c3" strokeWidth="2.2" strokeLinecap="round"/>
        <path d="M30 27 L36 20 L42 27" stroke="#00e5c3" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="41" y="38" width="11" height="8" rx="1.5" stroke="#00e5c3" strokeWidth="1.5" fill="rgba(0,229,195,0.1)"/>
        <rect x="43" y="40" width="3" height="4" rx="0.5" fill="#00e5c3" opacity="0.6"/>
        <rect x="47" y="40" width="3" height="4" rx="0.5" fill="#00e5c3" opacity="0.8"/>
        <path d="M20 40 L39 40" stroke="#00e5c3" strokeWidth="1.4" strokeDasharray="3 2" opacity="0.5"/>
      </svg>
    )
  },
  {
    id: 4, title: "CYBER SECURITY", color: "#ce93d8",
    border: "1.5px solid #ce93d8", glow: "0 0 16px rgba(156,39,176,0.45)",
    icon: (
      <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
        <path d="M36 12L52 20L52 42C52 51 44 58 36 62C28 58 20 51 20 42L20 20Z" stroke="#ce93d8" strokeWidth="1.8" fill="rgba(156,39,176,0.1)"/>
        <rect x="28" y="32" width="16" height="13" rx="2" stroke="#9c27b0" strokeWidth="1.6" fill="rgba(156,39,176,0.18)"/>
        <path d="M30 32V28C30 25.2 32.7 23 36 23C39.3 23 42 25.2 42 28V32" stroke="#ce93d8" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
        <circle cx="36" cy="38.5" r="2.2" fill="#ce93d8"/>
        <line x1="20" y1="37" x2="13" y2="37" stroke="#ce93d8" strokeWidth="1.4" opacity="0.55"/>
        <circle cx="11.5" cy="37" r="1.8" fill="#ce93d8" opacity="0.55"/>
        <line x1="52" y1="37" x2="59" y2="37" stroke="#ce93d8" strokeWidth="1.4" opacity="0.55"/>
        <circle cx="60.5" cy="37" r="1.8" fill="#ce93d8" opacity="0.55"/>
      </svg>
    )
  },
  {
    id: 5, title: "CYBER FORENSICS", color: "#ffb300",
    border: "1.5px solid #ffb300", glow: "0 0 16px rgba(255,179,0,0.45)",
    icon: (
      <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
        <circle cx="33" cy="33" r="18" stroke="#ffb300" strokeWidth="2" fill="rgba(255,179,0,0.07)"/>
        <circle cx="33" cy="33" r="11" stroke="#ffb300" strokeWidth="1.4" fill="none" opacity="0.5"/>
        <circle cx="33" cy="33" r="5.5" stroke="#ffb300" strokeWidth="1.4" fill="none" opacity="0.4"/>
        <path d="M21 21 Q33 17 45 21 Q49 33 45 45 Q33 49 21 45 Q17 33 21 21Z" stroke="#ffb300" strokeWidth="0.9" fill="none" opacity="0.2"/>
        <circle cx="50" cy="50" r="10" stroke="#ffb300" strokeWidth="2" fill="rgba(255,179,0,0.1)"/>
        <circle cx="50" cy="50" r="4.5" stroke="#ffb300" strokeWidth="1.8" fill="none"/>
        <line x1="53.5" y1="53.5" x2="58" y2="58" stroke="#ffb300" strokeWidth="2.8" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    id: 6, title: "DATA CENTER CONSULTING", color: "#42a5f5",
    border: "1.5px solid #42a5f5", glow: "0 0 16px rgba(66,165,245,0.45)",
    icon: (
      <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
        <rect x="20" y="14" width="32" height="40" rx="2" stroke="#42a5f5" strokeWidth="1.6" fill="rgba(33,150,243,0.07)"/>
        <rect x="24" y="18" width="11" height="14" rx="1" stroke="#42a5f5" strokeWidth="1.1" fill="rgba(33,150,243,0.1)"/>
        <rect x="37" y="18" width="11" height="14" rx="1" stroke="#42a5f5" strokeWidth="1.1" fill="rgba(33,150,243,0.1)"/>
        <rect x="24" y="35" width="11" height="14" rx="1" stroke="#42a5f5" strokeWidth="1.1" fill="rgba(33,150,243,0.1)"/>
        <rect x="37" y="35" width="11" height="14" rx="1" stroke="#42a5f5" strokeWidth="1.1" fill="rgba(33,150,243,0.1)"/>
        <rect x="26" y="20" width="6" height="1.8" rx="0.5" fill="#42a5f5" opacity="0.7"/>
        <rect x="39" y="20" width="6" height="1.8" rx="0.5" fill="#42a5f5" opacity="0.7"/>
        <line x1="30" y1="55" x2="42" y2="55" stroke="#42a5f5" strokeWidth="2" strokeLinecap="round"/>
        <line x1="33" y1="54" x2="33" y2="55" stroke="#42a5f5" strokeWidth="1.4"/>
        <line x1="39" y1="54" x2="39" y2="55" stroke="#42a5f5" strokeWidth="1.4"/>
      </svg>
    )
  }
];

const trustItems = [
  {
    label: "EXPERTISE",
    labelColor: "#00e5ff",
    text: "Deep domain knowledge and real-world experience",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="16" stroke="#00e5ff" strokeWidth="2" fill="none"/>
        <circle cx="20" cy="20" r="10" stroke="#00e5ff" strokeWidth="1.6" fill="none"/>
        <circle cx="20" cy="20" r="5" stroke="#00e5ff" strokeWidth="1.6" fill="none"/>
        <circle cx="20" cy="20" r="2.2" fill="#00e5ff"/>
        <line x1="31" y1="9" x2="23" y2="17" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round"/>
        <polygon points="30,7 34,7 34,11" fill="#00e5ff"/>
      </svg>
    )
  },
  {
    label: "TRUST",
    labelColor: "#00e5ff",
    text: "Confidential, reliable and client-focused",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M5 16 C7 12 12 12 15 15 L20 19 L25 15 C28 12 33 12 35 16 C37 20 33 27 20 33 C7 27 3 20 5 16Z" stroke="#00e5ff" strokeWidth="2" fill="rgba(0,229,255,0.1)" strokeLinejoin="round"/>
        <path d="M8 18 C9 15 13 15 15 17" stroke="#00e5ff" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
        <path d="M25 17 C27 15 31 15 32 18" stroke="#00e5ff" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
      </svg>
    )
  },
  {
    label: "INTEGRITY",
    labelColor: "#ffc107",
    text: "Ethical approach with highest standards",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M20 4 L34 10 L34 24 C34 32 27 37 20 39 C13 37 6 32 6 24 L6 10 Z"
          fill="rgba(255,193,7,0.15)" stroke="#ffc107" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M13 20 L17.5 25 L27 15"
          stroke="#ffc107" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    label: "RESULTS",
    labelColor: "#b39ddb",
    text: "Practical solutions that deliver measurable impact",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="5"  y="28" width="6" height="8"  rx="1" fill="#7c4dff" opacity="0.65"/>
        <rect x="13" y="22" width="6" height="14" rx="1" fill="#9c6fff" opacity="0.8"/>
        <rect x="21" y="16" width="6" height="20" rx="1" fill="#b39ddb"/>
        <path d="M8 24 L18 14 L26 20 L36 8"
          stroke="#b39ddb" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <path d="M32 7 L37 7 L37 12"
          stroke="#b39ddb" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
    )
  }
];

export default function Hero() {
  return (
    <section style={{
      backgroundImage: "url('/images/hero-bg.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      minHeight: 560,
      padding: "48px 40px"
    }}>
      <div style={{
        maxWidth: 1280,
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 32
      }}>

        {/* ── LEFT — flex-grow so it fills available space ── */}
        <div style={{ flex: "1 1 0", minWidth: 0 }}>

          {/* HEADLINE */}
          <h1 style={{
            color: "#fff",
            fontFamily: "'Arial Black', Impact, sans-serif",
            fontWeight: 900,
            lineHeight: 1.08,
            margin: "0 0 12px",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
            fontSize: "clamp(24px, 2.6vw, 38px)"
          }}>
            DIGITAL INFRASTRUCTURE<br/>
            <span style={{
              background: "linear-gradient(90deg, #a855f7, #ec4899)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}>&amp;DATA SOLUTIONS</span>
          </h1>

          {/* SUBTITLE */}
          <p style={{
            color: "rgba(255,255,255,0.80)",
            fontSize: 14,
            lineHeight: 1.7,
            margin: "0 0 24px"
          }}>
            End-to-end data, security, and infrastructure solutions<br/>
            to protect, recover, and empower your business.
          </p>

          {/* ── TRUST BAR ── */}
          <div style={{
            background: "rgba(4,12,35,0.82)",
            border: "1.5px solid #1e88e5",
            borderRadius: 12,
            boxShadow: "0 0 16px rgba(30,136,229,0.22), inset 0 0 24px rgba(30,136,229,0.05)",
            padding: "14px 0",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
            boxSizing: "border-box"
          }}>

            {trustItems.map((item, i, arr) => (
              <React.Fragment key={item.label}>
                {/* Each trust item takes equal share */}
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "0 12px",
                  flex: "1 1 0",
                  minWidth: 0
                }}>
                  <div style={{ flexShrink: 0 }}>{item.icon}</div>
                  <div style={{ minWidth: 0 }}>
                    <div style={{
                      color: item.labelColor,
                      fontSize: 11,
                      fontWeight: 800,
                      letterSpacing: 1,
                      marginBottom: 3,
                      whiteSpace: "nowrap"
                    }}>{item.label}</div>
                    <div style={{
                      color: "rgba(255,255,255,0.68)",
                      fontSize: 10.5,
                      lineHeight: 1.45
                    }}>{item.text}</div>
                  </div>
                </div>

                {/* Divider — not after last item */}
                {i < arr.length - 1 && (
                  <div style={{
                    width: 1,
                    height: 44,
                    flexShrink: 0,
                    background: "rgba(30,136,229,0.35)"
                  }} />
                )}
              </React.Fragment>
            ))}

          </div>{/* end trust bar */}
        </div>

        {/* ── RIGHT – Service Cards Grid ── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "repeat(2, 160px)",
          gap: 12,
          flex: "0 0 auto",
          width: "min(560px, 46%)"
        }}>
          {serviceCards.map(card => (
            <div key={card.id} style={{
              background: "rgba(3,8,22,0.75)",
              border: card.border,
              borderRadius: 12,
              boxShadow: card.glow,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              cursor: "pointer",
              transition: "transform 0.2s, box-shadow 0.3s",
              padding: "10px 6px"
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = card.glow.replace("0.45)", "0.85)");
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = card.glow;
            }}>
              {card.icon}
              <div style={{
                color: card.color,
                fontSize: "clamp(9px, 0.9vw, 11px)",
                fontWeight: 800,
                textAlign: "center",
                letterSpacing: 0.8,
                lineHeight: 1.25,
                padding: "0 6px"
              }}>{card.title}</div>
              <div style={{ width: 24, height: 2, background: card.color, borderRadius: 2, opacity: 0.65 }} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
