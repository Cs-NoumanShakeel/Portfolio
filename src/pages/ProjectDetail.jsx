import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Github, ArrowLeft, Cpu, Target, HelpCircle, CheckCircle, ExternalLink } from 'lucide-react';
import { projects } from '../utils/projects';
import { useEffect } from 'react';

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projects.find(p => p.id === id);

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) return <div className="pt-40 text-center text-4xl font-display font-bold">Project not found</div>;

    return (
        <div className="bg-pitch text-white min-h-screen selection:bg-primary/30">
            {/* Progress Bar */}
            <motion.div className="fixed top-0 left-0 right-0 h-1 bg-primary z-[110] origin-left" style={{ scaleX }} />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="pt-32 pb-40 px-6"
            >
                <div className="max-w-6xl mx-auto">
                    <Link to="/" className="inline-flex items-center gap-3 text-gray-500 hover:text-white mb-16 transition-all group font-bold text-[10px] uppercase tracking-[0.4em]">
                        <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" />
                        Back to Showcase
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-end mb-20">
                        <div className="lg:col-span-8">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="flex items-center gap-3 text-primary mb-6"
                            >
                                <Cpu size={20} />
                                <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Case Study</span>
                            </motion.div>
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-5xl md:text-8xl font-display font-black tracking-tighter leading-none"
                            >
                                {project.title}
                            </motion.h1>
                        </div>
                        <div className="lg:col-span-4 flex flex-wrap gap-2 justify-end">
                            {project.tech.map((t, i) => (
                                <span key={i} className="px-4 py-2 glass rounded-full text-[10px] font-bold text-primary uppercase tracking-[0.2em] border border-primary/20">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="aspect-[21/9] rounded-[3rem] overflow-hidden glass-dark mb-32 border border-white/5 relative group"
                    >
                        {project.isVideo ? (
                            <video
                                src={project.video}
                                autoPlay
                                loop
                                muted
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                            />
                        ) : (
                            <img
                                src={project.video}
                                alt={project.title}
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                            />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-pitch via-transparent to-transparent opacity-40"></div>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
                        <div className="lg:col-span-7 space-y-20">
                            <section>
                                <div className="flex items-center gap-3 mb-8">
                                    <Target className="text-primary" />
                                    <h2 className="text-xs uppercase tracking-[0.4em] font-bold text-white/50">Objective & Scope</h2>
                                </div>
                                <p className="text-gray-400 leading-relaxed text-2xl font-light">
                                    {project.fullDescription}
                                </p>
                            </section>

                            <section className="space-y-10">
                                <div className="flex items-center gap-3 mb-4">
                                    <HelpCircle className="text-red-400" />
                                    <h2 className="text-xs uppercase tracking-[0.4em] font-bold text-white/50">Technical Constraints</h2>
                                </div>
                                <div className="glass-dark p-12 rounded-[2.5rem] border border-white/5 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-red-400/5 rounded-full blur-3xl"></div>
                                    <p className="text-gray-300 italic text-lg leading-relaxed relative z-10">
                                        "{project.problems}"
                                    </p>
                                </div>
                            </section>

                            <section className="space-y-10">
                                <div className="flex items-center gap-3 mb-4">
                                    <CheckCircle className="text-green-400" />
                                    <h2 className="text-xs uppercase tracking-[0.4em] font-bold text-white/50">Engineered Solutions</h2>
                                </div>
                                <div className="glass-dark p-12 rounded-[2.5rem] border border-white/5 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-green-400/5 rounded-full blur-3xl"></div>
                                    <p className="text-gray-300 italic text-lg leading-relaxed relative z-10">
                                        "{project.solutions}"
                                    </p>
                                </div>
                            </section>
                        </div>

                        <div className="lg:col-span-5">
                            <div className="sticky top-40 space-y-8">
                                <div className="glass-dark p-10 rounded-[2.5rem] border border-white/5">
                                    <h3 className="text-sm uppercase tracking-[0.3em] font-bold mb-8 text-white/60">Project Outcome</h3>
                                    <div className="space-y-6 mb-10">
                                        <p className="text-sm text-gray-500 font-medium">Research-driven implementation focusing on scalability and user interaction.</p>
                                    </div>
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="w-full py-5 bg-white text-pitch font-black rounded-full flex items-center justify-center gap-3 hover:bg-gray-200 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-white/5"
                                    >
                                        <Github size={20} /> Clone Architecture
                                    </a>
                                </div>

                                <div className="p-10 rounded-[2.5rem] bg-gradient-to-br from-primary/10 to-accent/10 border border-white/5">
                                    <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/80 mb-4">Status: Verified</h3>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                        <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">Production Ready</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ProjectDetail;
