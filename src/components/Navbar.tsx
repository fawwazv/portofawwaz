"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-slate-900/80 backdrop-blur-md shadow-sm shadow-slate-800/50 z-50 transition-all duration-300 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="#beranda" className="text-2xl font-extrabold text-blue-500 tracking-tight">
            Fawwazul.
          </Link>

          <div className="hidden md:flex space-x-8 font-medium text-slate-300">
            <Link href="#beranda" className="hover:text-blue-400 transition">Beranda</Link>
            <Link href="#tentang" className="hover:text-blue-400 transition">Tentang</Link>
            <Link href="#proyek" className="hover:text-blue-400 transition">Proyek</Link>
            <Link href="#sertifikasi" className="hover:text-blue-400 transition">Sertifikasi</Link>
            <Link href="#kontak" className="hover:text-blue-400 transition">Kontak</Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-slate-300 hover:text-blue-400 focus:outline-none">
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
        <div className="md:hidden bg-slate-900 border-t border-slate-800 shadow-xl">
          <Link href="#beranda" onClick={toggleMenu} className="block py-3 px-4 text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-blue-400">Beranda</Link>
          <Link href="#tentang" onClick={toggleMenu} className="block py-3 px-4 text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-blue-400">Tentang</Link>
          <Link href="#proyek" onClick={toggleMenu} className="block py-3 px-4 text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-blue-400">Proyek</Link>
          <Link href="#sertifikasi" onClick={toggleMenu} className="block py-3 px-4 text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-blue-400">Sertifikasi</Link>
          <Link href="#kontak" onClick={toggleMenu} className="block py-3 px-4 text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-blue-400">Kontak</Link>
        </div>
      )}
    </nav>
  );
}