import { FaTrophy, FaCertificate } from 'react-icons/fa';

const Skills = () => {
    const achievements = [
        "Winner of Smart India Hackathon 2019",
        "RunnerUp in Microsoft Hackathon 2.0 in 2018"
    ];

    const certificates = [
        { name: "Kotlin Multiplatform Development", link: "https://www.linkedin.com/learning/certificates/f42348db1d82ca5f0c5fa3743ed7005448dcdf33a4b1bcd4e0abed51cfa7e471?u=52983649" },
        { name: "AWS Knowledge: Serverless", link: "https://www.credly.com/badges/24ada273-5044-4094-8261-c7a43e5d8846/linked_in_profile" },
        { name: "Gen AI Overview for PMs", link: "https://www.credly.com/badges/de233f46-d6ac-4501-b1ed-117c561153c9/public_url" },
        { name: "Google Cloud Computing Foundations", link: "https://www.credly.com/badges/8858b6b4-4404-44c8-9b5e-5a14e31d64f3" },
        { name: "Introduction to FinOps", link: "https://verify.skilljar.com/c/qos6thbhrm2t" },
        { name: "Basics of Disciplined Agile", link: "https://learning.pmi.org/certificate?id=e030d505-f4e8-4e17-9a49-7f10fb45e3aa" },
        { name: "The Basics of Scrum", link: "https://learning.pmi.org/certificate?id=0ff0485c-b92b-43a8-8ead-4145b4290383" }
    ];

    return (
        <section id="skills" className="py-24 relative z-10 border-y border-slate-200/50 dark:border-white/5 bg-transparent">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Achievements */}
                    <div className="flex-1 bg-white/60 dark:bg-white/5 backdrop-blur-lg p-8 md:p-10 rounded-3xl border border-slate-200/50 dark:border-white/10 shadow-sm relative group hover:shadow-orange-500/10 transition-all duration-500 overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 blur-3xl rounded-full -z-10 group-hover:bg-orange-500/20 transition-all duration-500"></div>
                        <div className="flex items-center gap-4 border-b border-slate-100/50 dark:border-white/5 pb-6 mb-6">
                            <div className="w-12 h-12 rounded-2xl bg-orange-50 dark:bg-orange-500/10 flex items-center justify-center border border-orange-100 dark:border-orange-500/20">
                                <FaTrophy className="text-xl text-orange-500 dark:text-orange-400" />
                            </div>
                            <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">Achievements</h3>
                        </div>
                        <ul className="space-y-4">
                            {achievements.map((achievement, index) => (
                                <li key={index} className="flex gap-4 items-start p-4 rounded-2xl bg-white/50 dark:bg-black/20 border border-slate-100 dark:border-white/5 shadow-sm hover:border-orange-200 dark:hover:border-orange-500/30 transition-all">
                                    <div className="w-6 h-6 rounded-full bg-orange-100 dark:bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                                    </div>
                                    <span className="text-slate-700 dark:text-slate-300 font-medium">{achievement}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Certificates */}
                    <div className="flex-[1.5] bg-white/60 dark:bg-white/5 backdrop-blur-lg p-8 md:p-10 rounded-3xl border border-slate-200/50 dark:border-white/10 shadow-sm relative group hover:shadow-emerald-500/10 transition-all duration-500 overflow-hidden">
                        <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/5 blur-3xl rounded-full -z-10 group-hover:bg-emerald-500/20 transition-all duration-500"></div>
                        <div className="flex items-center gap-4 border-b border-slate-100/50 dark:border-white/5 pb-6 mb-6">
                            <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center border border-emerald-100 dark:border-emerald-500/20">
                                <FaCertificate className="text-xl text-emerald-500 dark:text-emerald-400" />
                            </div>
                            <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">Certificates</h3>
                        </div>
                        <ul className="grid sm:grid-cols-2 gap-3">
                            {certificates.map((cert, index) => (
                                <li key={index}>
                                    <a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group/item flex flex-col p-4 rounded-2xl bg-white/50 dark:bg-black/20 border border-slate-100 dark:border-white/5 hover:border-emerald-300 dark:hover:border-emerald-500/50 hover:bg-emerald-50/50 dark:hover:bg-emerald-900/10 transition-all h-full shadow-sm hover:shadow-md"
                                    >
                                        <div className="flex justify-between items-start mb-2">
                                            <div className="w-2 h-2 rounded-full bg-emerald-500 group-hover/item:scale-150 transition-transform"></div>
                                        </div>
                                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover/item:text-emerald-700 dark:group-hover/item:text-emerald-300 transition-colors">{cert.name}</span>
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
