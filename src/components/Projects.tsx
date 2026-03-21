"use client";

export default function Projects() {
  const projects = [
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

  return (
    <section id="proyek" className="py-24 bg-transparent px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 inline-block border-b-4 border-blue-500 pb-2">
            Proyek
          </h2>
          <p className="text-slate-400 mt-4">Koleksi karya digital yang saya bangun untuk mengasah keahlian teknis saya.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="bg-slate-800/50 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg border border-slate-700 hover:border-blue-500/50 hover:shadow-blue-900/20 transition duration-300 flex flex-col group">
              
              {/* Gambar Proyek */}
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
      </div>
    </section>
  );
}