import Articles from '@/components/Articles';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import FeaturedProjects from '@/components/FeaturedProjects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export const revalidate = 0; // Disable caching to see Supabase updates immediately

export default function Home() {
  return (
    <main className="bg-[#fcfdfc] dark:bg-[#070908] min-h-screen text-slate-900 dark:text-slate-100 font-sans selection:bg-[#136dec]/30 selection:text-slate-900 dark:selection:text-white relative pb-20 overflow-hidden">
      {/* Animated Liquid Background Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 flex items-center justify-center opacity-60 dark:opacity-40">
        <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-purple-300 dark:bg-purple-900/40 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-[100px] animate-blob"></div>
        <div className="absolute top-[-10%] right-[-10%] w-[40rem] h-[40rem] bg-blue-300 dark:bg-blue-900/40 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-[100px] animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[40rem] h-[40rem] bg-pink-300 dark:bg-pink-900/40 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-[100px] animate-blob animation-delay-4000"></div>
      </div>
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-0 mask-image-[radial-gradient(ellipse_at_center,black_40%,transparent_100%)]"></div>

      <div className="relative z-10 space-y-32">
        <Navbar />
        <Hero />
        <Education />
        <Skills />
        <FeaturedProjects limit={3} />
        <Experience />
        <Articles />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
