"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RansomwareRecoveryPage() {
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
            }}>RECOVERY SERVICES</span>
            <h1 style={{ fontSize: "clamp(36px,5vw,56px)", fontWeight: 800, margin: "0 0 16px", lineHeight: 1.1 }}>
              Ransomware Data Recovery Services
            </h1>
            <div style={{ width: 60, height: 4, background: "#2196f3", marginBottom: 20, borderRadius: 2 }} />
            <p style={{ fontSize: 18, color: "#90caf9", fontWeight: 400, margin: 0 }}>
              Locked Systems? Don't Panic. Recover Fast. Protect Your Business.
            </p>
          </div>
        </section>

        {/* ── ALERT BANNER ── */}
        <section style={{ background: "#fff", padding: "48px 24px", borderBottom: "3px solid #2196f3" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", gap: 24, alignItems: "flex-start" }}>
            <span style={{ fontSize: 36, flexShrink: 0, marginTop: 4 }}>🚨</span>
            <div>
              <h2 style={{ fontSize: 22, fontWeight: 700, color: "#0d1b3e", margin: "0 0 12px" }}>
                Your Data Has Been Encrypted?
              </h2>
              <p style={{ fontSize: 15, color: "#555", lineHeight: 1.7, margin: "0 0 10px" }}>
                Ransomware attacks can lock your entire system within minutes, stopping operations and putting your business at risk.
              </p>
              <p style={{ fontSize: 15, color: "#555", lineHeight: 1.7, margin: "0 0 10px" }}>
                Before making any decision — especially paying a ransom — you need expert guidance and immediate response.
              </p>
              <p style={{ fontSize: 15, color: "#555", lineHeight: 1.7, margin: 0 }}>
                At <strong>THE CYBERTECH</strong>, we specialize in ransomware data recovery, system restoration, and incident containment — helping you regain control safely.
              </p>
            </div>
          </div>
        </section>

        {/* ── IMMEDIATE ACTION ── */}
        <section style={{ background: "#eef1f8", padding: "70px 24px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <h2 style={{ fontSize: 28, fontWeight: 700, color: "#0d1b3e", textAlign: "center", marginBottom: 12 }}>
              ⚡ Immediate Action Required
            </h2>
            <p style={{ textAlign: "center", color: "#555", marginBottom: 36, fontSize: 15 }}>If you are experiencing any of the following:</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 20, marginBottom: 30 }}>
              {[
                { icon: "🔒", text: "Files suddenly encrypted or inaccessible" },
                { icon: "📄", text: "Ransom note demanding payment" },
                { icon: "💻", text: "Systems locked or unusable" },
                { icon: "👁️", text: "Suspicious activity before system failure" },
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
                  <span style={{ fontSize: 28, flexShrink: 0 }}>{item.icon}</span>
                  <p style={{ margin: 0, fontSize: 14, fontWeight: 600, color: "#0d1b3e", lineHeight: 1.5 }}>{item.text}</p>
                </div>
              ))}
            </div>
            <p style={{
              textAlign: "center", fontSize: 15, fontWeight: 600, color: "#1565c0",
              background: "#e3f2fd", padding: "16px 24px", borderRadius: 10, margin: 0,
            }}>
              👉 Do not attempt random fixes — it may worsen the situation
            </p>
          </div>
        </section>

        {/* ── WHAT WE DO ── */}
        <section style={{ background: "#fff", padding: "70px 24px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <h2 style={{ fontSize: 28, fontWeight: 700, color: "#0d1b3e", textAlign: "center", marginBottom: 40 }}>
              🔍 What We Do
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 24 }}>
              {[
                { icon: "🧠", title: "Ransomware Analysis", items: ["Identify type of ransomware", "Analyze encryption behavior", "Determine recovery possibilities"] },
                { icon: "💾", title: "Data Recovery & Decryption Support", items: ["Recover accessible and hidden data", "Assist with safe decryption methods", "Restore business-critical information"] },
                { icon: "🛡️", title: "Incident Containment", items: ["Isolate infected systems", "Prevent further spread", "Secure unaffected data"] },
                { icon: "🔄", title: "System Restoration", wide: true, items: ["Clean and rebuild affected systems", "Ensure safe restart of operations", "Strengthen environment post-incident"] },
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
              ⚠️ Risks of Wrong Action
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 20, marginBottom: 30 }}>
              {[
                "Permanent data loss",
                "Spread of infection across network",
                "Paying ransom without recovery guarantee",
                "Increased recovery complexity",
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
              👉 Expert intervention is critical from the start
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
                { icon: "🏆", stat: "30+", label: "Years of Experience", sub: "Since 1992" },
                { icon: "🦠", stat: "Proven", label: "Ransomware Recovery Expertise", sub: "All Major Strains" },
                { icon: "⚡", stat: "Fast", label: "Structured Response", sub: "Immediate Action" },
                { icon: "🔒", stat: "100%", label: "Confidential Handling", sub: "Sensitive Data" },
                { icon: "🏢", stat: "Focused", label: "Business Continuity", sub: "Zero Downtime Goal" },
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

        {/* ── REAL CASE INSIGHT ── */}
        <section style={{ background: "#eef1f8", padding: "70px 24px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <h2 style={{ fontSize: 28, fontWeight: 700, color: "#0d1b3e", textAlign: "center", marginBottom: 40 }}>
              📊 Real Case Insight
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
              <div style={{
                background: "#fff", borderRadius: 14, padding: "30px 28px",
                borderLeft: "4px solid #f44336", boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
              }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: "#0d1b3e", margin: "0 0 14px" }}>⚠️ The Problem</h3>
                <p style={{ fontSize: 14, color: "#555", margin: "0 0 10px", lineHeight: 1.6 }}>A client faced a <strong>dual ransomware attack</strong>, resulting in:</p>
                <ul style={{ margin: 0, paddingLeft: 18 }}>
                  <li style={{ fontSize: 14, color: "#555", marginBottom: 8 }}>Complete system lockout</li>
                  <li style={{ fontSize: 14, color: "#555" }}>Business operations halted</li>
                </ul>
              </div>
              <div style={{
                background: "#fff", borderRadius: 14, padding: "30px 28px",
                borderLeft: "4px solid #2196f3", boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
              }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: "#0d1b3e", margin: "0 0 14px" }}>✅ Our Intervention</h3>
                <ul style={{ margin: "0 0 16px", paddingLeft: 18 }}>
                  <li style={{ fontSize: 14, color: "#555", marginBottom: 8 }}>Identified attack vector</li>
                  <li style={{ fontSize: 14, color: "#555", marginBottom: 8 }}>Recovered critical data</li>
                  <li style={{ fontSize: 14, color: "#555" }}>Restored operations</li>
                </ul>
                <p style={{
                  fontSize: 14, fontWeight: 700, color: "#1565c0",
                  background: "#e3f2fd", padding: "10px 14px", borderRadius: 8, margin: 0,
                }}>
                  👉 Result: Zero permanent data loss
                </p>
              </div>
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
                📞 Get Immediate Help
              </h2>
              <p style={{ fontSize: 16, color: "#90caf9", margin: "0 0 18px" }}>
                Act Now — Every Minute Matters
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
                background: "#2196f3", color: "#fff",
              }}
                onMouseEnter={e => e.currentTarget.style.background = "#1976d2"}
                onMouseLeave={e => e.currentTarget.style.background = "#2196f3"}
              >Request Immediate Assistance</a>
              <a href="/contact" style={{
                display: "inline-block", padding: "14px 28px", borderRadius: 8,
                fontSize: 15, fontWeight: 600, textDecoration: "none",
                border: "2px solid #fff", color: "#fff",
              }}>Speak to an Expert Now</a>
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
              "In ransomware attacks, the first response defines the outcome."
            </blockquote>
            <div style={{ textAlign: "center", color: "#90caf9" }}>
              <strong style={{ display: "block", fontSize: 16, color: "#fff", marginBottom: 4 }}>Dr. Jatin Botadra</strong>
              <span style={{ fontSize: 13 }}>Cyber Forensics | Cybersecurity | Data Recovery — THE CYBERTECH</span>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
