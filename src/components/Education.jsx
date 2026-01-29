import { motion } from 'framer-motion';
import { GraduationCap, Award, Compass, Sparkles, Binary } from 'lucide-react';

const Education = () => {
    return (
        <section id="education" className="py-32 px-6 max-w-7xl mx-auto overflow-hidden">
            <div className="text-center mb-20 relative">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-4 py-1 rounded-full glass border border-white/5 text-neon-blue/80 text-[10px] uppercase tracking-[0.3em] font-bold mb-6 shadow-md"
                >
                    <GraduationCap size={14} className="animate-pulse" />
                    <span>Academic Roots</span>
                </motion.div>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-6xl font-display font-extrabold"
                >
                    Forging the <span className="text-neon-blue/70">Next Generation</span> <br />
                    of Software Engineering.
                </motion.h2>
            </div>

            <div className="relative">
                {/* Background neon glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[120%] bg-neon-blue/2 rounded-full blur-[100px] pointer-events-none opacity-40"></div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="glass-dark p-10 md:p-16 rounded-[3rem] border border-white/5 relative z-10 shadow-2xl overflow-hidden group/main"
                >
                    {/* Cyberpunk grid overlay for the card */}
                    <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[linear-gradient(rgba(0,243,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(0,243,255,0.2)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start relative z-10">
                        <div className="lg:col-span-5 space-y-10">
                            <div className="space-y-2">
                                <span className="text-[10px] font-bold text-neon-blue uppercase tracking-widest opacity-70">University</span>
                                <h3 className="text-3xl font-display font-bold leading-tight group-hover/main:text-neon-blue transition-colors duration-700">Comsats Institute of <br /> Technology</h3>
                            </div>

                            <div className="glass p-8 rounded-3xl border-neon-blue/20 border-l-4 hover:border-l-neon-blue transition-all duration-500 group">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 bg-neon-blue/10 rounded-xl text-neon-blue group-hover:scale-110 transition-transform">
                                        <Binary size={24} />
                                    </div>
                                    <div>
                                        <p className="text-xl font-bold">BS Computer Science</p>
                                        <p className="text-xs text-gray-500 font-medium">Undergraduate • 7th Semester</p>
                                    </div>
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Focusing on <span className="text-white font-medium">Advanced ML</span>, Parallel Computing, and Full-Stack Engineering.
                                </p>
                            </div>

                            <div className="flex items-center gap-4 p-4 glass rounded-2xl border-white/5 hover:border-neon-blue/20 transition-colors group">
                                <div className="p-3 bg-white/5 rounded-lg text-yellow-500 group-hover:animate-bounce">
                                    <Award size={20} />
                                </div>
                                <p className="text-xs font-semibold text-gray-300">Outstanding Academic Performance and AI Research Interest</p>
                            </div>
                        </div>

                        <div className="lg:col-span-7 space-y-8">
                            <div className="space-y-6">
                                <h4 className="text-2xl font-display font-bold flex items-center gap-3">
                                    <Sparkles className="text-neon-blue animate-pulse" size={24} />
                                    Why Computer Science?
                                </h4>
                                <p className="text-gray-400 leading-relaxed text-lg font-light">
                                    I chose Computer Science because it empowers me to build solutions that scale. From a young age, I was fascinated by how technology could solve real-world problems. My journey at Comsats has been transformative, exposing me to the depths of algorithms, data structures, and the rapidly evolving field of <span className="text-neon-blue font-bold shadow-neon-blue/20">Artificial Intelligence</span>.
                                </p>
                                <div className="h-[1px] w-full bg-gradient-to-r from-neon-blue/20 via-white/10 to-transparent"></div>
                                <p className="text-gray-400 leading-relaxed">
                                    My long-term goal is to seamlessly integrate AI into web platforms, making intelligent systems accessible and user-friendly. Joining the industry will be a pivotal step in making AI a core part of my development stack. I am highly motivated to learn, build, and contribute to cutting-edge projects.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="p-4 sm:p-6 glass rounded-2xl group/stat hover:border-neon-blue/30 transition-all duration-500 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-neon-blue/5 opacity-0 group-hover/stat:opacity-100 transition-opacity"></div>
                                    <h5 className="text-neon-blue font-bold mb-1 text-sm sm:text-base relative z-10">91% Coverage</h5>
                                    <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold relative z-10">YOLO Detection Dataset</p>
                                </div>
                                <div className="p-4 sm:p-6 glass rounded-2xl group/stat hover:border-neon-purple/30 transition-all duration-500 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-neon-purple/5 opacity-0 group-hover/stat:opacity-100 transition-opacity"></div>
                                    <h5 className="text-neon-purple font-bold mb-1 text-sm sm:text-base relative z-10">Parallel RAG</h5>
                                    <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold relative z-10">High-Performance Retrieval</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Education;
