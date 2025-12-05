import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt, FaAndroid, FaGlobe, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ImportedProjectCard from '@/components/ProjectCard';
import { supabase } from '@/lib/supabase';

export const revalidate = 0; // Disable caching for now to see updates immediately

export default async function ProjectsPage() {
    const { data: allProjects, error } = await supabase
        .from('projects')
        .select('*')
        .order('title', { ascending: true });

    if (error) {
        console.error('Error fetching projects:', error);
        return <div>Error loading projects</div>;
    }

    const ProjectCard = (props) => <ImportedProjectCard {...props} />;

    return (
        <main className="min-h-screen bg-white dark:bg-gray-900">
            <Navbar />
            <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12">
                    <Link href="/" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-6">
                        <FaArrowLeft className="mr-2" /> Back to Home
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        All <span className="text-blue-600 dark:text-blue-400">Projects</span>
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
                        A collection of my personal projects, open source contributions, and professional work.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {allProjects?.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
            <Footer />
        </main>
    );
}
