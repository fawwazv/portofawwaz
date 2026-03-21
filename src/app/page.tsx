import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    // Kita hapus bg-gray-50 di sini agar background titik-titik tembus
    <main className="text-slate-200 min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Certifications />
      <Contact />
    </main>
  );
}