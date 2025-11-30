import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FaGithub, FaExternalLinkAlt, FaAndroid, FaGlobe, FaArrowLeft, FaCalendarAlt, FaTools } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { supabase } from '@/lib/supabase';

// We can't statically generate params easily with dynamic DB data without fetching all IDs first.
// For now, we'll switch to dynamic rendering or fetch IDs if needed.
// To keep it simple and robust, we will remove generateStaticParams for now 
// or implement it by fetching all IDs from Supabase.
export async function generateStaticParams() {
    const { data: projects } = await supabase.from('projects').select('id');
    return projects?.map((project) => ({
        id: project.id,
    })) || [];
}

export default async function ProjectDetail({ params }) {
    const { data: project, error } = await supabase
        .from('projects')
        .select('*')
        .eq('id', params.id)
        .single();

    if (error || !project) {
        console.error('Error fetching project:', error);
        notFound();
    }

    return (
        <main className="min-h-screen bg-white dark:bg-gray-900">
            <Navbar />
            <div className="pt-24 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link href="/projects" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-8">
                    <FaArrowLeft className="mr-2" /> Back to Projects
                </Link>

                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700">
                    <div className="p-8 md:p-12">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${project.type === 'Github' ? 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200' :
                                        project.type === 'App' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                                            'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                                        }`}>
                                        {project.type === 'Github' ? 'Open Source' : project.type === 'App' ? 'Mobile App' : 'Web App'}
                                    </span>
                                </div>
                                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                                    {project.title}
                                </h1>
                                <p className="text-xl text-gray-600 dark:text-gray-300">
                                    {project.description}
                                </p>
                            </div>

                            <div className="flex gap-4">
                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
                                    >
                                        <FaExternalLinkAlt className="mr-2" /> Visit Project
                                    </a>
                                )}
                            </div>
                        </div>

                        <div className="prose prose-lg dark:prose-invert max-w-none">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                                <FaTools className="mr-3 text-blue-600 dark:text-blue-400" />
                                Project Details
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                                {project.details || "Detailed description coming soon..."}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
