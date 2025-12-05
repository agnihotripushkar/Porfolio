import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import FeaturedProjects from '@/components/FeaturedProjects';
import Education from '@/components/Education';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <Hero />
      <Education />
      <Skills />
      <FeaturedProjects limit={3} />
      <Experience />
      <Footer />
    </main>
  );
}


