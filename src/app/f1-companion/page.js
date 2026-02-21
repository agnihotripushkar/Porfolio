"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaGraduationCap, FaShieldAlt, FaPlaneDeparture, FaGlobeAmericas, FaArrowRight, FaGooglePlay, FaServer, FaLock, FaDatabase } from "react-icons/fa";

export default function F1CompanionPage() {
    return (
        <div className="bg-[#fcfdfc] dark:bg-[#090b0a] min-h-screen text-slate-900 dark:text-slate-100 font-sans selection:bg-[#136dec]/30 selection:text-slate-900 dark:selection:text-white relative">
            {/* Subtle Grid Background for that "Pro/Business" look */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0"></div>

            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-10 py-4 backdrop-blur-xl border-b border-slate-200/50 dark:border-white/5 bg-white/70 dark:bg-[#090b0a]/70">
                <Link href="/" className="text-xl font-bold tracking-tight flex items-center gap-2.5 group">
                    <div className="w-8 h-8 rounded-lg bg-[#101822] dark:bg-white flex items-center justify-center shadow-md">
                        <FaGraduationCap className="text-[#136dec] text-sm" />
                    </div>
                    <span className="text-slate-900 dark:text-white font-semibold flex items-center tracking-tighter">F1<span className="text-slate-500 font-normal ml-0.5">Companion</span></span>
                </Link>
                <div className="flex items-center gap-6">
                    <Link href="/privacy-policy/f1-companion" className="hidden md:block text-sm font-medium text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">
                        Privacy
                    </Link>
                    <a href="https://play.google.com/store/apps/details?id=me.pushkaragnihotri.f1companion&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" className="flex px-5 py-2 rounded-full bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-200 text-white dark:text-[#090b0a] text-sm font-semibold transition-all items-center gap-2 shadow-sm">
                        <FaGooglePlay className="text-xs" /> Download
                    </a>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative pt-40 pb-20 px-6 sm:px-12 max-w-6xl mx-auto flex flex-col justify-center items-center text-center z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 text-xs font-semibold tracking-wide mb-8"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#136dec] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#136dec]"></span>
                    </span>
                    Your Study Abroad Journey Starts Here
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                    className="text-5xl sm:text-7xl font-bold tracking-tight mb-8 leading-[1.05] text-slate-900 dark:text-white max-w-4xl"
                >
                    The Ultimate Guide for<br className="hidden md:block" />
                    <span className="text-slate-400 dark:text-slate-500">F1 Visa Students.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                    className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed mb-10"
                >
                    A comprehensive mobile application designed to assist F1 visa students throughout their journey—from flight prep to maintaining compliance.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                >
                    <a href="https://play.google.com/store/apps/details?id=me.pushkaragnihotri.f1companion&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#136dec] text-white text-base font-bold hover:bg-blue-600 transition-colors shadow-sm w-full sm:w-auto">
                        <FaGooglePlay /> Install from Play Store
                    </a>
                </motion.div>

                {/* Mobile App Mockup */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                    className="mt-20 relative w-full max-w-[280px] sm:max-w-[320px] mx-auto group"
                >
                    <div className="absolute inset-0 bg-[#136dec]/20 dark:bg-[#136dec]/30 blur-[80px] rounded-[3rem] transition-all duration-700 pointer-events-none -z-10"></div>
                    <div className="relative bg-white dark:bg-[#111613] rounded-[3rem] p-3 shadow-2xl border border-slate-200/80 dark:border-white/10 z-10 transition-transform duration-700 hover:-translate-y-2">
                        <div className="relative rounded-[2.25rem] overflow-hidden bg-slate-100 dark:bg-[#090b0a] aspect-[9/19.5] w-full border border-slate-200 dark:border-white/5">
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
            </section>

            {/* Features Section - Elegantly Displayed */}
            <section className="px-6 py-24 sm:px-12 max-w-6xl mx-auto z-10 relative border-t border-slate-200/80 dark:border-white/5 mt-20">
                <div className="text-center md:text-left mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">Everything you need.<br />
                        <span className="text-slate-400 text-2xl sm:text-3xl mt-2 block">In one place.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Bento Box 1 */}
                    <div className="bg-white dark:bg-[#111613] p-8 rounded-3xl border border-slate-200/80 dark:border-white/5 shadow-sm hover:shadow-md transition-shadow md:col-span-2 lg:col-span-2">
                        <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-[#136dec]/10 flex items-center justify-center mb-6">
                            <FaShieldAlt className="text-xl text-[#136dec] dark:text-[#136dec]" />
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">Compliance & Document Wallet</h3>
                        <p className="text-slate-500 text-sm leading-relaxed max-w-xl">Maintain F1 visa compliance and securely store sensitive documents like SSN, I-94, SEVIS ID, and Passport numbers locally using encrypted storage. Features AI-powered text recognition.</p>
                    </div>

                    {/* Bento Box 2 */}
                    <div className="bg-white dark:bg-[#111613] p-8 rounded-3xl border border-slate-200/80 dark:border-white/5 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-6">
                            <FaPlaneDeparture className="text-xl text-slate-700 dark:text-slate-300" />
                        </div>
                        <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">Journey Mode</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">Track your flight countdown and manage categorized packing checklists.</p>
                    </div>

                    {/* Bento Box 3 */}
                    <div className="bg-white dark:bg-[#111613] p-8 rounded-3xl border border-slate-200/80 dark:border-white/5 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-6">
                            <FaGraduationCap className="text-xl text-slate-700 dark:text-slate-300" />
                        </div>
                        <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">Student Mode</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">Access the CPT Eligibility Wizard, US Tax Navigator, and OPT Career Guide.</p>
                    </div>

                    {/* Bento Box 4 */}
                    <div className="bg-white dark:bg-[#111613] p-8 rounded-3xl border border-slate-200/80 dark:border-white/5 shadow-sm hover:shadow-md transition-shadow md:col-span-2">
                        <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-6">
                            <FaGlobeAmericas className="text-xl text-slate-700 dark:text-slate-300" />
                        </div>
                        <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">Multi-language Support</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">Catering to a diverse user base with support for English, Hindi, and Spanish. Built with modern technologies for a robust experience.</p>
                    </div>
                </div>
            </section>

            {/* Data & Privacy Section (Business-tier aesthetic) */}
            <section className="px-6 py-24 sm:px-12 w-full bg-slate-50 dark:bg-[#0d100e] border-y border-slate-200/80 dark:border-white/5">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
                    <div className="flex-1">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 text-xs font-semibold tracking-wide mb-6">
                            <FaShieldAlt className="text-[#136dec]" /> Privacy First
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6 text-slate-900 dark:text-white">Your data stays with you.</h2>
                        <p className="text-lg text-slate-500 leading-relaxed mb-8 max-w-xl">
                            A companion app should secure your journey, not expose it. F1Companion is built to keep your sensitive immigration and travel data strictly on your device.
                        </p>

                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="mt-1 flex-shrink-0">
                                    <FaLock className="text-slate-400 dark:text-slate-500 text-lg" />
                                </div>
                                <div>
                                    <h4 className="text-base font-bold text-slate-900 dark:text-white">Encrypted Local Storage</h4>
                                    <p className="text-slate-500 text-sm mt-1">Your sensitive documents (I-20s, passports) are encrypted and stored locally. We never sync identifying documents to external servers.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="mt-1 flex-shrink-0">
                                    <FaDatabase className="text-slate-400 dark:text-slate-500 text-lg" />
                                </div>
                                <div>
                                    <h4 className="text-base font-bold text-slate-900 dark:text-white">No Account Required</h4>
                                    <p className="text-slate-500 text-sm mt-1">Use all planning features out of the box. No login, tracking, or email required to benefit from the companion tools.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 w-full max-w-lg">
                        <div className="bg-white dark:bg-[#111613] border border-slate-200/80 dark:border-white/5 rounded-3xl p-8 shadow-sm">
                            <div className="flex items-center justify-between border-b border-slate-100 dark:border-white/5 pb-4 mb-6">
                                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Data Audit Summary</div>
                                <FaServer className="text-slate-300 dark:text-slate-600" />
                            </div>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center py-2">
                                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Personal Identifiers</span>
                                    <span className="text-xs font-bold px-2 py-1 rounded bg-slate-100 dark:bg-white/5 text-slate-500">Not Collected</span>
                                </div>
                                <div className="flex justify-between items-center py-2">
                                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Immigration Documents</span>
                                    <span className="text-xs font-bold px-2 py-1 rounded bg-blue-50 dark:bg-[#136dec]/10 text-[#136dec] dark:text-blue-400">On-Device Only</span>
                                </div>
                                <div className="flex justify-between items-center py-2">
                                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Telemetry</span>
                                    <span className="text-xs font-bold px-2 py-1 rounded bg-slate-100 dark:bg-white/5 text-slate-500">Opt-in Anonymous</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="px-6 py-12 border-t border-slate-200/80 dark:border-white/5 bg-white dark:bg-[#090b0a]">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-[#101822] dark:bg-white flex items-center justify-center">
                            <FaGraduationCap className="text-[#136dec] text-sm" />
                        </div>
                        <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white flex items-center">F1<span className="text-slate-500 font-normal ml-0.5">Companion</span></span>
                    </div>

                    <div className="flex gap-6 text-sm font-medium text-slate-500 dark:text-slate-400">
                        <Link href="/" className="hover:text-slate-900 dark:hover:text-white transition-colors">Developer Profile</Link>
                        <Link href="/privacy-policy/f1-companion" className="hover:text-slate-900 dark:hover:text-white transition-colors">Privacy Policy</Link>
                    </div>

                    <p className="text-slate-400 dark:text-slate-600 text-sm font-medium">© {new Date().getFullYear()} Pushkar Agnihotri.</p>
                </div>
            </footer>
        </div>
    );
}
