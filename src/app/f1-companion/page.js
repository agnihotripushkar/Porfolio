"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaGraduationCap, FaShieldAlt, FaPlaneDeparture, FaGlobeAmericas, FaArrowRight, FaGooglePlay } from "react-icons/fa";


export default function F1CompanionPage() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

    return (
        <div ref={containerRef} className="bg-[#f6f7f8] dark:bg-[#101822] min-h-screen text-[#0d131b] dark:text-slate-100 font-sans selection:bg-[#136dec]/30 overflow-hidden relative transition-colors duration-300">
            {/* Background ambient light */}
            <div className="fixed top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#136dec]/5 dark:bg-[#136dec]/10 blur-[120px] pointer-events-none" />
            <div className="fixed bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-400/5 dark:bg-blue-900/10 blur-[120px] pointer-events-none" />

            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-6 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-[#101822]/50 transition-colors duration-300">
                <Link href="/" className="text-xl font-bold tracking-tighter flex items-center gap-2 group">
                    <FaGraduationCap className="text-[#136dec] group-hover:rotate-12 transition-transform" />
                    <span className="text-[#0d131b] dark:text-white">F1<span className="text-slate-500 dark:text-slate-400">Companion</span></span>
                </Link>
                <div className="flex gap-4">
                    <a href="#" className="flex px-4 py-2 rounded-full bg-[#136dec] hover:bg-blue-700 text-white text-sm font-medium transition-colors items-center gap-2 shadow-[0_0_20px_rgba(19,109,236,0.3)] dark:shadow-[0_0_20px_rgba(19,109,236,0.2)]">
                        <FaGooglePlay /> Android
                    </a>
                </div>
            </nav>

            {/* Hero Section */}
            <motion.section
                style={{ opacity: heroOpacity, scale: heroScale }}
                className="relative pt-40 pb-20 px-6 sm:px-12 max-w-7xl mx-auto min-h-[90vh] flex flex-col justify-center items-center text-center"
            >
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#136dec]/10 border border-[#136dec]/20 text-[#136dec] text-xs sm:text-sm font-semibold tracking-wide mb-8 uppercase"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#136dec]"></span>
                    </span>
                    Your Study Abroad Journey Starts Here
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8 text-[#0d131b] dark:text-white"
                >
                    The Ultimate Guide for <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#136dec] to-blue-700 dark:from-blue-400 dark:to-[#136dec]">F1 Visa</span> Students.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-normal leading-relaxed mb-12"
                >
                    A comprehensive mobile application designed to assist F1 visa students throughout their journey—from preparing for their flight to the US to maintaining compliance during their stay.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                >
                    <a href="#" className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#0d131b] dark:bg-white text-white dark:text-[#0d131b] text-lg font-bold hover:scale-105 transition-all w-full sm:w-auto shadow-lg">
                        Get it on Android <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a href="#" className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white dark:bg-[#101822] border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-lg font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors w-full sm:w-auto">
                        View Privacy Policy
                    </a>
                </motion.div>

                {/* Mobile App Mockup */}
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-20 relative w-full max-w-[280px] sm:max-w-[320px] mx-auto group"
                >
                    {/* Glowing Aura Effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#136dec]/40 to-blue-400/20 blur-[80px] rounded-[3rem] transition-all duration-700 group-hover:from-[#136dec]/50"></div>

                    {/* Phone Hardware Frame */}
                    <div className="relative bg-slate-800 dark:bg-slate-900 rounded-[3rem] p-3 sm:p-4 shadow-2xl shadow-[#136dec]/20 border border-slate-700/50 transform group-hover:-translate-y-4 transition-transform duration-700 ease-out">

                        {/* Pixel-style center hole-punch camera */}
                        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-4 h-4 bg-slate-900 rounded-full z-20 shadow-inner flex items-center justify-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-black/80"></div>
                        </div>

                        {/* Screen Container */}
                        <div className="relative rounded-[2.25rem] sm:rounded-[2.5rem] overflow-hidden bg-[#f6f7f8] dark:bg-[#101822] aspect-[9/19.5] w-full border border-slate-700/30">
                            <Image
                                src="/f1companion-app.png"
                                alt="F1 Companion App Interface"
                                fill
                                className="object-cover object-top"
                                priority
                            />
                        </div>
                    </div>
                </motion.div>
            </motion.section>

            {/* Features Bento Grid */}
            <section className="relative z-10 px-6 py-24 sm:px-12 max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4 text-[#0d131b] dark:text-white">Everything you need. <br /><span className="text-slate-400 dark:text-slate-500">In one place.</span></h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
                    {/* Feature 1 - Large */}
                    <motion.div
                        whileHover={{ scale: 0.98 }}
                        className="md:col-span-2 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-8 flex flex-col justify-between overflow-hidden relative group shadow-sm hover:shadow-md transition-shadow"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#136dec]/5 dark:bg-[#136dec]/10 rounded-full blur-[80px] group-hover:bg-[#136dec]/10 dark:group-hover:bg-[#136dec]/20 transition-colors"></div>
                        <div className="relative z-10">
                            <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-slate-700 flex items-center justify-center mb-6">
                                <FaShieldAlt className="text-[#136dec] dark:text-blue-400 text-xl" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2 text-[#0d131b] dark:text-white">Compliance & Document Wallet</h3>
                            <p className="text-slate-600 dark:text-slate-400 max-w-md">Maintain F1 visa compliance and securely store sensitive documents like SSN, I-94, SEVIS ID, and Passport numbers locally using encrypted storage. Features AI-powered text recognition.</p>
                        </div>
                    </motion.div>

                    {/* Feature 2 - Small */}
                    <motion.div
                        whileHover={{ scale: 0.98 }}
                        className="rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-8 flex flex-col justify-between relative group overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                    >
                        <div className="absolute -bottom-10 -right-10 opacity-[0.03] dark:opacity-5 group-hover:scale-110 transition-transform duration-500 text-[#136dec]">
                            <FaPlaneDeparture className="text-[120px]" />
                        </div>
                        <div className="relative z-10">
                            <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-slate-700 flex items-center justify-center mb-6 border border-slate-100 dark:border-slate-600">
                                <FaPlaneDeparture className="text-[#136dec] dark:text-blue-400 text-xl" />
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-[#0d131b] dark:text-white">Journey Mode</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm">Track your flight countdown and manage categorized packing checklists.</p>
                        </div>
                    </motion.div>

                    {/* Feature 3 - Small */}
                    <motion.div
                        whileHover={{ scale: 0.98 }}
                        className="rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-8 flex flex-col justify-between relative group overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                    >
                        <div className="absolute -bottom-10 -right-10 opacity-[0.03] dark:opacity-5 group-hover:scale-110 transition-transform duration-500 text-[#136dec]">
                            <FaGraduationCap className="text-[120px]" />
                        </div>
                        <div className="relative z-10">
                            <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-slate-700 flex items-center justify-center mb-6 border border-slate-100 dark:border-slate-600">
                                <FaGraduationCap className="text-[#136dec] dark:text-blue-400 text-xl" />
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-[#0d131b] dark:text-white">Student Mode</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm">Access the CPT Eligibility Wizard, US Tax Navigator, and OPT Career Guide.</p>
                        </div>
                    </motion.div>

                    {/* Feature 4 - Large */}
                    <motion.div
                        whileHover={{ scale: 0.98 }}
                        className="md:col-span-2 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-8 flex flex-col justify-between overflow-hidden relative group shadow-sm hover:shadow-md transition-shadow"
                    >
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[2px] bg-[#136dec]/10 dark:bg-[#136dec]/20 rotate-45 scale-150 blur-sm pointer-events-none"></div>
                        <div className="relative z-10">
                            <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-slate-700 flex items-center justify-center mb-6 border border-slate-100 dark:border-slate-600">
                                <FaGlobeAmericas className="text-[#136dec] dark:text-blue-400 text-xl" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2 text-[#0d131b] dark:text-white">Multi-language Support</h3>
                            <p className="text-slate-600 dark:text-slate-400 max-w-md">Catering to a diverse user base with support for English, Hindi, and Spanish. Built with modern technologies for a robust experience.</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-slate-200 dark:border-slate-800 mt-20 bg-white dark:bg-slate-900 transition-colors">
                <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2">
                        <FaGraduationCap className="text-[#136dec] dark:text-blue-400" />
                        <span className="font-bold tracking-tighter text-[#0d131b] dark:text-white">F1<span className="text-slate-500 dark:text-slate-400">Companion</span></span>
                    </div>
                    <div className="flex gap-6 text-sm text-slate-500 dark:text-slate-400">
                        <Link href="/" className="hover:text-[#136dec] dark:hover:text-blue-400 transition-colors">Portfolio</Link>
                        <Link href="/privacy-policy/f1-companion" className="hover:text-[#136dec] dark:hover:text-blue-400 transition-colors">Privacy Policy</Link>
                        <a href="#" className="hover:text-[#136dec] dark:hover:text-blue-400 transition-colors">Contact</a>
                    </div>
                    <p className="text-slate-400 dark:text-slate-500 text-sm">© {new Date().getFullYear()} Pushkar Agnihotri.</p>
                </div>
            </footer>
        </div>
    );
}
