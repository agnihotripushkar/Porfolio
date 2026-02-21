"use client";
import { FaPaperPlane, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="py-24 relative z-10 bg-transparent">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <div className="text-center md:text-left mb-16">
                    <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
                        Get In Touch.
                    </h2>
                    <p className="text-lg text-slate-500 font-medium max-w-2xl">
                        Have a project in mind or just want to chat? Feel free to reach out.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
                    {/* Contact Information */}
                    <div className="lg:w-1/3 space-y-8">
                        <div>
                            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                                I&apos;m always open to discussing new projects, creative ideas or opportunities to be part of your vision.
                            </p>
                            <div className="space-y-6">
                                <div className="flex items-center space-x-4 group">
                                    <div className="w-12 h-12 bg-slate-50 dark:bg-white/5 rounded-2xl flex items-center justify-center border border-slate-100 dark:border-white/5 group-hover:bg-[#136dec]/10 dark:group-hover:bg-[#136dec]/20 transition-colors">
                                        <FaEnvelope className="text-xl text-slate-400 group-hover:text-[#136dec] transition-colors" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-0.5">Email</p>
                                        <a href="mailto:push@csu.fullerton.edu" className="text-base font-semibold text-slate-900 dark:text-white hover:text-[#136dec] dark:hover:text-blue-400 transition-colors">push@csu.fullerton.edu</a>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4 group">
                                    <div className="w-12 h-12 bg-slate-50 dark:bg-white/5 rounded-2xl flex items-center justify-center border border-slate-100 dark:border-white/5">
                                        <FaMapMarkerAlt className="text-xl text-slate-400" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-0.5">Location</p>
                                        <p className="text-base font-semibold text-slate-900 dark:text-white">Fullerton, CA, USA</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:w-2/3 bg-white/60 dark:bg-white/5 backdrop-blur-lg p-8 md:p-10 rounded-3xl border border-slate-200/50 dark:border-white/10 shadow-sm relative overflow-hidden group hover:shadow-blue-500/10 transition-all duration-500">
                        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/5 blur-3xl rounded-full -z-10 group-hover:bg-blue-500/20 transition-all duration-500"></div>
                        <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/5 blur-3xl rounded-full -z-10 group-hover:bg-purple-500/20 transition-all duration-500"></div>
                        <form action="https://send.pageclip.co/FxA0ati0WzwdOMeyW9NyyXtxh0sPbwJK/contact" className="pageclip-form space-y-6 relative z-10" method="post">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-black/20 border border-slate-200/80 dark:border-white/5 focus:ring-2 focus:ring-[#136dec]/50 focus:border-[#136dec] outline-none transition-all dark:text-white font-medium shadow-sm hover:border-slate-300 dark:hover:border-white/20"
                                        placeholder="Jane Doe"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-black/20 border border-slate-200/80 dark:border-white/5 focus:ring-2 focus:ring-[#136dec]/50 focus:border-[#136dec] outline-none transition-all dark:text-white font-medium shadow-sm hover:border-slate-300 dark:hover:border-white/20"
                                        placeholder="jane@example.com"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-black/20 border border-slate-200/80 dark:border-white/5 focus:ring-2 focus:ring-[#136dec]/50 focus:border-[#136dec] outline-none transition-all dark:text-white font-medium shadow-sm hover:border-slate-300 dark:hover:border-white/20"
                                    placeholder="How can I help you?"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-black/20 border border-slate-200/80 dark:border-white/5 focus:ring-2 focus:ring-[#136dec]/50 focus:border-[#136dec] outline-none transition-all dark:text-white font-medium resize-none shadow-sm hover:border-slate-300 dark:hover:border-white/20"
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>
                            <div className="flex justify-end pt-2">
                                <button
                                    type="submit"
                                    className="group relative inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-white font-bold transition-all overflow-hidden border border-white/10 shadow-[0_0_20px_-5px_rgba(59,130,246,0.3)] pageclip-form__submit"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-[length:200%_auto] animate-text-shimmer group-hover:scale-105 transition-transform duration-500 -z-10"></div>
                                    <span>Send Message</span>
                                    <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
