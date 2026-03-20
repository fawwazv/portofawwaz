import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero"; 
import About from "@/components/About";

export default function Home() {
  return (
    <main className="text-gray-800">
      <Navbar />
      <Hero /> {/* <-- Panggil komponen Hero di sini */}
      
      {/* Section selanjutnya (Tentang) akan kita masukkan di bawah ini nanti */}
    </main>
  );
}