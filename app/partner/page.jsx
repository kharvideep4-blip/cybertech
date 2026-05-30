"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function PartnerPage() {
  const benefits = [
    "Referral compensation packages to help you generate revenue",
    "No monthly quotas or minimums",
    "Regular updates and newsletters to help keep you informed",
    "A no-cost program with no contracts",
    "Over 25+ years of experience providing data recovery",
    "Official affiliate partner number and all necessary forms and paperwork",
  ];
  const benefitsRight = [
    "Unmatched Customer Service & Satisfaction",
    "Free Quotes for Data Recovery",
    "Free marketing materials",
    "No Data, No Charge policy",
    "No hidden lab, or diagnostic fees",
    "Commissions are given on every successful data recovery referral",
  ];
  const forWhomLeft = ["VAR", "Data Centers", "Consultants", "Business (Medium to Large Corporations)"];
  const forWhomRight = ["Forensic Companies", "Data Recovery Companies", "Computer Repair Companies", "IT Professionals (CIO, IT Departments, Tech Companies)"];
  const brands = ["lenovo", "SEAGATE", "DELL", "FUJITSU", "HITACHI", "hp", "IBM", "LaCie", "Lexar", "Maxtor"];

  return (
    <>
      <Navbar />

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Partner Program</h1>
          <div className="hero-line" />
          <p>Excellent Service Reasonable Rates</p>
        </div>
      </section>

      {/* ── PARTNERSHIP PAYS ── */}
      <section className="section white-bg">
        <div className="container">
          <h2 className="section-title navy">Partnership pays</h2>
          <h3 className="sub-heading navy">
            Does your customers often come to you for data recovery services? Would you like to be able to offer your customers reliable data recovery for high-end jobs such as Solid State Drives and RAID Arrays?
          </h3>
          <div className="two-col">
            <p className="body-text">
              Become a &ldquo;The CyberTech Data Recovery Services partner&rdquo; and start offering additional services to your existing clients today. As an affiliate partner you can expect professional services and affordable pricing to enhance your computer services. Your clients will receive the best recovery services available and we will work directly with you or your client. You determine if you want to refer customers to us or manage your own billing processes. Being part of The CyberTech Data Recovery Partner Program means that you are able to provide a professional service without having to spend any resources or capital on clean lab facilities or labour force. You just have to refer your customer&rsquo;s job to us and we will do the rest.
            </p>
            <div className="recovery-img-box">
              <div className="recovery-key">
                <span className="key-icon">⌨</span>
                <span className="recovery-label">Recovery</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section className="section gray-bg">
        <div className="container">
          <h2 className="section-title navy italic">Join our team of partners today and enjoy the following benefits</h2>
          <div className="benefits-grid">
            <ul className="benefit-list">
              {benefits.map((b) => (
                <li key={b}><span className="bullet">•</span>{b}</li>
              ))}
            </ul>
            <ul className="benefit-list">
              {benefitsRight.map((b) => (
                <li key={b}><span className="bullet">•</span>{b}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── FOR WHOM ── */}
      <section className="section gray-bg">
        <div className="container">
          <h2 className="section-title navy">For whom</h2>
          <div className="for-whom-grid">
            <ul className="check-list">
              {forWhomLeft.map((f) => <li key={f}><span className="check">✓</span>{f}</li>)}
            </ul>
            <ul className="check-list">
              {forWhomRight.map((f) => <li key={f}><span className="check">✓</span>{f}</li>)}
            </ul>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="section white-bg">
        <div className="container text-center">
          <h2 className="section-title navy">The CyberTech offer the highest data recovery commision</h2>
          <h3 className="section-subtitle navy">How it works</h3>

          {/* Model 1 */}
          <h4 className="model-title navy">Model -1</h4>
          <p className="model-desc">You can liaise with us on your customers job and we will provide a lower quote that you can markup to your customer on the final pricing.</p>
          <div className="model-diagram">
            <div className="node">
              <div className="circle-icon">👤</div>
              <span>Customer</span>
            </div>
            <div className="arrow">←</div>
            <div className="node center-node">
              <div className="circle-icon">🤝</div>
              <span>Reseller</span>
            </div>
            <div className="arrow">→</div>
            <div className="node">
              <div className="circle-icon">🏢</div>
              <span>The CyberTech</span>
            </div>
          </div>

          {/* Model 2 */}
          <h4 className="model-title navy" style={{ marginTop: "60px" }}>Model -2</h4>
          <p className="model-desc">You can refer the customer to us and we will liaise with them directly. Upon any successful jobs, you will be given a commission for it.</p>
          <div className="model2-diagram">
            <div className="m2-top">
              <div className="node">
                <div className="circle-icon">👤</div>
                <span>Customer</span>
              </div>
              <div className="m2-line-h" />
              <div className="node">
                <div className="circle-icon">🤝</div>
                <span>Reseller</span>
              </div>
            </div>
            <div className="m2-bottom">
              <div className="node">
                <div className="circle-icon">🏢</div>
                <span>The CyberTech</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section">
        <div className="container text-center">
          <h2 className="cta-title">Join Our Partner Program Today!</h2>
          <Link href="/contact" className="cta-btn">CONTACT US</Link>
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

        .section { padding: 70px 20px; }
        .white-bg { background: #fff; }
        .gray-bg { background: #f4f4f4; }
        .container { max-width: 1200px; margin: 0 auto; }
        .text-center { text-align: center; }

        .section-title { font-size: 30px; font-weight: 700; margin-bottom: 24px; }
        .section-subtitle { font-size: 22px; font-weight: 700; margin-bottom: 10px; }
        .model-title { font-size: 20px; font-weight: 700; margin-bottom: 10px; }
        .model-desc { font-size: 15px; color: #555; margin-bottom: 40px; }
        .sub-heading { font-size: 20px; font-weight: 700; margin-bottom: 24px; line-height: 1.5; }
        .body-text { font-size: 15px; color: #444; line-height: 1.8; text-align: justify; }
        .navy { color: #1a2a6e; }
        .italic { font-style: italic; }

        .two-col { display: grid; grid-template-columns: 1fr 300px; gap: 50px; align-items: start; }
        .recovery-img-box {
          background: #e8f0fe; border-radius: 8px; height: 200px;
          display: flex; align-items: center; justify-content: center; border: 2px solid #c5d8f5;
        }
        .recovery-key {
          background: #4caf50; color: #fff; padding: 20px 30px;
          border-radius: 8px; font-size: 18px; font-weight: 700; display: flex; gap: 10px; align-items: center;
        }
        .key-icon { font-size: 24px; }

        .benefits-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px 60px; }
        .benefit-list { list-style: none; padding: 0; }
        .benefit-list li { display: flex; gap: 10px; padding: 10px 0; font-size: 15px; color: #333; border-bottom: 1px solid #e0e0e0; }
        .bullet { color: #1a2a6e; font-size: 18px; flex-shrink: 0; }

        .for-whom-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px 60px; }
        .check-list { list-style: none; padding: 0; }
        .check-list li { display: flex; gap: 10px; padding: 8px 0; font-size: 15px; color: #333; }
        .check { color: #1a2a6e; font-weight: 700; }

        .model-diagram { display: flex; align-items: center; justify-content: center; gap: 20px; margin: 0 auto; max-width: 700px; }
        .node { display: flex; flex-direction: column; align-items: center; gap: 10px; font-size: 14px; color: #1a2a6e; font-weight: 600; }
        .circle-icon { width: 90px; height: 90px; border: 3px solid #1a2a6e; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 30px; background: #f0f4ff; }
        .center-node .circle-icon { width: 110px; height: 110px; background: #1a2a6e; }
        .arrow { font-size: 28px; color: #333; }

        .model2-diagram { max-width: 500px; margin: 0 auto; display: flex; flex-direction: column; align-items: center; gap: 30px; }
        .m2-top { display: flex; align-items: center; gap: 30px; }
        .m2-line-h { width: 60px; height: 2px; background: #333; }
        .m2-bottom { margin-top: 10px; }

        .cta-section { background: #2a2a2a; padding: 70px 20px; }
        .cta-title { color: #fff; font-size: 32px; font-weight: 700; margin-bottom: 30px; }
        .cta-btn { display: inline-block; background: #2196f3; color: #fff; padding: 14px 40px; border-radius: 30px; text-decoration: none; font-size: 15px; font-weight: 600; letter-spacing: 1px; transition: background 0.3s; }
        .cta-btn:hover { background: #1565c0; }

        .brands-label { font-size: 16px; color: #333; margin-bottom: 30px; }
        .brands-row { display: flex; flex-wrap: wrap; gap: 30px 50px; justify-content: center; align-items: center; }
        .brand-name { font-size: 18px; font-weight: 800; color: #222; letter-spacing: 1px; text-transform: uppercase; }

        @media (max-width: 768px) {
          .two-col, .benefits-grid, .for-whom-grid { grid-template-columns: 1fr; }
          .hero-content { padding: 0 30px; }
          .model-diagram { flex-direction: column; }
        }
      `}</style>
    </>
  );
}
