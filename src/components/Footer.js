import Link from 'next/link';
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt, FaLink } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    {/* Connect With Me */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-blue-400">Connect With Me</h3>
                        <div className="flex space-x-4">
                            <a
                                href="https://www.linkedin.com/in/pushkaragnihotri/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <FaLinkedin size={24} />
                            </a>
                            <a
                                href="https://github.com/agnihotripushkar"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <FaGithub size={24} />
                            </a>
                            <a
                                href="mailto:agnihotripush@gmail.com"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <FaEnvelope size={24} />
                            </a>
                            <a
                                href="https://linktr.ee/push1413"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <FaLink size={24} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-blue-400">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link href="/privacy-policy/chrome-extension" className="text-gray-400 hover:text-white transition-colors">Extension Privacy Policy</Link></li>
                            <li><Link href="/privacy-policy/goal-focus" className="text-gray-400 hover:text-white transition-colors">GoalFocus App Privacy Policy</Link></li>
                            <li><Link href="/privacy-policy/f1-companion" className="text-gray-400 hover:text-white transition-colors">F1 Companion App Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Location */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-blue-400">Location</h3>
                        <div className="flex items-start text-gray-400">
                            <FaMapMarkerAlt className="mt-1 mr-2" />
                            <p>
                                Fullerton, California<br />
                                United States
                            </p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {currentYear} Pushkar Agnihotri. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
