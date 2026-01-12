import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt, FaAndroid, FaGlobe, FaArrowRight } from 'react-icons/fa';
import ImportedProjectCard from './ProjectCard';
import { supabase } from '@/lib/supabase';
import { publishedApps } from '@/data/projects';

const FeaturedProjects = async ({ limit }) => {
    const { data: allProjects, error } = await supabase
        .from('projects')
        .select('*')
        .order('title', { ascending: true });

    if (error) {
        console.error('Error fetching projects:', error);
        return <div>Error loading projects</div>;
    }

    let personalProjects = allProjects?.filter(p => p.livelink === null) || [];
    let contractWork = allProjects?.filter(p => p.isFreelancing) || [];



    if (limit) {
        personalProjects = personalProjects.slice(0, limit);
        contractWork = contractWork.slice(0, limit);
    }

    const ProjectCard = (props) => <ImportedProjectCard {...props} />;

    return (
        <section id="projects" className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
                    Featured <span className="text-blue-600 dark:text-blue-400">Projects</span>
                </h2>

                <div className="mb-16">
                    <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-gray-200 border-l-4 border-purple-500 pl-4">Published Apps & Extensions</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {publishedApps.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </div>

                <div className="mb-16">
                    <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-gray-200 border-l-4 border-blue-500 pl-4">Personal Projects</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {personalProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-gray-200 border-l-4 border-green-500 pl-4">Contract Work</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {contractWork.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </div>

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
