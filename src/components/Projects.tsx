"use client";

import { useState } from "react";
import { FiBriefcase, FiUsers } from "react-icons/fi";

export default function Experience() {
  const [activeTab, setActiveTab] = useState("proyek");

  const projects = [
    {
      title: "SIAKAD SMAN 1 Cikalong",
      description: "Sistem Informasi Akademik terpadu untuk mengelola data siswa, nilai, jadwal pelajaran, dan administrasi akademik sekolah.",
      tech: ["Dart", "Flutter", "Express.js"],
      link: "https://sman1cikalong.vercel.app/",
      image: "/projects/siakad.jpg"
    },
    {
      title: "Bookshelf API",
      description: "RESTful API untuk manajemen data buku (CRUD) yang dibangun menggunakan environment Node.js dan framework Hapi.",
      tech: ["Node.js", "Hapi", "REST API"],
      link: "https://github.com/fawwazv/bookshelf-api",
      image: "/projects/bookshelf-api.jpg"
    },
    {
      title: "NutriCalc",
      description: "Aplikasi kalkulator nutrisi cerdas untuk membantu pengguna memantau asupan harian secara presisi.",
      tech: ["Next.js", "Tailwind CSS"],
      link: "https://nutricalc-six.vercel.app/",
      image: "/projects/nutricalc.jpg" 
    },
    {
      title: "Trigono-App",
      description: "Alat bantu pembelajaran matematika yang interaktif untuk memvisualisasikan dan menghitung fungsi trigonometri.",
      tech: ["React", "Vite", "MathJS"],
      link: "https://trigonometri.vercel.app/",
      image: "/projects/trigonometri.jpg"
    },
    {
      title: "Movie Vault",
      description: "Platform pencarian film modern yang memanfaatkan TMDB API untuk menyajikan informasi sinema terkini.",
      tech: ["React", "TMDB API", "Lucide Icons"],
      link: "https://movie-vault-088.vercel.app/",
      image: "/projects/movie-vault.jpg"
    }
  ];

  const organizations = [
    {
      title: "Siliwangi Code Developer (SICODEV)",
      role: "Divisi Pendidikan",
      description: "Bertugas membuat materi dan menyampaikan materi secara langsung di depan anggota organisasi.",
      image: "/organisasi/sicodev.jpg" 
    },
    {
      title: "Pemilihan Ketua IMASI",
      role: "Ketua Pelaksana",
      description: "Bertanggung jawab penuh atas perencanaan, koordinasi, dan seluruh jalannya acara pemilihan.",
      image: "/organisasi/imasi.jpg" 
    },
    {
      title: "First Gathering IMASI",
      role: "Master of Ceremony (MC)",
      description: "Memandu dan mengarahkan seluruh rangkaian acara First Gathering agar berjalan dengan lancar, interaktif, dan sesuai susunan acara.",
      image: "/organisasi/mc-imasi.jpg"
    }
  ];

  return (
    <section id="pengalaman" className="py-24 bg-transparent px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 inline-block border-b-4 border-blue-500 pb-2">
            Pengalaman
          </h2>
          <p className="text-slate-400 mt-4">Jejak langkah, karya, dan dedikasi saya dalam dunia teknologi dan organisasi.</p>
        </div>

        {/* Custom Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-slate-800/50 backdrop-blur-md rounded-full p-1.5 inline-flex shadow-lg border border-slate-700/50">
            <button
              onClick={() => setActiveTab("proyek")}
              className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 flex items-center gap-2 ${
                activeTab === "proyek"
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md shadow-blue-900/20"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-700/50"
              }`}
            >
              <FiBriefcase className="w-4 h-4" />
              Proyek
            </button>
            <button
              onClick={() => setActiveTab("organisasi")}
              className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 flex items-center gap-2 ${
                activeTab === "organisasi"
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md shadow-blue-900/20"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-700/50"
              }`}
            >
              <FiUsers className="w-4 h-4" />
              Organisasi
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto px-2">
          {activeTab === "proyek" ? (
            <div className="flex flex-wrap justify-center gap-8">
              {projects.map((project, index) => (
                <div key={index} className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.333rem)] bg-slate-800/50 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg border border-slate-700 hover:border-blue-500/50 hover:shadow-blue-900/20 transition duration-300 flex flex-col group">
                  <div className="h-48 bg-slate-700/50 flex items-center justify-center border-b border-slate-700 overflow-hidden relative">
                    {project.image ? (
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    ) : null}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                       <span className="text-white/20 font-bold text-lg group-hover:text-white/40 transition-colors uppercase tracking-widest">{project.title}</span>
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((t, i) => (
                        <span key={i} className="text-[10px] uppercase tracking-wider font-bold bg-blue-900/30 text-blue-300 px-2 py-1 rounded border border-blue-800/50">
                          {t}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-slate-300 text-sm leading-relaxed mb-6 flex-grow">
                      {project.description}
                    </p>
                    <a 
                      href={project.link} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 font-semibold text-sm hover:text-blue-300 hover:underline flex items-center gap-1 mt-auto w-fit"
                    >
                      Lihat Detail <span>→</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-wrap justify-center gap-8">
              {organizations.map((org, index) => (
                <div key={index} className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.333rem)] bg-slate-800/50 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg border border-slate-700 hover:border-purple-500/50 hover:shadow-purple-900/20 transition duration-300 flex flex-col group">
                  <div className="h-48 bg-slate-700/50 flex items-center justify-center border-b border-slate-700 overflow-hidden relative">
                    {org.image ? (
                      <img 
                        src={org.image} 
                        alt={org.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    ) : null}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                       <span className="text-white/20 font-bold text-lg group-hover:text-white/40 transition-colors uppercase tracking-widest px-4 text-center">{org.title}</span>
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="text-[10px] uppercase tracking-wider font-bold bg-purple-900/30 text-purple-300 px-2 py-1 rounded border border-purple-800/50">
                        {org.role}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{org.title}</h3>
                    <p className="text-slate-300 text-sm leading-relaxed mb-6 flex-grow">
                      {org.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}