"use client";

import { FaExternalLinkAlt } from "react-icons/fa";

export default function Certifications() {
  const certifications = [
    {
      title: "Belajar Membuat Aplikasi Back-End Pemula",
      issuer: "Dicoding Indonesia",
      description: "Mempelajari fundamental backend development, membangun RESTful API dengan Node.js, dan pengelolaan environment.",
      date: "2024",
      expiry: "2027",
      image: "/certs/backend-pemula.jpg",
      driveLink: "https://drive.google.com/file/d/11GLXgpAKyrMXjq6UN5OGuv2dZjY9fhG1/view?usp=drive_link" 
    },
    {
      title: "Belajar Dasar Pemrograman JavaScript",
      issuer: "Dicoding Indonesia",
      description: "Pemahaman mendalam tentang logika pemrograman, sintaks JavaScript modern (ES6+), dan manipulasi data.",
      date: "2024",
      expiry: "2027",
      image: "/certs/js-dasar.jpg",
      driveLink: "https://drive.google.com/file/d/1XYoEW2vCNmorPkyA1_DAJOo0yjsZ063H/view?usp=drive_link"
    },
    {
      title: "Cloud Practitioner Essentials",
      issuer: "AWS (via Dicoding)",
      description: "Pengenalan konsep cloud computing menggunakan layanan AWS, infrastruktur global, dan model keamanan cloud.",
      date: "2024",
      expiry: "2027",
      image: "/certs/aws-cloud.jpg",
      driveLink: "https://drive.google.com/file/d/1gVPyvt8pnmQV8QSxstLHKSh_79gvsc0g/view?usp=drive_link"
    },
    {
      title: "Pengenalan ke Dasar-Dasar AI",
      issuer: "Dicoding Indonesia",
      description: "Eksplorasi konsep dasar kecerdasan buatan, machine learning, dan implementasi AI dalam kehidupan sehari-hari.",
      date: "2024",
      expiry: "2027",
      image: "/certs/ai-dasar.jpg",
      driveLink: "https://drive.google.com/file/d/1li6giHMfboUGmfY0OrPQQyhxNpf1qV64/view?usp=drive_link"
    },
  ];

  return (
    <section id="sertifikat" className="py-24 bg-transparent px-4">
      <div className="max-w-4xl mx-auto"> {/* Sama dengan ukuran Proyek */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 inline-block border-b-4 border-blue-500 pb-2">
            Sertifikasi
          </h2>
          <p className="text-slate-400 mt-4">
            Pengakuan formal atas kompetensi teknis yang telah saya raih.
          </p>
        </div>

        {/* Grid 2 kolom dengan gap yang lebih rapat (gap-8) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className="bg-slate-800/50 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg border border-slate-700 hover:border-blue-500/50 hover:shadow-blue-900/20 transition duration-300 flex flex-col group"
            >
              {/* Gambar disamakan tingginya dengan Proyek (h-48) */}
              <div className="h-48 bg-slate-700/50 flex items-center justify-center border-b border-slate-700 overflow-hidden relative">
                {cert.image ? (
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                ) : null}
                <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-blue-900/20 transition duration-300 pointer-events-none"></div>
              </div>

              {/* Bagian Konten */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-[10px] uppercase tracking-wider font-bold bg-blue-900/30 text-blue-300 px-2 py-1 rounded border border-blue-800/50">
                    {cert.issuer}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {cert.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed mb-6 flex-grow">
                  {cert.description}
                </p>

                {/* Info Tanggal dan Link */}
                <div className="mt-auto pt-4 border-t border-slate-700/50 flex items-end justify-between">
                  <div className="text-[10px] text-slate-500 font-mono space-y-1">
                    <p>ISS: {cert.date}</p>
                    <p>EXP: {cert.expiry}</p>
                  </div>

                  <a 
                    href={cert.driveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 font-semibold text-sm hover:text-blue-300 hover:underline flex items-center gap-1 transition-all active:scale-95"
                  >
                    Kredensial <FaExternalLinkAlt className="text-[10px]" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}