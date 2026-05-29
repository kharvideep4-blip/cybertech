"use client";
import { useState, useRef } from "react";
import Link from "next/link";

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [showDropdown, setShowDropdown] = useState(false);
  const timerRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timerRef.current);
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    timerRef.current = setTimeout(() => {
      setShowDropdown(false);
    }, 200); // 200ms delay to move mouse into the menu
  };

  const links = ["Home", "About", "Service", "Contact us", "Partner Program"];
  const services = [
    { name: "Data Recovery", path: "data-recovery" },
    { name: "Ransomware Recovery", path: "ransomware-recovery" },
    { name: "Cyber Forensics", path: "cyber-forensics" },
    { name: "Data Center Consulting", path: "data-center-consulting" },
    { name: "Data Migration", path: "data-migration" },
    { name: "Cyber Security", path: "cyber-security" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="logo">
          <div className="logo-top">
            <span className="logo-the">THE </span>
            <span className="logo-cyber">CYBERTECH</span>
          </div>
          <div className="logo-bottom">DATA ENGINEERS</div>
          <div className="logo-tagline">
            <span>Recover</span><span>Secure</span><span>Build</span><span>Scale</span>
          </div>
        </div>
        
        <ul className="nav-links">
          {links.map((link) => (
            <li
              key={link}
              className={`nav-item ${active === link ? "active" : ""} ${link === "Service" ? "service-link" : ""}`}
              onClick={() => setActive(link)}
              onMouseEnter={link === "Service" ? handleMouseEnter : undefined}
              onMouseLeave={link === "Service" ? handleMouseLeave : undefined}
            >
              {link === "Service" ? (
                <Link href="/services">{link}</Link>
              ) : (
                link
              )}
              {active === link && <span className="nav-underline" />}

              {link === "Service" && showDropdown && (
                <ul className="dropdown-menu" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                  {services.map((s) => (
                    <Link key={s.path} href={`/services/${s.path}`}>
                      <li className="dropdown-item">{s.name}</li>
                    </Link>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      <style jsx>{`
        .navbar { background: #000; padding: 14px 40px; position: sticky; top: 0; z-index: 100; border-bottom: 1px solid rgba(255,255,255,0.06); }
        .navbar-inner { max-width: 1280px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; }
        
        /* Dropdown Fix: Padding-top bridges the gap to prevent flicker */
        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          background: #000;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 4px;
          width: 220px;
          padding-top: 20px; 
          margin-top: 0;
          z-index: 1000;
          box-shadow: 0 10px 20px rgba(0,0,0,0.3);
          list-style: none;
        }
        .dropdown-item {
          padding: 10px 20px;
          color: #fff;
          font-size: 13px;
          cursor: pointer;
        }
        .dropdown-item:hover { background: rgba(33, 150, 243, 0.1); color: #2196f3; }
        
        .nav-item { color: #fff; font-size: 14px; cursor: pointer; position: relative; padding-bottom: 4px; }
        .service-link::after { content: '▼'; font-size: 8px; margin-left: 6px; }
        .nav-links { display: flex; list-style: none; gap: 36px; }
      `}</style>
    </nav>
  );
}