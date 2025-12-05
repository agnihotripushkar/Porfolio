import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FaGithub, FaExternalLinkAlt, FaAndroid, FaGlobe, FaArrowLeft, FaCalendarAlt, FaTools, FaCode } from 'react-icons/fa';
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
    const { id } = await params;
    const { data: project, error } = await supabase
        .from('projects')
        .select('*')
        .eq('id', id)
        .single();

    if (error || !project) {
        console.error('Error fetching project:', error);
        notFound();
    }

    return (
        <main className="min-h-screen bg-white dark:bg-gray-900">
            <Navbar />
            <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link href="/projects" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-8">
                    <FaArrowLeft className="mr-2" /> Back to Projects
                </Link>

                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700">
                    <div className="p-8 md:p-12">
                        <div className="grid md:grid-cols-2 gap-12 mb-12">
                            <div className="flex flex-col justify-center">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className={`px-4 py-1.5 rounded-full text-sm font-medium ${project.type === 'Github' ? 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200' :
                                        project.type === 'App' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                                            'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                                        }`}>
                                        {project.type === 'Github' ? 'Open Source' : project.type === 'App' ? 'Mobile App' : 'Web App'}
                                    </span>
                                </div>
                                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                                    {project.title}
                                </h1>
                                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-4">
                                    {project.livelink && (
                                        <a
                                            href={project.livelink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl font-medium text-lg group"
                                        >
                                            <FaExternalLinkAlt className="mr-2 group-hover:scale-110 transition-transform" /> View Live Demo
                                        </a>
                                    )}
                                    {project.link && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center px-8 py-4 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-all shadow-md hover:shadow-lg font-medium text-lg group"
                                        >
                                            <FaGithub className="mr-2 text-xl group-hover:scale-110 transition-transform" /> View Source Code
                                        </a>
                                    )}
                                </div>
                            </div>

                            <div className="relative h-[400px] md:h-auto overflow-hidden rounded-xl shadow-lg group">
                                {project.image_url ? (
                                    <img
                                        src={project.image_url}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                                        <span className="text-gray-400 dark:text-gray-500 text-lg">No Image Available</span>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="mb-12">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                                <FaCode className="mr-3 text-blue-600 dark:text-blue-400" />
                                Technologies Used
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {(project.technologies || ["React", "Next.js", "Tailwind CSS", "Supabase"]).map((tech, index) => (
                                    <span
                                        key={index}
                                        className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-blue-50 dark:hover:bg-gray-600 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-default"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="border-t border-gray-200 dark:border-gray-700 pt-12">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                                <FaTools className="mr-3 text-blue-600 dark:text-blue-400" />
                                Project Details
                            </h3>
                            <div className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
                                <ReactMarkdown>{project.details || "Detailed description coming soon..."}</ReactMarkdown>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
