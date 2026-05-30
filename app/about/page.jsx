"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function AboutPage() {
  const brands = ["SEAGATE", "DELL", "FUJITSU", "HITACHI", "hp", "IBM", "LaCie", "Lexar", "Maxtor", "SAMSUNG"];

  return (
    <>
      <Navbar />

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>About The CyberTech</h1>
          <div className="hero-line" />
          <p>The CyberTech at a glance</p>
        </div>
      </section>

      {/* ── WHO WE ARE ── */}
      <section className="section white-bg">
        <div className="container">
          <div className="who-grid">
            <div className="who-text">
              <h2 className="section-title navy">Who we are</h2>
              <p className="body-text">
                With the humble beginning as hard drive repair center, way back in 1992, today The CyberTech has grown to be India&apos;s premium. Data Recovery establishment. It became evident sooner that customer concern was more about data than repairs of drives and hence we focused all our potential in that direction and our hard-work eventually made us leaders of Data Recovery in India.
              </p>
            </div>
            <div className="who-img">
              <div className="img-placeholder">
                <span className="img-icon">🔧</span>
                <span className="img-label">Data Recovery Lab</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT WE DO ── */}
      <section className="section blue-bg">
        <div className="container text-center">
          <h2 className="section-title navy">What we do</h2>
          <div className="what-box">
            <p className="body-text">
              The CyberTech is committed to providing quality data recovery services. The CyberTech also treats the data confidentiality of all the jobs seriously. This is evident in the fact that many major financial institutions in India have certified The CyberTech to handle their data recovery requirements by conforming to a high level of confidentiality as required by the industry. Apart from Domestic Companies, we also have customers from Government Ministries, as well as international MNC&apos;s, commercial banks and more. Of course, we are not forgetting home users and students who require data recovery. If you have a data recovery need, we will have the best solution for you.
            </p>
            <p className="body-text" style={{ marginTop: "20px" }}>
              The CyberTech has played a vital role in providing the latest technology with exceptional quality and values to businesses and home users. The panic that can emerge as a result of a sudden data loss can be upsetting and The CyberTech will do everything in order to make the data recovery process as trouble-free as it can be. We are sure you can trust us with your data!
            </p>
            <p className="body-text" style={{ marginTop: "20px" }}>
              The CyberTech&apos;s forensic specialists have established a formidable reputation amongst litigation firms as Hard Disk data recovery &amp; forensic experts covering Multimedia, Linux, Backup Tape as well Apple MAC, IDE HDD, Laptop, SCSI, SAS, NAS RAID server. Our work with clients has always been at the intersection of deep industry expertise and extensive functional capabilities.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHY CYBERTECH ── */}
      <section className="section light-gray">
        <div className="container text-center">
          <h2 className="section-title navy">Why The CyberTech</h2>
          <div className="why-grid">
            <div className="why-card">
              <div className="why-icon">🌐</div>
              <h3 className="why-card-title blue">9+ LOCATIONS</h3>
              <p className="why-card-sub">ACROSS INDIA</p>
              <p className="why-card-text">With 9+ convenient locations across India, our data recovery experts are just a call away. Always ready to help you. Contact us or submit a case today experience more.</p>
            </div>
            <div className="why-card">
              <div className="why-badge">
                <div className="badge-circle">
                  <span className="badge-num">25</span>
                  <span className="badge-text">YEARS</span>
                </div>
              </div>
              <h3 className="why-card-title blue">28 YR LEADING EXPERTS</h3>
              <p className="why-card-sub">SINCE #1992</p>
              <p className="why-card-text">Top-ranked and recognized by several organizations and publications for our outstanding accomplishments and rigorous dedication to best quality services.</p>
            </div>
            <div className="why-card">
              <div className="why-icon shield-icon">🔒</div>
              <h3 className="why-card-title blue">SECURE RECOVERY</h3>
              <p className="why-card-sub">CONFIDENTIALITY GUARANTEE</p>
              <p className="why-card-text">Annual SSAE 16 Type III SOC and internal HIPAA compliance audits to assure complete confidentiality with a wide range of security &amp; confidentiality standards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR BUSINESS OUR PASSION ── */}
      <section className="section white-bg">
        <div className="container text-center">
          <h2 className="section-title navy italic">Our Business Our Passion &amp; Our Work!</h2>
          <div className="passion-grid">
            <div className="passion-item">
              <div className="passion-circle">
                <span className="passion-icon">🏅</span>
              </div>
              <p className="passion-label blue">Quality Work</p>
              <div className="passion-line" />
            </div>
            <div className="passion-item">
              <div className="passion-circle">
                <span className="passion-icon">👥</span>
              </div>
              <p className="passion-label blue">Perfectly Delightful Customer Experience</p>
              <div className="passion-line" />
            </div>
            <div className="passion-item">
              <div className="passion-circle">
                <span className="passion-icon">⏰</span>
              </div>
              <p className="passion-label blue">On-time Delivery</p>
              <div className="passion-line" />
            </div>
          </div>

          <h2 className="section-title navy italic" style={{ marginTop: "40px" }}>We are Recovery Solution, Relief &amp; Delight!</h2>
          <p className="body-text" style={{ textAlign: "center", maxWidth: "700px", margin: "10px auto 0" }}>
            Our guiding Compass: Spreading Our Customer&apos;s Reach, Visibility &amp; Effectiveness, in achieving their Goals
          </p>
        </div>
      </section>

      {/* ── CALL TO ACTION BANNER ── */}
      <section className="cta-banner">
        <div className="cta-inner">
          <div className="cta-agent">👩‍💼</div>
          <div className="cta-details">
            <div className="cta-phone-icon">📞</div>
            <h3 className="cta-number">+91-22-61473555</h3>
            <p className="cta-text"><strong>For immediate help, Call The CyberTech Data Recovery Services</strong></p>
            <p className="cta-text">For more information about our services, please contact us at <a href="mailto:sales@thecybertech.in" className="cta-link">sales@thecybertech.in</a></p>
          </div>
        </div>
      </section>

      {/* ── BRANDS ── */}
      <section className="section white-bg">
        <div className="container text-center">
          <p className="brands-label">[ Recover any Brand of Data ]</p>
          <div className="brands-row">
            {brands.map((b) => (
              <div key={b} className="brand-name">{b}</div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }

        /* HERO */
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

        /* LAYOUT */
        .section { padding: 70px 20px; }
        .white-bg { background: #fff; }
        .blue-bg { background: #e8f0fe; }
        .light-gray { background: #f0f4f8; }
        .container { max-width: 1200px; margin: 0 auto; }
        .text-center { text-align: center; }

        /* TYPOGRAPHY */
        .section-title { font-size: 30px; font-weight: 700; margin-bottom: 24px; }
        .navy { color: #1a2a6e; }
        .blue { color: #1a5bb5; }
        .italic { font-style: italic; }
        .body-text { font-size: 15px; color: #444; line-height: 1.8; text-align: justify; }

        /* WHO WE ARE */
        .who-grid { display: grid; grid-template-columns: 1fr 300px; gap: 50px; align-items: start; }
        .img-placeholder {
          background: #e0e8f4; border-radius: 8px; height: 200px;
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          gap: 10px; border: 2px solid #c5d5e8;
        }
        .img-icon { font-size: 40px; }
        .img-label { font-size: 13px; color: #555; }

        /* WHAT WE DO */
        .what-box {
          max-width: 780px; margin: 0 auto;
          background: #fff; border-radius: 8px;
          padding: 40px; box-shadow: 0 2px 12px rgba(0,0,0,0.06);
          text-align: left;
        }

        /* WHY CYBERTECH */
        .why-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; margin-top: 30px; }
        .why-card {
          background: #fff; border-radius: 8px; padding: 40px 30px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.07); display: flex; flex-direction: column; align-items: center; gap: 10px;
        }
        .why-icon { font-size: 56px; }
        .shield-icon { filter: hue-rotate(200deg); }
        .why-badge { width: 90px; height: 90px; background: linear-gradient(135deg, #f0c040, #e09000); border-radius: 50%; display: flex; align-items: center; justify-content: center; }
        .badge-circle { display: flex; flex-direction: column; align-items: center; }
        .badge-num { font-size: 28px; font-weight: 900; color: #fff; line-height: 1; }
        .badge-text { font-size: 10px; font-weight: 700; color: #fff; letter-spacing: 1px; }
        .why-card-title { font-size: 16px; font-weight: 800; letter-spacing: 0.5px; }
        .why-card-sub { font-size: 11px; color: #888; letter-spacing: 1px; text-transform: uppercase; }
        .why-card-text { font-size: 14px; color: #555; line-height: 1.7; text-align: center; }

        /* PASSION */
        .passion-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; margin-top: 30px; }
        .passion-item { display: flex; flex-direction: column; align-items: center; gap: 12px; }
        .passion-circle {
          width: 110px; height: 110px; border-radius: 50%;
          border: 2px dashed #1a2a6e;
          display: flex; align-items: center; justify-content: center;
        }
        .passion-icon { font-size: 40px; }
        .passion-label { font-size: 15px; font-weight: 600; }
        .passion-line { width: 40px; height: 3px; background: #1a2a6e; border-radius: 2px; }

        /* CTA BANNER */
        .cta-banner {
          background: linear-gradient(rgba(30,30,30,0.92), rgba(30,30,30,0.92)),
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='%23111'/%3E%3C/svg%3E");
          background-size: cover;
          padding: 60px 20px;
        }
        .cta-inner { max-width: 900px; margin: 0 auto; display: flex; align-items: center; justify-content: center; gap: 40px; }
        .cta-agent { font-size: 100px; }
        .cta-details { display: flex; flex-direction: column; gap: 10px; }
        .cta-phone-icon { font-size: 40px; }
        .cta-number { color: #fff; font-size: 28px; font-weight: 700; }
        .cta-text { color: #ddd; font-size: 15px; line-height: 1.6; }
        .cta-link { color: #ff4d4d; text-decoration: none; }
        .cta-link:hover { text-decoration: underline; }

        /* BRANDS */
        .brands-label { font-size: 16px; color: #1a5bb5; margin-bottom: 30px; font-weight: 600; }
        .brands-row { display: flex; flex-wrap: wrap; gap: 30px 50px; justify-content: center; align-items: center; }
        .brand-name { font-size: 18px; font-weight: 900; color: #222; letter-spacing: 1px; text-transform: uppercase; }

        @media (max-width: 900px) {
          .who-grid, .why-grid, .passion-grid { grid-template-columns: 1fr; }
          .hero-content { padding: 0 30px; }
          .cta-inner { flex-direction: column; text-align: center; }
        }
      `}</style>
    </>
  );
}
