import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { technologies } from '../utils/tech';
import { Layers, Terminal } from 'lucide-react';

const TechStack = () => {
    const [showAll, setShowAll] = useState(false);
    const displayedTech = showAll ? technologies : technologies.slice(0, 6);

    return (
        <section id="tech" className="py-32 px-6 max-w-7xl mx-auto relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-neon-purple/2 blur-[100px] pointer-events-none rounded-full opacity-40"></div>

            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 relative z-10">
                <div className="max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 text-neon-purple/70 mb-4"
                    >
                        <Terminal size={20} />
                        <span className="text-[10px] uppercase tracking-[0.4em] font-bold">The Tech Stack</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-display font-extrabold tracking-tight"
                    >
                        A Technical <span className="text-white/40 italic">Arsenal</span> <br />
                        Powered by <span className="text-neon-purple/80 italic">AI & Innovation</span>.
                    </motion.h2>
                </div>
                <motion.button
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    onClick={() => setShowAll(!showAll)}
                    className="px-8 py-3 glass rounded-full hover:bg-neon-purple/10 transition-all font-bold text-[10px] uppercase tracking-[0.2em] border border-white/5 hover:border-neon-purple/30 group"
                >
                    <span className="group-hover:text-neon-purple transition-colors">{showAll ? 'Show Efficiency' : 'View Full Stack'}</span>
                </motion.button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                <AnimatePresence>
                    {displayedTech.map((tech) => (
                        <motion.div
                            key={tech.name}
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.4 }}
                            whileHover={{ y: -5, borderColor: 'rgba(188, 19, 254, 0.4)' }}
                            className="glass-dark p-8 rounded-[2rem] border border-white/5 hover:bg-white/[0.02] transition-colors relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-neon-purple/5 rounded-full blur-3xl group-hover:bg-neon-purple/10 transition-colors"></div>

                            {/* Neon Glow Dot */}
                            <div className="absolute top-6 right-6 w-1 h-1 bg-neon-purple rounded-full shadow-[0_0_8px_#bc13fe] opacity-50"></div>

                            <div className="relative z-10">
                                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center p-3 mb-6 group-hover:scale-110 transition-transform duration-500 border-neon-purple/10 group-hover:border-neon-purple/40 shadow-xl group-hover:shadow-neon-purple/10">
                                    <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500" />
                                </div>
                                <h3 className="text-xl font-display font-bold mb-3 group-hover:text-neon-purple transition-colors">{tech.name}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                                    {tech.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default TechStack;
