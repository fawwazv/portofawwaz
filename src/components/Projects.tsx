export default function Projects() {
  const projects = [
    {
      title: "Padel-Hub",
      description: "Aplikasi web untuk pemesanan lapangan padel secara real-time.",
      tech: ["Next.js", "TypeScript", "Tailwind"],
      link: "#"
    },
    {
      title: "Perpustakaan Mini",
      description: "Sistem manajemen buku sederhana menggunakan PHP dan MariaDB.",
      tech: ["PHP", "MySQL", "Bootstrap"],
      link: "#"
    },
    {
      title: "Movie Catalog",
      description: "Eksplorasi film menggunakan TMDB API dengan fitur search dan skeleton loading.",
      tech: ["Next.js", "TMDB API", "CSS Modules"],
      link: "#"
    }
  ];

  return (
    <section id="proyek" className="py-24 bg-gray-50 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 inline-block border-b-4 border-blue-600 pb-2">
            Proyek Pilihan
          </h2>
          <p className="text-gray-500 mt-4">Beberapa proyek yang telah saya kerjakan dalam perjalanan belajar saya.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition duration-300">
              {/* Gambar Proyek (Placeholder) */}
              <div className="h-48 bg-blue-100 flex items-center justify-center">
                <span className="text-blue-400 font-bold text-xl">{project.title}</span>
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-[10px] uppercase tracking-wider font-bold bg-blue-50 text-blue-600 px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                <a 
                  href={project.link} 
                  className="text-blue-600 font-semibold text-sm hover:underline flex items-center gap-1"
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