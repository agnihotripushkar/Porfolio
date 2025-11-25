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
        <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
                    Professional <span className="text-blue-600 dark:text-blue-400">Experience</span>
                </h2>

                <div className="relative border-l-4 border-blue-600 dark:border-blue-400 ml-4 md:ml-8 space-y-12">
                    {experiences.map((exp, index) => (
                        <div key={index} className="relative pl-8 md:pl-12">
                            {/* Timeline Dot */}
                            <div className="absolute -left-3 top-0 bg-blue-600 dark:bg-blue-400 w-6 h-6 rounded-full border-4 border-white dark:border-gray-800"></div>

                            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                                            <FaBriefcase className="mr-2 text-blue-600 dark:text-blue-400" />
                                            {exp.title}
                                        </h3>
                                        <p className="text-lg text-gray-700 dark:text-gray-300 font-medium">{exp.company}</p>
                                    </div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0 text-right">
                                        <p>{exp.period}</p>
                                        <p>{exp.location}</p>
                                    </div>
                                </div>

                                <ul className="list-disc list-outside ml-5 space-y-2 text-gray-600 dark:text-gray-300">
                                    {exp.details.map((detail, idx) => (
                                        <li key={idx}>{detail}</li>
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
