"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import { dataRecoveryCategories } from "@/lib/dataRecoveryContent";

const mainServices = [
  { name: "Cyber Forensics", path: "cyber-forensics" },
  { name: "Cybersecurity", path: "cyber-security" },
  { name: "Data Center Consulting", path: "data-center-consulting" },
  { name: "Data Migration", path: "data-migration" },
  { name: "Ransomware Recovery", path: "ransomware-recovery" },
];

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const timerRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timerRef.current);
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    timerRef.current = setTimeout(() => setShowDropdown(false), 200);
  };

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link href="/" className="logo-link">
          <div className="logo">
            <div className="logo-top">
              <span className="logo-the">THE </span>
              <span className="logo-cyber">CYBERTECH</span>
            </div>
            <div className="logo-bottom">DATA ENGINEERS</div>
            <div className="logo-tagline">RecoverSecureBuildScale</div>
          </div>
        </Link>

        <ul className="nav-links">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>

          {/* SERVICE — hover for dropdown, click goes to /services page */}
          <li
            className="service-item"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Clicking "Service" navigates to the Services overview page */}
            <Link href="/services" className="nav-link-text">
              Service <span className="service-arrow">▼</span>
            </Link>

            <div className={`dropdown-container ${showDropdown ? "visible" : ""}`}>
              <ul className="dropdown-menu">

                {/* Data Recovery with mega-menu on hover */}
                <li className="has-submenu">
                  <Link href="/services/data-recovery" className="submenu-label">
                    Data Recovery <span className="sub-arrow">◀</span>
                  </Link>
                  <div className="mega-menu">
                    {dataRecoveryCategories.map((cat) => (
                      <Link
                        key={cat.slug}
                        href={`/services/data-recovery/${cat.slug}`}
                        className="mega-link"
                      >
                        <span className="mega-icon">{cat.icon}</span>
                        {cat.label}
                      </Link>
                    ))}
                  </div>
                </li>

                {/* Other main services */}
                {mainServices.map((s) => (
                  <li key={s.path}>
                    <Link href={`/services/${s.path}`}>{s.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>

          <li><Link href="/contact">Contact us</Link></li>
          <li><Link href="/partner">Partner Program</Link></li>
        </ul>
      </div>

      <style jsx>{`
        .navbar {
          background: #000;
          padding: 20px 40px;
          border-bottom: 1px solid #333;
          position: relative;
          z-index: 1000;
        }
        .navbar-inner {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        /* Logo */
        .logo-link { text-decoration: none; }
        .logo-top { display: flex; align-items: baseline; gap: 4px; }
        .logo-the { color: #fff; font-weight: 700; font-size: 14px; }
        .logo-cyber { color: #2196f3; font-weight: 800; font-size: 18px; }
        .logo-bottom { color: #ff4d4d; font-size: 10px; letter-spacing: 3px; font-weight: 700; }
        .logo-tagline { color: #888; font-size: 8px; margin-top: 2px; letter-spacing: 1px; }

        /* Nav links */
        .nav-links {
          display: flex;
          list-style: none;
          gap: 30px;
          color: #fff;
          font-size: 14px;
          margin: 0;
          padding: 0;
          align-items: center;
        }
        .nav-links li a,
        .nav-links li :global(a) {
          color: #fff;
          text-decoration: none;
          transition: color 0.2s;
        }
        .nav-links li a:hover,
        .nav-links li :global(a:hover) {
          color: #2196f3;
        }

        /* Service item */
        .service-item { position: relative; cursor: pointer; }
        .nav-link-text {
          color: #fff !important;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .service-arrow { font-size: 10px; }

        /* Dropdown */
        .dropdown-container {
          position: absolute;
          top: 100%;
          right: 0;
          padding-top: 15px;
          opacity: 0;
          visibility: hidden;
          transition: 0.2s;
          z-index: 9999;
        }
        .dropdown-container.visible { opacity: 1; visibility: visible; }

        .dropdown-menu {
          background: #0a0a0a;
          border: 1px solid #2196f3;
          border-top: 2px solid #2196f3;
          width: 240px;
          padding: 0;
          list-style: none;
          margin: 0;
          box-shadow: 0 10px 40px rgba(33, 150, 243, 0.15);
        }
        .dropdown-menu li {
          padding: 0;
          list-style: none;
          border-bottom: 1px solid #1a1a1a;
        }
        .dropdown-menu li a,
        .dropdown-menu li :global(a) {
          display: block;
          padding: 12px 20px;
          color: #ccc;
          text-decoration: none;
          font-size: 13px;
          transition: 0.2s;
        }
        .dropdown-menu li a:hover,
        .dropdown-menu li :global(a:hover) {
          background: #111;
          color: #2196f3;
          padding-left: 26px;
        }

        /* Data Recovery submenu */
        .has-submenu { position: relative; }
        .submenu-label {
          display: flex !important;
          justify-content: space-between;
          align-items: center;
        }
        .sub-arrow { font-size: 10px; }

        /* Mega menu */
        .mega-menu {
          position: absolute;
          right: 100%;
          top: 0;
          background: #0a0a0a;
          border: 1px solid #333;
          border-right: 2px solid #2196f3;
          width: 680px;
          padding: 16px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 4px;
          opacity: 0;
          visibility: hidden;
          transition: 0.2s;
          z-index: 9999;
          box-shadow: -10px 10px 40px rgba(0, 0, 0, 0.6);
        }
        .has-submenu:hover .mega-menu { opacity: 1; visibility: visible; }

        .mega-link {
          display: flex !important;
          align-items: center;
          gap: 8px;
          color: #aaa !important;
          text-decoration: none;
          font-size: 11.5px;
          padding: 8px 10px !important;
          border-radius: 4px;
          transition: 0.2s;
        }
        .mega-link:hover {
          background: #111 !important;
          color: #2196f3 !important;
          padding-left: 14px !important;
        }
        .mega-icon { font-size: 14px; flex-shrink: 0; }
      `}</style>
    </nav>
  );
}
