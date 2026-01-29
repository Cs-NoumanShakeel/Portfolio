import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight, Cpu } from 'lucide-react';
import { isEmbedType } from '../utils/video';

const ProjectCard = ({ project, index }) => {
    const navigate = useNavigate();
    const cardRef = useRef(null);
    const useEmbed = project.videoType && isEmbedType(project.videoType);

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            whileHover={{ y: -5 }}
            className="group relative flex flex-col glass-dark rounded-[1.5rem] overflow-hidden border border-white/5 hover:border-neon-blue/20 transition-all duration-500 shadow-xl will-change-transform"
        >
            {/* Media Container — bg-pitch prevents white flash before video/image loads */}
            <div className="relative aspect-video overflow-hidden bg-pitch">
                {useEmbed ? (
                    <iframe
                        src={project.video}
                        title={project.title}
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full"
                    />
                ) : project.isVideo ? (
                    <video
                        src={project.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out will-change-transform"
                    />
                ) : (
                    <img
                        src={project.video}
                        alt={project.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-out will-change-transform"
                    />
                )}

                {/* Overlay Gradients */}
                <div className="absolute inset-0 bg-gradient-to-tr from-pitch/90 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-700"></div>

                {/* Neon Scanning Effect Line */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="scan-line"></div>
                </div>

                {/* Floating Icons */}
                <div className="absolute top-4 right-4 p-2.5 glass rounded-full opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 border-neon-blue/10">
                    <ArrowUpRight className="text-neon-blue/70" size={16} />
                </div>
                <div className="absolute bottom-4 left-4 flex gap-1.5">
                    {project.tech.slice(0, 2).map((t, i) => (
                        <span key={i} className="px-2.5 py-1 glass rounded-md text-[8px] font-bold text-white/50 uppercase tracking-widest backdrop-blur-md group-hover:text-neon-blue transition-colors group-hover:border-neon-blue/20">
                            {t}
                        </span>
                    ))}
                </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow relative z-10">
                <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-display font-bold text-white group-hover:text-neon-blue transition-colors duration-300">
                        {project.title}
                    </h3>
                    <Cpu className="text-white/5 group-hover:text-neon-blue/20 transition-colors" size={20} />
                </div>

                <p className="text-gray-500 text-xs leading-relaxed mb-6 flex-grow line-clamp-2 group-hover:text-gray-400 transition-colors">
                    {project.description}
                </p>

                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/project/${project.id}`);
                    }}
                    className="w-full py-4 text-[10px] uppercase tracking-[0.3em] font-bold text-gray-500 group-hover:text-white border-t border-white/5 group-hover:border-neon-blue/20 transition-all flex items-center justify-center gap-2 relative overflow-hidden group/btn"
                >
                    <span className="relative z-10 group-hover/btn:tracking-[0.4em] transition-all">Explore Case Study</span>
                    <div className="absolute inset-0 bg-neon-blue/5 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                </button>
            </div>

            {/* Subtle Bottom Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[1px] bg-gradient-to-r from-transparent via-neon-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
        </motion.div>
    );
};

export default ProjectCard;
