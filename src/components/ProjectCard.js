import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt, FaAndroid, FaGlobe, FaArrowRight } from 'react-icons/fa';

const ProjectCard = ({ project }) => (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-gray-100 dark:border-gray-700 flex flex-col h-full">
        {project.image_url && (
            <div className="h-48 overflow-hidden">
                <img
                    src={project.image_url}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
            </div>
        )}
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

            {project.livelink && (
                <a
                    href={project.livelink}
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

export default ProjectCard;
