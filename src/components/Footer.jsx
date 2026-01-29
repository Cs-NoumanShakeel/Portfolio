import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-pitch border-t border-white/5 pt-24 pb-12 px-6 overflow-hidden relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 relative z-10">
                <div className="md:col-span-2 space-y-8">
                    <h3 className="text-3xl font-display font-black text-white tracking-tighter">
                        NOUMAN<span className="text-primary">.</span>
                    </h3>
                    <p className="text-gray-500 max-w-sm leading-relaxed text-sm font-medium">
                        Full Stack Python Developer specializing in high-performance AI integration and cinematic web experiences. Currently exploring the frontiers of Machine Learning at Comsats.
                    </p>
                    <div className="flex gap-4">
                        <a href="https://github.com/Cs-NoumanShakeel" target="_blank" className="w-10 h-10 glass rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all hover:bg-white/5">
                            <Github size={18} />
                        </a>
                        <a href="http://www.linkedin.com/in/nouman-shakeel-214ab9361" target="_blank" className="w-10 h-10 glass rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all hover:bg-white/5">
                            <Linkedin size={18} />
                        </a>
                    </div>
                </div>

                <div className="space-y-6">
                    <h4 className="text-xs uppercase tracking-[0.4em] font-bold text-white/40">Navigation</h4>
                    <div className="flex flex-col space-y-4">
                        {[
                            { name: 'Home', href: '/#home' },
                            { name: 'Projects', href: '/#projects' },
                            { name: 'Capabilities', href: '/#tech' },
                            { name: 'Academic', href: '/#education' }
                        ].map((link) => (
                            <a key={link.name} href={link.href} className="text-gray-400 hover:text-white text-sm font-medium transition-colors w-fit">
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="space-y-6">
                    <h4 className="text-xs uppercase tracking-[0.4em] font-bold text-white/40">Connection</h4>
                    <div className="space-y-4">
                        <a href="mailto:noumannorm648@gmail.com" className="flex items-center space-x-3 text-gray-400 hover:text-white transition-all group">
                            <div className="p-2 glass rounded-lg group-hover:bg-primary/10 group-hover:text-primary transition-all">
                                <Mail size={14} />
                            </div>
                            <span className="text-sm font-medium">noumannorm648@gmail.com</span>
                        </a>
                        <div className="flex items-center space-x-3 text-gray-400 group">
                            <div className="p-2 glass rounded-lg group-hover:bg-accent/10 group-hover:text-accent transition-all">
                                <Phone size={14} />
                            </div>
                            <span className="text-sm font-medium">+92 3274542140</span>
                        </div>
                        <div className="flex items-center space-x-3 text-gray-400 group">
                            <div className="p-2 glass rounded-lg group-hover:bg-secondary/10 group-hover:text-secondary transition-all">
                                <MapPin size={14} />
                            </div>
                            <span className="text-sm font-medium">Johar Town, Lahore</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.3em] font-bold text-gray-600">
                <div>© {new Date().getFullYear()} Nouman Mujahid — Portfolio Production</div>
                <div className="flex gap-8">
                    <span className="hover:text-white cursor-help">Design System v2.0</span>
                    <span className="hover:text-white cursor-help">Build 2026.01</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
