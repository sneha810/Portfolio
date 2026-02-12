import React from 'react';
import { Code2, Zap, Coffee, Sparkles, Smile, Star, Quote, ArrowDownRight, Scissors, Paperclip, Ghost } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="section graph-paper" style={{ position: 'relative', overflow: 'hidden', background: '#faf7ec' }}>
            {/* Minimal Background Marquee */}
            <div className="section-marquee" style={{ marginBottom: '5rem', opacity: 0.8 }}>
                <div className="marquee-content">
                    {[...Array(20)].map((_, i) => (
                        <React.Fragment key={i}>
                            <span className="marquee-item" style={{ color: '#2e0eceff' }}>ABOUT ME</span>
                            <span className="marquee-item" style={{ color: '#ec1ba6ff' }}>ABOUT ME</span>
                        </React.Fragment>
                    ))}
                </div>
            </div>

            <div className="container" style={{ position: 'relative' }}>
                {/* Random Scissors Doodle */}
                <div style={{ position: 'absolute', top: '10%', right: '5%', opacity: 0.2, transform: 'rotate(-20deg)' }} className="animate-wiggle">
                    <Scissors size={40} />
                </div>

                {/* NEW STICKY NOTE */}
                <div style={{
                    position: 'absolute', top: '5%', left: '0%',
                    background: '#86efac', padding: '1rem',
                    border: '1px solid black', boxShadow: '5px 5px 0px black',
                    transform: 'rotate(-5deg)', zIndex: 5,
                    fontFamily: 'Indie Flower', fontWeight: '900', fontSize: '0.9rem'
                }} className="animate-float">
                    <Paperclip size={16} style={{ position: 'absolute', top: '-10px', left: '10px' }} />
                    KEEP SCROLLING... <br /> MAGIC AHEAD!
                </div>

                <div className="about-grid" style={{ alignItems: 'center' }}>

                    {/* Visual Side */}
                    <div style={{ position: 'relative' }}>
                        <div className="polaroid" style={{ transform: 'rotate(-3deg)', zIndex: 10, margin: '0 auto', transition: 'transform 0.3s' }}>
                            <div className="confidential-stamp" style={{ top: '20px', left: '-30px', transform: 'rotate(-25deg) scale(0.8)' }}>CONFIDENTIAL</div>
                            <div className="card-tape" style={{ top: '-25px', width: '120px', background: 'rgba(236, 72, 153, 0.3)', transform: 'translateX(-50%) rotate(3deg)' }}></div>
                            <img
                                src="/assets/about-img.jpg"
                                alt="Sneha"
                                style={{ width: '100%', height: '400px', objectFit: 'cover', border: '2px solid black' }}
                            />

                            {/* Sketch Bubble */}
                            <div className="sketch-bubble" style={{ top: '-15px', right: '-30px', background: '#f9a8d4' }} >
                                THAT'S ME!
                            </div>

                            {/* Stitched Badge */}
                            <div style={{ position: 'absolute', bottom: '-20px', left: '-20px' }} className="sticker sticker-yellow" >
                                100% SNEHA
                            </div>
                        </div>

                        {/* Fun things under snap thing */}
                        <div style={{
                            marginTop: '2.5rem',
                            paddingLeft: '1rem',
                            fontFamily: 'Indie Flower',
                            fontWeight: '900',
                            color: '#1a1a1a',
                            fontSize: '1.2rem',
                            transform: 'rotate(-2deg)'
                        }} >
                            <Paperclip size={24} style={{ marginBottom: '0.5rem', color: '#64748b' }} />
                            <div style={{ borderBottom: '2px dashed #000', display: 'inline-block' }}>
                                EVIDENCE_01: ACTUAL HUMAN
                            </div>
                            <div style={{ marginTop: '0.5rem', fontSize: '1rem', opacity: 0.8 }}>
                                Verified // Signature: <span style={{ fontFamily: 'Dancing Script', fontSize: '1.8rem', color: '#ec4899', marginLeft: '10px' }}>Sneha</span>
                            </div>
                        </div>

                        {/* Hand-drawn Arrow */}
                        <div className="hand-drawn-arrow" style={{ top: '60%', right: '-40px', color: '#3b82f6' }} >
                            <ArrowDownRight size={80} strokeWidth={1} />
                        </div>
                    </div>

                    {/* Experimental Text Side */}
                    <div style={{ paddingTop: '1rem', position: 'relative' }} >
                        <Quote size={80} style={{ position: 'absolute', top: '-40px', left: '-40px', opacity: 0.05 }} />

                        <div style={{ marginBottom: '2.5rem' }}>
                            <h3 className="glitch-label" style={{ marginBottom: '1.2rem', display: 'inline-block', background: 'black', color: 'white', padding: '2px 10px', fontSize: '0.75rem' }}>SUBJECT_ID: SNEHA_v2.1</h3>
                            <h2 className="dossier-title" style={{ fontWeight: '950', lineHeight: '0.85', margin: '0', color: 'black', textTransform: 'uppercase', fontFamily: '"Outfit", sans-serif' }}>
                                CREATIVE <br />
                                <span style={{ color: '#ec4899', WebkitTextStroke: '2px black' }}>ENGINEER</span>.
                            </h2>
                        </div>

                        {/* BIOS_DATA_GRID */}
                        <div className="bios-data-grid" style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(2, 1fr)',
                            gap: '20px',
                            marginBottom: '3rem',
                            fontFamily: '"JetBrains Mono", monospace',
                        }}>
                            <div style={{ background: 'white', border: '3px solid black', padding: '18px', boxShadow: '6px 6px 0px #3b82f6', position: 'relative' }} >
                                <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 'bold', marginBottom: '5px' }}>// AGE_CYCLES</div>
                                <div style={{ fontSize: '1.3rem', fontWeight: '900' }}>21_YEARS</div>
                            </div>
                            <div style={{ background: 'white', border: '3px solid black', padding: '18px', boxShadow: '6px 6px 0px #ec4899' }} >
                                <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 'bold', marginBottom: '5px' }}>// ORIGIN_POINT</div>
                                <div style={{ fontSize: '1.3rem', fontWeight: '900' }}>KOLKATA_IN</div>
                            </div>
                            <div style={{ background: 'white', border: '3px solid black', padding: '18px', boxShadow: '6px 6px 0px #fde047', gridColumn: 'span 2' }} >
                                <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 'bold', marginBottom: '5px' }}>// MISSION_CORE</div>
                                <div style={{ fontSize: '1.1rem', fontWeight: '900', lineHeight: '1.3' }}>CURRENTLY PURSUING MY BACHELORS IN COMPUTER SCIENCE AND ENGINEERING.</div>
                            </div>
                        </div>

                        {/* DIAGNOSTIC_STATUS */}
                        <div style={{ marginBottom: '2.5rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontSize: '0.9rem', fontWeight: '900', fontFamily: '"JetBrains Mono", monospace' }}>
                                <span>SYSTEM_LOAD [GRADUATION_PROGRESS]</span>
                                <span>98%</span>
                            </div>
                            <div className="diagnostic-bar-container" style={{ height: '18px', background: 'white', border: '3px solid black', position: 'relative', overflow: 'hidden' }} >
                                <div style={{ height: '100%', width: '98%', background: '#22c55e', animation: 'scan 2s infinite linear' }}></div>
                            </div>
                        </div>

                        {/* Visual Skill Matrix */}
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                            {['React', 'Next.js', 'Typescript', 'Node.js', 'Framer Motion'].map((skill, i) => (
                                <div key={skill} style={{
                                    padding: '10px 22px',
                                    border: '3px solid black',
                                    fontWeight: '950',
                                    fontSize: '0.95rem',
                                    fontFamily: '"Outfit", sans-serif',
                                    transform: `rotate(${i % 2 === 0 ? 2 : -2}deg)`,
                                    background: i === 0 ? '#3b82f6' : i === 2 ? '#ec4899' : 'white',
                                    color: i === 0 || i === 2 ? '#fff' : '#000',
                                    boxShadow: '4px 4px 0px black'
                                }} >
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Background Texture Detail */}
            <div className="sticker-round animate-pulse-glow sticker-interactive" style={{
                position: 'absolute', bottom: '15%', right: '5%',
                background: '#ff5f56', color: 'white', transform: 'rotate(12deg)'
            }}>
                <span>CREATIVE<br />MIND</span>
            </div>

            <div className="sticker-tag animate-wiggle sticker-interactive" style={{
                position: 'absolute', top: '40%', left: '-20px',
                background: 'black', color: 'white', transform: 'rotate(90deg)'
            }}>
                DOODLE ART // 001
            </div>

            {/* Animated Mascot (Ghost Friend) */}
            <div className="animate-float lab-assistant" style={{
                position: 'absolute',
                bottom: '30px',
                left: '40px',
                zIndex: 20,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <div style={{
                    background: 'white',
                    border: '3px solid black',
                    borderRadius: '25px 25px 5px 5px',
                    padding: '12px',
                    boxShadow: '6px 6px 0px black',
                    animation: 'wiggle 2s infinite ease-in-out'
                }}>
                    <Ghost size={45} className="animate-pulse" />
                </div>
                <div className="glitch-label" style={{ marginTop: '8px', background: 'black', color: 'white', padding: '1px 8px', fontSize: '0.7rem' }}>LAB_ASSISTANT</div>
            </div>

            <div style={{ position: 'absolute', bottom: '-20px', left: '50%', transform: 'translateX(-50%)', opacity: 0.05 }}>
                <Star size={300} strokeWidth={1} />
            </div>

            {/* INTERACTIVE IDEA GENERATOR */}
            <IdeaGenerator />
        </section>
    );
};

// Internal Idea Generator Component
const IdeaGenerator = () => {
    const [idea, setIdea] = React.useState("PRESS BUTTON TO GENERATE IDEA");
    const [isAnimating, setIsAnimating] = React.useState(false);

    // THEME STATE: 'default' | 'pink' | 'yellow'
    const [themeColor, setThemeColor] = React.useState('#379bb7'); // Default Blue
    const [colorIndex, setColorIndex] = React.useState(0);

    // MODE STATE: false = Idea Mode, true = Roast Mode
    const [roastMode, setRoastMode] = React.useState(false);

    const colors = ['#379bb7', '#ec4899', '#facc15']; // Blue, Pink, Yellow

    const ideas = [
        "Tinder for Cats 🐱",
        "Uber for Toasters 🍞",
        "Spotify but only Elevator Music 🎵",
        "VR meditation for Robots 🤖",
        "A Social Network for Introverts (No Chat) 🤐",
        "Crypto wallet for Monopoly Money 💸",
        "Google Maps for Time Travel ⏳",
        "Shazam for Bird Noises 🐦",
        "LinkedIn for Ghosts 👻",
        "Fitbit for House Plants 🌿",
        "Zoom but everyone is a Potato 🥔",
        "AirBnB for Treehouses 🌳",
        "Netflix for 5-second movies 🎬",
        "Duolingo but it teaches Klingon only 👽"
    ];

    const roasts = [
        "Your CSS is so messy, even the browser is confused. 💀",
        "You treat warnings like suggestions. Fix them! ⚠️",
        "404: Your coding skills not found. 🔍",
        "Is that a feature or a bug? Yes. 🐛",
        "I’ve seen better code on a cereal box. 🥣",
        "Your commit messages are 'updates' and 'fix'. Do better. 🤡",
        "Console.log('here') is not a debugger. 🛑",
        "You push to main without testing? Brave. Or stupid. 💣",
        "Your variable names give me a headache. 'x', really? 📉",
        "That div is not centered. And it never will be. 📏"
    ];

    const toggleColor = () => {
        const nextIndex = (colorIndex + 1) % colors.length;
        setColorIndex(nextIndex);
        setThemeColor(colors[nextIndex]);
    };

    const toggleMode = () => {
        setRoastMode(prev => !prev);
        setIdea(roastMode ? "MODE: APP IDEAS 💡" : "MODE: TECH ROASTS 🔥");
    };

    const generateIdea = () => {
        setIsAnimating(true);
        let shuffleCount = 0;
        const sourceArray = roastMode ? roasts : ideas;

        const interval = setInterval(() => {
            setIdea(sourceArray[Math.floor(Math.random() * sourceArray.length)]);
            shuffleCount++;
            if (shuffleCount > 10) {
                clearInterval(interval);
                setIsAnimating(false);
            }
        }, 100);
    };

    return (
        <div className="container" style={{ position: 'relative', zIndex: 30 }}>
            {/* Dynamic Background Color */}
            <div className="idea-generator-container" style={{ background: themeColor, transition: 'background 0.3s ease' }}>

                {/* BUTTON 1: COLOR CHANGER */}
                <div
                    className="decorator-knob interactive-knob"
                    style={{ top: '20px', right: '20px', cursor: 'pointer', background: '#fff' }}
                    onClick={toggleColor}
                    title="Change Color Theme"
                ></div>

                {/* BUTTON 2: ROAST MODE TOGGLE */}
                <div
                    className="decorator-knob interactive-knob"
                    style={{ top: '60px', right: '20px', cursor: 'pointer', background: roastMode ? '#ff0000' : '#00ff00' }}
                    onClick={toggleMode}
                    title="Toggle Roast Mode"
                ></div>

                <div className="decorator-speaker" style={{ left: '20px', bottom: '20px' }}>
                    {[1, 2, 3, 4].map(i => <div key={i} className="speaker-grill"></div>)}
                </div>

                <div className="idea-display-screen" style={{
                    color: roastMode ? '#ef4444' : '#22c55e',
                    textShadow: roastMode ? '0 0 15px rgba(239, 68, 68, 0.6)' : '0 0 15px rgba(34, 197, 94, 0.6)'
                }}>
                    {idea}
                </div>

                <button onClick={generateIdea} className="idea-btn" disabled={isAnimating}>
                    {roastMode ? <Zap size={24} /> : <Sparkles size={24} />}
                    {isAnimating ? "PROCESSING..." : (roastMode ? "ROAST MY CODE 🔥" : "GENERATE NEW APP IDEA")}
                </button>
            </div>
        </div>
    );
};

export default About;
