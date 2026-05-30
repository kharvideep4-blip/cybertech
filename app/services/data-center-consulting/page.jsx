"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function DataCenterConsultingPage() {
  return (
    <>
      <Navbar />
      <main style={{ fontFamily: "'Segoe UI', sans-serif", color: "#1a1a2e" }}>

        {/* ── HERO ── */}
        <section style={{
          position: "relative",
          background: "linear-gradient(135deg, #0d1b3e 0%, #1a3a6e 60%, #1565c0 100%)",
          padding: "100px 24px 80px",
          color: "#fff",
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
          <div style={{ position: "relative", maxWidth: 800 }}>
            <span style={{
              display: "inline-block", background: "rgba(33,150,243,0.25)", color: "#64b5f6",
              fontSize: 12, fontWeight: 600, letterSpacing: 2, padding: "6px 14px",
              borderRadius: 20, border: "1px solid rgba(100,181,246,0.4)", marginBottom: 20,
            }}>CONSULTING SERVICES</span>
            <h1 style={{ fontSize: "clamp(36px,5vw,56px)", fontWeight: 800, margin: "0 0 16px", lineHeight: 1.1 }}>
              Data Center Consulting
            </h1>
            <div style={{ width: 60, height: 4, background: "#2196f3", marginBottom: 20, borderRadius: 2 }} />
            <p style={{ fontSize: 18, color: "#90caf9", fontWeight: 400, margin: 0 }}>
              Build It Right. Scale It Smart. Maximize ROI.
            </p>
          </div>
        </section>

        {/* ── ALERT BANNER ── */}
        <section style={{ background: "#fff", padding: "48px 24px", borderBottom: "3px solid #2196f3" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", gap: 24, alignItems: "flex-start" }}>
            <span style={{ fontSize: 36, flexShrink: 0, marginTop: 4 }}>🚨</span>
            <div>
              <h2 style={{ fontSize: 22, fontWeight: 700, color: "#0d1b3e", margin: "0 0 12px" }}>
                Planning a Data Center? Don't Start Without Strategy.
              </h2>
              <p style={{ fontSize: 15, color: "#555", lineHeight: 1.7, margin: 0 }}>
                A data center is a high-capex, long-term investment. Without the right strategy,
                businesses risk overbuilding, underutilization, and delayed ROI. At THE CYBERTECH,
                we help you design and build scalable, revenue-driven data center infrastructure —
                aligned with business goals from day one.
              </p>
            </div>
          </div>
        </section>

        {/* ── WHAT WE DELIVER ── */}
        <section style={{ background: "#eef1f8", padding: "70px 24px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <h2 style={{ fontSize: 28, fontWeight: 700, color: "#0d1b3e", textAlign: "center", marginBottom: 40 }}>
              ⚡ What We Deliver
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 20 }}>
              {[
                "Clear business and revenue model",
                "Scalable, future-ready infrastructure design",
                "CAPEX / OPEX optimization",
                "Vendor selection and negotiation support",
                "Structured execution roadmap",
              ].map((item, i) => (
                <div key={i} style={{
                  background: "#fff", borderRadius: 12, padding: "24px 20px",
                  display: "flex", alignItems: "flex-start", gap: 14,
                  boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
                  transition: "transform 0.2s",
                }}
                  onMouseEnter={e => e.currentTarget.style.transform = "translateY(-4px)"}
                  onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
                >
                  <span style={{ color: "#2196f3", fontSize: 20, flexShrink: 0 }}>✔</span>
                  <p style={{ margin: 0, fontSize: 14, fontWeight: 600, color: "#0d1b3e", lineHeight: 1.5 }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONSULTING SCOPE ── */}
        <section style={{ background: "#fff", padding: "70px 24px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <h2 style={{ fontSize: 28, fontWeight: 700, color: "#0d1b3e", textAlign: "center", marginBottom: 40 }}>
              🔍 Our Consulting Scope
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 24 }}>
              {[
                { icon: "🧠", title: "Business Strategy & Blueprint", wide: false, items: ["Define data center business model (colocation / cloud / hybrid)", "Revenue planning and pricing strategy", "Market positioning and scalability roadmap"] },
                { icon: "🏗️", title: "Architecture & Design Consulting", wide: false, items: ["Modular and scalable infrastructure design", "AI and cloud-ready architecture", "High availability and redundancy planning"] },
                { icon: "💰", title: "Financial & ROI Planning", wide: false, items: ["CAPEX / OPEX modeling", "Cost optimization strategies", "ROI and break-even planning"] },
                { icon: "🤝", title: "Vendor Strategy & Procurement", wide: false, items: ["Vendor evaluation and selection", "Commercial negotiation support", "Technology and sourcing decisions"] },
                { icon: "📊", title: "Execution Roadmap", wide: true, items: ["Phased implementation plan", "Timeline and milestone definition", "Risk mitigation strategy"] },
              ].map((card, i) => (
                <div key={i} style={{
                  background: "#f5f8ff", borderRadius: 14, padding: "30px 28px",
                  borderLeft: "4px solid #2196f3",
                  gridColumn: card.wide ? "1 / -1" : "auto",
                  transition: "transform 0.2s",
                }}
                  onMouseEnter={e => e.currentTarget.style.transform = "translateY(-4px)"}
                  onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
                >
                  <div style={{ fontSize: 32, marginBottom: 14 }}>{card.icon}</div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: "#0d1b3e", margin: "0 0 14px" }}>{card.title}</h3>
                  <ul style={{ margin: 0, paddingLeft: 18 }}>
                    {card.items.map((item, j) => (
                      <li key={j} style={{ fontSize: 14, color: "#555", marginBottom: 8, lineHeight: 1.5 }}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── RISKS ── */}
        <section style={{ background: "#eef1f8", padding: "70px 24px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <h2 style={{ fontSize: 28, fontWeight: 700, color: "#0d1b3e", textAlign: "center", marginBottom: 40 }}>
              ⚠️ Common Risks We Help You Avoid
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 20, marginBottom: 30 }}>
              {[
                "Over-investment without utilization clarity",
                "Poor architecture leading to scalability issues",
                "Vendor-driven decisions (not business-driven)",
                "Delayed ROI and high operational costs",
              ].map((risk, i) => (
                <div key={i} style={{
                  background: "#fff", borderRadius: 12, padding: "24px 20px",
                  display: "flex", alignItems: "flex-start", gap: 14,
                  boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
                  borderTop: "3px solid #f44336",
                }}>
                  <span style={{ fontSize: 20, flexShrink: 0 }}>❌</span>
                  <p style={{ margin: 0, fontSize: 14, fontWeight: 600, color: "#0d1b3e" }}>{risk}</p>
                </div>
              ))}
            </div>
            <p style={{
              textAlign: "center", fontSize: 15, fontWeight: 600, color: "#1565c0",
              background: "#e3f2fd", padding: "16px 24px", borderRadius: 10, margin: 0,
            }}>
              👉 We ensure your investment is structured, optimized, and future-ready
            </p>
          </div>
        </section>

        {/* ── WHY CYBERTECH ── */}
        <section style={{ background: "#fff", padding: "70px 24px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <h2 style={{ fontSize: 28, fontWeight: 700, color: "#0d1b3e", textAlign: "center", marginBottom: 40 }}>
              🎯 Why THE CYBERTECH
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24 }}>
              {[
                { icon: "🏆", stat: "30+", label: "Years of Experience", sub: "Since 1992" },
                { icon: "🎯", stat: "100%", label: "Strategy-First Approach", sub: "Business-Focused" },
                { icon: "☁️", stat: "Real-World", label: "Infrastructure & Cloud Expertise", sub: "End-to-End" },
                { icon: "🔒", stat: "Trusted", label: "Confidential Advisory", sub: "NDA Protected" },
              ].map((item, i) => (
                <div key={i} style={{
                  textAlign: "center", background: "#0d1b3e", borderRadius: 16, padding: "36px 20px",
                  color: "#fff", transition: "transform 0.2s",
                }}
                  onMouseEnter={e => e.currentTarget.style.transform = "translateY(-6px)"}
                  onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
                >
                  <div style={{ fontSize: 36, marginBottom: 14 }}>{item.icon}</div>
                  <div style={{ fontSize: 28, fontWeight: 800, color: "#64b5f6", marginBottom: 8 }}>{item.stat}</div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "#fff", marginBottom: 6 }}>{item.label}</div>
                  <div style={{ fontSize: 12, color: "#90caf9" }}>{item.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── IDEAL FOR ── */}
        <section style={{ background: "#eef1f8", padding: "70px 24px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <h2 style={{ fontSize: 28, fontWeight: 700, color: "#0d1b3e", textAlign: "center", marginBottom: 40 }}>
              📊 Ideal For
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24 }}>
              {[
                { icon: "🚀", label: "Startups entering colocation or cloud business" },
                { icon: "🏢", label: "Mid-sized enterprises building infrastructure" },
                { icon: "💼", label: "Investors exploring data center opportunities" },
                { icon: "🤖", label: "Organizations preparing for AI workloads" },
              ].map((item, i) => (
                <div key={i} style={{
                  background: "#fff", borderRadius: 14, padding: "32px 20px",
                  textAlign: "center", boxShadow: "0 2px 14px rgba(0,0,0,0.08)",
                  transition: "transform 0.2s",
                }}
                  onMouseEnter={e => e.currentTarget.style.transform = "translateY(-4px)"}
                  onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
                >
                  <span style={{ fontSize: 36, display: "block", marginBottom: 14 }}>{item.icon}</span>
                  <p style={{ fontSize: 14, fontWeight: 600, color: "#0d1b3e", margin: 0, lineHeight: 1.5 }}>{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section style={{ background: "linear-gradient(135deg,#1565c0,#0d1b3e)", padding: "70px 24px" }}>
          <div style={{
            maxWidth: 1200, margin: "0 auto",
            display: "flex", alignItems: "center", justifyContent: "space-between", gap: 40, flexWrap: "wrap",
          }}>
            <div>
              <h2 style={{ fontSize: 26, fontWeight: 700, color: "#fff", margin: "0 0 10px" }}>
                📞 Start with Strategy — Not Execution
              </h2>
              <p style={{ fontSize: 15, color: "#90caf9", margin: "0 0 18px" }}>
                Build with Clarity. Execute with Confidence.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <span style={{ fontSize: 14, color: "#cce4ff" }}>📱 Call / WhatsApp: <strong>+91 98200 71634</strong></span>
                <span style={{ fontSize: 14, color: "#cce4ff" }}>📧 Email: <a href="mailto:info@thecybertech.com" style={{ color: "#64b5f6" }}>info@thecybertech.com</a></span>
              </div>
            </div>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <a href="/contact" style={{
                display: "inline-block", padding: "14px 28px", borderRadius: 8,
                fontSize: 15, fontWeight: 600, textDecoration: "none",
                background: "#2196f3", color: "#fff", transition: "background 0.2s",
              }}
                onMouseEnter={e => e.currentTarget.style.background = "#1976d2"}
                onMouseLeave={e => e.currentTarget.style.background = "#2196f3"}
              >Request a Consultation</a>
              <a href="/contact" style={{
                display: "inline-block", padding: "14px 28px", borderRadius: 8,
                fontSize: 15, fontWeight: 600, textDecoration: "none",
                border: "2px solid #fff", color: "#fff",
              }}>Discuss Your Project</a>
            </div>
          </div>
        </section>

        {/* ── QUOTE ── */}
        <section style={{ background: "#0d1b3e", padding: "70px 24px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <blockquote style={{
              fontSize: "clamp(17px,2.2vw,22px)", fontStyle: "italic", color: "#e3f2fd",
              lineHeight: 1.7, textAlign: "center", maxWidth: 820, margin: "0 auto 24px",
              border: "none", padding: 0,
            }}>
              "A data center without a strategy becomes a cost center — the right structure makes it a profitable digital asset."
            </blockquote>
            <div style={{ textAlign: "center", color: "#90caf9" }}>
              <strong style={{ display: "block", fontSize: 16, color: "#fff", marginBottom: 4 }}>Dr. Jatin Botadra</strong>
              <span style={{ fontSize: 13 }}>Data Center Consulting | Cybersecurity | Cyber Forensics — THE CYBERTECH</span>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
