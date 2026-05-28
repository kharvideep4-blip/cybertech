"use client";
import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const links = ["Home", "About", "Service", "Contact us", "Partner Program"];

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        {/* Logo container with right-aligned content */}
        <div className="logo">
          <div className="logo-top">
            <span className="logo-the">THE </span>
            <span className="logo-cyber">CYBERTECH</span>
          </div>
          <div className="logo-bottom">DATA ENGINEERS</div>
          <div className="logo-tagline">
            <span>Recover</span>
            <span>Secure</span>
            <span>Build</span>
            <span>Scale</span>
          </div>
        </div>
        
        <ul className="nav-links">
          {links.map((link) => (
            <li
              key={link}
              className={active === link ? "nav-item active" : "nav-item"}
              onClick={() => setActive(link)}
            >
              {link}
              {active === link && <span className="nav-underline" />}
            </li>
          ))}
        </ul>
      </div>

      <style jsx>{`
        .navbar {
          background: #000;
          padding: 14px 40px;
          position: sticky;
          top: 0;
          z-index: 100;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .navbar-inner {
          max-width: 1280px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .logo {
          display: flex;
          flex-direction: column;
          align-items: flex-end; /* This aligns all lines to the right */
          gap: 1px;
        }
        .logo-top {
          font-size: 22px;
          font-weight: 900;
          letter-spacing: 1px;
          line-height: 1;
        }
        .logo-the {
          color: #e53935;
          font-family: 'Arial Black', sans-serif;
        }
        .logo-cyber {
          color: #2196f3;
          font-family: 'Arial Black', sans-serif;
        }
        .logo-bottom {
          color: #2196f3;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 3px;
          font-family: 'Arial', sans-serif;
        }
        .logo-tagline {
          display: flex;
          gap: 10px; /* Adjusted gap to keep them compact */
          margin-top: 3px;
        }
        .logo-tagline span {
          color: #fff;
          font-size: 10px;
          font-weight: 400;
          letter-spacing: 0.5px;
        }
        .nav-links {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
          gap: 36px;
        }
        .nav-item {
          color: #fff;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          position: relative;
          padding-bottom: 4px;
          letter-spacing: 0.3px;
          transition: color 0.2s;
        }
        .nav-item:hover {
          color: #64b5f6;
        }
        .nav-item.active {
          color: #fff;
        }
        .nav-underline {
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 2px;
          background: #2196f3;
          border-radius: 2px;
        }
      `}</style>
    </nav>
  );
}