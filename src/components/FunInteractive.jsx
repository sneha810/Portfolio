import React, { useState } from 'react';
import { Code, Sparkles, Heart, Zap, Coffee, Music, Gamepad2, Palette, Trophy, Star } from 'lucide-react';

const FunInteractive = () => {
    const [flippedCards, setFlippedCards] = useState([]);

    const handleCardClick = (index) => {
        if (flippedCards.includes(index)) {
            setFlippedCards(flippedCards.filter(i => i !== index));
        } else {
            setFlippedCards([...flippedCards, index]);
        }
    };

    const bentoCards = [
        {
            id: 0,
            size: 'large',
            front: { icon: Code, bg: '#3b82f6', title: 'Code Wizard', emoji: '🧙‍♂️' },
            back: { text: 'Turning coffee into code since 2020! ☕→💻', color: '#2563eb' }
        },
        {
            id: 1,
            size: 'small',
            front: { icon: Coffee, bg: '#ec4899', title: 'Coffee Addict', emoji: '☕' },
            back: { text: '∞ cups/day', color: '#db2777' }
        },
        {
            id: 2,
            size: 'small',
            front: { icon: Music, bg: '#fde047', title: 'Music Lover', emoji: '🎵' },
            back: { text: 'Coding playlist: 24/7 lofi beats', color: '#facc15' }
        },
        {
            id: 3,
            size: 'medium',
            front: { icon: Palette, bg: '#22c55e', title: 'Design Enthusiast', emoji: '🎨' },
            back: { text: 'Pixel-perfect designs are my jam!', color: '#16a34a' }
        },
        {
            id: 4,
            size: 'small',
            front: { icon: Gamepad2, bg: '#f97316', title: 'Gamer', emoji: '🎮' },
            back: { text: 'Level 99 Developer', color: '#ea580c' }
        },
        {
            id: 5,
            size: 'medium',
            front: { icon: Zap, bg: '#a855f7', title: 'Fast Learner', emoji: '⚡' },
            back: { text: 'New tech? Challenge accepted!', color: '#9333ea' }
        },
        {
            id: 6,
            size: 'large',
            front: { icon: Trophy, bg: '#06b6d4', title: 'Achievement Hunter', emoji: '🏆' },
            back: { text: '50+ projects completed & counting!', color: '#0891b2' }
        },
        {
            id: 7,
            size: 'small',
            front: { icon: Heart, bg: '#ef4444', title: 'Love Coding', emoji: '💖' },
            back: { text: 'Passion > Profession', color: '#dc2626' }
        }
    ];

    const getSizeClass = (size) => {
        switch (size) {
            case 'large': return 'bento-large';
            case 'medium': return 'bento-medium';
            case 'small': return 'bento-small';
            default: return 'bento-small';
        }
    };

    return (
        <section className="bento-section" style={{
            background: '#faf7ec',
            padding: '100px 0',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Playful Background Elements */}
            <div style={{
                position: 'absolute',
                top: '5%',
                left: '3%',
                fontSize: '12rem',
                opacity: 0.03,
                transform: 'rotate(-15deg)',
                fontWeight: '900'
            }}>✨</div>
            <div style={{
                position: 'absolute',
                bottom: '10%',
                right: '5%',
                fontSize: '10rem',
                opacity: 0.03,
                transform: 'rotate(20deg)',
                fontWeight: '900'
            }}>🎯</div>

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
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
                        <Sparkles size={16} fill="#fde047" stroke="#fde047" />
                        INTERACTIVE BENTO BOX
                    </div>

                    <h2 style={{
                        fontSize: 'clamp(2.5rem, 6vw, 3.5rem)',
                        fontWeight: '900',
                        marginBottom: '1rem',
                        color: '#000'
                    }}>
                        Get to <span style={{
                            background: 'linear-gradient(135deg, #ec4899, #3b82f6)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}>Know Me</span>
                    </h2>

                    <p style={{
                        fontFamily: 'Indie Flower',
                        fontSize: '1.3rem',
                        fontWeight: 'bold',
                        color: '#666',
                        marginBottom: '0.5rem'
                    }}>
                        Click the cards to flip them! 🎴
                    </p>
                    <p style={{
                        fontSize: '0.9rem',
                        color: '#999',
                        fontWeight: '600'
                    }}>
                        {flippedCards.length} / {bentoCards.length} cards discovered
                    </p>
                </div>

                {/* Bento Grid */}
                <div className="bento-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                    gap: '1.5rem',
                    maxWidth: '1100px',
                    margin: '0 auto',
                    gridAutoRows: '180px'
                }}>
                    {bentoCards.map((card) => {
                        const Icon = card.front.icon;
                        const isFlipped = flippedCards.includes(card.id);

                        return (
                            <div
                                key={card.id}
                                className={`bento-card ${getSizeClass(card.size)} ${isFlipped ? 'flipped' : ''}`}
                                onClick={() => handleCardClick(card.id)}
                                style={{
                                    cursor: 'pointer',
                                    perspective: '1000px',
                                    gridColumn: card.size === 'large' ? 'span 2' : 'span 1',
                                    gridRow: card.size === 'large' ? 'span 2' : card.size === 'medium' ? 'span 2' : 'span 1'
                                }}
                            >
                                <div className="bento-card-inner" style={{
                                    position: 'relative',
                                    width: '100%',
                                    height: '100%',
                                    transition: 'transform 0.6s',
                                    transformStyle: 'preserve-3d',
                                    transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
                                }}>
                                    {/* Front Side */}
                                    <div className="bento-card-front" style={{
                                        position: 'absolute',
                                        width: '100%',
                                        height: '100%',
                                        backfaceVisibility: 'hidden',
                                        background: card.front.bg,
                                        border: '4px solid black',
                                        borderRadius: '20px',
                                        padding: '1.5rem',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between',
                                        boxShadow: '8px 8px 0px rgba(0,0,0,0.2)',
                                        overflow: 'hidden'
                                    }}>
                                        {/* Decorative circles */}
                                        <div style={{
                                            position: 'absolute',
                                            top: '-30px',
                                            right: '-30px',
                                            width: '100px',
                                            height: '100px',
                                            borderRadius: '50%',
                                            background: 'rgba(255,255,255,0.1)',
                                            border: '3px solid rgba(255,255,255,0.2)'
                                        }}></div>

                                        <div style={{
                                            background: 'rgba(255,255,255,0.95)',
                                            width: '50px',
                                            height: '50px',
                                            borderRadius: '50%',
                                            border: '3px solid black',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            boxShadow: '3px 3px 0px rgba(0,0,0,0.2)',
                                            position: 'relative'
                                        }}>
                                            <Icon size={24} color="#000" strokeWidth={2.5} />
                                        </div>

                                        <div style={{ position: 'relative' }}>
                                            <div style={{
                                                fontSize: '2.5rem',
                                                marginBottom: '0.5rem'
                                            }}>
                                                {card.front.emoji}
                                            </div>
                                            <h3 style={{
                                                fontSize: '1.1rem',
                                                fontWeight: '900',
                                                color: '#fff',
                                                textShadow: '2px 2px 0px rgba(0,0,0,0.3)',
                                                margin: 0,
                                                fontFamily: 'Outfit'
                                            }}>
                                                {card.front.title}
                                            </h3>
                                        </div>

                                        {/* Click indicator */}
                                        <div style={{
                                            position: 'absolute',
                                            bottom: '10px',
                                            right: '10px',
                                            background: 'rgba(255,255,255,0.9)',
                                            padding: '4px 8px',
                                            borderRadius: '20px',
                                            fontSize: '0.7rem',
                                            fontWeight: '800',
                                            border: '2px solid black'
                                        }}>
                                            FLIP →
                                        </div>
                                    </div>

                                    {/* Back Side */}
                                    <div className="bento-card-back" style={{
                                        position: 'absolute',
                                        width: '100%',
                                        height: '100%',
                                        backfaceVisibility: 'hidden',
                                        background: card.back.color,
                                        border: '4px solid black',
                                        borderRadius: '20px',
                                        padding: '1.5rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        transform: 'rotateY(180deg)',
                                        boxShadow: '8px 8px 0px rgba(0,0,0,0.2)',
                                        overflow: 'hidden'
                                    }}>
                                        {/* Star decorations */}
                                        <Star size={40} style={{
                                            position: 'absolute',
                                            top: '10px',
                                            right: '10px',
                                            opacity: 0.2
                                        }} fill="#fff" />
                                        <Star size={30} style={{
                                            position: 'absolute',
                                            bottom: '15px',
                                            left: '15px',
                                            opacity: 0.2
                                        }} fill="#fff" />

                                        <p style={{
                                            fontFamily: 'Indie Flower',
                                            fontSize: card.size === 'large' ? '1.5rem' : '1.2rem',
                                            fontWeight: 'bold',
                                            color: '#fff',
                                            textAlign: 'center',
                                            margin: 0,
                                            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                                            position: 'relative',
                                            zIndex: 1
                                        }}>
                                            {card.back.text}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Completion Message */}
                {flippedCards.length === bentoCards.length && (
                    <div style={{
                        marginTop: '3rem',
                        textAlign: 'center',
                        animation: 'bounceIn 0.6s ease-out'
                    }}>
                        <div style={{
                            background: 'linear-gradient(135deg, #fde047, #ec4899)',
                            padding: '1.5rem 2.5rem',
                            borderRadius: '20px',
                            border: '4px solid black',
                            boxShadow: '8px 8px 0px rgba(0,0,0,0.2)',
                            display: 'inline-block',
                            transform: 'rotate(-2deg)'
                        }}>
                            <p style={{
                                fontFamily: 'Indie Flower',
                                fontSize: '1.8rem',
                                fontWeight: 'bold',
                                color: '#fff',
                                margin: 0,
                                textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                            }}>
                                🎉 You discovered all my secrets! 🎉
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default FunInteractive;
