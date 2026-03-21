"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault(); 
    
    if (isOpen) setIsOpen(false);

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      // --- PERBAIKAN JARAK ADA DI SINI ---
      // Awalnya 80. Sekarang saya ubah jadi 15 agar gulirannya berhenti lebih ke bawah.
      // Jika menurut Anda masih terlalu jauh, jadikan 0. Jika terlalu nempel, jadikan 30.
      const offsetCorrection = 15; 
      
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offsetCorrection;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

      window.history.pushState(null, "", `#${targetId}`);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-slate-900/80 backdrop-blur-md shadow-sm shadow-slate-800/50 z-50 transition-all duration-300 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          
          <Link 
            href="#beranda" 
            onClick={(e) => handleScroll(e, 'beranda')}
            className="text-2xl font-extrabold tracking-tight flex items-center"
          >
            <span className="text-white">Fawwaz</span>
            <span className="text-blue-500">Dev.</span>
          </Link>

          <div className="hidden md:flex items-center space-x-2 font-medium text-slate-300 text-sm">
            <Link href="#beranda" onClick={(e) => handleScroll(e, 'beranda')} className="px-5 py-2.5 rounded-full hover:bg-blue-500/10 hover:text-blue-400 transition-all duration-300 border border-transparent hover:border-blue-500/20">
              Beranda
            </Link>
            <Link href="#tentang" onClick={(e) => handleScroll(e, 'tentang')} className="px-5 py-2.5 rounded-full hover:bg-blue-500/10 hover:text-blue-400 transition-all duration-300 border border-transparent hover:border-blue-500/20">
              Tentang
            </Link>
            <Link href="#proyek" onClick={(e) => handleScroll(e, 'proyek')} className="px-5 py-2.5 rounded-full hover:bg-blue-500/10 hover:text-blue-400 transition-all duration-300 border border-transparent hover:border-blue-500/20">
              Proyek
            </Link>
            <Link href="#sertifikasi" onClick={(e) => handleScroll(e, 'sertifikasi')} className="px-5 py-2.5 rounded-full hover:bg-blue-500/10 hover:text-blue-400 transition-all duration-300 border border-transparent hover:border-blue-500/20">
              Sertifikasi
            </Link>
            <Link href="#kontak" onClick={(e) => handleScroll(e, 'kontak')} className="px-5 py-2.5 rounded-full hover:bg-blue-500/10 hover:text-blue-400 transition-all duration-300 border border-transparent hover:border-blue-500/20">
              Kontak
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu} 
              className="text-slate-300 hover:text-blue-400 focus:outline-none p-2 rounded-xl hover:bg-slate-800 transition"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-xl border-t border-slate-800 shadow-xl px-4 py-4 space-y-2">
          <Link href="#beranda" onClick={(e) => handleScroll(e, 'beranda')} className="block px-5 py-3 rounded-xl text-sm font-medium text-slate-300 hover:bg-blue-500/10 hover:text-blue-400 transition-all">Beranda</Link>
          <Link href="#tentang" onClick={(e) => handleScroll(e, 'tentang')} className="block px-5 py-3 rounded-xl text-sm font-medium text-slate-300 hover:bg-blue-500/10 hover:text-blue-400 transition-all">Tentang</Link>
          <Link href="#proyek" onClick={(e) => handleScroll(e, 'proyek')} className="block px-5 py-3 rounded-xl text-sm font-medium text-slate-300 hover:bg-blue-500/10 hover:text-blue-400 transition-all">Proyek</Link>
          <Link href="#sertifikasi" onClick={(e) => handleScroll(e, 'sertifikasi')} className="block px-5 py-3 rounded-xl text-sm font-medium text-slate-300 hover:bg-blue-500/10 hover:text-blue-400 transition-all">Sertifikasi</Link>
          <Link href="#kontak" onClick={(e) => handleScroll(e, 'kontak')} className="block px-5 py-3 rounded-xl text-sm font-medium text-slate-300 hover:bg-blue-500/10 hover:text-blue-400 transition-all">Kontak</Link>
        </div>
      )}
    </nav>
  );
}