import { publishedApps } from '@/data/projects';
import { supabase } from '@/lib/supabase';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt, FaAndroid, FaChrome, FaArrowLeft } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export async function generateStaticParams() {
    return publishedApps.map((project) => ({
        id: project.id,
    }));
}

async function getProject(id) {
    const localProject = publishedApps.find((p) => p.id === id);
    if (localProject) return localProject;

    // Fallback to Supabase for other projects (contract/personal) if we want to expand this later
    // For now, only publishedApps have details pages as requested
    return null;
}

export default async function ProjectDetails({ params }) {
    const { id } = await params;
    const project = await getProject(id);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Project Not Found</h1>
                    <Link href="/" className="text-blue-600 hover:text-blue-500">
                        &larr; Back to Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <Navbar />
            <div className="pt-24 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link
                    href="/#projects"
                    className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 mb-8 transition-colors"
                >
                    <FaArrowLeft className="mr-2" /> Back to Projects
                </Link>

                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
                    {/* Header Section */}
                    <div className="p-8 md:p-12 border-b border-gray-100 dark:border-gray-700">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold 
                                        ${project.type === 'App' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                                            project.type === 'Extension' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                                                'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'}`}>
                                        {project.type}
                                    </span>
                                </div>
                                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                                    {project.title}
                                </h1>
                                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                    {project.description}
                                </p>
                            </div>

                            <div className="flex gap-4 shrink-0">
                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
                                        title={project.type === 'App' ? 'View on Play Store' : 'View Store Listing'}
                                    >
                                        {project.type === 'App' ? <FaAndroid size={24} /> :
                                            project.type === 'Extension' ? <FaChrome size={24} /> :
                                                <FaExternalLinkAlt size={20} />}
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-8 md:p-12 grid md:grid-cols-3 gap-12">
                        {/* Main Info */}
                        <div className="md:col-span-2 space-y-8">
                            {project.image_url && (
                                <div className="rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700">
                                    <img
                                        src={project.image_url}
                                        alt={project.title}
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                            )}

                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Overview</h2>
                                <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
                                    <div className="whitespace-pre-wrap">{project.longDescription || project.description}</div>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            {project.techStack && (
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Tech Stack</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.techStack.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-md"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {project.features && (
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Key Features</h3>
                                    <ul className="space-y-2">
                                        {project.features.map((feature) => (
                                            <li key={feature} className="flex items-start text-gray-600 dark:text-gray-300 text-sm">
                                                <span className="mr-2 text-blue-500">•</span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
