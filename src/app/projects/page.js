import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt, FaAndroid, FaGlobe, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
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

    const ProjectCard = ({ project }) => (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-gray-100 dark:border-gray-700 flex flex-col h-full">
            <div className="p-6 flex-grow">
                <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                        {project.type === 'Github' && <FaGithub className="text-2xl text-gray-900 dark:text-white" />}
                        {project.type === 'App' && <FaAndroid className="text-2xl text-green-600 dark:text-green-400" />}
                        {(project.type === 'Web' || project.type === 'Web App') && <FaGlobe className="text-2xl text-blue-600 dark:text-blue-400" />}
                    </div>
                    {project.link && (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                        >
                            <FaExternalLinkAlt />
                        </a>
                    )}
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{project.description}</p>
            </div>

            <div className="px-6 pb-6 mt-auto flex justify-between items-center">
                <Link
                    href={`/projects/${project.id}`}
                    className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                >
                    View Details <FaArrowRight className="ml-1 text-xs" />
                </Link>

                {project.link && (
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                    >
                        Live Demo <FaExternalLinkAlt className="ml-1 text-xs" />
                    </a>
                )}
            </div>
        </div>
    );

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
