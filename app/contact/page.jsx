"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const locations = [
    {
      title: "Mumbai Head Office / LAB",
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.5!2d72.8399!3d19.0760!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9b888ae67fd%3A0x2a4d3b3e6b5f2e!2sSantacruz%20East%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin",
      address: "30/235-B, old Anand Nagar, Vakola,",
      address2: "Near Vakola Police Station Santacruz (E) Mumbai-55",
      phone: "+91-22 - 61473555",
      email: "sales@thecybertech.in",
    },
    {
      title: "Surat",
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.0!2d72.8311!3d21.1702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e72e6f5f5f5%3A0x1234567890abcdef!2sNanpura%2C%20Surat!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin",
      address: "B - 305, 2nd Floor, Padam Arcade Near Handloom House, Nanpura Surat(GUJ) 395001",
      contact: "PRADEEP THAWANI",
      phone: "+91-9374709140 / +91-9033009140",
      email: "pradeep@thecybertech.in",
    },
    {
      title: "Ahmedabad",
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.0!2d72.5714!3d23.0225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848abad5e24b%3A0xabcdef1234567890!2sThaltej%2C%20Ahmedabad!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin",
      address: "619, Gala Empire, Opp. Door Darshan Kendra, Drive-In Road, Thaltej, Ahmedabad 380054",
      contact: "PARAS H. SHAH",
      phone: "+91-9687661767",
      email: "paras@thecybertech.in",
    },
  ];

  const moreLocations = [
    {
      title: "Bihar",
      address: "Road no. 1, Bajrang Puram, Rewa Road, Bhagwanpur, Muzaffarpur, Bihar 842001",
      contact: "Kamlesh Kumar",
      phone: "+91-9304386829 / +91-9431055007",
    },
    {
      title: "Pune",
      address: "Light House, Shop No 84, 1st floor, Bibwewadi Kondhwa Rd, Pune, Maharashtra 411037",
      contact: "Sheetal Joshi",
      phone: "+91-9922288218",
    },
    {
      title: "Mumbai Central",
      address: "Geetanjali - B, Shop no.2, Dr. D. B. Marg, Opp. Reliance Smart, Next to Lalit Restaurant, Mumbai Central (E), Mumbai 400008.",
      contact: "Murtuza Electricwala",
      phone: "+91-9819400453",
    },
  ];

  return (
    <>
      <Navbar />

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Contact us</h1>
          <div className="hero-line" />
          <p>We are always standing by &amp; eager to help!</p>
        </div>
      </section>

      {/* ── GENERAL INQUIRIES ── */}
      <section className="section white-bg text-center">
        <div className="container">
          <h2 className="inq-title">GENERAL INQUIRIES</h2>
          <p className="inq-text">For General Inquiries, Media and Any Type Data Recovery</p>
          <p className="inq-text">Please Contact: <a href="mailto:info@thecybertech.in" className="email-link">info@thecybertech.in</a></p>

          <h2 className="inq-title" style={{ marginTop: "40px" }}>OUR TEAM</h2>
          <p className="inq-text">The CyberTech Data Recovery&apos;s engineers have trained extensively and worked<br />with hard drive and data storage manufacturers on a wide variety of problems.</p>

          <h2 className="inq-title" style={{ marginTop: "40px" }}>CONTACT US BY PHONE</h2>
          <div className="phone-icon">👨‍💼</div>
          <div className="phone-details">
            <p>Contact No: +91-22 – 61473555</p>
            <p>Mobile : +91-8767113555</p>
            <p>(Monday to Friday, 9am to 6pm)</p>
            <p>Email Id : <a href="mailto:sales@thecybertech.in" className="email-link">sales@thecybertech.in</a></p>
            <p>Website : www.thecybertech.in</p>
          </div>
        </div>
      </section>

      {/* ── TOP 3 LOCATIONS WITH MAPS ── */}
      <section className="section white-bg">
        <div className="container">
          <div className="map-grid">
            {locations.map((loc) => (
              <div key={loc.title} className="location-card">
                <div className="map-wrapper">
                  <iframe
                    src={loc.mapSrc}
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <h3 className="loc-title">{loc.title}</h3>
                <p className="loc-addr">
                  <span className="loc-icon">📍</span>{loc.address}
                </p>
                {loc.address2 && <p className="loc-addr">&nbsp;&nbsp;&nbsp;&nbsp;{loc.address2}</p>}
                {loc.contact && (
                  <p className="loc-addr"><span className="loc-icon">👤</span>{loc.contact}</p>
                )}
                <p className="loc-addr"><span className="loc-icon">📞</span>{loc.phone}</p>
                <p className="loc-addr"><span className="loc-icon">✉</span>{loc.email}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MORE LOCATIONS (no map) ── */}
      <section className="section gray-bg">
        <div className="container">
          <div className="more-grid">
            {moreLocations.map((loc) => (
              <div key={loc.title} className="more-card">
                <h3 className="loc-title">{loc.title}</h3>
                <p className="loc-addr"><span className="loc-icon">📍</span>{loc.address}</p>
                <p className="loc-addr"><span className="loc-icon">👤</span>{loc.contact}</p>
                <p className="loc-addr"><span className="loc-icon">📞</span>{loc.phone}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }

        .hero {
          position: relative; height: 380px;
          background: linear-gradient(135deg, #1a2a4a 0%, #2d4a7a 50%, #1a3a6a 100%);
          display: flex; align-items: center; overflow: hidden;
        }
        .hero-overlay { position: absolute; inset: 0; background: rgba(10,20,50,0.55); }
        .hero-content { position: relative; z-index: 2; padding: 0 80px; }
        .hero-content h1 { color: #fff; font-size: 42px; font-weight: 700; margin-bottom: 12px; }
        .hero-line { width: 50px; height: 3px; background: #fff; margin-bottom: 16px; }
        .hero-content p { color: #e0e0e0; font-size: 16px; }

        .section { padding: 60px 20px; }
        .white-bg { background: #fff; }
        .gray-bg { background: #f4f4f4; }
        .container { max-width: 1200px; margin: 0 auto; }
        .text-center { text-align: center; }

        /* INQUIRIES */
        .inq-title { font-size: 24px; font-weight: 800; color: #1a2a6e; letter-spacing: 1px; margin-bottom: 10px; }
        .inq-text { font-size: 15px; color: #444; line-height: 1.8; }
        .email-link { color: #2196f3; text-decoration: none; }
        .email-link:hover { text-decoration: underline; }
        .phone-icon { font-size: 60px; margin: 20px auto; }
        .phone-details { display: flex; flex-direction: column; gap: 8px; font-size: 15px; color: #333; }

        /* MAP GRID */
        .map-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; }
        .location-card { display: flex; flex-direction: column; gap: 8px; }
        .map-wrapper { border-radius: 6px; overflow: hidden; border: 1px solid #ddd; }
        .loc-title { font-size: 18px; font-weight: 700; color: #1a2a6e; margin-top: 10px; }
        .loc-addr { font-size: 13px; color: #444; display: flex; gap: 6px; line-height: 1.5; }
        .loc-icon { flex-shrink: 0; }

        /* MORE GRID */
        .more-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px; }
        .more-card { display: flex; flex-direction: column; gap: 8px; }

        @media (max-width: 900px) {
          .map-grid, .more-grid { grid-template-columns: 1fr; }
          .hero-content { padding: 0 30px; }
        }
      `}</style>
    </>
  );
}
