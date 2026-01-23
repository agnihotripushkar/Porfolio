"use client";
import { FaPaperPlane, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Get In Touch
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Have a project in mind or just want to chat? Feel free to reach out!
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
                            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400">
                                        <FaEnvelope size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                                        <p className="text-lg font-medium text-gray-900 dark:text-white">push@csu.fullerton.edu</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400">
                                        <FaMapMarkerAlt size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                                        <p className="text-lg font-medium text-gray-900 dark:text-white">California, USA</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social or Extra Info */}
                        <div className="bg-blue-600 rounded-2xl p-8 text-white shadow-lg shadow-blue-500/20">
                            <h3 className="text-xl font-semibold mb-4">Let's build something amazing together!</h3>
                            <p className="opacity-90">
                                I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                            </p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
                        <form action="https://send.pageclip.co/portfolio" className="pageclip-form space-y-6" method="post">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white"
                                    placeholder="Project Inquiry"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white resize-none"
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-lg transition-all flex items-center justify-center space-x-2 group pageclip-form__submit"
                            >
                                <span>Send Message</span>
                                <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
