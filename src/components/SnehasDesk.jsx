import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Sparkles, Heart, Star, Zap, Terminal, Code, Cpu } from 'lucide-react';
import './SnehasDesk.css';

const IdeaNode = ({ children, initialPos }) => {
    return (
        <motion.div
            className="idea-node-wrapper"
            style={{ ...initialPos }}
            drag
            dragConstraints={{ left: -400, right: 400, top: -200, bottom: 200 }}
            whileDrag={{ scale: 1.1, zIndex: 100 }}
            whileHover={{ y: -5 }}
        >
            {children}
            <div className="node-connector-line"></div>
        </motion.div>
    );
};

const SketchPolaroid = ({ image, label, theme }) => {
    return (
        <div className={`sketch-polaroid theme-${theme}`}>
            <div className="sketch-frame">
                <div className="sketch-img-container">
                    <img src={image} alt={label} />
                    <div className="sketch-overlay"></div>
                </div>
                <div className="sketch-label">{label}</div>
            </div>
            <div className="sketch-corner-accent"></div>
        </div>
    );
};

const SnehasDesk = () => {
    const [isFlashing, setIsFlashing] = useState(false);
    const [activeExplosion, setActiveExplosion] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isChaos, setIsChaos] = useState(false);
    const canvasRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!canvasRef.current) return;
        const rect = canvasRef.current.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
    };

    const triggerFlash = () => {
        setIsFlashing(true);
        setActiveExplosion(true);
        setTimeout(() => setIsFlashing(false), 150);
        setTimeout(() => setActiveExplosion(false), 1000);
    };

    const toggleChaos = () => {
        setIsChaos(true);
        setTimeout(() => setIsChaos(false), 2000);
    };

    return (
        <section className={`idea-canvas-section ${isChaos ? 'chaos-mode' : ''}`}>
            <div className="side-label side-label-left"></div>
            <div className="side-label side-label-right"></div>

            {/* Flash Effect */}
            <AnimatePresence>
                {isFlashing && (
                    <motion.div
                        className="canvas-flash"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.1 }}
                    />
                )}
            </AnimatePresence>

            <div className="canvas-container">
                <div className="draft-header">
                    <div className="draft-board">
                        {/* Background Technical Grid */}
                        <div className="draft-grid-overlay"></div>

                        {/* The 'CREATIVE' Specimen */}
                        <div className="draft-specimen creative-layer">
                            <h2 className="hero-clash-solid draft-text">CREATIVE</h2>
                            <div className="draft-measure-horz"><span>8400mm</span></div>
                        </div>

                        {/* The 'CORE' Foundation */}
                        <div className="draft-specimen core-layer">
                            <h2 className="hero-clash-outline draft-text">CORE</h2>
                            <div className="draft-measure-vert"><span>MAX_CAPACITY</span></div>
                        </div>

                        {/* Creative Annotations */}
                        <div className="draft-annotation brand-pen">
                            <svg width="100" height="100" viewBox="0 0 100 100" className="sketch-circle">
                                <path d="M10,50 A40,40 0 1,0 90,50 A40,40 0 1,0 10,50" fill="none" stroke="#ec4899" strokeWidth="3" strokeDasharray="300" strokeDashoffset="300" />
                            </svg>
                            <span className="draft-note">"RE-IMAGINE EVERYTHING"</span>
                        </div>

                        {/* Technical Metadata */}
                        {/* THE BIG RED BUTTON - Physical Industrial Toggle */}
                        <motion.div
                            className="chaos-button-wrap"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={toggleChaos}
                        >
                            <div className="chaos-btn-base">
                                <div className="chaos-btn-pillar"></div>
                                <div className="chaos-btn-top">
                                    <Zap size={16} />
                                    <span>CHAOS</span>
                                </div>
                            </div>
                            <div className="chaos-hint">FORCE_REBOOT_GRID</div>
                        </motion.div>
                    </div>
                </div>

                <div className="canvas-workspace" ref={canvasRef} onMouseMove={handleMouseMove}>


                    {/* THE INTERACTIVE CAMERA - THE SOURCE OF LIGHT */}
                    <div className="camera-hub">
                        <motion.div
                            className="sketch-camera"
                            onClick={triggerFlash}
                            drag
                            dragConstraints={canvasRef}
                            whileHover={{ scale: 1.05 }}
                            whileDrag={{ scale: 1.1, zIndex: 1000 }}
                        >
                            <div className="camera-sketch-body">
                                <div className="camera-lens-sketch">
                                    <div className="lens-iris"></div>
                                </div>
                                <div className="shutter-btn-glow"></div>
                                <Camera size={32} color="currentColor" />
                            </div>
                            <div className="hint-pill">CLICK_FOR_INSPIRATION</div>
                        </motion.div>

                        {/* Visual connections emitted from camera when active */}
                        <AnimatePresence>
                            {activeExplosion && (
                                <motion.div
                                    className="inspiration-burst"
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 2, opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    {[...Array(8)].map((_, i) => (
                                        <div key={i} className="burst-ray" style={{ transform: `rotate(${i * 45}deg)` }}></div>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* IDEA NODES - Pinned items */}
                    <IdeaNode initialPos={{ top: '10%', left: '15%' }}>
                        <SketchPolaroid image="/assets/about-img.jpg" label="VISUALS" theme="pink" />
                    </IdeaNode>

                    <IdeaNode initialPos={{ top: '15%', right: '15%' }}>
                        <SketchPolaroid image="/assets/newspaper-hero.jpg" label="STRUCTURE" theme="yellow" />
                    </IdeaNode>

                    <IdeaNode initialPos={{ bottom: '20%', left: '20%' }}>
                        <div className="idea-card terminal-card">
                            <Terminal size={20} />
                            <div className="card-content">
                                <span>$ build_future --smart</span>
                                <p>Iterative design and clean code.</p>
                            </div>
                        </div>
                    </IdeaNode>

                    <IdeaNode initialPos={{ bottom: '15%', right: '20%' }}>
                        <div className="idea-card mood-card">
                            <Heart size={20} fill="currentColor" />
                            <span>VIBE_CHECK: 100%</span>
                        </div>
                    </IdeaNode>

                    {/* Scraps & Stickers */}
                    <motion.div
                        className="canvas-sticker holographic-border"
                        drag
                        style={{ top: '40%', right: '10%' }}
                    >
                        <Zap size={18} />
                        <span>FAST_GEN</span>
                    </motion.div>

                    <motion.div
                        className="canvas-sticker glitch-text"
                        drag
                        style={{ bottom: '40%', left: '10%' }}
                    >
                        <Code size={18} />
                        <span>RAW_IDEAS</span>
                    </motion.div>

                    {/* Swirling Background Fragments */}
                    <div className="canvas-decor">
                        <div className="floating-frag frag-1"></div>
                        <div className="floating-frag frag-2"></div>
                        <div className="floating-frag frag-3"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SnehasDesk;
