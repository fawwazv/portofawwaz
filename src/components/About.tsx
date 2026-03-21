export default function About() {
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
          {/* Kolom Kiri: Kartu Biodata Bergaya Glassmorphism */}
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
              <div className="flex flex-col sm:flex-row border-b border-slate-700 pb-4">
                <span className="w-40 font-semibold text-blue-400 mb-1 sm:mb-0">Pendidikan</span>
                <div className="flex flex-col">
                  <span className="text-slate-200 font-medium">Universitas Siliwangi</span>
                  <span className="text-sm text-slate-400 italic">Informatika, Angkatan 2024</span>
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
                Sementara itu, di bidang <span className="text-blue-400 font-medium">Jaringan Komputer</span>, saya tertarik pada infrastruktur, keamanan, dan bagaimana data didistribusikan. 
              </p>
            </div>

            {/* Sub-skill badges */}
            <div className="pt-4 flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-blue-900/30 text-blue-300 text-sm font-medium rounded-full border border-blue-800/50 italic">#BackendLover</span>
              <span className="px-4 py-2 bg-blue-900/30 text-blue-300 text-sm font-medium rounded-full border border-blue-800/50 italic">#Networking</span>
              <span className="px-4 py-2 bg-blue-900/30 text-blue-300 text-sm font-medium rounded-full border border-blue-800/50 italic">#InformatikaUnsil</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}