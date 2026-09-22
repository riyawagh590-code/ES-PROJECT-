import Navbar from "@/components/common/Navbar";
import Hero from "@/components/home/Hero";
import ServicePreview from "@/components/home/ServicePreview";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#faf9fc] text-slate-900 font-sans selection:bg-purple-100 selection:text-purple-700">
      <Navbar />
      <Hero />
      <ServicePreview />
    </main>
  );
}