// Kita ganti import-nya menggunakan react-icons/fa (FontAwesome)
import { FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="kontak" className="py-24 bg-blue-600 text-white px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Mari Berkolaborasi</h2>
        <p className="text-blue-100 mb-12 text-lg">
          Saya selalu terbuka untuk diskusi mengenai teknologi web, jaringan, atau peluang proyek menarik lainnya. Jangan ragu untuk menyapa!
        </p>
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          
          {/* 1. Tombol Email */}
          <a 
            href="mailto:mhmdfwwz7@gmail.com" 
            className="flex flex-col items-center group"
          >
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-3xl group-hover:bg-white group-hover:text-red-500 transition-all duration-300 shadow-lg group-hover:shadow-xl group-hover:-translate-y-1">
              <FaEnvelope /> {/* Menggunakan FaEnvelope */}
            </div>
            <span className="mt-3 font-medium tracking-wide">Email</span>
          </a>

          {/* 2. Tombol Instagram */}
          <a 
            href="https://www.instagram.com/fawwazulhqq?igsh=MW5oaW5wZ2NqcDU0cQ==" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center group"
          >
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-3xl group-hover:bg-white group-hover:text-pink-600 transition-all duration-300 shadow-lg group-hover:shadow-xl group-hover:-translate-y-1">
              <FaInstagram /> {/* Menggunakan FaInstagram */}
            </div>
            <span className="mt-3 font-medium tracking-wide">Instagram</span>
          </a>

          {/* 3. Tombol LinkedIn */}
          <a 
            href="https://www.linkedin.com/in/muhammad-fawwazul-haq-a000ba318?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center group"
          >
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-3xl group-hover:bg-white group-hover:text-blue-700 transition-all duration-300 shadow-lg group-hover:shadow-xl group-hover:-translate-y-1">
              <FaLinkedin /> {/* Menggunakan FaLinkedin */}
            </div>
            <span className="mt-3 font-medium tracking-wide">LinkedIn</span>
          </a>

        </div>

        <div className="mt-24 pt-8 border-t border-blue-500/50 text-blue-200 text-sm flex flex-col items-center">
          <p>© 2026 Muhammad Fawwazul Haq. Dibuat dengan penuh semangat di Bekasi.</p>
        </div>
      </div>
    </section>
  );
}