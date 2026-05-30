// app/services/page.jsx
// Matches your existing site's white/navy blue color scheme
// Imports Navbar and Footer — does NOT copy their code

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { dataRecoveryCategories } from "@/lib/dataRecoveryContent";

export const metadata = {
  title: "Services | The Cybertech Data Engineers",
  description: "Respond to time-sensitive restore requirements, save on archiving costs and keep legacy data accessible.",
};

const allServices = [
  { name: "Tape Recovery", icon: "📼", slug: "tape-data-recovery", desc: "We help you recover your valuable data from corrupt or damaged tape drives." },
  { name: "Memory Card Recovery", icon: "🗃️", slug: "memory-card-data-recovery", desc: "Memory Card Data Recovery — recover photos, videos, songs, documents from SD, CF, mini SD, USB, memory stick." },
  { name: "HDD Recovery", icon: "💾", slug: "hard-disk-data-recovery", desc: "Countless times we have recovered data from disks which other 'experts' have diagnosed as 'un-recoverable'." },
  { name: "Mac OS Recovery", icon: "🍎", slug: "apple-mac-os-data-recovery", desc: "Recovers lost or accidently deleted data, loaded with rich features and ensures that data recovery from Mac." },
  { name: "USB Drive Recovery", icon: "🔌", slug: "usb-drive-data-recovery", desc: "USB files recovery software is non-destructive and read-only data recovery utility capable of providing safe and accurate results." },
  { name: "Unix And Linux Recovery", icon: "🐧", slug: "unix-linux-data-recovery", desc: "Linux Recovery can recover the files you just accidentally deleted and the files which have been erased." },
  { name: "Tally Recovery", icon: "📊", slug: "tally-data-recovery", desc: "We recover Tally data (all versions of Tally) as well as Microsoft Office (.xls/.xlsx/.docx etc.) corrupted data." },
  { name: "CD/DVD Recovery", icon: "💿", slug: "cd-dvd-blu-data-recovery", desc: "CD/DVD Recovery module is the most easy-to-use CD/DVD data recovery tool that you could find on the internet." },
  { name: "Apple Mac OS Recovery", icon: "🍎", slug: "apple-mac-os-data-recovery", desc: "Mac OS Recovery is part of the built-in recovery system of your Mac." },
  { name: "Encrypted Recovery", icon: "🔐", slug: "encrypted-file-recovery", desc: "Encrypted hard drives can fail or suffer from file system errors, making data recovery more difficult — we handle it all." },
  { name: "Server Recovery", icon: "🖥️", slug: "server-data-recovery", desc: "Data Recovery recovers all the data from all server and drive makes, models and brands." },
  { name: "MS Office Recovery", icon: "📄", slug: "ms-office-data-recovery", desc: "Office Recovery provides utilities for data extraction from dozens of email, database and other media." },
  { name: "Camera Recovery", icon: "📷", slug: "camera-data-recovery", desc: "You can use The CyberTech Data Recovery to recover the digital camera photos freely." },
  { name: "Tablet Recovery", icon: "📲", slug: "tablet-data-recovery", desc: "The CyberTech can recover lost or deleted photos, audio, video files, contacts, text messages and other things." },
  { name: "Password Recovery", icon: "🔑", slug: "password-data-recovery", desc: "The CyberTech services is a good way to prevent your password recover from unauthorized access." },
  { name: "Email Recovery Services", icon: "📧", slug: "email-recovery-services", desc: "With The CyberTech's email recovery services, no data is permanently lost and we can help you recover all your lost or deleted e-mails." },
  { name: "File Recovery And Repair", icon: "🔧", slug: "file-recovery-and-repair", desc: "The CyberTech provides the ability to effectively detect and recover files lost due to accidental deletion, virus and other reasons." },
  { name: "Laptop Recovery", icon: "💻", slug: "laptop-data-recovery", desc: "Recover deleted data from damaged laptop dead hard drives. Get your data back without any alterations by expert data recovery." },
  { name: "SSD Recovery", icon: "⚡", slug: "solid-state-drive-recovery", desc: "Solid state storage on solid state drives (SSD) is an emerging storage technology that promises lower rates of failure." },
  { name: "Novell Recovery", icon: "🗄️", slug: "novell-data-recovery", desc: "Novell originated as a robust file server operating system for data file sharing. It used to be the dominating OS in data server market." },
  { name: "Mobile iPhone Recovery", icon: "📱", slug: "mobile-iphone-data-recovery", desc: "The CyberTech's data recovery specialists can easily recover your data from mobile phones & memory cards." },
  { name: "Windows Recovery", icon: "🪟", slug: "windows-data-recovery", desc: "Microsoft Windows is the most popular operating system platform used and by far this is the largest group of users we service daily." },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* ── Hero Banner (matches your screenshot style) ── */}
        <section style={{
          position: "relative",
          minHeight: "300px",
          background: "linear-gradient(rgba(15,30,70,0.72), rgba(15,30,70,0.72)), url('/services-hero.jpg') center/cover no-repeat",
          display: "flex",
          alignItems: "center",
          padding: "60px 80px",
        }}>
          <div>
            <h1 style={{ color: "#fff", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, margin: "0 0 6px" }}>
              Services
            </h1>
            <div style={{ width: "50px", height: "3px", background: "#fff", marginBottom: "20px" }} />
            <p style={{ color: "#e0e0e0", fontSize: "16px", maxWidth: "420px", lineHeight: 1.7, margin: 0 }}>
              Respond to time-sensitive restore requirements, save on archiving costs and keep legacy data accessible
            </p>
          </div>
        </section>

        {/* ── Section heading ── */}
        <section style={{ background: "#fff", padding: "60px 40px 0" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ color: "#1a237e", fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: 700, margin: 0 }}>
              Some of the most common data recovery tasks that we perform
            </h2>
          </div>
        </section>

        {/* ── Services Grid (2-column, icon + title + desc) ── */}
        <section style={{ background: "#fff", padding: "40px 40px 70px" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0" }}>
            {allServices.map((s, i) => (
              <Link
                key={`${s.slug}-${i}`}
                href={`/services/data-recovery/${s.slug}`}
                style={{ textDecoration: "none", display: "flex", alignItems: "flex-start", gap: "18px", padding: "28px 30px", borderBottom: "1px solid #eee", borderRight: i % 2 === 0 ? "1px solid #eee" : "none" }}
              >
                {/* Icon circle */}
                <div style={{ width: "48px", height: "48px", borderRadius: "8px", background: "#e8eaf6", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", flexShrink: 0 }}>
                  {s.icon}
                </div>
                <div>
                  <h3 style={{ color: "#1a237e", fontSize: "17px", fontWeight: 700, margin: "0 0 8px" }}>{s.name}</h3>
                  <p style={{ color: "#555", fontSize: "13px", lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Submit Device CTA bar ── */}
        <section style={{ background: "#4a5568", padding: "30px 40px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "20px" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto", width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "20px" }}>
            <Link
              href="/contact"
              style={{ background: "#3b5bdb", color: "#fff", textDecoration: "none", padding: "12px 28px", borderRadius: "4px", fontWeight: 600, fontSize: "14px", letterSpacing: "0.5px", display: "flex", alignItems: "center", gap: "8px" }}
            >
              SUBMIT DEVICE ➤
            </Link>
            <span style={{ color: "#fff", fontWeight: 600, fontSize: "15px" }}>
              CONTACT US @ +91-22-61473555
            </span>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        @media (max-width: 700px) {
          .services-grid { grid-template-columns: 1fr !important; }
        }
        a:hover h3 { color: #2196f3 !important; }
      `}</style>
    </>
  );
}
