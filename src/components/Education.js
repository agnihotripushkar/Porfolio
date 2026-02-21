const Education = () => (
    <section id="education" className="py-24 relative z-10 bg-transparent">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
                <div className="md:w-1/3 text-center md:text-left">
                    <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
                        Education.
                    </h2>
                    <p className="text-lg text-slate-500 font-medium max-w-2xl">
                        Academic background and technical foundations.
                    </p>
                </div>

                <div className="md:w-2/3 space-y-6">
                    <div className="bg-white/60 dark:bg-white/5 backdrop-blur-lg p-8 rounded-3xl border border-slate-200/50 dark:border-white/10 shadow-sm transition-all hover:shadow-cyan-500/10 hover:border-cyan-500/30 flex flex-col sm:flex-row justify-between gap-4 sm:items-center relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 blur-3xl rounded-full -z-10 group-hover:bg-cyan-500/20 transition-all duration-500"></div>
                        <div className="relative z-10">
                            <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-2 mb-1 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">California State University, Fullerton</h3>
                            <p className="text-slate-600 dark:text-slate-400 font-medium">Master&apos;s degree, Computer Science</p>
                        </div>
                        <div className="text-sm font-medium text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-500/10 px-4 py-2 rounded-xl border border-cyan-100 dark:border-cyan-500/20 h-fit whitespace-nowrap shadow-sm relative z-10">
                            <p>Aug 2024 - May 2026</p>
                        </div>
                    </div>

                    <div className="bg-white/60 dark:bg-white/5 backdrop-blur-lg p-8 rounded-3xl border border-slate-200/50 dark:border-white/10 shadow-sm transition-all hover:shadow-blue-500/10 hover:border-blue-500/30 flex flex-col sm:flex-row justify-between gap-4 sm:items-center relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-3xl rounded-full -z-10 group-hover:bg-blue-500/20 transition-all duration-500"></div>
                        <div className="relative z-10">
                            <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-2 mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Government College of Engineering</h3>
                            <p className="text-slate-600 dark:text-slate-400 font-medium">B.Tech, Computer Science</p>
                        </div>
                        <div className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10 px-4 py-2 rounded-xl border border-blue-100 dark:border-blue-500/20 h-fit whitespace-nowrap shadow-sm relative z-10">
                            <p>Aug 2016 - May 2020</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Education;
