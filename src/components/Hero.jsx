import React from 'react';
import { MousePointer2, Sparkles, Star, Zap, Heart, Ghost, Smile, Eye, Hammer, AlertTriangle, CheckCircle, ArrowRight, Activity, Terminal } from 'lucide-react';

const Hero = () => {
    return (
        <header id="hero" className="hero" style={{ position: 'relative', overflow: 'hidden', background: '#faf7ec' }}>
            {/* Background Texture & CRT Effects */}
            <div className="hero-bg" style={{ opacity: 0.15 }}>
                <img src="/assets/newspaper-hero.jpg" alt="Newspaper Background" style={{ filter: 'grayscale(1)' }} />
            </div>
            <div className="graph-paper" style={{ position: 'absolute', inset: 0, opacity: 0.1 }}></div>
            <div className="crt-overlay" style={{ pointerEvents: 'none' }}></div>
            <div className="scanline"></div>

            {/* Background Text Elements */}
            <div className="hero-bg-text hero-bg-text-1">CODE</div>
            <div className="hero-bg-text hero-bg-text-2">CREATE</div>
            <div className="hero-bg-text hero-bg-text-3">DESIGN</div>
            <div className="hero-bg-text hero-bg-text-4">BUILD</div>
            <div className="hero-bg-text hero-bg-text-5">DEBUG</div>
            <div className="hero-bg-text hero-bg-text-6">SHIP</div>

            {/* Handwritten Text & Arrows */}
            <div className="hero-handwritten hero-handwritten-1">Let's build something cool! →</div>
            <div className="hero-handwritten hero-handwritten-2">↓ Check this out</div>
            <div className="hero-handwritten hero-handwritten-3">← Fresh ideas</div>
            <div className="hero-arrow hero-arrow-1">↗</div>
            <div className="hero-arrow hero-arrow-2">↘</div>
            <div className="hero-arrow hero-arrow-3">↙</div>

            {/* SYST_STATUS FLOATING MONITOR */}
            <div className="syst-status-box animate-float" style={{
                position: 'absolute',
                top: '120px',
                right: '40px',
                zIndex: 20,
                transform: 'rotate(5deg)'
            }}>
                <div className="status-header">
                    <Activity size={12} className="animate-pulse" />
                    <span>SYSTEM_STATUS</span>
                </div>
                <div className="status-body">
                    <div className="status-row"><span>CPU_TEMP:</span> <span style={{ color: '#22c55e' }}>OPTIMAL</span></div>
                    <div className="status-row"><span>VIBE_LVL:</span> <span style={{ color: '#ec4899' }}>MAX_OUTPUT</span></div>
                    <div className="status-row"><span>BUGS_FIXED:</span> <span>1,240+</span></div>
                </div>
            </div>

            {/* Layout Decorations - High Energy Chaos */}
            <div className="hero-decorations">
                <div className="sticker sticker-pink animate-float sticker-interactive" style={{ top: '15%', left: '15%', transform: 'rotate(-15deg)', '--rotation': '-15deg' }}>
                    <Star size={18} fill="black" />
                    <span>BEST BUILD</span>
                </div>

                <div className="sticker sticker-blue animate-wiggle sticker-interactive" style={{ bottom: '25%', left: '12%', transform: 'rotate(10deg)', '--rotation': '10deg' }}>
                    <Zap size={18} fill="black" />
                    <span>FAST AF</span>
                </div>

                <div className="sticker sticker-yellow animate-float sticker-interactive" style={{ top: '65%', right: '8%', transform: 'rotate(-5deg)', '--rotation': '-5deg' }}>
                    <Smile size={18} />
                    <span>HIRE ME</span>
                </div>

                <div className="paper-scrap animate-float" style={{ top: '50%', left: '4%', transform: 'rotate(-8deg)', '--rotation': '-8deg' }}>
                    <Terminal size={14} style={{ marginRight: '5px' }} />
                    SNEHA_PROMPT &gt; _
                </div>

            </div>


            <div className="container hero-content animate-fade-in" style={{ position: 'relative', zIndex: 10 }}>
                <div className="tag-wrapper">
                    <div className="tag" style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        marginBottom: '2rem',
                        background: '#000',
                        color: '#fff',
                        padding: '0.6rem 1.4rem',
                        borderRadius: '50px',
                        fontWeight: '800',
                        textTransform: 'uppercase',
                        fontSize: '0.7rem',
                        letterSpacing: '1px',
                        boxShadow: '4px 4px 0px rgba(0,0,0,0.1)'
                    }}>
                        <Sparkles size={14} fill="#fde047" stroke="#fde047" />
                        Available for new projects
                    </div>
                    <div className="live-dot-tag">
                        <span className="dot pulse"></span>
                        LIVE_SCAN: ACTIVE_v2.1
                    </div>
                </div>

                <div style={{ position: 'relative', display: 'inline-block' }}>
                    <h1 className="hero-title" style={{ marginBottom: '2rem' }}>
                        <span className="title-outline" style={{ display: 'block', fontSize: 'clamp(3.5rem, 10vw, 6.5rem)', lineHeight: 0.9 }}>I Am Sneha Dutta</span>
                        <span className="title-solid glitch-text creative-underline" data-text="NOT TOO OLD" style={{ display: 'block', fontSize: 'clamp(3.5rem, 10vw, 6.5rem)', lineHeight: 0.9 }}>& 21 yrs old</span>
                    </h1>

                    {/* Handwritten Note */}
                    <div className="hero-handwritten" style={{
                        position: 'absolute',
                        bottom: '10px',
                        right: '-180px',
                        color: '#ec4899',
                        fontSize: '1.4rem',
                        transform: 'rotate(12deg)',
                        opacity: 1,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        pointerEvents: 'none'
                    }}>
                        ← <span style={{ fontFamily: 'Indie Flower', fontWeight: 'bold' }}>dont touch it</span>
                    </div>
                </div>

                <p className="hero-subtitle" style={{
                    maxWidth: '650px',
                    margin: '0 auto 3.5rem',
                    fontSize: '1.3rem',
                    fontWeight: '500',
                    lineHeight: '1.6',
                    color: '#333'
                }}>
                    Welcome to my <span className="marker-highlight">creative portfolio</span>. This is where I showcase my journey of turning complex logic into beautiful, functional, and chaotic <span style={{ fontStyle: 'italic', fontWeight: '700', color: '#ec4899' }}>digital experiences.</span>
                </p>

                <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
                    <button className="cta-button primary-cta" style={{
                        transform: 'rotate(-2deg)',
                        boxShadow: '8px 8px 0px black'
                    }}>
                        Explore station <ArrowRight size={18} style={{ marginLeft: '8px', paddingTop: '4px' }} />
                    </button>
                    <button className="cta-button secondary-cta" style={{
                        color: 'black',
                        border: '3px solid black',
                        background: 'transparent',
                        transform: 'rotate(2deg)',
                        boxShadow: '8px 8px 0px rgba(0,0,0,0.1)'
                    }}>
                        View Resume
                    </button>
                </div>

                {/* Bottom Scroll Detail */}
                <div style={{
                    marginTop: '6rem',
                    opacity: 0.4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '12px'
                }}>
                    <div className="mouse-anim">
                        <MousePointer2 size={32} />
                        <div className="click-wave"></div>
                    </div>
                    <span className="scroll-text">SCROLL_TO_DISCOVER</span>
                </div>
            </div>
        </header >
    );
};

export default Hero;
