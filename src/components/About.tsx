"use client";

import { useState } from "react";
import { SiJavascript, SiReact, SiExpress, SiGit, SiMongodb, SiMysql } from "react-icons/si";

export default function About() {
  // State untuk mengontrol buka-tutup dropdown pendidikan
  const [showEdu, setShowEdu] = useState(false);

  return (
    <section id="tentang" className="py-24 px-4 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 inline-block border-b-4 border-blue-500 pb-2">
            Tentang Saya
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto mt-4">
            Mengenal lebih dekat profil akademik dan ketertarikan teknis saya.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Kolom Kiri: Kartu Biodata */}
          <div className="bg-slate-800/50 backdrop-blur-md p-8 rounded-3xl shadow-lg border border-slate-700 hover:border-blue-500/50 transition duration-300">
            <h3 className="text-xl font-bold mb-8 text-white flex items-center gap-2">
              <span className="w-8 h-1 bg-blue-500 rounded-full"></span>
              Biodata Singkat
            </h3>
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row border-b border-slate-700 pb-4">
                <span className="w-40 font-semibold text-blue-400 mb-1 sm:mb-0">Nama Lengkap</span>
                <span className="text-slate-200">Muhammad Fawwazul Haq</span>
              </div>
              
              <div className="flex flex-col border-b border-slate-700 pb-4">
                <div 
                  className="flex flex-col sm:flex-row cursor-pointer group"
                  onClick={() => setShowEdu(!showEdu)}
                >
                  <span className="w-40 font-semibold text-blue-400 mb-1 sm:mb-0 flex items-center gap-2 group-hover:text-blue-300 transition-colors">
                    Pendidikan
                    <svg className={`w-4 h-4 transition-transform duration-300 ${showEdu ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </span>
                  <div className="flex flex-col">
                    <span className="text-slate-200 font-medium">
                      Universitas Siliwangi 
                      <span className="text-blue-400 text-xs px-2 py-0.5 ml-2 bg-blue-900/30 rounded-full border border-blue-800/50 inline-block align-middle mb-0.5">Saat ini</span>
                    </span>
                    <span className="text-sm text-slate-400 italic">Informatika, Angkatan 2024</span>
                  </div>
                </div>

                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${showEdu ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                  <div className="flex flex-col sm:flex-row pl-0 sm:pl-40 relative">
                    <div className="hidden sm:block absolute left-[9.5rem] top-[-1.5rem] bottom-2 w-px bg-slate-600"></div>
                    <div className="flex flex-col relative sm:pl-5">
                      <div className="hidden sm:block absolute left-[-0.28rem] top-1.5 w-2.5 h-2.5 bg-slate-400 rounded-full border-2 border-slate-800 z-10"></div>
                      <span className="text-slate-300 font-medium">SMA Negeri 1 Cikarang Selatan</span>
                      <span className="text-sm text-slate-400 italic">Jurusan MIPA, 2021 - 2024</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row border-b border-slate-700 pb-4">
                <span className="w-40 font-semibold text-blue-400 mb-1 sm:mb-0">Domisili</span>
                <span className="text-slate-200">Bekasi, Jawa Barat</span>
              </div>
              <div className="flex flex-col sm:flex-row">
                <span className="w-40 font-semibold text-blue-400 mb-1 sm:mb-0">Tanggal Lahir</span>
                <span className="text-slate-200">04 November 2005</span>
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Narasi Fokus */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">Fokus & Ketertarikan</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                Sebagai mahasiswa Informatika, saya menaruh minat besar pada bagaimana sistem di belakang layar bekerja dan saling terhubung. Di bidang <span className="text-blue-400 font-medium">Web Development</span>, saya antusias merancang dan membangun arsitektur backend yang kokoh serta mengintegrasikannya ke dalam antarmuka yang interaktif.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Sementara itu, di bidang <span className="text-blue-400 font-medium">Jaringan Komputer</span>, saya tertarik pada infrastruktur, keamanan, dan bagaimana data didistribusikan. Saat ini, saya sedang dalam tahap aktif mempelajari dan mendalami fundamental serta praktik jaringan komputer secara lebih komprehensif.
              </p>
            </div>
          </div>
        </div>

        {/* Marquee Teknologi */}
        <div className="mt-20 md:mt-24 border-t border-slate-800 pt-10 md:pt-12">
          <h3 className="text-center text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-widest mb-6 md:mb-8">
            Teknologi & Alat yang Saya Gunakan
          </h3>
          <div className="flex overflow-hidden relative w-full max-w-4xl mx-auto group">
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-slate-900 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-slate-900 to-transparent z-10"></div>
            
            <div className="flex animate-marquee group-hover:[animation-play-state:paused] items-center w-max">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="flex gap-12 pr-12 text-4xl md:text-5xl text-slate-500">
                  <SiJavascript className="hover:text-yellow-400 transition cursor-pointer" />
                  <SiReact className="hover:text-blue-400 transition cursor-pointer" />
                  <SiExpress className="hover:text-white transition cursor-pointer" />
                  <SiGit className="hover:text-orange-500 transition cursor-pointer" />
                  <SiMongodb className="hover:text-green-500 transition cursor-pointer" />
                  <SiMysql className="hover:text-blue-500 transition cursor-pointer" />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}