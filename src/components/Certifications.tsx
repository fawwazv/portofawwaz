"use client";

import { FaExternalLinkAlt } from "react-icons/fa";

export default function Certifications() {
  const certifications = [
    {
      title: "Backend Development Fundamental",
      issuer: "MySkill",
      description: "Pemahaman mendalam mengenai arsitektur backend, database relasional, dan pengembangan API menggunakan best practices terkini.",
      date: "2024",
      expiry: "2027",
      image: "/certs/myskill-backend.jpg",
      driveLink: "#" 
    },
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
    <section id="sertifikasi" className="py-24 bg-transparent px-4">
      <div className="max-w-6xl mx-auto px-2">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4 inline-block border-b-4 border-blue-500 pb-2 transition-colors">
            Sertifikasi
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mt-4 transition-colors">
            Validasi kompetensi dan pengetahuan di berbagai bidang teknologi dari lembaga terpercaya.
          </p>
        </div>

        {/* Layout Flex Wrap (3 Kolom) sama seperti Proyek */}
        <div className="flex flex-wrap justify-center gap-8">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.333rem)] bg-white/70 dark:bg-slate-800/50 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700 hover:border-blue-500/50 hover:shadow-blue-500/20 dark:hover:shadow-blue-900/20 transition duration-300 flex flex-col group"
            >
              {/* Gambar disamakan tingginya dengan Proyek (h-48) */}
              <div className="h-48 bg-slate-100 dark:bg-slate-700/50 flex items-center justify-center border-b border-slate-200 dark:border-slate-700 overflow-hidden relative transition-colors">
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
                {/* Overlay text fallback sama seperti proyek */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                   <span className="text-slate-400/50 dark:text-white/20 font-bold text-lg group-hover:text-slate-500/70 dark:group-hover:text-white/40 transition-colors uppercase tracking-widest px-4 text-center">{cert.title}</span>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex flex-col gap-2">
                    <span className="text-xs uppercase tracking-wider font-bold bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 px-2.5 py-1 rounded-md border border-blue-200 dark:border-blue-800/50 w-fit transition-colors">
                      {cert.issuer}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium transition-colors">
                      {cert.date} - {cert.expiry}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 transition-colors">{cert.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6 flex-grow transition-colors">
                  {cert.description}
                </p>
                
                <a 
                  href={cert.driveLink} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 px-5 py-2.5 rounded-full transition-colors w-fit shadow-md shadow-blue-500/20"
                >
                  Lihat Kredensial <FaExternalLinkAlt className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}