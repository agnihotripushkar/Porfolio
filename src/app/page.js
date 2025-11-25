import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';

// Education Component (Inline for simplicity as it's small, or could be separate)
const Education = () => (
  <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
        My <span className="text-blue-600 dark:text-blue-400">Education</span>
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-500">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">California State University, Fullerton</h3>
          <p className="text-blue-600 dark:text-blue-400 font-medium">Master&apos;s degree, Computer Science</p>
          <p className="text-gray-500 dark:text-gray-400 mt-2">August 2024 - May 2026</p>
          <p className="text-gray-500 dark:text-gray-400">Fullerton, California</p>
        </div>
        <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-green-500">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">Government College of Engineering Aurangabad</h3>
          <p className="text-blue-600 dark:text-blue-400 font-medium">Bachelor&apos;s degree, Computer Science</p>
          <p className="text-gray-500 dark:text-gray-400 mt-2">AUG 2016 - MAY 2020</p>
          <p className="text-gray-500 dark:text-gray-400">Aurangabad, Maharashtra, India</p>
        </div>
      </div>
    </div>
  </section>
);

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <Hero />
      <Education />
      <Skills />
      <Projects />
      <Experience />
      <Footer />
    </main>
  );
}
