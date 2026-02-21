import Link from 'next/link';
import ImportedProjectCard from './ProjectCard';
import { getAllProjects } from '@/lib/projectService';

const FeaturedProjects = async ({ limit }) => {
    const categories = await getAllProjects();

    const ProjectCard = (props) => <ImportedProjectCard {...props} />;

    const renderProjectSection = (title, projects) => {
        if (!projects || projects.length === 0) return null;

        let displayedProjects = projects;
        if (limit) {
            displayedProjects = projects.slice(0, limit);
        }

        return (
            <div className="mb-20">
                <div className="flex items-center gap-4 mb-8">
                    <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                        {title}
                    </h3>
                    <div className="h-[1px] flex-grow bg-slate-200/80 dark:bg-white/5"></div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {displayedProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        );
    };

    return (
        <section id="projects" className="py-24 relative z-10 border-t border-slate-200/80 dark:border-white/5 bg-transparent">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <div className="text-center md:text-left mb-16">
                    <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
                        Selected <span className="text-slate-400">Work.</span>
                    </h2>
                    <p className="text-lg text-slate-500 font-medium max-w-2xl">
                        A collection of applications, extensions, and technical projects I&apos;ve built to solve real-world problems.
                    </p>
                </div>

                {renderProjectSection('Published Apps & Extensions', categories.published_apps)}
                {renderProjectSection('Personal Projects', categories.personal_projects)}
                {renderProjectSection('Contract Work', categories.contract_work)}

                <div className="mt-16 flex justify-center md:justify-start">
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-200 text-white dark:text-[#090b0a] text-sm font-semibold transition-all shadow-sm"
                    >
                        View All Projects
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProjects;
