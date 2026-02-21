import Link from 'next/link';
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative z-10 border-t border-slate-200/80 dark:border-white/5 bg-slate-50 dark:bg-[#0d100e]">
            <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-3 gap-12 mb-16">
                    {/* Brand / Info */}
                    <div>
                        <Link href="/" className="inline-block text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
                            Pushkar<span className="text-slate-400 font-normal">.</span>
                        </Link>
                        <p className="text-slate-500 font-medium mb-6 leading-relaxed">
                            Building highly performant and accessible software applications.
                        </p>
                        <div className="flex items-center text-slate-500 font-medium">
                            <FaMapMarkerAlt className="mr-2" />
                            <p>Fullerton, CA</p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-6">Apps & Extensions</h3>
                        <ul className="space-y-4">
                            <li><Link href="/goal-focus" className="text-slate-500 hover:text-[#136dec] dark:text-slate-400 dark:hover:text-blue-400 transition-colors font-medium">GoalFocus App</Link></li>
                            <li><Link href="/f1-companion" className="text-slate-500 hover:text-[#136dec] dark:text-slate-400 dark:hover:text-blue-400 transition-colors font-medium">F1 Companion App</Link></li>
                            <li><Link href="/privacy-policy/chrome-extension" className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors font-medium">Extension Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Connect With Me */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-6">Connect</h3>
                        <div className="flex space-x-3 text-slate-500 dark:text-slate-400">
                            <a
                                href="https://www.linkedin.com/in/pushkaragnihotri/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white dark:bg-[#111613] border border-slate-200/80 dark:border-white/5 flex items-center justify-center hover:bg-slate-100 hover:text-[#0077b5] dark:hover:bg-white/10 dark:hover:text-white transition-all shadow-sm"
                            >
                                <FaLinkedin size={18} />
                            </a>
                            <a
                                href="https://github.com/agnihotripushkar"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white dark:bg-[#111613] border border-slate-200/80 dark:border-white/5 flex items-center justify-center hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-white/10 dark:hover:text-white transition-all shadow-sm"
                            >
                                <FaGithub size={18} />
                            </a>
                            <a
                                href="mailto:agnihotripush@gmail.com"
                                className="w-10 h-10 rounded-full bg-white dark:bg-[#111613] border border-slate-200/80 dark:border-white/5 flex items-center justify-center hover:bg-slate-100 hover:text-red-500 dark:hover:bg-white/10 dark:hover:text-white transition-all shadow-sm"
                            >
                                <FaEnvelope size={18} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-200/80 dark:border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-400 dark:text-slate-500 text-sm font-medium">
                        &copy; {currentYear} Pushkar Agnihotri. All rights reserved.
                    </p>
                    <p className="text-slate-400 dark:text-slate-500 text-xs font-semibold uppercase tracking-widest flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        Designed for Scale
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
