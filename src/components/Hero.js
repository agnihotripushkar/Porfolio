"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaFileDownload, FaLink } from 'react-icons/fa';

const Hero = () => {
    return (
        <section id="home" className="relative pt-40 pb-20 px-6 lg:px-8 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center min-h-[90vh]">
            <div className="md:w-3/5 text-center md:text-left z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 text-xs font-semibold tracking-wide mb-8 shadow-sm"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#136dec] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#136dec]"></span>
                    </span>
                    Available for new opportunities
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                    className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white mb-6 leading-[1.05]"
                >
                    Hi, I am <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-[linear-gradient(110deg,#3b82f6,45%,#a855f7,55%,#3b82f6)] bg-[length:200%_auto] animate-text-shimmer dark:bg-[linear-gradient(110deg,#60a5fa,45%,#c084fc,55%,#60a5fa)]">Pushkar Agnihotri.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                    className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-xl font-medium leading-relaxed mx-auto md:mx-0"
                >
                    A dedicated Software Engineer with 4+ years of experience in Android development. I leverage Kotlin to build high-performance, resilient, and beautiful mobile experiences.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                    className="flex flex-wrap justify-center md:justify-start gap-4 items-center"
                >
                    <a href="/Pushkar_Agnihotri_Resume.pdf" target="_blank" rel="noopener noreferrer" className="relative group flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)] transition-all overflow-hidden border border-white/10">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-[length:200%_auto] animate-text-shimmer group-hover:scale-105 transition-transform duration-500"></div>
                        <span className="relative z-10 flex items-center gap-2"><FaFileDownload /> Resume</span>
                    </a>

                    <a href="https://github.com/agnihotripushkar" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/70 dark:bg-white/5 backdrop-blur-md hover:bg-white dark:hover:bg-white/10 border border-slate-200/50 dark:border-white/10 text-slate-900 dark:text-white text-sm font-semibold transition-all shadow-sm">
                        <FaGithub size={16} /> GitHub
                    </a>

                    <div className="flex gap-2 ml-2">
                        <a href="https://www.linkedin.com/in/pushkaragnihotri/" target="_blank" rel="noopener noreferrer" className="flex flex-col justify-center p-2.5 rounded-full bg-white/50 dark:bg-white/5 backdrop-blur-md hover:bg-blue-50 dark:hover:bg-blue-500/20 text-slate-600 hover:text-[#0077B5] border border-slate-200/50 dark:border-white/5 dark:text-slate-300 dark:hover:text-blue-400 transition-all shadow-sm">
                            <FaLinkedin size={20} />
                        </a>
                        <a href="mailto:agnihotripush@gmail.com" className="flex flex-col justify-center p-2.5 rounded-full bg-white/50 dark:bg-white/5 backdrop-blur-md hover:bg-red-50 dark:hover:bg-red-500/20 text-slate-600 hover:text-red-500 border border-slate-200/50 dark:border-white/5 dark:text-slate-300 dark:hover:text-red-400 transition-all shadow-sm">
                            <FaEnvelope size={20} />
                        </a>
                        <a href="https://linktr.ee/push1413" target="_blank" rel="noopener noreferrer" className="flex flex-col justify-center p-2.5 rounded-full bg-white/50 dark:bg-white/5 backdrop-blur-md hover:bg-emerald-50 dark:hover:bg-emerald-500/20 text-slate-600 hover:text-emerald-500 border border-slate-200/50 dark:border-white/5 dark:text-slate-300 dark:hover:text-emerald-400 transition-all shadow-sm">
                            <FaLink size={20} />
                        </a>
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                className="md:w-2/5 mt-16 md:mt-0 flex justify-center md:justify-end z-10"
            >
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-[3rem] p-1.5 shadow-2xl backdrop-blur-xl transform rotate-3 hover:rotate-0 transition-all duration-500 group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 rounded-[3rem] opacity-50 dark:opacity-30 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 blur-2xl rounded-[3rem] opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
                    <div className="w-full h-full rounded-[2.5rem] overflow-hidden bg-slate-100 dark:bg-[#070908] relative z-10 border-4 border-white/50 dark:border-white/10">
                        <img src="/profile.jpg" alt="Pushkar Agnihotri" className="w-full h-full object-cover transition-all duration-700 hover:scale-105" />
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
