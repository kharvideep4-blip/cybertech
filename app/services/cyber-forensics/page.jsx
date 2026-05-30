"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CyberForensicsPage() {
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
            }}>FORENSICS & RESPONSE</span>
            <h1 style={{ fontSize: "clamp(36px,5vw,56px)", fontWeight: 800, margin: "0 0 16px", lineHeight: 1.1 }}>
              Cyber Forensics & Incident Response Services
            </h1>
            <div style={{ width: 60, height: 4, background: "#2196f3", marginBottom: 20, borderRadius: 2 }} />
            <p style={{ fontSize: 18, color: "#90caf9", fontWeight: 400, margin: 0 }}>
              Stop the Damage. Recover Fast. Secure Your Business Assets.
            </p>
          </div>
        </section>

        {/* ── ALERT BANNER ── */}
        <section style={{ background: "#fff", padding: "48px 24px", borderBottom: "3px solid #2196f3" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", gap: 24, alignItems: "flex-start" }}>
            <span style={{ fontSize: 36, flexShrink: 0, marginTop: 4 }}>🚨</span>
            <div>
              <h2 style={{ fontSize: 22, fontWeight: 700, color: "#0d1b3e", margin: "0 0 12px" }}>
                Facing a Cyber Attack or Data Breach?
              </h2>
              <p style={{ fontSize: 15, color: "#555", lineHeight: 1.7, margin: "0 0 10px" }}>
                If your critical infrastructure or digital assets are compromised, every single minute matters to your bottom line.
              </p>
              <p style={{ fontSize: 15, color: "#555", lineHeight: 1.7, margin: "0 0 10px" }}>
                Ransomware deployments, unauthorized database access, or sudden data loss can abruptly halt your live operations and induce irreversible brand damage.
              </p>
              <p style={{ fontSize: 15, color: "#555", lineHeight: 1.7, margin: 0 }}>
                At <strong>THE CYBERTECH</strong>, we provide rapid, strictly confidential, and comprehensively structured cyber forensics services to help you seamlessly identify vectors, recover compromised states, and secure your production environment.
              </p>
            </div>
          </div>
        </section>

        {/* ── IMMEDIATE ACTION (TRIGGERS) ── */}
        <section style={{ background: "#eef1f8", padding: "70px 24px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <h2 style={{ fontSize: 28, fontWeight: 700, color: "#0d1b3e", textAlign: "center", marginBottom: 12 }}>
              ⚡ Immediate Help When You Need It Most
            </h2>
            <p style={{ textAlign: "center", color: "#555", marginBottom: 36, fontSize: 15 }}>
              You should act immediately without delay if you are experiencing:
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 20, marginBottom: 30 }}>
              {[
                { icon: "🔒", text: "Systems locked or deployment of ransomware" },
                { icon: "👁️", text: "Suspicious infrastructure activity or unauthorized access" },
                { icon: "📄", text: "Sudden business data loss or mass file corruption" },
                { icon: "💻", text: "Unusual system behavior or unexpected infrastructure downtime" },
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
              👉 Do not delay — early professional action drastically reduces structural damage
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
                { 
                  icon: "🧠", 
                  title: "Digital Forensics Investigation", 
                  items: ["Identify precisely how the attack happened", "Trace entry points and lateral vulnerabilities", "Meticulously reconstruct the chronological incident timeline"] 
                },
                { 
                  icon: "💾", 
                  title: "Data Recovery & Ransomware Response", 
                  items: ["Recover business-critical operations data", "Support structural decryption and safe restoration", "Drastically minimize unexpected company downtime"] 
                },
                { 
                  icon: "🛡️", 
                  title: "Incident Containment & Response", 
                  items: ["Isolate structurally affected target systems", "Completely remove active threats and stabilize the environment", "Prevent any further network spread of the live attack"] 
                },
                { 
                  icon: "⚖️", 
                  title: "Legal & Evidence Support", 
                  wide: true, 
                  items: ["Generate professional forensic documentation", "Ensure proper chain of custody and evidence preservation", "Provide complete support for legal and regulatory compliance requirements"] 
                },
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

        {/* ── RISKS OF DELAYED ACTION ── */}
        <section style={{ background: "#eef1f8", padding: "70px 24px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <h2 style={{ fontSize: 28, fontWeight: 700, color: "#0d1b3e", textAlign: "center", marginBottom: 40 }}>
              ⚠️ Risks of Delayed Action
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 20, marginBottom: 30 }}>
              {[
                "Increased structural data loss",
                "Rapid spread of systemic infection across subnets",
                "Substantially higher overall business recovery costs",
                "Long-term operational and revenue disruptions",
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
              👉 An immediate professional response strategy is absolutely critical
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
                { icon: "🏆", stat: "30+", label: "Years of Deep Experience", sub: "Since 1992" },
                { icon: "🦠", stat: "Real-World", label: "Breach & Ransomware Handling", sub: "Live Incident Mitigation" },
                { icon: "⚡", stat: "Fast", label: "Structured Methodology", sub: "Engineered Response" },
                { icon: "🔒", stat: "Secure", label: "Confidential Handling", sub: "Absolute Protection" },
                { icon: "🏢", stat: "Business-First", label: "Recovery Approach", sub: "Continuity Maximized" },
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

        {/* ── REAL IMPACT (CASE INSIGHT) ── */}
        <section style={{ background: "#eef1f8", padding: "70px 24px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <h2 style={{ fontSize: 28, fontWeight: 700, color: "#0d1b3e", textAlign: "center", marginBottom: 40 }}>
              📊 Real Impact
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
              <div style={{
                background: "#fff", borderRadius: 14, padding: "30px 28px",
                borderLeft: "4px solid #f44336", boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
              }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: "#0d1b3e", margin: "0 0 14px" }}>⚠️ The Problem</h3>
                <p style={{ fontSize: 14, color: "#555", margin: "0 0 10px", lineHeight: 1.6 }}>A recent corporate client faced a severe dual ransomware attack:</p>
                <ul style={{ margin: 0, paddingLeft: 18 }}>
                  <li style={{ fontSize: 14, color: "#555", marginBottom: 8 }}>Entire operational environment locked down</li>
                  <li style={{ fontSize: 14, color: "#555" }}>Critical organizational operations completely halted</li>
                </ul>
              </div>
              <div style={{
                background: "#fff", borderRadius: 14, padding: "30px 28px",
                borderLeft: "4px solid #2196f3", boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
              }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: "#0d1b3e", margin: "0 0 14px" }}>✅ Our Response</h3>
                <ul style={{ margin: "0 0 16px", paddingLeft: 18 }}>
                  <li style={{ fontSize: 14, color: "#555", marginBottom: 8 }}>Identified malicious entry vector rapidly</li>
                  <li style={{ fontSize: 14, color: "#555", marginBottom: 8 }}>Recovered critical system information</li>
                  <li style={{ fontSize: 14, color: "#555" }}>Fully restored target operations to nominal capacity</li>
                </ul>
                <p style={{
                  fontSize: 14, fontWeight: 700, color: "#1565c0",
                  background: "#e3f2fd", padding: "10px 14px", borderRadius: 8, margin: 0,
                }}>
                  👉 Result: Zero permanent data loss occurred
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA / ASSISTANCE ── */}
        <section style={{ background: "linear-gradient(135deg,#1565c0,#0d1b3e)", padding: "70px 24px" }}>
          <div style={{
            maxWidth: 1200, margin: "0 auto",
            display: "flex", alignItems: "center", justifyContent: "space-between", gap: 40, flexWrap: "wrap",
          }}>
            <div>
              <h2 style={{ fontSize: 26, fontWeight: 700, color: "#fff", margin: "0 0 8px" }}>
                📞 Get Immediate Assistance
              </h2>
              <p style={{ fontSize: 16, color: "#90caf9", margin: "0 0 18px" }}>
                Don’t Wait — Act Now. Every Single Second Matters.
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
              >Request Emergency Support</a>
              <a href="/contact" style={{
                display: "inline-block", padding: "14px 28px", borderRadius: 8,
                fontSize: 15, fontWeight: 600, textDecoration: "none",
                border: "2px solid #fff", color: "#fff",
              }}>Schedule Confidential Consultation</a>
            </div>
          </div>
        </section>

        {/* ── QUOTE / FINAL MESSAGE ── */}
        <section style={{ background: "#0d1b3e", padding: "70px 24px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <blockquote style={{
              fontSize: "clamp(17px,2.2vw,22px)", fontStyle: "italic", color: "#e3f2fd",
              lineHeight: 1.7, textAlign: "center", maxWidth: 820, margin: "0 auto 24px",
              border: "none", padding: 0,
            }}>
              "In Cyber Incidents, Every Second Matters."
            </blockquote>
            <div style={{ textAlign: "center", color: "#90caf9" }}>
              <strong style={{ display: "block", fontSize: 16, color: "#fff", marginBottom: 4 }}>Dr. Jatin Botadra</strong>
              <span style={{ fontSize: 13 }}>Cyber Forensics | Data Center Consulting | Cybersecurity — THE CYBERTECH</span>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}