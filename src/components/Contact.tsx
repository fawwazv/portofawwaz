import { FaLinkedin, FaInstagram, FaEnvelope, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="kontak" className="py-24 bg-slate-900/50 border-t border-slate-800 px-4 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">Mari Berkolaborasi</h2>
        <p className="text-slate-300 mb-12 text-lg">
          Saya selalu terbuka untuk diskusi mengenai teknologi web, jaringan, atau peluang proyek menarik lainnya. Jangan ragu untuk menyapa!
        </p>
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          
          {/* 1. Tombol Email */}
          <a 
            href="mailto:mhmdfwwz7@gmail.com" 
            className="flex flex-col items-center group text-slate-300"
          >
            <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center text-3xl group-hover:bg-red-500 group-hover:text-white border border-slate-700 transition-all duration-300 shadow-lg group-hover:shadow-red-500/20 group-hover:-translate-y-1">
              <FaEnvelope />
            </div>
            <span className="mt-3 font-medium tracking-wide group-hover:text-red-400 transition-colors">Email</span>
          </a>

          {/* 2. Tombol Instagram */}
          <a 
            href="https://www.instagram.com/fawwazulhqq?igsh=MW5oaW5wZ2NqcDU0cQ==" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center group text-slate-300"
          >
            <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center text-3xl group-hover:bg-pink-600 group-hover:text-white border border-slate-700 transition-all duration-300 shadow-lg group-hover:shadow-pink-600/20 group-hover:-translate-y-1">
              <FaInstagram />
            </div>
            <span className="mt-3 font-medium tracking-wide group-hover:text-pink-400 transition-colors">Instagram</span>
          </a>

          {/* 3. Tombol LinkedIn */}
          <a 
            href="https://www.linkedin.com/in/muhammad-fawwazul-haq-a000ba318?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center group text-slate-300"
          >
            <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center text-3xl group-hover:bg-blue-600 group-hover:text-white border border-slate-700 transition-all duration-300 shadow-lg group-hover:shadow-blue-600/20 group-hover:-translate-y-1">
              <FaLinkedin />
            </div>
            <span className="mt-3 font-medium tracking-wide group-hover:text-blue-400 transition-colors">LinkedIn</span>
          </a>

          {/* 4. Tombol GitHub */}
          <a 
            href="https://github.com/fawwazv" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center group text-slate-300"
          >
            <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center text-3xl group-hover:bg-slate-700 group-hover:text-white border border-slate-700 transition-all duration-300 shadow-lg group-hover:shadow-white/10 group-hover:-translate-y-1">
              <FaGithub />
            </div>
            <span className="mt-3 font-medium tracking-wide group-hover:text-white transition-colors">GitHub</span>
          </a>

        </div>

        {/* Footer yang sebelumnya hilang */}
        <div className="mt-24 pt-8 border-t border-slate-800/80 text-slate-500 text-sm flex flex-col items-center">
          <p>© 2026 Muhammad Fawwazul Haq. Dibuat dengan penuh semangat di Bekasi.</p>
        </div>
      </div>
    </section>
  );
}