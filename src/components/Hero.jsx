import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';

const Hero = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();

    // Smooth scroll parallax
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.1 },
        },
    };

    const itemVariants = {
        hidden: { y: 40, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
        },
    };

    const profileVariants = {
        hidden: { scale: 0.8, opacity: 0, rotate: -10 },
        visible: {
            scale: 1,
            opacity: 1,
            rotate: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    // Preload background image to avoid jerks
    useEffect(() => {
        const img = new Image();
        img.src = "https://res.cloudinary.com/dw9dtsgdm/image/upload/v1769720242/background_otqv3z.jpg";
        img.onload = () => setIsLoaded(true);
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 overflow-hidden bg-pitch"
        >
            {/* Background Layer */}
            <motion.div
                style={{ y: y1, opacity }}
                className="absolute inset-0 z-0 pointer-events-none will-change-transform"
            >
                {/* Neon Blurs */}
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-neon-blue/10 rounded-full blur-[80px] animate-pulse"></div>
                <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-neon-purple/10 rounded-full blur-[70px] animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-[20%] right-[10%] w-[20%] h-[20%] bg-neon-green/5 rounded-full blur-[60px] animate-pulse" style={{ animationDelay: '2s' }}></div>

                {/* Scan Line Overlay */}
                <div className="scan-line opacity-10"></div>

                {/* Background Image */}
                <div className="absolute inset-0 w-full h-full">
                    <img
                        src="https://res.cloudinary.com/dw9dtsgdm/image/upload/v1769720242/background_otqv3z.jpg"
                        alt="Overlay"
                        loading="eager"
                        className="w-full h-full object-cover opacity-10 mix-blend-overlay"
                        style={{ willChange: 'opacity, transform' }}
                    />
                </div>
            </motion.div>

            {/* Main Content */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isLoaded ? 'visible' : 'hidden'}
                className="relative z-10 text-center max-w-5xl mx-auto"
            >
                {/* Profile */}
                <motion.div variants={profileVariants} className="mb-10 relative inline-block">
                    <div className="relative z-10 w-44 h-44 mx-auto rounded-full p-[2px] bg-gradient-to-tr from-neon-blue/40 via-neon-purple/40 to-neon-pink/40 border border-white/5 overflow-hidden group">
                        <div className="absolute inset-0 bg-pitch rounded-full group-hover:scale-95 transition-transform duration-700 ease-out"></div>
                        <img
                            src="https://res.cloudinary.com/dw9dtsgdm/image/upload/v1769720239/profile_govxcr.jpg"
                            alt="Nouman Mujahid"
                            fetchPriority="high"
                            onLoad={() => setIsLoaded(true)}
                            className={`relative z-10 w-full h-full object-cover rounded-full filter grayscale group-hover:grayscale-0 transition-opacity duration-500 group-hover:scale-110 will-change-transform ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                        />
                        {/* Scanning Bar */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-neon-blue/60 blur-[2px] animate-scan pointer-events-none group-hover:opacity-100 opacity-30 transition-opacity"></div>
                    </div>
                    {/* Animated ring */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-52 border border-neon-blue/20 rounded-full animate-ping opacity-20"></div>
                </motion.div>

                {/* Name */}
                <motion.div variants={itemVariants} className="mb-6 pt-10 relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-gradient-to-r from-transparent via-neon-blue/30 to-transparent"></div>
                    <h1 className="text-6xl md:text-9xl font-display font-black mb-4 tracking-tighter leading-[0.85] text-gray-300">
                        Nouman <br /> <span className="text-gray-300 border-b border-white/5">Mujahid</span>
                    </h1>
                </motion.div>

                {/* Subtitle */}
                <motion.h2
                    variants={itemVariants}
                    className="text-xl md:text-2xl font-display text-gray-400 mb-10 tracking-wide max-w-2xl mx-auto font-light"
                >
                    Engineering <span className="text-neon-blue font-medium italic underline decoration-neon-blue/40 underline-offset-8">Intelligent</span> Web Architectures at the intersection of AI & Design.
                </motion.h2>

                {/* Actions */}
                <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-6 items-center">
                    <a
                        href="/assets/resume/NoumanShakeel_resume.pdf"
                        target="_blank"
                        className="group relative px-10 py-4 bg-white text-pitch font-bold rounded-full overflow-hidden transition-all hover:pr-14 active:scale-95 shadow-lg"
                    >
                        <span className="relative z-10">Hire Nouman</span>
                        <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity"></div>
                        <ArrowRight className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all text-primary" size={20} />
                    </a>

                    <div className="flex gap-2 items-center glass-dark p-2 rounded-full border border-white/5 hover:border-neon-purple/30 transition-colors">
                        <a href="https://github.com/Cs-NoumanShakeel" target="_blank" className="p-3 text-gray-400 hover:text-neon-blue hover:bg-neon-blue/5 rounded-full transition-all">
                            <Github size={22} className="group-hover:drop-shadow-[0_0_8px_#00f3ff]" />
                        </a>
                        <a href="http://www.linkedin.com/in/nouman-shakeel-214ab9361" target="_blank" className="p-3 text-gray-400 hover:text-neon-purple hover:bg-neon-purple/5 rounded-full transition-all">
                            <Linkedin size={22} className="group-hover:drop-shadow-[0_0_8px_#bc13fe]" />
                        </a>
                        <a href="mailto:noumannorm648@gmail.com" className="p-3 text-gray-400 hover:text-neon-pink hover:bg-neon-pink/5 rounded-full transition-all">
                            <Mail size={22} className="group-hover:drop-shadow-[0_0_8px_#ff00ff]" />
                        </a>
                    </div>
                </motion.div>
            </motion.div>

            {/* Floating Cybernetic Marker */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40"
            >
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-gray-500">Scroll down</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent opacity-30"></div>
            </motion.div>

            {/* Cyberpunk grid overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[linear-gradient(rgba(0,243,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(0,243,255,0.2)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </section>
    );
};

export default Hero;
