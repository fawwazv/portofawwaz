import { SiJavascript, SiReact, SiExpress, SiGit, SiMongodb, SiMysql } from "react-icons/si";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="beranda" className="pt-32 pb-20 px-4 min-h-screen flex flex-col justify-center overflow-hidden relative">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          
          {/* Teks Kiri */}
          <div className="w-full md:w-1/2 text-center md:text-left z-10">
            <h2 className="text-blue-400 font-semibold mb-2 tracking-wide uppercase text-sm">
              Halo, selamat datang! Saya
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Muhammad Fawwazul Haq
            </h1>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-xl mx-auto md:mx-0">
              Saya memiliki ketertarikan mendalam dalam dunia <span className="font-semibold text-blue-400">Web Development</span> dan <span className="font-semibold text-blue-400">Jaringan Komputer</span>. Berfokus pada penciptaan solusi digital yang efisien dan infrastruktur yang andal.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link href="#proyek" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-500 transition shadow-lg shadow-blue-500/30 text-center">
                Lihat Proyek
              </Link>
              <Link href="#kontak" className="bg-transparent text-blue-400 border border-blue-400 px-8 py-3 rounded-lg font-medium hover:bg-blue-900/30 transition text-center">
                Hubungi Saya
              </Link>
            </div>
          </div>

          {/* Foto Kanan */}
          <div className="w-full md:w-1/2 flex justify-center relative">
            <div className="absolute inset-0 bg-blue-500 rounded-full blur-[100px] opacity-20 w-72 h-72 m-auto"></div>
            {/* Ganti dengan foto Anda */}
            <img 
              src="/foto-profil.jpg" 
              alt="Muhammad Fawwazul Haq" 
              className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-2xl border-4 border-slate-700 relative z-10 hover:scale-105 transition duration-300"
            />
          </div>
        </div>

        {/* Marquee Teknologi */}
        <div className="mt-28 border-t border-slate-800 pt-10">
          <h3 className="text-center text-sm font-semibold text-slate-500 uppercase tracking-widest mb-8">
            Teknologi & Alat yang Saya Gunakan
          </h3>
          <div className="flex overflow-hidden relative w-full max-w-4xl mx-auto group">
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-slate-900 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-slate-900 to-transparent z-10"></div>
            
            <div className="flex animate-marquee group-hover:[animation-play-state:paused] items-center w-max">
              <div className="flex space-x-16 mx-8 text-5xl text-slate-500">
                <SiJavascript className="hover:text-yellow-400 transition cursor-pointer" />
                <SiReact className="hover:text-blue-400 transition cursor-pointer" />
                <SiExpress className="hover:text-white transition cursor-pointer" />
                <SiGit className="hover:text-orange-500 transition cursor-pointer" />
                <SiMongodb className="hover:text-green-500 transition cursor-pointer" />
                <SiMysql className="hover:text-blue-500 transition cursor-pointer" />
              </div>
              <div className="flex space-x-16 mx-8 text-5xl text-slate-500">
                <SiJavascript className="hover:text-yellow-400 transition cursor-pointer" />
                <SiReact className="hover:text-blue-400 transition cursor-pointer" />
                <SiExpress className="hover:text-white transition cursor-pointer" />
                <SiGit className="hover:text-orange-500 transition cursor-pointer" />
                <SiMongodb className="hover:text-green-500 transition cursor-pointer" />
                <SiMysql className="hover:text-blue-500 transition cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}