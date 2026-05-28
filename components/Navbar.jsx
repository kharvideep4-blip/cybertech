"use client";
import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const links = ["Home", "About", "Service", "Contact us", "Partner Program"];

  return (
    <>
      <nav style={{
        background: "#000",
        padding: "12px 48px",
        position: "sticky",
        top: 0,
        zIndex: 100,
        borderBottom: "1px solid rgba(255,255,255,0.08)"
      }}>
        <div style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}>
          {/* LOGO */}
          <div>
            <div style={{ lineHeight: 1.1 }}>
              <span style={{
                color: "#e53935",
                fontFamily: "'Arial Black', sans-serif",
                fontSize: 24,
                fontWeight: 900,
                letterSpacing: 1
              }}>THE </span>
              <span style={{
                color: "#42a5f5",
                fontFamily: "'Arial Black', sans-serif",
                fontSize: 24,
                fontWeight: 900,
                letterSpacing: 1
              }}>CYBERTECH</span>
            </div>
            <div style={{
              color: "#42a5f5",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: 4,
              marginTop: 1
            }}>DATA ENGINEERS</div>
            <div style={{
              display: "flex",
              gap: 14,
              marginTop: 4
            }}>
              {["Recover","Secure","Build","Scale"].map(t => (
                <span key={t} style={{ color: "#ccc", fontSize: 10, letterSpacing: 0.5 }}>{t}</span>
              ))}
            </div>
          </div>

          {/* NAV LINKS */}
          <ul style={{ display: "flex", listStyle: "none", gap: 40, margin: 0, padding: 0 }}>
            {links.map(link => (
              <li key={link}
                onClick={() => setActive(link)}
                style={{
                  color: "#fff",
                  fontSize: 14,
                  fontWeight: 500,
                  cursor: "pointer",
                  paddingBottom: 4,
                  position: "relative",
                  borderBottom: active === link ? "2px solid #42a5f5" : "2px solid transparent",
                  transition: "color 0.2s"
                }}>
                {link}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
