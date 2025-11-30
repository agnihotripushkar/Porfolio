import Link from 'next/link';
import { FaLinkedin, FaGithub, FaEnvelope, FaFileDownload } from 'react-icons/fa';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 pt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                        Hi, I am <span className="text-blue-600 dark:text-blue-400">Pushkar Agnihotri</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
                        A dedicated Software Engineer with 4+ years of experience in Android development.
                        With a passion for creating intuitive and visually appealing applications,
                        I leverage Kotlin to deliver high-performance mobile experiences.
                    </p>

                    <div className="flex flex-wrap justify-center md:justify-start gap-4">
                        <a
                            href="https://www.linkedin.com/in/pushkaragnihotri/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
                        >
                            <FaLinkedin className="mr-2" size={20} /> LinkedIn
                        </a>
                        <a
                            href="https://github.com/agnihotripushkar"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-colors shadow-lg hover:shadow-xl dark:bg-gray-700 dark:hover:bg-gray-600"
                        >
                            <FaGithub className="mr-2" size={20} /> GitHub
                        </a>
                        <a
                            href="mailto:agnihotripush@gmail.com"
                            className="flex items-center px-6 py-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors shadow-lg hover:shadow-xl"
                        >
                            <FaEnvelope className="mr-2" size={20} /> Email
                        </a>
                        <a
                            href="/Pushkar_Agnihotri_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition-colors dark:text-blue-400 dark:border-blue-400 dark:hover:bg-gray-800"
                        >
                            <FaFileDownload className="mr-2" size={20} /> Resume
                        </a>
                    </div>
                </div>

                <div className="md:w-1/2 flex justify-center">
                    <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white shadow-2xl dark:border-gray-700">
                        <img src="/profile.webp" alt="Pushkar Agnihotri" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
