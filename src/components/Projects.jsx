import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, Plus, Eye, Lock, FileText, Zap, Globe, Rocket, ShieldCheck, X, Sparkles, Heart, RotateCcw, Cpu, Wifi, Activity, Terminal, Layers, PenTool } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

const ProjectCard = ({ project, index }) => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        setMousePos({ x, y });
    };

    const handleMouseLeave = () => {
        setMousePos({ x: 0, y: 0 });
    };

    return (
        <motion.div
            ref={cardRef}
            className="creative-card-wrapper"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
        >
            <motion.div
                className="premium-glass-card"
                style={{
                    rotateY: mousePos.x * 15,
                    rotateX: -mousePos.y * 15,
                    transformStyle: "preserve-3d"
                }}
            >
                {/* Floating "Field Note" Annotation */}
                <div className="card-annotation" style={{ rotate: `${index % 2 === 0 ? -5 : 5}deg` }}>
                    <PenTool size={12} />
                    <span>VERIFICATION_STAMP_v2</span>
                </div>

                {/* Internal Layered Content */}
                <div className="card-inner-layer" style={{ transform: "translateZ(40px)" }}>
                    <div className="card-visual-strip" style={{ backgroundColor: project.color + '22' }}>
                        <div className="visual-icon" style={{ color: project.color }}>
                            {project.icon}
                        </div>
                        <div className="visual-dots">
                            <div className="v-dot" style={{ backgroundColor: project.color }}></div>
                            <div className="v-dot" style={{ backgroundColor: project.color, opacity: 0.5 }}></div>
                            <div className="v-dot" style={{ backgroundColor: project.color, opacity: 0.2 }}></div>
                        </div>
                    </div>

                    <div className="card-content">
                        <div className="card-metadata">
                            <span className="meta-id">FILE_{project.title.substring(0, 3).toUpperCase()}</span>
                            <span className="meta-status">STABLE_MODULE</span>
                        </div>

                        <h3 className="card-title">{project.title}</h3>

                        <div className="card-tags">
                            {project.tags.map((tag, i) => (
                                <span key={i} className="creative-tag" style={{ color: project.color, borderColor: project.color + '44' }}>
                                    #{tag.toLowerCase()}
                                </span>
                            ))}
                        </div>

                        <p className="card-description">{project.description}</p>
                    </div>

                    <div className="card-footer">
                        <div className="footer-stats">
                            <div className="stat"> <Activity size={10} /> 99.9% </div>
                            <div className="stat"> <Zap size={10} /> FAST </div>
                        </div>

                        <motion.a
                            href={project.link}
                            className="creative-link-btn"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ x: 5 }}
                            style={{ color: project.color }}
                        >
                            ACCESS_PROTOTYPE <ArrowRight size={14} />
                        </motion.a>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="card-bg-grid"></div>
                <div className="card-corner-markers">
                    <span>+</span><span>+</span><span>+</span><span>+</span>
                </div>
            </motion.div>
        </motion.div>
    );
};

const Projects = () => {
    const projects = [
        {
            title: "YouTube Clone",
            description: "A pixel-perfect recreation of YouTube with video playback, search, and channel pages.",
            tags: ["React", "API", "MUI"],
            icon: <Zap size={30} />,
            color: "#ec4899", // Secondary Pink
            link: "https://youtube-clone-omega-five.vercel.app"
        },
        {
            title: "Nexus Dashboard",
            description: "Elegant and performant crypto tracking dashboard with real-time sockets.",
            tags: ["Next.js", "Recoil", "Tailwind"],
            icon: <Globe size={30} />,
            color: "#6366f1", // Primary Indigo
            link: "#"
        },
        {
            title: "Streamline CRM",
            description: "Business management tool optimized for fast-paced design agencies.",
            tags: ["Go", "SQL", "Typescript"],
            icon: <Rocket size={30} />,
            color: "#8b5cf6", // Violet
            link: "#"
        },
        {
            title: "Alpha Bot",
            description: "Automated trading engine with sentiment analysis and quick execution.",
            tags: ["Python", "Machine Learning"],
            icon: <Terminal size={30} />,
            color: "#10b981", // Emerald
            link: "#"
        }
    ];

    return (
        <section id="projects" className="section-creative-projects">
            {/* Background Texture elements to sync with the site */}
            <div className="creative-bg-deco">
                <div className="deco-line"></div>
                <div className="deco-text">GACHA_ARCHIVE_2024</div>
            </div>

            <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                <div className="creative-header">
                    <motion.div
                        className="header-badge"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                    >
                        // SYSTEM_CATALOG
                    </motion.div>
                    <h2 className="creative-title">SELECTED_WORKS</h2>
                    <p className="creative-subtitle">A collection of technical artifacts and digital experiences engineered with precision.</p>
                </div>

                <div className="creative-projects-grid">
                    {projects.map((p, i) => (
                        <ProjectCard key={i} project={p} index={i} />
                    ))}
                </div>

                {/* RESTORED: Keep Digging Sticky Note */}
                <div className="creative-sticky-hint animate-float">
                    <Sparkles size={18} />
                    <span>KEEP DIGGING... THERE'S 12+ MORE PROJECTS HIDDEN HERE</span>
                </div>

                {/* RESTORED: Spinning Badge Component */}
                <div className="project-spinning-badge">
                    <motion.div
                        className="badge-circle"
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                    >
                        <svg viewBox="0 0 100 100" width="100" height="100">
                            <defs>
                                <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                            </defs>
                            <text className="badge-text" fill="currentColor">
                                <textPath xlinkHref="#circle">
                                    GACHA_SPECIAL • PROJECTS • V4.0 •
                                </textPath>
                            </text>
                        </svg>
                    </motion.div>
                    <div className="badge-icon">
                        <RotateCcw size={20} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
