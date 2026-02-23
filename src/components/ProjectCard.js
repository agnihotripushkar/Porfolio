import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt, FaAndroid, FaGlobe, FaArrowRight, FaChrome } from 'react-icons/fa';
import { SiReact, SiKotlin } from 'react-icons/si';

const ProjectCard = ({ project }) => {
    const isFreelance = project.category === 'contract_work';

    return (
        <div className="bg-white/60 dark:bg-white/5 backdrop-blur-lg rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-500 flex flex-col h-full relative group border border-slate-200/50 dark:border-white/10 hover:border-purple-500/30 dark:hover:border-purple-500/30">
            {isFreelance && (
                <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1.5 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-600 dark:text-pink-400 text-[10px] font-bold uppercase tracking-wider backdrop-blur-md">
                        Freelance
                    </span>
                </div>
            )}
            {project.image_url && (
                <div className="h-48 overflow-hidden relative border-b border-slate-100/50 dark:border-white/5 bg-slate-50/50 dark:bg-black/20">
                    <img
                        src={project.image_url}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/20 dark:from-black/50 to-transparent pointer-events-none"></div>
                </div>
            )}
            <div className="p-8 flex-grow flex flex-col relative z-10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 blur-3xl rounded-full -z-10 group-hover:bg-purple-500/20 transition-all duration-500"></div>
                <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-white dark:bg-white/10 rounded-xl border border-slate-100 dark:border-white/10 shadow-sm">
                        {project.project_type === 'Github' && <FaGithub className="text-xl text-purple-600 dark:text-purple-400" />}
                        {project.project_type === 'App' && <FaAndroid className="text-xl text-green-500 dark:text-green-400" />}
                        {(project.project_type === 'React Native App' || project.project_type === 'React Native') && <SiReact className="text-xl text-cyan-500 dark:text-cyan-400" />}
                        {(project.project_type === 'KMP' || project.project_type === 'Kotlin Multiplatform') && <SiKotlin className="text-xl text-purple-600 dark:text-purple-400" />}
                        {(project.project_type === 'Web' || project.project_type === 'Web App') && <FaGlobe className="text-xl text-blue-500 dark:text-blue-400" />}
                        {project.project_type === 'Extension' && <FaChrome className="text-xl text-yellow-500 dark:text-yellow-400" />}
                    </div>
                </div>

                <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">{project.description}</p>

                <div className="mt-auto pt-6 border-t border-slate-100/50 dark:border-white/5 flex gap-4 items-center">
                    <Link
                        href={`/projects/${project.id}`}
                        className="inline-flex items-center text-sm font-semibold text-slate-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    >
                        View Details <FaArrowRight className="ml-1.5 text-xs text-slate-400 group-hover:text-purple-500 transition-colors" />
                    </Link>

                    {project.live_link && (
                        <a
                            href={project.live_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex justify-center items-center w-8 h-8 rounded-full bg-white dark:bg-white/10 shadow-sm border border-slate-100 dark:border-white/5 hover:bg-slate-50 hover:border-purple-500/30 dark:hover:bg-white/20 text-slate-500 hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400 transition-all ml-auto"
                        >
                            <FaExternalLinkAlt className="text-xs" />
                        </a>
                    )}
                    {project.github_link && !project.live_link && (
                        <a
                            href={project.github_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex justify-center items-center w-8 h-8 rounded-full bg-white dark:bg-white/10 shadow-sm border border-slate-100 dark:border-white/5 hover:bg-slate-50 hover:border-purple-500/30 dark:hover:bg-white/20 text-slate-500 hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400 transition-all ml-auto"
                        >
                            <FaGithub className="text-sm" />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
