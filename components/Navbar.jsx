"use client";
import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [isOpen, setIsOpen] = useState(false); // Tracks if mobile dropdown is open
  const links = ["Home", "About", "Service", "Contact us", "Partner Program"];

  return (
    <nav style={{
      background: "#000",
      padding: "16px min(4%, 48px)",
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
        justifyContent: "space-between",
        position: "relative"
      }}>
        {/* LOGO */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ lineHeight: 1.1 }}>
            <span style={{
              color: "#e53935",
              fontFamily: "'Arial Black', sans-serif",
              fontSize: "clamp(18px, 2vw, 24px)",
              fontWeight: 900,
              letterSpacing: 1
            }}>THE </span>
            <span style={{
              color: "#42a5f5",
              fontFamily: "'Arial Black', sans-serif",
              fontSize: "clamp(18px, 2vw, 24px)",
              fontWeight: 900,
              letterSpacing: 1
            }}>CYBERTECH</span>
          </div>
          <div style={{
            color: "#42a5f5",
            fontSize: "clamp(9px, 1vw, 12px)",
            fontWeight: 700,
            letterSpacing: 4,
            marginTop: 1
          }}>DATA ENGINEERS</div>
        </div>

        {/* HAMBURGER MENU BUTTON (Visible only on mobile) */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="menu-toggle-btn"
          style={{
            background: "none",
            border: "none",
            color: "#fff",
            cursor: "pointer",
            padding: 4
          }}
        >
          {isOpen ? (
            /* Close Icon (X) */
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            /* Hamburger Icon (☰) */
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>

        {/* NAV LINKS (Desktop row & Mobile Dropdown Box) */}
        <ul className={`nav-links-list ${isOpen ? "open" : ""}`}>
          {links.map(link => (
            <li key={link}
              onClick={() => {
                setActive(link);
                setIsOpen(false); // Close menu when a link is clicked
              }}
              style={{
                color: "#fff",
                fontSize: "clamp(14px, 1.2vw, 14px)",
                fontWeight: 500,
                cursor: "pointer",
                paddingBottom: 4,
                position: "relative",
                borderBottom: active === link ? "2px solid #42a5f5" : "2px solid transparent",
                transition: "all 0.2s",
                whiteSpace: "nowrap"
              }}>
              {link}
            </li>
          ))}
        </ul>
      </div>

      {/* Scoped Styles for Handling Layout Differences */}
      <style jsx>{`
        .nav-links-list {
          display: flex;
          list-style: none;
          gap: 40px;
          margin: 0;
          padding: 0;
          transition: all 0.3s ease-in-out;
        }

        /* Default: Hide menu button on desktop screens */
        .menu-toggle-btn {
          display: none;
        }

        /* ── PHONE & TABLET RESPONSIVE DROPDOWN STYLES ── */
        @media (max-width: 768px) {
          .menu-toggle-btn {
            display: block; /* Show hamburger button on smaller devices */
          }

          .nav-links-list {
            display: none; /* Hide standard row list by default */
            position: absolute;
            top: 100%;
            left: -16px;
            right: -16px;
            width: calc(100% + 32px);
            background: #0a0a0a;
            border-top: 1px solid rgba(255,255,255,0.08);
            border-bottom: 1px solid rgba(255,255,255,0.08);
            flex-direction: column;
            gap: 0;
            padding: 8px 0;
          }

          /* Shows the full-width dropdown box when button triggers 'open' state */
          .nav-links-list.open {
            display: flex;
            margin-top: 16px;
          }

          .nav-links-list :global(li) {
            width: 100%;
            padding: 14px 24px !important;
            border-bottom: 1px solid rgba(255,255,255,0.03) !important;
          }

          .nav-links-list :global(li:last-child) {
            border-bottom: none !important;
          }
        }
      `}</style>
    </nav>
  );
}