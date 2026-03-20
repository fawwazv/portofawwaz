import { SiJavascript, SiReact, SiExpress, SiGit, SiMongodb, SiMysql } from "react-icons/si";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="beranda" className="pt-32 pb-20 px-4 min-h-screen flex flex-col justify-center bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Bagian Atas: Teks dan Foto */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          
          {/* Teks Kiri */}
          <div className="w-full md:w-1/2 text-center md:text-left z-10">
            <h2 className="text-blue-600 font-semibold mb-2 tracking-wide uppercase text-sm">
              Halo, selamat datang! Saya
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              Muhammad Fawwazul Haq
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl mx-auto md:mx-0">
              Saya memiliki ketertarikan mendalam dalam dunia <span className="font-semibold text-blue-600">Web Development</span> dan <span className="font-semibold text-blue-600">Jaringan Komputer</span>. Berfokus pada penciptaan solusi digital yang efisien dan infrastruktur yang andal.
            </p>
            
            {/* Tombol */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link href="#proyek" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition shadow-lg shadow-blue-200 text-center">
                Lihat Proyek
              </Link>
              <Link href="#kontak" className="bg-white text-blue-600 border border-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition text-center">
                Hubungi Saya
              </Link>
            </div>
          </div>

          {/* Foto Kanan */}
          <div className="w-full md:w-1/2 flex justify-center relative">
            {/* Hiasan background di belakang foto */}
            <div className="absolute inset-0 bg-blue-100 rounded-full blur-3xl opacity-50 w-72 h-72 m-auto"></div>
            
            {/* Ganti src dengan link foto Anda nanti */}
            <img 
              src="https://via.placeholder.com/400x400" 
              alt="Muhammad Fawwazul Haq" 
              className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-2xl border-4 border-white relative z-10 hover:scale-105 transition duration-300"
            />
          </div>
        </div>

        {/* Bagian Bawah: Slider Teknologi */}
        <div className="mt-28 border-t border-gray-200 pt-10">
          <h3 className="text-center text-sm font-semibold text-gray-400 uppercase tracking-widest mb-8">
            Teknologi & Alat yang Saya Gunakan
          </h3>
          
          {/* Container Marquee */}
          <div className="flex overflow-hidden relative w-full max-w-4xl mx-auto group">
            {/* Gradient shadow untuk efek halus di kiri dan kanan */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
            
            <div className="flex animate-marquee group-hover:[animation-play-state:paused] items-center">
              {/* Set 1 */}
              <div className="flex space-x-16 mx-8 text-5xl text-gray-400">
                <SiJavascript className="hover:text-yellow-400 transition cursor-pointer" title="JavaScript" />
                <SiReact className="hover:text-blue-400 transition cursor-pointer" title="React" />
                <SiExpress className="hover:text-gray-800 transition cursor-pointer" title="ExpressJS" />
                <SiGit className="hover:text-orange-500 transition cursor-pointer" title="Git" />
                <SiMongodb className="hover:text-green-500 transition cursor-pointer" title="MongoDB" />
                <SiMysql className="hover:text-blue-500 transition cursor-pointer" title="MySQL" />
              </div>
              {/* Set 2 (Duplikasi persis Set 1 agar looping tidak terputus) */}
              <div className="flex space-x-16 mx-8 text-5xl text-gray-400">
                <SiJavascript className="hover:text-yellow-400 transition cursor-pointer" title="JavaScript" />
                <SiReact className="hover:text-blue-400 transition cursor-pointer" title="React" />
                <SiExpress className="hover:text-gray-800 transition cursor-pointer" title="ExpressJS" />
                <SiGit className="hover:text-orange-500 transition cursor-pointer" title="Git" />
                <SiMongodb className="hover:text-green-500 transition cursor-pointer" title="MongoDB" />
                <SiMysql className="hover:text-blue-500 transition cursor-pointer" title="MySQL" />
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}