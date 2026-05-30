"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Extracted to prevent Turbopack compilation errors inside the JSX tree
const BACKGROUND_GRID_SVG = "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";

export default function DataMigrationServicesPage() {
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
            position: "absolute", 
            inset: 0,
            backgroundImage: `url("${BACKGROUND_GRID_SVG}")`,
          }} />
          <div style={{ position: "relative", maxWidth: 800 }}>
            <span style={{
              display: "inline-block", background: "rgba(33,150,243,0.25)", color: "#64b5f6",
              fontSize: 12, fontWeight: 600, letterSpacing: 2, padding: "6px 14px",
              borderRadius: 20, border: "1px solid rgba(100,181,246,0.4)", marginBottom: 20,
            }}>RECOVERY SERVICES</span>
            <h1 style={{ fontSize: "clamp(36px,5vw,56px)", fontWeight: 800, margin: "0 0 16px", lineHeight: 1.1 }}>
              Data Migration Services
            </h1>
            <div style={{ width: 60, height: 4, background: "#2196f3", marginBottom: 20, borderRadius: 2 }} />
            <p style={{ fontSize: 18, color: "#90caf9", fontWeight: 400, margin: 0 }}>
              Migrate Without Risk. Execute Without Downtime.
            </p>
          </div>
        </section>

        {/* ── ALERT BANNER ── */}
        <section style={{ background: "#fff", padding: "48px 24px", borderBottom: "3px solid #2196f3" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", gap: 24, alignItems: "flex-start" }}>
            <span style={{ fontSize: 36, flexShrink: 0, marginTop: 4 }}>🚨</span>
            <div>
              <h2 style={{ fontSize: 22, fontWeight: 700, color: "#0d1b3e", margin: "0 0 12px" }}>
                Planning a Data Migration? Don’t Let It Disrupt Your Business.
              </h2>
              <p style={{ fontSize: 15, color: "#555", lineHeight: 1.7, margin: "0 0 10px" }}>
                Data migration failures can lead to data loss, downtime, and operational chaos.
              </p>
              <p style={{ fontSize: 15, color: "#555", lineHeight: 1.7, margin: 0 }}>
                At <strong>THE CYBERTECH</strong>, we ensure your migration is secure, structured, and seamless — with zero compromise on business continuity.
              </p>
            </div>
          </div>
        </section>

        {/* ── WHAT WE DELIVER ── */}
        <section style={{ background: "#eef1f8", padding: "70px 24px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <h2 style={{ fontSize: 28, fontWeight: 700, color: "#0d1b3e", textAlign: "center", marginBottom: 36 }}>
              ⚡ What We Deliver
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 20 }}>
              {[
                "Secure and structured data migration",
                "Minimal downtime and zero disruption",
                "Complete data integrity and validation",
                "Smooth transition across platforms",
                "Post-migration stabilization and support",
              ].map((text, i) => (
                <div key={i} style={{
                  background: "#fff", borderRadius: 12, padding: "24px 20px",
                  display: "flex", alignItems: "center", gap: 14,
                  boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
                  transition: "transform 0.2s",
                }}
                  onMouseEnter={e => e.currentTarget.style.transform = "translateY(-4px)"}
                  onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
                >
                  <span style={{ fontSize: 22, color: "#2196f3", flexShrink: 0 }}>✔</span>
                  <p style={{ margin: 0, fontSize: 14, fontWeight: 600, color: "#0d1b3e", lineHeight: 1.5 }}>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── MIGRATION CAPABILITIES ── */}
        <section style={{ background: "#fff", padding: "70px 24px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <h2 style={{ fontSize: 28, fontWeight: 700, color: "#0d1b3e", textAlign: "center", marginBottom: 40 }}>
              🔄 Our Migration Capabilities
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 24 }}>
              {[
                { icon: "🧠", title: "Strategy & Planning", text: "We define a clear roadmap before execution:", items: ["Environment assessment", "Risk identification", "Migration planning"] },
                { icon: "☁️", title: "Cloud & Infrastructure Migration", text: "", items: ["On-premise → Cloud", "Cloud → Cloud", "Legacy → Modern systems"] },
                { icon: "💾", title: "Application & Database Migration", text: "", items: ["Business-critical systems", "Enterprise applications", "Structured and unstructured data"] },
                { icon: "🔐", title: "Secure Data Handling", text: "", items: ["Encrypted data transfer", "Controlled access", "Compliance-ready processes"] },
              ].map((card, i) => (
                <div key={i} style={{
                  background: "#f5f8ff", borderRadius: 14, padding: "30px 28px",
                  borderLeft: "4px solid #2196f3",
                  transition: "transform 0.2s",
                }}
                  onMouseEnter={e => e.currentTarget.style.transform = "translateY(-4px)"}
                  onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
                >
                  <div style={{ fontSize: 32, marginBottom: 14 }}>{card.icon}</div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: "#0d1b3e", margin: "0 0 10px" }}>{card.title}</h3>
                  {card.text && <p style={{ fontSize: 14, color: "#555", margin: "0 0 10px" }}>{card.text}</p>}
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
              ⚠️ Avoid These Common Risks
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 20, marginBottom: 30 }}>
              {[
                "Data loss or corruption",
                "Extended downtime",
                "Performance issues after migration",
                "Security gaps during transfer",
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
              👉 We eliminate these risks with a structured migration approach
            </p>
          </div>
        </section>

        {/* ── WHY CYBERTECH ── */}
        <section style={{ background: "#fff", padding: "70px 24px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <h2 style={{ fontSize: 28, fontWeight: 700, color: "#0d1b3e", textAlign: "center", marginBottom: 40 }}>
              🎯 Why THE CYBERTECH
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 24 }}>
              {[
                { icon: "✔", stat: "30+", label: "Years of experience", sub: "Since 1992" },
                { icon: "✔", stat: "Strategy", label: "Strategy-first consulting approach", sub: "Calculated Architecture" },
                { icon: "✔", stat: "Enterprise", label: "Proven experience across enterprise environments", sub: "Large-scale Readiness" },
                { icon: "✔", stat: "Execution", label: "Business-focused execution", sub: "Minimal Disruption" },
                { icon: "✔", stat: "Reliable", label: "Confidential and reliable engagement", sub: "Trusted Partner" },
              ].map((item, i) => (
                <div key={i} style={{
                  textAlign: "center", background: "#0d1b3e", borderRadius: 16, padding: "36px 16px",
                  color: "#fff", transition: "transform 0.2s",
                }}
                  onMouseEnter={e => e.currentTarget.style.transform = "translateY(-6px)"}
                  onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
                >
                  <div style={{ fontSize: 36, marginBottom: 14 }}>{item.icon}</div>
                  <div style={{ fontSize: 24, fontWeight: 800, color: "#64b5f6", marginBottom: 8 }}>{item.stat}</div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "#fff", marginBottom: 6 }}>{item.label}</div>
                  <div style={{ fontSize: 11, color: "#90caf9" }}>{item.sub}</div>
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
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 20 }}>
              {[
                "Data center migration projects",
                "Cloud adoption and transformation",
                "Infrastructure modernization",
                "Application upgrades",
                "Business continuity initiatives",
              ].map((target, i) => (
                <div key={i} style={{
                  background: "#fff", borderRadius: 12, padding: "24px 20px",
                  display: "flex", alignItems: "center", gap: 14,
                  boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
                  borderLeft: "4px solid #2196f3",
                }}>
                  <span style={{ fontSize: 20, flexShrink: 0 }}>✔</span>
                  <p style={{ margin: 0, fontSize: 14, fontWeight: 600, color: "#0d1b3e" }}>{target}</p>
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
              <h2 style={{ fontSize: 26, fontWeight: 700, color: "#fff", margin: "0 0 8px" }}>
                📞 Get Expert Guidance Before You Migrate
              </h2>
              <p style={{ fontSize: 16, color: "#90caf9", margin: "0 0 18px" }}>
                Don’t start migration without a clear strategy and execution plan.
              </p>
            </div>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <a href="/contact" style={{
                display: "inline-block", padding: "14px 28px", borderRadius: 8,
                fontSize: 15, fontWeight: 600, textDecoration: "none",
                background: "#2196f3", color: "#fff",
              }}
                onMouseEnter={e => e.currentTarget.style.background = "#1976d2"}
                onMouseLeave={e => e.currentTarget.style.background = "#2196f3"}
              >Request a Free Consultation</a>
              <a href="/contact" style={{
                display: "inline-block", padding: "14px 28px", borderRadius: 8,
                fontSize: 15, fontWeight: 600, textDecoration: "none",
                border: "2px solid #fff", color: "#fff",
              }}>Discuss Your Migration Plan Today</a>
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
              “A successful migration is not about moving data — it’s about moving your business forward without risk.”
            </blockquote>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}