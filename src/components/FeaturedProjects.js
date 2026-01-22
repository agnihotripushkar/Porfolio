import Link from 'next/link';
import ImportedProjectCard from './ProjectCard';
import { getAllProjects } from '@/lib/projectService';

const FeaturedProjects = async ({ limit }) => {
    const categories = await getAllProjects();

    const ProjectCard = (props) => <ImportedProjectCard {...props} />;

    const renderProjectSection = (title, projects, borderColor) => {
        if (!projects || projects.length === 0) return null;

        let displayedProjects = projects;
        if (limit) {
            displayedProjects = projects.slice(0, limit);
        }

        return (
            <div className="mb-16">
                <h3 className={`text-2xl font-bold mb-8 text-gray-800 dark:text-gray-200 border-l-4 ${borderColor} pl-4`}>
                    {title}
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayedProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        );
    };

    return (
        <section id="projects" className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
                    Featured <span className="text-blue-600 dark:text-blue-400">Projects</span>
                </h2>

                {renderProjectSection('Published Apps & Extensions', categories.published_apps, 'border-purple-500')}
                {renderProjectSection('Personal Projects', categories.personal_projects, 'border-blue-500')}
                {renderProjectSection('Contract Work', categories.contract_work, 'border-green-500')}

                <div className="mt-16 text-center">
                    <Link
                        href="/projects"
                        className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 md:text-lg transition-colors shadow-lg hover:shadow-xl"
                    >
                        View All Projects
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProjects;
