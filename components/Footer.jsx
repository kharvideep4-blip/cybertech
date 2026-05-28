"use client";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* ABOUT US */}
        <div className="column">
          <h4>ABOUT US</h4>
          <ul>
            <li>Contact us</li>
            <li>Blog</li>
            <li>Partner Program</li>
            <li>Why us</li>
          </ul>
        </div>

        {/* SERVICES */}
        <div className="column">
          <h4>SERVICES</h4>
          <ul>
            <li>HDD Recovery</li>
            <li>Server Recovery</li>
            <li>SSD Recovery</li>
            <li>Camera Recovery</li>
          </ul>
        </div>

        {/* ADDRESS */}
        <div className="column">
          <h4>ADDRESS HO/LAB</h4>
          <p>30/235-B, old Anand Nagar lane 2, Vakola,<br/>Near-Vakola Police Station<br/>Santacruz (E), Mumbai-400055</p>
          <p style={{ marginTop: '10px' }}><strong>Contact:</strong> +91-22-61473555<br/><strong>Mobile:</strong> +91-8767113555</p>
        </div>

        {/* CONNECT & SOCIALS */}
        <div className="column">
          <h4>CONNECT</h4>
          <div className="social-icons">
            {/* You can replace these text placeholders with <img> or <svg> icons */}
            <span className="icon">Facebook</span>
            <span className="icon">Twitter</span>
            <span className="icon">Pinterest</span>
            <span className="icon">LinkedIn</span>
            <span className="icon">YouTube</span>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="footer-bottom">
        <p>Copyright © 2026 The CyberTech. All rights reserved.</p>
      </div>

      <style jsx>{`
        .footer { background: #000; color: #fff; padding: 60px 20px; border-top: 1px solid #333; }
        .footer-container { max-width: 1280px; margin: 0 auto; display: grid; grid-template-columns: repeat(4, 1fr); gap: 40px; }
        h4 { margin-bottom: 20px; font-size: 16px; letter-spacing: 1px; color: #fff; }
        ul { list-style: none; padding: 0; }
        li { margin-bottom: 12px; font-size: 14px; color: #aaa; cursor: pointer; transition: color 0.3s; }
        li:hover { color: #2196f3; }
        p { font-size: 14px; color: #aaa; line-height: 1.6; }
        .social-icons { display: flex; flex-direction: column; gap: 10px; }
        .icon { font-size: 14px; color: #aaa; cursor: pointer; }
        .footer-bottom { text-align: center; margin-top: 50px; padding-top: 20px; border-top: 1px solid #222; font-size: 12px; color: #666; }
        
        @media (max-width: 768px) {
          .footer-container { grid-template-columns: 1fr 1fr; }
        }
      `}</style>
    </footer>
  );
}