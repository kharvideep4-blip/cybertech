// app/services/data-recovery/[slug]/page.jsx
// Handles ALL 21 data recovery sub-category pages automatically.
// Uses globals.css classes — no styled-jsx, works as a Server Component.

import Link from "next/link";
import { notFound } from "next/navigation";
import { dataRecoveryCategories, getCategoryBySlug } from "@/lib/dataRecoveryContent";

export async function generateStaticParams() {
  return dataRecoveryCategories.map((cat) => ({ slug: cat.slug }));
}

export async function generateMetadata({ params }) {
  const cat = getCategoryBySlug(params.slug);
  if (!cat) return {};
  return {
    title: `${cat.label} | The Cybertech Data Engineers`,
    description: cat.shortDesc,
  };
}

export default function DataRecoverySlugPage({ params }) {
  const cat = getCategoryBySlug(params.slug);
  if (!cat) notFound();

  const otherCats = dataRecoveryCategories.filter((c) => c.slug !== cat.slug);

  return (
    <main style={{ background: "#050505", minHeight: "100vh", color: "#fff", fontFamily: "sans-serif" }}>

      {/* ── Breadcrumb ── */}
      <div style={{ background: "#0a0a0a", borderBottom: "1px solid #1a1a1a", padding: "12px 40px", fontSize: "12px", color: "#555" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
          <Link href="/" style={{ color: "#2196f3", textDecoration: "none" }}>Home</Link>
          <span style={{ color: "#333" }}>›</span>
          <Link href="/services" style={{ color: "#2196f3", textDecoration: "none" }}>Services</Link>
          <span style={{ color: "#333" }}>›</span>
          <Link href="/services/data-recovery" style={{ color: "#2196f3", textDecoration: "none" }}>Data Recovery</Link>
          <span style={{ color: "#333" }}>›</span>
          <span style={{ color: "#888" }}>{cat.label}</span>
        </div>
      </div>

      {/* ── Page Body ── */}
      <div style={{ padding: "50px 40px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 300px", gap: "40px", alignItems: "start" }}>

          {/* ── Main Content ── */}
          <div>
            {/* Hero */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: "20px", marginBottom: "24px", paddingBottom: "24px", borderBottom: "1px solid #1a1a1a" }}>
              <span style={{ fontSize: "52px", flexShrink: 0, lineHeight: 1 }}>{cat.icon}</span>
              <div>
                <h1 style={{ fontSize: "clamp(24px, 3.5vw, 40px)", fontWeight: 800, margin: "0 0 10px", lineHeight: 1.15 }}>
                  {cat.heroTitle}
                </h1>
                <p style={{ color: "#2196f3", fontSize: "15px", margin: 0 }}>{cat.heroSubtitle}</p>
              </div>
            </div>

            {/* Short description */}
            <p style={{ color: "#888", fontSize: "15px", lineHeight: 1.7, marginBottom: "36px" }}>
              {cat.shortDesc}
            </p>

            {/* Content sections */}
            {cat.sections.map((sec, i) => (
              <div key={i} style={{ marginBottom: "36px" }}>
                <h2 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "12px", paddingLeft: "14px", borderLeft: "3px solid #2196f3" }}>
                  {sec.heading}
                </h2>
                <p style={{ color: "#999", lineHeight: 1.8, fontSize: "14px" }}>{sec.body}</p>
              </div>
            ))}

            {/* FAQs */}
            {cat.faqs && cat.faqs.length > 0 && (
              <div style={{ marginBottom: "40px" }}>
                <h2 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "16px" }}>
                  Frequently Asked Questions
                </h2>
                {cat.faqs.map((faq, i) => (
                  <details
                    key={i}
                    style={{ background: "#0d0d0d", border: "1px solid #1a1a1a", borderRadius: "6px", marginBottom: "10px", overflow: "hidden" }}
                  >
                    <summary style={{ padding: "14px 18px", cursor: "pointer", fontSize: "14px", fontWeight: 500, color: "#ddd", listStyle: "none" }}>
                      {faq.q}
                    </summary>
                    <p style={{ padding: "0 18px 14px", color: "#777", fontSize: "13px", lineHeight: 1.7, margin: 0 }}>
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            )}

            {/* CTA */}
            <div style={{ background: "linear-gradient(135deg, #0a1628, #0d0d0d)", border: "1px solid #2196f3", borderRadius: "10px", padding: "32px", marginTop: "40px" }}>
              <h3 style={{ fontSize: "22px", margin: "0 0 8px" }}>Ready to Recover Your Data?</h3>
              <p style={{ color: "#888", fontSize: "14px", marginBottom: "24px" }}>
                Free diagnosis. No data, no charge. Emergency service available.
              </p>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <Link href="/contact" style={{ background: "#2196f3", color: "#fff", textDecoration: "none", padding: "12px 24px", borderRadius: "6px", fontSize: "14px", fontWeight: 600 }}>
                  Get Free Diagnosis
                </Link>
                <Link href="/services/data-recovery" style={{ border: "1px solid #333", color: "#aaa", textDecoration: "none", padding: "12px 24px", borderRadius: "6px", fontSize: "14px" }}>
                  ← All Data Recovery
                </Link>
              </div>
            </div>
          </div>

          {/* ── Sidebar ── */}
          <aside style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {/* Other categories */}
            <div style={{ background: "#0d0d0d", border: "1px solid #1a1a1a", borderRadius: "8px", padding: "20px", maxHeight: "500px", overflowY: "auto" }}>
              <h4 style={{ fontSize: "12px", fontWeight: 700, color: "#2196f3", margin: "0 0 16px", textTransform: "uppercase", letterSpacing: "1px" }}>
                Other Recovery Services
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {otherCats.map((c) => (
                  <li key={c.slug} style={{ marginBottom: "4px" }}>
                    <Link
                      href={`/services/data-recovery/${c.slug}`}
                      style={{ display: "flex", alignItems: "center", gap: "8px", color: "#888", textDecoration: "none", fontSize: "12px", padding: "6px 8px", borderRadius: "4px" }}
                    >
                      <span>{c.icon}</span> {c.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Emergency CTA */}
            <div style={{ background: "#0a1628", border: "1px solid #2196f3", borderRadius: "8px", padding: "20px" }}>
              <h4 style={{ margin: "0 0 8px", fontSize: "16px" }}>Emergency?</h4>
              <p style={{ color: "#888", fontSize: "12px", marginBottom: "16px", lineHeight: 1.5 }}>
                Call us 24/7 for critical data loss situations.
              </p>
              <Link
                href="/contact"
                style={{ background: "#2196f3", color: "#fff", textDecoration: "none", padding: "12px 16px", borderRadius: "6px", fontSize: "14px", fontWeight: 600, display: "block", textAlign: "center" }}
              >
                Contact Us Now
              </Link>
            </div>
          </aside>

        </div>
      </div>

      {/* Global styles for this page — plain <style> tag works in Server Components */}
      <style>{`
        @media (max-width: 900px) {
          .slug-layout { grid-template-columns: 1fr !important; }
        }
        details summary::-webkit-details-marker { display: none; }
        details summary::after { content: " ▼"; float: right; color: #2196f3; font-size: 10px; }
        details[open] summary::after { content: " ▲"; }
        details summary:hover { color: #2196f3; background: #111; }
        a:hover { opacity: 0.85; }
      `}</style>
    </main>
  );
}
