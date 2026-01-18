import { FaTrophy, FaCertificate, FaMedium, FaExternalLinkAlt } from 'react-icons/fa';

const Skills = () => {
    const achievements = [
        "Winner of Smart India Hackathon 2019",
        "RunnerUp in Microsoft Hackathon 2.0 in 2018"
    ];

    const certificates = [
        { name: "Kotlin Multiplatform Development", link: "https://www.linkedin.com/learning/certificates/f42348db1d82ca5f0c5fa3743ed7005448dcdf33a4b1bcd4e0abed51cfa7e471?u=52983649" },
        { name: "AWS Knowledge: Serverless", link: "https://www.credly.com/badges/24ada273-5044-4094-8261-c7a43e5d8846/linked_in_profile" },
        { name: "Generative AI Overview for Project Managers", link: "https://www.credly.com/badges/de233f46-d6ac-4501-b1ed-117c561153c9/public_url" },
        { name: "Google Cloud Computing Foundations Certificate", link: "https://www.credly.com/badges/8858b6b4-4404-44c8-9b5e-5a14e31d64f3" },
        { name: "Introduction to FinOps", link: "https://verify.skilljar.com/c/qos6thbhrm2t" },
        { name: "Basics of Disciplined Agile", link: "https://learning.pmi.org/certificate?id=e030d505-f4e8-4e17-9a49-7f10fb45e3aa" },
        { name: "The Basics of Scrum", link: "https://learning.pmi.org/certificate?id=0ff0485c-b92b-43a8-8ead-4145b4290383" }
    ];

    return (
        <section id="skills" className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
                    Skills & <span className="text-blue-600 dark:text-blue-400">Achievements</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Achievements */}
                    <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                        <div className="flex items-center mb-6">
                            <FaTrophy className="text-yellow-500 text-3xl mr-4" />
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Achievements</h3>
                        </div>
                        <ul className="space-y-4">
                            {achievements.map((achievement, index) => (
                                <li key={index} className="flex items-start text-gray-700 dark:text-gray-300">
                                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                                    {achievement}
                                </li>
                            ))}
                        </ul>
                        {/* <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                            <a
                                href="https://medium.com/@agnihotripush"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block bg-white dark:bg-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-md transition-all"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-4">
                                        <div className="bg-black text-white p-3 rounded-lg">
                                            <FaMedium size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                                Read my Articles
                                            </h4>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                                Check out my technical blogs on Medium
                                            </p>
                                        </div>
                                    </div>
                                    <FaExternalLinkAlt className="text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                                </div>
                            </a>
                        </div> */}
                    </div>

                    {/* Certificates */}
                    <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                        <div className="flex items-center mb-6">
                            <FaCertificate className="text-green-500 text-3xl mr-4" />
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Certificates</h3>
                        </div>
                        <ul className="space-y-3">
                            {certificates.map((cert, index) => (
                                <li key={index}>
                                    <a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                    >
                                        <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                                        {cert.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
