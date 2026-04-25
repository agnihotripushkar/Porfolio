import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ImportedProjectCard from '@/components/ProjectCard';
import { getAllProjects } from '@/lib/projectService';

export const revalidate = 0;

const SECTION_LABELS = {
  published_apps:    'Published Apps',
  personal_projects: 'Personal Projects',
  freelance:         'Freelance',
  contract_work:     'Contract Work', // legacy fallback
};

export default async function ProjectsPage() {
    const categories = await getAllProjects();
    const ProjectCard = (props) => <ImportedProjectCard {...props} />;

    const renderSection = (key) => {
        const projects = categories[key];
        if (!projects || projects.length === 0) return null;
        return (
            <div key={key} className="mb-16">
                <div className="flex items-center gap-4 mb-8">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {SECTION_LABELS[key]}
                    </h2>
                    <div className="h-[1px] flex-grow bg-gray-200 dark:bg-white/10" />
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        );
    };

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
                        A collection of all my work, including apps, web projects, and extensions.
                    </p>
                </div>

                {renderSection('published_apps')}
                {renderSection('personal_projects')}
                {renderSection('freelance')}
                {renderSection('contract_work')}
            </div>
            <Footer />
        </main>
    );
}
