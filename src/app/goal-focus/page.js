"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { FaCheckCircle, FaChartLine, FaBrain, FaRegListAlt, FaArrowRight, FaGooglePlay } from "react-icons/fa";
import { FaBullseye } from "react-icons/fa6";


export default function GoalFocusPage() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

    return (
        <div ref={containerRef} className="bg-[#f6f8f6] dark:bg-[#102215] min-h-screen text-slate-900 dark:text-white font-sans selection:bg-[#13ec49] selection:text-[#102215] overflow-hidden relative">
            {/* Background ambient light */}
            <div className="fixed top-[0%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-[#13ec49]/10 blur-[150px] pointer-events-none mix-blend-screen" />
            <div className="fixed bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-emerald-500/10 blur-[120px] pointer-events-none mix-blend-screen" />

            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-6 backdrop-blur-xl border-b border-emerald-500/10 bg-[#f6f8f6]/80 dark:bg-[#102215]/80">
                <Link href="/" className="text-xl font-bold tracking-tight flex items-center gap-2 group">
                    <FaBullseye className="text-[#13ec49] group-hover:scale-110 transition-transform" />
                    <span>Goal<span className="text-black/50 dark:text-white/50 font-normal">Focus</span></span>
                </Link>
                <div className="flex gap-4">
                    <a href="#" className="flex px-4 py-2 rounded-full bg-[#13ec49] hover:bg-[#13ec49]/90 text-[#102215] text-sm font-bold transition-colors items-center gap-2 shadow-[0_0_20px_rgba(19,236,73,0.3)]">
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
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-slate-700 dark:text-white/70 text-sm font-medium tracking-wide mb-8 backdrop-blur-md"
                >
                    <span className="text-[#13ec49] font-bold">✨ v2.0 is out now</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight mb-6"
                >
                    Master your time. <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-[#13ec49] to-teal-400 italic font-light">Achieve more.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-lg sm:text-xl text-slate-600 dark:text-emerald-100/60 max-w-2xl mx-auto font-medium leading-relaxed mb-12"
                >
                    A minimalist yet powerful habit tracker and task manager designed to help you build focus and reach your goals without the clutter.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                >
                    <a href="#" className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-slate-900 dark:bg-white text-white dark:text-[#102215] text-lg font-bold hover:scale-105 transition-all w-full sm:w-auto">
                        Get Started Free <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </motion.div>

                {/* Abstract Floating UI Mockups */}
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-24 w-full max-w-5xl relative h-[400px] sm:h-[500px] flex justify-center items-end perspective-1000"
                >
                    {/* Center main panel */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute z-20 w-80 h-96 bg-white dark:bg-[#1c2e21] border border-black/5 dark:border-emerald-500/10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-2xl p-6 backdrop-blur-xl flex flex-col gap-4 transform rotate-0"
                    >
                        <div className="flex justify-between items-center mb-4">
                            <div className="text-slate-800 dark:text-emerald-100/90 font-bold">Today's Focus</div>
                            <div className="text-xs px-2 py-1 rounded bg-[#13ec49]/20 text-emerald-700 dark:text-[#13ec49] font-bold">85%</div>
                        </div>

                        <div className="flex flex-col gap-3 flex-1">
                            {[
                                { title: "Morning Workout", done: true, color: "bg-[#13ec49]" },
                                { title: "Deep Work Session", done: true, color: "bg-[#13ec49]" },
                                { title: "Read 20 pages", done: false, color: "bg-black/5 dark:bg-white/10" },
                                { title: "Meditate", done: false, color: "bg-black/5 dark:bg-white/10" },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-[#28392c] border border-black/5 dark:border-emerald-500/10">
                                    <div className={`w-5 h-5 rounded-full border border-black/20 dark:border-white/20 flex items-center justify-center ${item.done ? item.color + ' border-transparent' : ''}`}>
                                        {item.done && <FaCheckCircle className="text-[#102215] text-xs" />}
                                    </div>
                                    <span className={`text-sm font-medium ${item.done ? 'text-slate-400 dark:text-emerald-100/40 line-through' : 'text-slate-700 dark:text-emerald-100/90'}`}>{item.title}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Left floating panel */}
                    <motion.div
                        animate={{ y: [0, -15, 0], rotate: [-5, -6, -5] }}
                        transition={{ duration: 7, delay: 1, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute z-10 w-64 h-72 bg-white/90 dark:bg-[#1c2e21]/90 border border-black/5 dark:border-emerald-500/10 rounded-2xl shadow-2xl p-6 backdrop-blur-md left-0 sm:left-[10%] bottom-10 origin-bottom-right hidden sm:flex flex-col opacity-60 hover:opacity-100 transition-opacity"
                    >
                        <div className="text-slate-800 dark:text-emerald-100/90 font-bold mb-6">Weekly Progress</div>
                        <div className="flex-1 flex items-end gap-2 px-2">
                            {[40, 70, 45, 90, 65, 30, 80].map((h, i) => (
                                <div key={i} className="flex-1 bg-gradient-to-t from-[#13ec49]/20 to-[#13ec49] rounded-t-sm" style={{ height: `${h}%` }}></div>
                            ))}
                        </div>
                        <div className="flex justify-between text-xs font-medium text-slate-400 dark:text-emerald-100/50 mt-2">
                            <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
                        </div>
                    </motion.div>

                    {/* Right floating panel */}
                    <motion.div
                        animate={{ y: [0, -8, 0], rotate: [5, 7, 5] }}
                        transition={{ duration: 5, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute z-10 w-64 h-72 bg-white/90 dark:bg-[#1c2e21]/90 border border-black/5 dark:border-emerald-500/10 rounded-2xl shadow-2xl p-6 backdrop-blur-md right-0 sm:right-[10%] bottom-20 origin-bottom-left hidden md:flex flex-col opacity-60 hover:opacity-100 transition-opacity"
                    >
                        <div className="text-slate-800 dark:text-emerald-100/90 font-bold mb-6">Streaks</div>
                        <div className="flex justify-center flex-1 items-center">
                            <div className="w-32 h-32 rounded-full border-4 border-slate-100 dark:border-white/5 flex items-center justify-center relative">
                                <div className="absolute inset-0 rounded-full border-4 border-[#13ec49] border-t-transparent border-l-transparent rotate-45"></div>
                                <div className="text-center">
                                    <div className="text-3xl font-black text-slate-900 dark:text-white">12</div>
                                    <div className="text-xs font-semibold text-slate-500 dark:text-emerald-100/60 uppercase tracking-widest mt-1">Days</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Ground fade */}
                    <div className="absolute bottom-0 w-[200%] h-32 bg-gradient-to-t from-[#f6f8f6] dark:from-[#102215] to-transparent z-30 pointer-events-none"></div>
                </motion.div>
            </motion.section>

            {/* Features Bento Grid */}
            <section className="relative z-10 px-6 py-24 sm:px-12 max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4 text-center sm:text-left">Design a life <br /><span className="text-slate-400 dark:text-[#13ec49]/70">you love.</span></h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[250px] sm:auto-rows-[300px]">
                    {/* Feature 1 - Wide */}
                    <motion.div
                        whileHover={{ scale: 0.98 }}
                        className="md:col-span-2 md:row-span-2 rounded-[2rem] bg-white dark:bg-[#1c2e21] border border-black/5 dark:border-emerald-500/10 p-8 flex flex-col justify-between overflow-hidden relative group hover:border-[#13ec49]/30 transition-colors shadow-sm dark:shadow-none"
                    >
                        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-[#13ec49]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div>
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#13ec49]/20 to-emerald-600/20 flex items-center justify-center mb-6 border border-[#13ec49]/20">
                                <FaBrand className="text-emerald-600 dark:text-[#13ec49] text-xl" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3 tracking-tight">Smart Habit Tracking</h3>
                            <p className="text-slate-600 dark:text-emerald-100/60 max-w-md text-sm leading-relaxed font-medium">Build lasting habits with our intelligent tracking system. Visualize your consistency, set flexible schedules, and get insights into your behavior patterns over time.</p>
                        </div>

                        {/* Visual element */}
                        <div className="mt-8 flex gap-2">
                            {[1, 2, 3, 4, 5, 6, 7].map(i => (
                                <div key={i} className={`flex-1 h-12 rounded-lg ${i < 5 ? 'bg-[#13ec49] shadow-[0_0_10px_rgba(19,236,73,0.3)]' : 'bg-slate-100 dark:bg-black/20'} transition-all duration-500 group-hover:translate-y-[-5px]`} style={{ transitionDelay: `${i * 50}ms` }}></div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Feature 2 - Square */}
                    <motion.div
                        whileHover={{ scale: 0.98 }}
                        className="md:col-span-2 rounded-[2rem] bg-white dark:bg-[#1c2e21] border border-black/5 dark:border-emerald-500/10 p-8 flex flex-col justify-between relative group overflow-hidden shadow-sm dark:shadow-none"
                    >
                        <div>
                            <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-[#28392c] flex items-center justify-center mb-4 border border-black/5 dark:border-emerald-500/10">
                                <FaRegListAlt className="text-slate-600 dark:text-[#13ec49] text-lg" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Task Management</h3>
                            <p className="text-slate-500 dark:text-emerald-100/50 text-sm font-medium">Organize your to-dos with precision. Prioritize what matters most.</p>
                        </div>
                    </motion.div>

                    {/* Feature 3 - Square */}
                    <motion.div
                        whileHover={{ scale: 0.98 }}
                        className="rounded-[2rem] bg-white dark:bg-[#1c2e21] border border-black/5 dark:border-emerald-500/10 p-8 flex flex-col justify-between relative group overflow-hidden shadow-sm dark:shadow-none"
                    >
                        <div>
                            <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-[#28392c] flex items-center justify-center mb-4 border border-black/5 dark:border-emerald-500/10">
                                <FaChartLine className="text-slate-600 dark:text-[#13ec49] text-lg" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Analytics</h3>
                            <p className="text-slate-500 dark:text-emerald-100/50 text-sm font-medium">Detailed charts and statistics on your productivity.</p>
                        </div>
                    </motion.div>

                    {/* Feature 4 - Square */}
                    <motion.div
                        whileHover={{ scale: 0.98 }}
                        className="rounded-[2rem] bg-white dark:bg-[#1c2e21] border border-black/5 dark:border-emerald-500/10 p-8 flex flex-col justify-between relative group overflow-hidden shadow-sm dark:shadow-none"
                    >
                        <div>
                            <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-[#28392c] flex items-center justify-center mb-4 border border-black/5 dark:border-emerald-500/10">
                                <FaBrain className="text-slate-600 dark:text-[#13ec49] text-lg" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Deep Work</h3>
                            <p className="text-slate-500 dark:text-emerald-100/50 text-sm font-medium">Pomodoro timers and focus modes to stay in the zone.</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-black/5 dark:border-emerald-500/10 mt-20 bg-[#f6f8f6] dark:bg-[#102215]">
                <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2">
                        <FaBullseye className="text-[#13ec49]" />
                        <span className="font-bold tracking-tight">Goal<span className="text-slate-500 dark:text-white/50 font-normal">Focus</span></span>
                    </div>
                    <div className="flex gap-6 text-sm font-medium text-slate-500 dark:text-emerald-100/60">
                        <Link href="/" className="hover:text-slate-800 dark:hover:text-white transition-colors">Portfolio</Link>
                        <Link href="/privacy-policy/goal-focus" className="hover:text-slate-800 dark:hover:text-white transition-colors">Privacy Policy</Link>
                    </div>
                    <p className="text-slate-400 dark:text-emerald-100/30 text-sm font-medium">© {new Date().getFullYear()} Pushkar Agnihotri.</p>
                </div>
            </footer>
        </div>
    );
}

// Minimal stub for FaBrand since it's not standard
const FaBrand = (props) => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M418.4 157.9c-35.3-8.3-76.1-2.5-108.3 16.5-18.1-28.8-51-47.5-88.6-47.5-58.4 0-105.7 47.3-105.7 105.7 0 58.4 47.3 105.7 105.7 105.7 37.5 0 70.4-18.7 88.6-47.5 32.2 19.1 73 24.8 108.3 16.5 12.3-2.9 17.6-17.6 9.3-26.6-26.5-28.5-26.5-70.3 0-98.8 8.4-9.1 3.1-23.8-9.3-26.7zM221.5 288.7c-31.1 0-56.3-25.2-56.3-56.3s25.2-56.3 56.3-56.3 56.3 25.2 56.3 56.3-25.2 56.3-56.3 56.3z"></path>
    </svg>
)

