import { FaBriefcase } from 'react-icons/fa';

const Experience = () => {
    const experiences = [
        {
            title: "Senior Android Engineer",
            company: "Carnot Technologies Private Limited",
            period: "September 2022 - July 2024 (1 year 11 months)",
            location: "Mumbai, Maharashtra, India",
            details: [
                "Led a team of 2 developers in adopting Model View ViewModel Architecture for three projects, leading to a 9% reduction in development time, a 15% improvement in code quality, and an estimated cost saving of $1000/month.",
                "By converting the app into a Multi-Module project, we streamlined its structure, improved code maintainability, and facilitated independent testing, which achieved over 1 Million downloads on the Google Play Store.",
                "Enhanced user experience and application resilience by implementing offline-first functionality. Refined data models for efficient local storage and synchronized data with a backend server using WorkManager, ensuring seamless operation even in low-connectivity environments.",
                "Developed a unified internal SDK for themes and standard UI components, ensuring consistent design and branding across the company's apps."
            ]
        },
        {
            title: "Android Engineer",
            company: "Carnot Technologies Private Limited",
            period: "January 2021 - August 2022 (1 year 8 months)",
            location: "Mumbai, Maharashtra, India",
            details: [
                "Leveraged the Baseline Profile method to pre-compile critical app code paths, reducing average app startup time by 27%. This optimization minimized perceived load times, enhancing user experience and significantly boosting user engagement.",
                "Executed the seamless Integration of a third-party application, achieving a remarkable 90% reduction in development time, which allowed for the rapid deployment of new features and enhancements to existing products.",
                "Gradle Version Catalogs were introduced to simplify and standardize Dependency Management across a Multi-Module project. This approach centralized dependency definitions, ensuring consistent versioning and reducing maintenance overhead for 11 active modules, ultimately improving project scalability and developer efficiency.",
                "Successfully migrated the project from Java to Kotlin and from RxJava to Kotlin coroutines, resulting in cleaner, more concise, and more Kotlin-idiomatic code."
            ]
        },
        {
            title: "Software Engineer",
            company: "ElasticRun",
            period: "June 2020 - January 2021 (8 months)",
            location: "Pune, Maharashtra, India",
            details: [
                "Ensured smooth software operations by conducting thorough sanity testing and efficient software deployment, which contributed to overall system stability and enhanced customer satisfaction.",
                "Proactively addressed technical issues by effectively troubleshooting and managing support tickets, demonstrating strong problem-solving skills and a commitment to excellent customer service."
            ]
        }
    ];

    return (
        <section id="experience" className="py-24 relative z-10 border-t border-slate-200/80 dark:border-white/5 bg-slate-50 dark:bg-[#0d100e]">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <div className="text-center md:text-left mb-16">
                    <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
                        Professional <span className="text-slate-400">Experience.</span>
                    </h2>
                </div>

                <div className="relative border-l border-slate-200 dark:border-white/10 ml-4 md:ml-8 space-y-12 pb-8 flex flex-col">
                    {experiences.map((exp, index) => (
                        <div key={index} className="relative pl-8 md:pl-16">
                            {/* Timeline Dot */}
                            <div className="absolute -left-2 top-1.5 bg-slate-200 dark:bg-slate-700 w-4 h-4 rounded-full border-[3px] border-slate-50 dark:border-[#0d100e] flex items-center justify-center">
                                {/* Optional active dot inside */}
                                {index === 0 && <div className="w-1.5 h-1.5 rounded-full bg-[#136dec]"></div>}
                            </div>

                            <div className="bg-white/60 dark:bg-white/5 backdrop-blur-lg p-8 rounded-3xl border border-slate-200/50 dark:border-white/10 shadow-sm transition-all duration-500 hover:shadow-blue-500/10 hover:border-blue-500/30 group relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-3xl rounded-full -z-10 group-hover:bg-blue-500/20 transition-all duration-500"></div>
                                <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/5 blur-3xl rounded-full -z-10 group-hover:bg-purple-500/20 transition-all duration-500"></div>

                                <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 gap-4 relative z-10">
                                    <div>
                                        <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-2 mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                            {exp.title}
                                        </h3>
                                        <p className="text-base text-slate-600 dark:text-slate-400 font-medium">{exp.company}</p>
                                    </div>
                                    <div className="text-sm font-bold text-blue-600 dark:text-blue-400 md:text-right bg-blue-50 dark:bg-blue-500/10 px-4 py-2 rounded-xl border border-blue-100 dark:border-blue-500/20 h-fit shadow-sm">
                                        <p>{exp.period}</p>
                                    </div>
                                </div>

                                <ul className="space-y-4 relative z-10">
                                    {exp.details.map((detail, idx) => (
                                        <li key={idx} className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed flex gap-3">
                                            <span className="text-blue-500 dark:text-blue-400 mt-1 flex-shrink-0 text-lg leading-none">•</span>
                                            <span className="font-medium">{detail}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
