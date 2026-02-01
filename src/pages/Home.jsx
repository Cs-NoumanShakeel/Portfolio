import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import TechStack from '../components/TechStack';
import Education from '../components/Education';
import { projects } from '../utils/projects';
import { Zap, Star, Rocket } from 'lucide-react';

const Home = () => {
    return (
        <div id="home" className="bg-pitch text-white selection:bg-neon-blue/30 selection:text-pitch">
            <Hero />

            <section id="projects" className="py-32 px-6 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5 }}
                            className="flex items-center gap-3 text-neon-blue mb-4"
                        >
                            <div className="w-8 h-[1px] bg-neon-blue shadow-[0_0_10px_#00f3ff]"></div>
                            <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Featured Production</span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: 0.1, duration: 0.6 }}
                            className="text-4xl md:text-6xl font-display font-extrabold tracking-tight"
                        >
                            Building the Future of <br />
                            <span className="text-gradient-primary italic">Digital Intelligence</span>.
                        </motion.h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5 }}
                        className="text-gray-500 text-sm font-medium tracking-widest hidden md:block"
                    >
                        SCROLL TO EXPLORE — [ 01 / 04 ]
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </section>

            <TechStack />

            <Education />

            <section className="py-48 px-6 relative overflow-hidden bg-pitch">
                {/* Background Neon Effects */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                    <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-neon-blue/10 rounded-full blur-[120px] animate-pulse"></div>
                    <div className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] bg-neon-purple/10 rounded-full blur-[120px] animate-pulse [animation-delay:1s]"></div>
                    <div className="scan-line opacity-20"></div>
                </div>

                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-6 py-2 rounded-full glass border border-white/10 text-neon-blue text-[10px] uppercase tracking-[0.4em] font-bold mb-12 shadow-[0_0_20px_rgba(0,243,255,0.2)]"
                    >
                        <Zap size={14} className="fill-neon-blue" />
                        <span>Let's Collaborate</span>
                        <Zap size={14} className="fill-neon-blue" />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="text-5xl md:text-9xl font-display font-black mb-16 leading-[1.2] tracking-normal"
                    >
                        Ready to Build <br />
                        <span className="text-white relative">
                            Something
                            <motion.span
                                className="absolute -inset-2 bg-neon-blue/2 blur-2xl rounded-full"
                                animate={{ opacity: [0.2, 0.4, 0.2] }}
                                transition={{ duration: 4, repeat: Infinity }}
                            ></motion.span>
                        </span>
                        <br />
                        <span className="text-gradient-primary italic inline-block pb-4 pr-10">Legendary?</span>
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="flex flex-col items-center"
                    >
                        <p className="text-gray-400 text-lg md:text-xl font-light max-w-2xl mx-auto mb-16 leading-relaxed">
                            Currently pushing the boundaries of AI integration in modern web architectures. <br />
                            <span className="text-white font-medium">Your next big project starts with a single message.</span>
                        </p>

                        <a
                            href="mailto:noumannorm648@gmail.com"
                            className="group relative px-16 py-6 bg-white text-pitch font-black text-lg rounded-full overflow-hidden transition-all hover:scale-110 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.2)]"
                        >
                            <span className="relative z-10 flex items-center gap-3">
                                Get In Touch <Rocket size={20} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-neon-blue opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl scale-150"></div>
                            <div className="absolute inset-0 bg-white group-hover:bg-neon-blue transition-colors duration-500"></div>
                        </a>

                        <div className="mt-12 flex gap-8 items-center opacity-30">
                            {['Creative', 'Fast', 'Scalable'].map((tag) => (
                                <span key={tag} className="text-[10px] uppercase font-bold tracking-[0.5em] text-gray-500 flex items-center gap-2">
                                    <Star size={10} /> {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Cyberpunk Grid Background Overlay */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            </section>
        </div>
    );
};

export default Home;
