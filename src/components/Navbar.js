"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/70 dark:bg-[#090b0a]/70 backdrop-blur-xl border-b border-slate-200/50 dark:border-white/5 py-3 shadow-sm' : 'bg-transparent py-5'}`}>
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-1">
                            Pushkar<span className="text-slate-400 font-normal">.</span>
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-semibold text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-white dark:hover:bg-white/5 transition-colors"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`md:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-[#090b0a]/95 backdrop-blur-2xl border-b border-slate-200/50 dark:border-white/5 shadow-2xl transition-all duration-300 origin-top ${isOpen ? 'opacity-100 scale-y-100 h-auto py-6' : 'opacity-0 scale-y-0 h-0 overflow-hidden py-0'}`}>
                <div className="px-6 space-y-6 text-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="block text-lg font-bold tracking-tight text-slate-700 hover:text-[#136dec] dark:text-slate-300 dark:hover:text-white transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
