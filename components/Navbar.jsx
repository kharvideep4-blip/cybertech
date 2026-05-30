"use client";
import { useState, useRef } from "react";
import Link from "next/link";

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const timerRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timerRef.current);
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    timerRef.current = setTimeout(() => {
      setShowDropdown(false);
    }, 200);
  };

  const dataRecoveryCategories = [
    "HARD DISK DATA RECOVERY", "CAMERA DATA RECOVERY", "CD-DVD BLU DATA RECOVERY",
    "ENCRYPTED FILE RECOVERY", "Solid State Drive Recovery", "Server Data Recovery",
    "Novell Data Recovery", "Password Data Recovery", "Mobile Iphone Data Recovery",
    "File Recovery and Repair", "APPLE MAC OS DATA RECOVERY", "Email Recovery Services",
    "Tablet Data Recovery", "Windows Data Recovery", "MS Office Data Recovery",
    "UNIX & LINUX Data Recovery", "USB Drive Data Recovery", "Tape Data Recovery",
    "Memory Card Data Recovery", "Tally Data Recovery", "Laptop Data Recovery"
  ];

  const mainServices = [
    { name: "Cyber Forensics", path: "cyber-forensics" },
    { name: "Cybersecurity", path: "cyber-security" },
    { name: "Data Center Consulting", path: "data-center-consulting" },
    { name: "Data Migration", path: "data-migration" },
    { name: "Ransomware Recovery", path: "ransomware-recovery" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        {/* LOGO SECTION RESTORED */}
        <div className="logo">
          <div className="logo-top">
            <span className="logo-the">THE </span>
            <span className="logo-cyber">CYBERTECH</span>
          </div>
          <div className="logo-bottom">DATA ENGINEERS</div>
          <div className="logo-tagline">RecoverSecureBuildScale</div>
        </div>

        {/* LINKS ON RIGHT */}
        <ul className="nav-links">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li className="service-item" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <span className="nav-link-text">Service <span className="service-arrow">▼</span></span>
            <div className={`dropdown-container ${showDropdown ? 'visible' : ''}`}>
              <ul className="dropdown-menu">
                <li className="has-submenu">
                  Data Recovery <span className="sub-arrow">◀</span>
                  <div className="mega-menu">
                    {dataRecoveryCategories.map((cat) => (
                      <Link key={cat} href={`/services/data-recovery/${cat.toLowerCase().replace(/\s+/g, '-')}`}>
                        {cat}
                      </Link>
                    ))}
                  </div>
                </li>
                {mainServices.map((s) => (
                  <li key={s.path}><Link href={`/services/${s.path}`}>{s.name}</Link></li>
                ))}
              </ul>
            </div>
          </li>
          <li><Link href="/contact">Contact us</Link></li>
          <li><Link href="/partner">Partner Program</Link></li>
        </ul>
      </div>

      <style jsx>{`
        .navbar { background: #000; padding: 20px 40px; border-bottom: 1px solid #333; position: relative; z-index: 1000; }
        .navbar-inner { max-width: 1400px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; }
        
        /* Logo Styling */
        .logo-cyber { color: #2196f3; font-weight: 800; font-size: 18px; }
        .logo-bottom { color: #ff4d4d; font-size: 10px; letter-spacing: 3px; font-weight: 700; }
        .logo-tagline { color: #fff; font-size: 8px; margin-top: 2px; letter-spacing: 1px; }
        
        .nav-links { display: flex; list-style: none; gap: 30px; color: #fff; font-size: 14px; margin: 0; }
        .service-item { position: relative; cursor: pointer; }
        
        .dropdown-container { position: absolute; top: 100%; right: 0; padding-top: 15px; opacity: 0; visibility: hidden; transition: 0.2s; z-index: 9999; }
        .dropdown-container.visible { opacity: 1; visibility: visible; }
        
        .dropdown-menu { background: #000 !important; border: 1px solid #333; width: 250px; padding: 0; list-style: none; margin: 0; box-shadow: 0 10px 20px rgba(0,0,0,0.5); }
        .dropdown-menu li { padding: 12px 20px; list-style: none; border-bottom: 1px solid #222; }
        .dropdown-menu li:hover { background: #111; color: #2196f3; }

        .mega-menu { position: absolute; right: 100%; top: 0; background: #000 !important; border: 1px solid #333; width: 700px; padding: 20px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; opacity: 0; visibility: hidden; transition: 0.2s; z-index: 9999; }
        .has-submenu:hover .mega-menu { opacity: 1; visibility: visible; }
        .mega-menu a { color: #ccc; text-decoration: none; font-size: 11px; transition: 0.3s; }
        .mega-menu a:hover { color: #2196f3; transform: translateX(5px); }
        .sub-arrow { float: right; font-size: 10px; }
      `}</style>
    </nav>
  );
}