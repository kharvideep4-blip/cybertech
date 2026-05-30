import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServiceCards from "@/components/ServiceCards";
import Features from "@/components/Features";
import TeamSection from "@/components/TeamSection";
import ClientGrid from "@/components/ClientGrid";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", background: "#000" }}>
      <Navbar />
      <Hero />
      <ServiceCards />
      <Features />
      <ClientGrid />
      <Footer />
    </main>
  );
}