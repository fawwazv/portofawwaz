"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-sm z-50 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="#beranda" className="text-2xl font-extrabold text-blue-600 tracking-tight">
            Fawwazul.
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 font-medium text-gray-600">
            <Link href="#beranda" className="hover:text-blue-600 transition">Beranda</Link>
            <Link href="#tentang" className="hover:text-blue-600 transition">Tentang</Link>
            <Link href="#proyek" className="hover:text-blue-600 transition">Proyek</Link>
            <Link href="#sertifikasi" className="hover:text-blue-600 transition">Sertifikasi</Link>
            <Link href="#kontak" className="hover:text-blue-600 transition">Kontak</Link>
          </div>

          {/* Mobile Menu Button (Hamburger) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-blue-600 focus:outline-none"
              aria-label="Toggle Menu"
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

      {/* Mobile Menu Dropdown */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-t border-gray-100 shadow-lg ${
          isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <Link href="#beranda" onClick={toggleMenu} className="block py-3 px-4 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600">Beranda</Link>
        <Link href="#tentang" onClick={toggleMenu} className="block py-3 px-4 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600">Tentang</Link>
        <Link href="#proyek" onClick={toggleMenu} className="block py-3 px-4 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600">Proyek</Link>
        <Link href="#sertifikasi" onClick={toggleMenu} className="block py-3 px-4 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600">Sertifikasi</Link>
        <Link href="#kontak" onClick={toggleMenu} className="block py-3 px-4 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600">Kontak</Link>
      </div>
    </nav>
  );
}