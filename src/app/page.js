import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Philosophy from "@/components/sections/Philosophy";
import Work from "@/components/sections/Work";
import Engineering from "@/components/sections/Engineering";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main id="top" className="min-h-screen overflow-hidden">
      <Navbar />
      <Hero />
      <Philosophy />
      <Work />
      <Engineering />
      <About />
      <Contact />
    </main>
  );
}
