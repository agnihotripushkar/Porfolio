"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaCheckCircle, FaChartLine, FaBrain, FaRegListAlt, FaArrowRight, FaGooglePlay, FaShieldAlt, FaLock, FaDatabase, FaServer } from "react-icons/fa";
import { FaBullseye } from "react-icons/fa6";

export default function GoalFocusPage() {
    return (
        <div className="bg-[#fcfdfc] dark:bg-[#090b0a] min-h-screen text-slate-900 dark:text-slate-100 font-sans selection:bg-[#13ec49]/30 selection:text-slate-900 dark:selection:text-white relative">
            {/* Subtle Grid Background for that "Pro/Business" look */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-10 py-4 backdrop-blur-xl border-b border-slate-200/50 dark:border-white/5 bg-white/70 dark:bg-[#090b0a]/70">
                <Link href="/" className="text-xl font-bold tracking-tight flex items-center gap-2.5 group">
                    <div className="w-8 h-8 rounded-lg bg-[#101813] dark:bg-white flex items-center justify-center shadow-md">
                        <FaBullseye className="text-[#13ec49] text-sm" />
                    </div>
                    <span className="text-slate-900 dark:text-white font-semibold">Goal<span className="text-slate-500 font-normal">Focus</span></span>
                </Link>
                <div className="flex items-center gap-6">
                    <Link href="/privacy-policy/goal-focus" className="hidden md:block text-sm font-medium text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">
                        Privacy
                    </Link>
                    <a href="https://play.google.com/store/apps/details?id=me.pushkaragnihotri.goalfocus&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" className="flex px-5 py-2 rounded-full bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-200 text-white dark:text-[#090b0a] text-sm font-semibold transition-all items-center gap-2 shadow-sm">
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
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#13ec49] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#13ec49]"></span>
                    </span>
                    GoalFocus v2.0 Released
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                    className="text-5xl sm:text-7xl font-bold tracking-tight mb-8 leading-[1.05] text-slate-900 dark:text-white max-w-4xl"
                >
                    Achieve absolute focus.<br className="hidden md:block" />
                    <span className="text-slate-400 dark:text-slate-500">Master your goals.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                    className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed mb-10"
                >
                    A professional-grade productivity system designed for deep work. Build habits, manage tasks, and visualize your progress with unrivaled clarity.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                >
                    <a href="https://play.google.com/store/apps/details?id=me.pushkaragnihotri.goalfocus&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#13ec49] text-slate-900 text-base font-bold hover:bg-[#11d842] transition-colors shadow-sm w-full sm:w-auto">
                        <FaGooglePlay /> Install from Play Store
                    </a>
                </motion.div>

                {/* Refined Interface Mockup */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                    className="mt-24 w-full max-w-5xl relative"
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-[#fcfdfc] dark:from-[#090b0a] via-transparent to-transparent z-20 pointer-events-none rounded-2xl h-full w-full left-0 bottom-[-10px]"></div>
                    <div className="w-full bg-white dark:bg-[#111613] border border-slate-200/80 dark:border-white/10 rounded-[2rem] shadow-2xl dark:shadow-[0_20px_60px_rgba(0,0,0,0.6)] p-2 relative overflow-hidden">

                        <div className="bg-slate-50 dark:bg-[#0d110f] rounded-[1.5rem] border border-slate-100 dark:border-white/5 p-6 sm:p-10 flex flex-col md:flex-row gap-8 items-center h-[400px]">

                            {/* Left panel mockup */}
                            <div className="flex-1 w-full space-y-6">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">Today's Focus</h3>
                                        <p className="text-sm text-slate-500">4 tasks remaining</p>
                                    </div>
                                    <div className="w-12 h-12 rounded-full border-[3px] border-slate-200 dark:border-slate-800 relative flex items-center justify-center">
                                        <svg className="absolute inset-0 w-full h-full -rotate-90">
                                            <circle cx="21" cy="21" r="19" fill="none" stroke="#13ec49" strokeWidth="3" strokeDasharray="120" strokeDashoffset="45" className="transition-all duration-1000 ease-out" />
                                        </svg>
                                        <span className="text-xs font-bold">62%</span>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    {[
                                        { title: "Design Landing Page", time: "Deep Work", done: true },
                                        { title: "Review Pull Requests", time: "Focus Mode", done: false },
                                        { title: "Client Strategy Call", time: "Meeting", done: false },
                                    ].map((item, i) => (
                                        <div key={i} className={`flex items-center gap-4 p-4 rounded-xl ${item.done ? 'bg-white dark:bg-[#151b17] border border-slate-100 dark:border-white/5 opacity-60' : 'bg-white dark:bg-[#151b17] border border-slate-200 dark:border-white/10 shadow-sm'}`}>
                                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${item.done ? 'bg-[#13ec49] border-[#13ec49]' : 'border-slate-300 dark:border-slate-600'}`}>
                                                {item.done && <FaCheckCircle className="text-[#090b0a] text-[10px]" />}
                                            </div>
                                            <div className="flex-1">
                                                <div className={`text-sm font-semibold ${item.done ? 'line-through text-slate-500' : 'text-slate-800 dark:text-white'}`}>{item.title}</div>
                                                <div className="text-xs font-medium text-slate-400 mt-0.5">{item.time}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right panel mockup (abstract graph) */}
                            <div className="hidden md:flex w-72 h-full bg-white dark:bg-[#151b17] rounded-2xl border border-slate-100 dark:border-white/5 p-6 flex-col">
                                <h4 className="text-sm font-bold mb-6">Weekly Activity</h4>
                                <div className="flex-1 flex items-end justify-between gap-2">
                                    {[30, 50, 40, 80, 60, 40, 90].map((h, i) => (
                                        <div key={i} className="w-full bg-slate-100 dark:bg-slate-800 rounded-t-md relative group">
                                            <div className="absolute bottom-0 w-full bg-[#13ec49] rounded-t-md transition-all duration-500" style={{ height: `${h}%` }}></div>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase mt-3">
                                    <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Features Section - Elegantly Displayed */}
            <section className="px-6 py-24 sm:px-12 max-w-6xl mx-auto z-10 relative">
                <div className="text-center md:text-left mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">Engineered for performance</h2>
                    <p className="text-lg text-slate-500 mt-4 max-w-2xl">Everything you need to manage your workflow, organized in a beautifully simple interface.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Bento Box 1 */}
                    <div className="bg-white dark:bg-[#111613] p-8 rounded-3xl border border-slate-200/80 dark:border-white/5 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-6">
                            <FaRegListAlt className="text-xl text-slate-700 dark:text-slate-300" />
                        </div>
                        <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">Habit & Task Sync</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">Combine your daily to-do lists with long-term habit tracking in one unified dashboard. No more switching between apps.</p>
                    </div>

                    {/* Bento Box 2 */}
                    <div className="bg-white dark:bg-[#111613] p-8 rounded-3xl border border-slate-200/80 dark:border-white/5 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-[#13ec49]/10 flex items-center justify-center mb-6">
                            <FaBrain className="text-xl text-emerald-600 dark:text-[#13ec49]" />
                        </div>
                        <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">Deep Work Timers</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">Built-in Pomodoro and deep work timers to enforce breaks and maintain peak cognitive performance throughout the day.</p>
                    </div>

                    {/* Bento Box 3 */}
                    <div className="bg-white dark:bg-[#111613] p-8 rounded-3xl border border-slate-200/80 dark:border-white/5 shadow-sm hover:shadow-md transition-shadow md:col-span-2 lg:col-span-1">
                        <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-6">
                            <FaChartLine className="text-xl text-slate-700 dark:text-slate-300" />
                        </div>
                        <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">Insight Analytics</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">View detailed charts and streaks to understand your consistency. Identify your most productive days and adapt your schedule.</p>
                    </div>
                </div>
            </section>

            {/* Data & Privacy Section (Business-tier aesthetic) */}
            <section className="px-6 py-24 sm:px-12 w-full bg-slate-50 dark:bg-[#0d100e] border-y border-slate-200/80 dark:border-white/5">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
                    <div className="flex-1">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 text-xs font-semibold tracking-wide mb-6">
                            <FaShieldAlt className="text-emerald-500" /> Privacy First
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6 text-slate-900 dark:text-white">Your data stays with you.</h2>
                        <p className="text-lg text-slate-500 leading-relaxed mb-8 max-w-xl">
                            We don't need your personal data to help you focus. GoalFocus is engineered to run locally, ensuring your habits and schedules remain entirely private.
                        </p>

                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="mt-1 flex-shrink-0">
                                    <FaLock className="text-slate-400 dark:text-slate-500 text-lg" />
                                </div>
                                <div>
                                    <h4 className="text-base font-bold text-slate-900 dark:text-white">Local-First Storage</h4>
                                    <p className="text-slate-500 text-sm mt-1">Your task and habit data is saved directly on your device. We do not sync it to our servers or sell it to third parties.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="mt-1 flex-shrink-0">
                                    <FaDatabase className="text-slate-400 dark:text-slate-500 text-lg" />
                                </div>
                                <div>
                                    <h4 className="text-base font-bold text-slate-900 dark:text-white">No Account Required</h4>
                                    <p className="text-slate-500 text-sm mt-1">Start using the app immediately. We don't force you to create an account or provide an email address just to track your goals.</p>
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
                                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Personal Information</span>
                                    <span className="text-xs font-bold px-2 py-1 rounded bg-slate-100 dark:bg-white/5 text-slate-500">Not Collected</span>
                                </div>
                                <div className="flex justify-between items-center py-2">
                                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Habit & Task History</span>
                                    <span className="text-xs font-bold px-2 py-1 rounded bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">On-Device Only</span>
                                </div>
                                <div className="flex justify-between items-center py-2">
                                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Crash Analytics</span>
                                    <span className="text-xs font-bold px-2 py-1 rounded bg-slate-100 dark:bg-white/5 text-slate-500">Anonymous Only</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="px-6 py-24 sm:px-12 text-center max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold tracking-tight mb-6 text-slate-900 dark:text-white">Ready to elevate your focus?</h2>
                <p className="text-lg text-slate-500 mb-10">Download GoalFocus today and start taking control of your time, completely free.</p>
                <a href="https://play.google.com/store/apps/details?id=me.pushkaragnihotri.goalfocus&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-200 text-white dark:text-slate-900 text-base font-bold transition-colors shadow-md hover:shadow-lg">
                    <FaGooglePlay /> Download on Google Play
                </a>
            </section>

            {/* Footer */}
            <footer className="px-6 py-12 border-t border-slate-200/80 dark:border-white/5 bg-white dark:bg-[#090b0a]">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-[#101813] dark:bg-white flex items-center justify-center">
                            <FaBullseye className="text-[#13ec49] text-sm" />
                        </div>
                        <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">Goal<span className="text-slate-500 font-normal">Focus</span></span>
                    </div>

                    <div className="flex gap-6 text-sm font-medium text-slate-500 dark:text-slate-400">
                        <Link href="/" className="hover:text-slate-900 dark:hover:text-white transition-colors">Developer Profile</Link>
                        <Link href="/privacy-policy/goal-focus" className="hover:text-slate-900 dark:hover:text-white transition-colors">Privacy Policy</Link>
                    </div>

                    <p className="text-slate-400 dark:text-slate-600 text-sm font-medium">© {new Date().getFullYear()} Pushkar Agnihotri.</p>
                </div>
            </footer>
        </div>
    );
}
