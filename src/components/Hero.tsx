"use client";

// Ikon teknologi dihapus dari sini
import { FaServer, FaWifi, FaBriefcase } from "react-icons/fa"; 
import Link from "next/link";

export default function Hero() {
  const highlights = [
    {
      icon: <FaBriefcase className="text-sm md:text-base" />, 
      text: "2+ Tahun Pengalaman",
    },
    {
      icon: <FaServer className="text-sm md:text-base" />,
      text: "3+ Proyek Selesai",
    },
    {
      icon: <FaWifi className="text-sm md:text-base" />,
      text: "Fokus Networking & Web Dev",
    },
  ];

  return (
    <section id="beranda" className="pt-24 md:pt-32 pb-8 md:pb-10 px-4 min-h-screen flex flex-col justify-start md:justify-center overflow-hidden relative">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
          
          {/* Teks Kiri */}
          <div className="w-full md:w-1/2 text-center md:text-left z-10 flex flex-col items-center md:items-start">
            <h2 className="text-blue-400 font-semibold mb-1 md:mb-2 tracking-wide uppercase text-xs md:text-sm">
              Halo, selamat datang! Saya
            </h2>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 md:mb-8 leading-tight tracking-tighter">
              Muhammad <span className="text-blue-500">Fawwazul Haq</span>
            </h1>
            
            <p className="text-sm md:text-lg text-slate-300 mb-6 md:mb-8 leading-relaxed max-w-xl mx-auto md:mx-0">
              Mahasiswa Informatika Universitas Siliwangi dengan visi menciptakan solusi digital yang efisien dan infrastruktur yang andal. Berfokus penuh pada <span className="font-semibold text-blue-300">Web Development</span> dan <span className="font-semibold text-blue-300">Jaringan Komputer</span>.
            </p>

            <div className="flex flex-wrap gap-1.5 md:gap-2.5 justify-center md:justify-start mb-8 md:mb-10">
              {highlights.map((highlight, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-2 md:gap-3 bg-slate-800 p-1.5 md:p-2 rounded-full shadow-inner border border-slate-700 hover:border-blue-500/50 transition duration-300"
                >
                  <div className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center rounded-full bg-blue-900/40 text-blue-400 border border-blue-800">
                    {highlight.icon}
                  </div>
                  <span className="text-slate-100 font-medium tracking-tight text-xs md:text-sm pr-0.5 md:pr-0">
                    {highlight.text}
                  </span>
                </div>
              ))}
            </div>
            
            {/* Tombol Menarik */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start w-full sm:w-auto px-4 sm:px-0">
              <Link href="#proyek" className="w-full sm:w-auto bg-blue-600 text-white px-8 py-2.5 md:py-3 rounded-full font-bold hover:bg-blue-500 transition shadow-lg shadow-blue-500/30 text-center text-xs md:text-sm uppercase tracking-wider">
                Lihat Proyek
              </Link>
              <Link href="#kontak" className="w-full sm:w-auto bg-transparent text-blue-400 border-2 border-blue-400 px-8 py-2.5 md:py-3 rounded-full font-bold hover:bg-blue-900/30 transition text-center text-xs md:text-sm uppercase tracking-wider">
                Hubungi Saya
              </Link>
            </div>
          </div>

          {/* Foto Kanan */}
          <div className="w-full md:w-1/2 flex justify-center relative md:mb-0 mb-4">
            <div className="absolute inset-0 bg-blue-500 rounded-full blur-[80px] md:blur-[100px] opacity-20 w-48 h-48 md:w-72 md:h-72 m-auto"></div>
            <div className="absolute z-0 w-48 h-48 md:w-80 md:h-80 bg-slate-800 rounded-full flex items-center justify-center text-slate-500 text-xs italic">Thumbnail<br/>Foto Profil</div>
            <img 
              src="/foto-profil.jpg" 
              alt="Muhammad Fawwazul Haq" 
              className="w-48 h-48 md:w-80 md:h-80 object-cover rounded-full shadow-2xl border-4 border-slate-700 relative z-10 hover:scale-105 transition duration-300 bg-slate-800"
            />
          </div>
        </div>
      </div>
    </section>
  );
}