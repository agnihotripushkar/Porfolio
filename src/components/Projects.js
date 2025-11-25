import { FaGithub, FaExternalLinkAlt, FaAndroid, FaGlobe } from 'react-icons/fa';

const Projects = () => {
    const personalProjects = [
        {
            title: "Game App KMP",
            description: "Kotlin-Multiplatform with compose-multiplatform.",
            link: "https://github.com/agnihotripushkar/GameKMP",
            type: "Github"
        },
        {
            title: "Anime App Android",
            description: "MVVM Jetpack Compose App using Ktor and Koin.",
            link: "https://github.com/Push1413/AnimeApp",
            type: "Github"
        },
        {
            title: "LamaEstate Website",
            description: "A Real Estate Apartment MERN website.",
            link: "https://github.com/Push1413/MERN-HomeRentalApp",
            type: "Github"
        }
    ];

    const contractWork = [
        {
            title: "yogsadhna App RAG CHATBOT",
            description: "AI-Powered Yoga Studio Web App (React, Node.js, RAG, OpenAI) with chatbot feature.",
            link: null,
            type: "Web"
        },
        {
            title: "JIN Reflexology App Android",
            description: "MVC Android App in java.",
            link: "https://apkpure.com/jin-reflexology/com.jainacupressure.reflexology",
            type: "App"
        },
        {
            title: "JIN Reflexology Website",
            description: "Advanced Reflexology called JIN Reflexology. Perfect diagnosis and fast result.",
            link: "https://jinreflexology.in/",
            type: "Web"
        }
    ];

    const ProjectCard = ({ project }) => (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-gray-100 dark:border-gray-700">
            <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                        {project.type === 'Github' && <FaGithub className="text-2xl text-gray-900 dark:text-white" />}
                        {project.type === 'App' && <FaAndroid className="text-2xl text-green-600 dark:text-green-400" />}
                        {project.type === 'Web' && <FaGlobe className="text-2xl text-blue-600 dark:text-blue-400" />}
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
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>

                {project.link && (
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                    >
                        View Project <FaExternalLinkAlt className="ml-1 text-xs" />
                    </a>
                )}
            </div>
        </div>
    );

    return (
        <section id="projects" className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
                    Featured <span className="text-blue-600 dark:text-blue-400">Projects</span>
                </h2>

                <div className="mb-16">
                    <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-gray-200 border-l-4 border-blue-500 pl-4">Personal Projects</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {personalProjects.map((project, index) => (
                            <ProjectCard key={index} project={project} />
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-gray-200 border-l-4 border-green-500 pl-4">Contract Work</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {contractWork.map((project, index) => (
                            <ProjectCard key={index} project={project} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
