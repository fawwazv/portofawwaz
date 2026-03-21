export default function Certifications() {
  const certs = [
    {
      title: "Belajar Dasar AWS Cloud",
      issuer: "Dicoding Indonesia",
      description: "Memahami konsep dasar cloud computing, layanan utama AWS (EC2, S3, RDS), serta infrastruktur global AWS.",
      image: "/certs/aws-cloud.jpg", // Taruh screenshot sertifikat di public/certs/aws-cloud.jpg
      driveLink: "https://drive.google.com/file/d/1gVPyvt8pnmQV8QSxstLHKSh_79gvsc0g/view?usp=drive_link" // Ganti dengan link Google Drive Anda
    },
    {
      title: "Belajar Dasar Pemrograman JavaScript",
      issuer: "Dicoding Indonesia",
      description: "Menguasai fundamental JavaScript seperti variabel, tipe data, loop, function, hingga Object-Oriented Programming (OOP).",
      image: "/certs/js-dasar.jpg", 
      driveLink: "https://drive.google.com/file/d/1XYoEW2vCNmorPkyA1_DAJOo0yjsZ063H/view?usp=drive_link"
    },
    {
      title: "Belajar Membuat Aplikasi Backend Pemula dengan JavaScript",
      issuer: "Dicoding Indonesia",
      description: "Membangun RESTful API menggunakan Node.js dan Hapi framework, serta memahami pengelolaan data pada server.",
      image: "/certs/backend-pemula.jpg",
      driveLink: "https://drive.google.com/file/d/11GLXgpAKyrMXjq6UN5OGuv2dZjY9fhG1/view?usp=drive_link"
    },
    {
      title: "Belajar Dasar AI",
      issuer: "Dicoding Indonesia",
      description: "Mengenal konsep dasar kecerdasan buatan, Machine Learning, Deep Learning, serta implementasi AI di dunia nyata.",
      image: "/certs/ai-dasar.jpg",
      driveLink: "https://drive.google.com/file/d/1li6giHMfboUGmfY0OrPQQyhxNpf1qV64/view?usp=drive_link"
    }
  ];

  return (
    <section id="sertifikasi" className="py-24 bg-transparent px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 inline-block border-b-4 border-blue-500 pb-2">
            Sertifikasi
          </h2>
          <p className="text-slate-400 mt-4">Pencapaian akademik dan pelatihan profesional yang telah saya selesaikan.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certs.map((cert, index) => (
            <div key={index} className="group bg-slate-800/50 backdrop-blur-md rounded-2xl overflow-hidden border border-slate-700 shadow-lg hover:border-blue-500/50 hover:shadow-blue-900/20 transition-all duration-300 flex flex-col sm:flex-row">
              {/* Gambar/Muka Sertifikat */}
              <div className="w-full sm:w-48 h-48 sm:h-auto overflow-hidden bg-slate-700/50 border-b sm:border-b-0 sm:border-r border-slate-700 flex items-center justify-center">
                {/* Fallback jika gambar belum ada di folder public */}
                <div className="text-slate-500 text-xs italic text-center px-4 absolute z-0">Thumbnail<br/>Sertifikat</div>
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 relative z-10 bg-slate-800"
                  // Kita hapus baris onError ini agar Server Component berjalan lancar!
                />
              </div>
              
              {/* Bio & Info Sertifikat */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white mb-1 leading-tight">{cert.title}</h3>
                  <p className="text-blue-400 text-xs font-bold uppercase tracking-wider mb-3">{cert.issuer}</p>
                  <p className="text-slate-300 text-sm mb-6 line-clamp-3">
                    {cert.description}
                  </p>
                </div>
                
                <a 
                  href={cert.driveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center py-2 px-4 bg-transparent border-2 border-blue-500 text-blue-400 font-bold rounded-lg hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all duration-300 text-sm"
                >
                  Lihat Sertifikat (Drive)
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}