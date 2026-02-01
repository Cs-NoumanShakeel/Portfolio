import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Menu, X } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/#home' },
        { name: 'Projects', href: '/#projects' },
        { name: 'Capabilities', href: '/#tech' },
        { name: 'Academic', href: '/#education' },
    ];

    const handleSmoothScroll = (e, href) => {
        e.preventDefault();
        const targetId = href.replace('/#', '');
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const navbarHeight = 100; // Account for fixed navbar
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }

        // Close mobile menu if open
        setIsOpen(false);
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled ? 'py-4 px-6 md:px-12' : 'py-8 px-6 md:px-12'
            }`}>
            <div className={`mx-auto max-w-7xl flex justify-between items-center transition-all duration-500 ${scrolled ? 'glass-dark rounded-full p-3 px-8 shadow-2xl border-white/10' : ''
                }`}>
                <Link to="/" className="text-xl font-display font-black tracking-tighter text-white group flex items-center gap-1">
                    <span className="group-hover:text-primary transition-colors">NOUMAN</span>
                    <span className="w-1.5 h-1.5 bg-primary rounded-full group-hover:animate-pulse"></span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-12">
                    <div className="flex gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleSmoothScroll(e, link.href)}
                                className="text-xs uppercase tracking-[0.3em] font-bold text-gray-400 hover:text-white transition-all relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all group-hover:w-full"></span>
                            </a>
                        ))}
                    </div>

                    <div className="h-4 w-[1px] bg-white/10"></div>

                    <div className="flex items-center gap-4">
                        <a href="https://github.com/Cs-NoumanMujahid" target="_blank" className="text-gray-400 hover:text-white transition-all">
                            <Github size={18} />
                        </a>
                        <a href="https://www.linkedin.com/in/nouman-mujahid-214ab9361" target="_blank" className="text-gray-400 hover:text-white transition-all">
                            <Linkedin size={18} />
                        </a>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-[-1] bg-pitch pt-24 px-8 md:hidden"
                    >
                        <div className="flex flex-col gap-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleSmoothScroll(e, link.href)}
                                    className="text-3xl font-display font-bold text-white border-b border-white/5 pb-4"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="flex gap-4 pt-4">
                                <a href="https://github.com/Cs-NoumanMujahid" className="p-4 glass rounded-2xl text-white">
                                    <Github size={24} />
                                </a>
                                <a href="https://www.linkedin.com/in/nouman-mujahid-214ab9361" className="p-4 glass rounded-2xl text-white">
                                    <Linkedin size={24} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
