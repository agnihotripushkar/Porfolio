import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ImportedProjectCard from '@/components/ProjectCard';
import { getAllProjects } from '@/lib/projectService';

export const revalidate = 0; // Disable caching for now to see updates immediately

export default async function ProjectsPage() {
    const categories = await getAllProjects();
    const ProjectCard = (props) => <ImportedProjectCard {...props} />;

    const renderProjectSection = (title, projects, borderColor) => {
        if (!projects || projects.length === 0) return null;

        return (
            <div className="mb-16">
                <h3 className={`text-2xl font-bold mb-8 text-gray-800 dark:text-gray-200 border-l-4 ${borderColor} pl-4`}>
                    {title}
                </h3>
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
                        A collection of my work, categorized to help you find what you're looking for.
                    </p>
                </div>

                {renderProjectSection('Published Apps & Extensions', categories.published_apps, 'border-purple-500')}
                {renderProjectSection('Personal Projects', categories.personal_projects, 'border-blue-500')}
                {renderProjectSection('Contract Work', categories.contract_work, 'border-green-500')}
            </div>
            <Footer />
        </main>
    );
}
