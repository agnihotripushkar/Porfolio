import Link from 'next/link';
import { FaMedium, FaExternalLinkAlt } from 'react-icons/fa';

const Articles = () => {
    const articles = [
        {
            id: 1,
            title: 'Native Android vs. KMP: A Developer’s Honest Take (Part 1)',
            summary: 'Is Kotlin Multiplatform truly worth the hype? As a native Android developer, I’ve been asking myself this question a lot lately, and I’m betting you have too.',
            link: 'https://medium.com/@agnihotripush/native-android-vs-kmp-a-developers-honest-take-part-1-0602dea10fc7',
            date: 'Sep 10, 2025',
            readTime: '3 min read'
        },
        {
            id: 2,
            title: 'Native Android vs. KMP: A Developer’s Honest Take (Part 2)',
            summary: 'A Deeper Dive into the Multiplatform World',
            link: 'https://medium.com/@agnihotripush/native-android-vs-kmp-a-developers-honest-take-part-2-00e516491bb4',
            date: 'Sep 25, 2025',
            readTime: '4 min read'
        },
        {
            id: 3,
            title: 'Building an AI Chatbot with RAG (Retrieval-Augmented Generation): A Complete Architecture Guide',
            summary: 'In this comprehensive guide, I’ll walk you through building a sophisticated AI chatbot using a Retrieval-Augmented Generation (RAG) system from scratch.',
            link: 'https://medium.com/@agnihotripush/building-an-ai-chatbot-with-rag-retrieval-augmented-generation-a-complete-backend-architecture-fc6751c9550e',
            date: 'Oct 08, 2025',
            readTime: '6 min read'
        }
    ];

    return (
        <section id="articles" className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
                    Recent <span className="text-blue-600 dark:text-blue-400">Articles</span>
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {articles.map((article) => (
                        <div key={article.id} className="bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700 flex flex-col">
                            <div className="p-6 flex-grow">
                                <div className="flex justify-between items-start mb-4">
                                    <FaMedium className="text-2xl text-black dark:text-white" />
                                    <span className="text-sm text-gray-500 dark:text-gray-400">{article.date} · {article.readTime}</span>
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white line-clamp-2">
                                    <Link href={article.link} target="_blank" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                        {article.title}
                                    </Link>
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                                    {article.summary}
                                </p>
                            </div>
                            <div className="px-6 pb-6 mt-auto">
                                <Link
                                    href={article.link}
                                    target="_blank"
                                    className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:underline"
                                >
                                    Read on Medium <FaExternalLinkAlt className="ml-2 text-xs" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Link
                        href="https://medium.com/@agnihotripush"
                        target="_blank"
                        className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-black hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl"
                    >View Medium Profile</Link>
                </div>
            </div>
        </section>
    );
};

export default Articles;
