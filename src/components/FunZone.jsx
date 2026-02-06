import React, { useState, useEffect } from 'react';
import { Shuffle, Sparkles, Lightbulb, Rocket, Zap } from 'lucide-react';

const FunZone = () => {
    const [currentIdea, setCurrentIdea] = useState(0);
    const [isSpinning, setIsSpinning] = useState(false);
    const [clicks, setClicks] = useState(0);

    const ideas = [
        { text: "Build a Chrome extension that replaces all images with cats 🐱", emoji: "🐱", color: "#ec4899" },
        { text: "Create an app that rates your coffee brewing skills ☕", emoji: "☕", color: "#f97316" },
        { text: "Design a website that only works on Tuesdays 📅", emoji: "📅", color: "#3b82f6" },
        { text: "Make a game where you debug code by fighting bugs 🐛", emoji: "🐛", color: "#22c55e" },
        { text: "Build a mood-based playlist generator 🎵", emoji: "🎵", color: "#a855f7" },
        { text: "Create a 'Procrastination Tracker' (ironically) ⏰", emoji: "⏰", color: "#fde047" },
        { text: "Design an AI that writes terrible poetry 📝", emoji: "📝", color: "#06b6d4" },
        { text: "Make a fitness app for your keyboard fingers 💪", emoji: "💪", color: "#ef4444" },
    ];

    const handleShuffle = () => {
        setIsSpinning(true);
        setClicks(clicks + 1);

        // Spin through multiple ideas quickly
        let count = 0;
        const interval = setInterval(() => {
            setCurrentIdea((prev) => (prev + 1) % ideas.length);
            count++;
            if (count > 10) {
                clearInterval(interval);
                setIsSpinning(false);
            }
        }, 100);
    };

    return (
        <section style={{
            background: '#faf7ec',
            padding: '100px 0',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Decorations */}
            <div style={{
                position: 'absolute',
                top: '10%',
                left: '5%',
                fontSize: '10rem',
                opacity: 0.05,
                transform: 'rotate(-20deg)',
                animation: 'float 6s ease-in-out infinite'
            }}>💡</div>
            <div style={{
                position: 'absolute',
                bottom: '10%',
                right: '8%',
                fontSize: '8rem',
                opacity: 0.05,
                transform: 'rotate(15deg)',
                animation: 'float 8s ease-in-out infinite',
                animationDelay: '2s'
            }}>🚀</div>

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '10px',
                        background: '#000',
                        color: '#fff',
                        padding: '10px 25px',
                        borderRadius: '50px',
                        marginBottom: '1.5rem',
                        fontWeight: '800',
                        fontSize: '0.8rem',
                        letterSpacing: '1px',
                        boxShadow: '4px 4px 0px rgba(0,0,0,0.2)'
                    }}>
                        <Lightbulb size={16} fill="#fde047" stroke="#fde047" />
                        RANDOM IDEA GENERATOR
                    </div>

                    <h2 style={{
                        fontSize: 'clamp(2.5rem, 6vw, 3.5rem)',
                        fontWeight: '900',
                        marginBottom: '1rem',
                        color: '#000'
                    }}>
                        Need Some <span style={{
                            background: 'linear-gradient(135deg, #ec4899, #3b82f6)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}>Inspiration?</span>
                    </h2>

                    <p style={{
                        fontFamily: 'Indie Flower',
                        fontSize: '1.3rem',
                        fontWeight: 'bold',
                        color: '#666'
                    }}>
                        Click the button for a wild project idea! 🎲
                    </p>
                </div>

                {/* Main Card */}
                <div style={{
                    maxWidth: '700px',
                    margin: '0 auto',
                    background: ideas[currentIdea].color,
                    border: '5px solid black',
                    borderRadius: '30px',
                    padding: '3rem 2.5rem',
                    boxShadow: '15px 15px 0px rgba(0,0,0,0.2)',
                    position: 'relative',
                    minHeight: '300px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'background 0.3s ease',
                    transform: isSpinning ? 'scale(0.98)' : 'scale(1)'
                }}>
                    {/* Decorative Stars */}
                    <div style={{
                        position: 'absolute',
                        top: '-20px',
                        right: '30px',
                        fontSize: '3rem',
                        animation: 'spin 3s linear infinite'
                    }}>⭐</div>
                    <div style={{
                        position: 'absolute',
                        bottom: '-15px',
                        left: '40px',
                        fontSize: '2.5rem',
                        animation: 'spin 4s linear infinite reverse'
                    }}>✨</div>

                    {/* Emoji Display */}
                    <div style={{
                        fontSize: '5rem',
                        marginBottom: '1.5rem',
                        animation: isSpinning ? 'bounce 0.5s infinite' : 'none'
                    }}>
                        {ideas[currentIdea].emoji}
                    </div>

                    {/* Idea Text */}
                    <p style={{
                        fontFamily: 'Indie Flower',
                        fontSize: '1.8rem',
                        fontWeight: 'bold',
                        color: '#fff',
                        textAlign: 'center',
                        margin: '0 0 2rem 0',
                        textShadow: '3px 3px 0px rgba(0,0,0,0.3)',
                        lineHeight: '1.4',
                        minHeight: '100px',
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        {ideas[currentIdea].text}
                    </p>

                    {/* Shuffle Button */}
                    <button
                        onClick={handleShuffle}
                        disabled={isSpinning}
                        style={{
                            background: '#fff',
                            color: '#000',
                            border: '4px solid black',
                            padding: '1rem 2.5rem',
                            borderRadius: '50px',
                            fontSize: '1.1rem',
                            fontWeight: '900',
                            cursor: isSpinning ? 'not-allowed' : 'pointer',
                            transition: 'all 0.3s ease',
                            boxShadow: '6px 6px 0px rgba(0,0,0,0.3)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            fontFamily: 'Outfit',
                            textTransform: 'uppercase',
                            letterSpacing: '1px',
                            opacity: isSpinning ? 0.7 : 1
                        }}
                        onMouseOver={(e) => {
                            if (!isSpinning) {
                                e.currentTarget.style.transform = 'translateY(-3px)';
                                e.currentTarget.style.boxShadow = '8px 8px 0px rgba(0,0,0,0.3)';
                            }
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '6px 6px 0px rgba(0,0,0,0.3)';
                        }}
                    >
                        <Shuffle size={20} strokeWidth={3} />
                        {isSpinning ? 'Shuffling...' : 'Get New Idea'}
                    </button>
                </div>

                {/* Stats */}
                <div style={{
                    marginTop: '3rem',
                    textAlign: 'center'
                }}>
                    <div style={{
                        display: 'inline-flex',
                        gap: '2rem',
                        flexWrap: 'wrap',
                        justifyContent: 'center'
                    }}>
                        <div style={{
                            background: '#fff',
                            border: '3px solid black',
                            borderRadius: '20px',
                            padding: '1rem 2rem',
                            boxShadow: '5px 5px 0px rgba(0,0,0,0.1)'
                        }}>
                            <div style={{
                                fontSize: '2rem',
                                fontWeight: '900',
                                color: '#ec4899'
                            }}>
                                {clicks}
                            </div>
                            <div style={{
                                fontSize: '0.85rem',
                                fontWeight: '800',
                                color: '#666',
                                textTransform: 'uppercase',
                                letterSpacing: '0.5px'
                            }}>
                                Ideas Generated
                            </div>
                        </div>

                        <div style={{
                            background: '#fff',
                            border: '3px solid black',
                            borderRadius: '20px',
                            padding: '1rem 2rem',
                            boxShadow: '5px 5px 0px rgba(0,0,0,0.1)'
                        }}>
                            <div style={{
                                fontSize: '2rem',
                                fontWeight: '900',
                                color: '#3b82f6'
                            }}>
                                {ideas.length}
                            </div>
                            <div style={{
                                fontSize: '0.85rem',
                                fontWeight: '800',
                                color: '#666',
                                textTransform: 'uppercase',
                                letterSpacing: '0.5px'
                            }}>
                                Total Ideas
                            </div>
                        </div>
                    </div>

                    {/* Fun Message */}
                    {clicks > 5 && (
                        <div style={{
                            marginTop: '2rem',
                            animation: 'bounceIn 0.6s ease-out'
                        }}>
                            <p style={{
                                fontFamily: 'Indie Flower',
                                fontSize: '1.2rem',
                                fontWeight: 'bold',
                                color: '#ec4899',
                                margin: 0
                            }}>
                                🎉 Wow! You're on a creative streak! 🎉
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default FunZone;
