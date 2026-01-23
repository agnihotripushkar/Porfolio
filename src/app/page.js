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
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <Hero />
      <Education />
      <Skills />
      <FeaturedProjects limit={3} />
      <Experience />
      <Articles />
      <Contact />
      <Footer />
    </main>
  );
}


