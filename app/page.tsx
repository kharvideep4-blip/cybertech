import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServiceCards from "@/components/ServiceCards";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", background: "#000" }}>
      <Navbar />
      <Hero />
      <ServiceCards />
    </main>
  );
}
