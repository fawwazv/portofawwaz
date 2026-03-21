import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero"; 
import About from "@/components/About";
import Projects from "@/components/Projects";
import { Certificate } from "node:crypto";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="text-gray-800">
      <Navbar />
      <Hero />
      <About /> 
      <Projects />
      <Certifications/>
      <Contact />

      {/* Footer Sederhana */}
      <footer className="py-10 text-center text-gray-400 text-sm border-t border-gray-100">
        © 2026 Muhammad Fawwazul Haq. Built with Next.js 15.
      </footer>
    </main>
  );
}