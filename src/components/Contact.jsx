import React from 'react';
import { Send, Mail, Github, Linkedin, Twitter, Instagram, Heart, Cloud, PenTool, MapPin, Phone } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="section" style={{ background: '#faf7ec', position: 'relative', overflow: 'hidden' }}>
            {/* Grid Background */}
            <div className="graph-paper" style={{ position: 'absolute', inset: 0, opacity: 1 }}></div>

            {/* Marquee at the top */}
            <div className="section-marquee" style={{ marginBottom: '4rem', transform: 'rotate(2deg)', marginTop: '-2rem' }}>
                <div className="marquee-content">
                    {[...Array(20)].map((_, i) => (
                        <React.Fragment key={i}>
                            <span className="marquee-item" style={{ color: '#000' }}>LET'S TALK // SEND IDEAS //</span>
                            <span className="marquee-item marquee-pink">GET IN TOUCH //</span>
                        </React.Fragment>
                    ))}
                </div>
            </div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>

                <div className="contact-layout" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>

                    {/* LEFT SIDE: The Creative Notebook Form */}
                    <div className="contact-form-side">
                        <div className="notebook-wrapper" style={{ position: 'relative' }}>
                            {/* Notebook Paper */}
                            <div className="notebook-modal" style={{
                                margin: 0,
                                transform: 'rotate(-2deg)',
                                maxWidth: '100%',
                                position: 'relative',
                                paddingLeft: '3.5rem' /* Space for holes */
                            }}>
                                {/* Visual Notebook Holes */}
                                <div className="notebook-holes">
                                    <div className="hole"></div>
                                    <div className="hole"></div>
                                    <div className="hole"></div>
                                    <div className="hole"></div>
                                    <div className="hole"></div>
                                    <div className="hole"></div>
                                </div>

                                {/* Washi Tape at top */}
                                <div className="card-tape" style={{ top: '-15px', left: '50%', transform: 'translateX(-50%) rotate(1deg)', width: '120px', background: 'rgba(59, 130, 246, 0.4)' }}></div>

                                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                                    <h3 style={{ fontFamily: 'Indie Flower', fontSize: '2rem', fontWeight: '900' }}>
                                        Dear Sneha,
                                    </h3>
                                </div>

                                <form className="modal-form" onSubmit={(e) => e.preventDefault()}>
                                    <div className="form-field">
                                        <input type="text" className="doodle-input form-input" placeholder="My name is..." required />
                                    </div>
                                    <div className="form-field">
                                        <input type="email" className="doodle-input form-input" placeholder="My email is..." required />
                                    </div>
                                    <div className="form-field" style={{ marginTop: '1rem' }}>
                                        <textarea className="doodle-input form-input" rows="4" placeholder="I have a crazy idea..." required style={{ border: 'none', background: 'transparent', lineHeight: '2rem' }}></textarea>
                                    </div>

                                    <button type="submit" className="send-btn" style={{
                                        marginTop: '20px',
                                        background: '#000',
                                        borderRadius: '50px',
                                        fontFamily: 'Indie Flower',
                                        fontSize: '1.2rem',
                                        padding: '10px 30px',
                                        width: '100%',
                                        position: 'relative'
                                    }}>
                                        Send your message
                                        <div className="handwritten-evidence" style={{ position: 'absolute', bottom: '-40px', right: '0', transform: 'rotate(-5deg)', fontSize: '0.8rem', width: 'max-content' }}>
                                            I reply super fast! ⚡
                                        </div>
                                        {/* <Heart size={18} fill="#ff5f56" color="#ff5f56" style={{ marginLeft: '10px' }} /> */}
                                    </button>
                                </form>
                            </div>

                            {/* Decorative Pen */}
                            <div style={{ position: 'absolute', bottom: '20px', right: '-40px', transform: 'rotate(-15deg)', filter: 'drop-shadow(5px 5px 0px rgba(0,0,0,0.1))' }}>
                                <PenTool size={60} color="#333" fill="#ec4899" />
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE: Contact Info & Creative Elements */}
                    <div className="contact-info-side">
                        <div style={{ position: 'relative', marginBottom: '3rem' }}>
                            <h2 style={{ lineHeight: 1 }}>
                                SAY <span className="circle-sketch">HELLO!</span>
                            </h2>
                            <p style={{ marginTop: '1rem', fontSize: '1.1rem', fontFamily: 'Indie Flower', fontWeight: '900', color: '#666' }}>
                                Don't be shy, I'm always open to <span className="wavy-underline">cool ideas</span>.
                            </p>
                            <div style={{ position: 'absolute', top: '-60px', right: '0px', opacity: 0.1, transform: 'rotate(10deg)' }}>
                                <Cloud size={120} fill="#3b82f6" />
                            </div>
                        </div>

                        {/* Sticky Note Info Card */}
                        <div className="sticky-note contact-coordinates-card" style={{
                            background: '#fde047',
                            backgroundImage: 'linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px)',
                            backgroundSize: '100% 1.5rem',
                            padding: '2rem 1.5rem',
                            boxShadow: '8px 8px 0px rgba(0,0,0,0.15)',
                            transform: 'rotate(2deg)',
                            marginBottom: '2rem',
                            position: 'relative',
                            border: '3px solid black',
                            width: '100%',
                            maxWidth: '450px'
                        }}>
                            <div className="staple" style={{
                                position: 'absolute',
                                top: '-12px',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                width: '50px',
                                height: '10px',
                                background: '#333',
                                borderRadius: '2px',
                                boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                            }}></div>

                            <h4 style={{
                                fontFamily: 'Outfit',
                                fontWeight: '900',
                                marginBottom: '1.5rem',
                                fontSize: '1.2rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.5px',
                                borderBottom: '3px solid black',
                                paddingBottom: '0.75rem',
                                width: '100%'
                            }}>
                                📍 Contact Info
                            </h4>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <div style={{
                                        background: '#fff',
                                        padding: '10px',
                                        borderRadius: '50%',
                                        border: '3px solid black',
                                        flexShrink: 0,
                                        boxShadow: '3px 3px 0px rgba(0,0,0,0.2)',
                                        width: '44px',
                                        height: '44px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Mail size={20} strokeWidth={2.5} />
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0 }}>
                                        <span style={{ fontSize: '0.7rem', fontWeight: '900', opacity: 0.7, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '3px' }}>EMAIL</span>
                                        <a href="mailto:antaraduttakol157@gmail.com" style={{
                                            fontWeight: '700',
                                            fontSize: '0.9rem',
                                            overflowWrap: 'break-word',
                                            wordBreak: 'break-all',
                                            lineHeight: '1.3',
                                            color: '#000',
                                            textDecoration: 'none',
                                            fontFamily: 'Outfit'
                                        }}>
                                            antaraduttakol157@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <div style={{
                                        background: '#fff',
                                        padding: '10px',
                                        borderRadius: '50%',
                                        border: '3px solid black',
                                        flexShrink: 0,
                                        boxShadow: '3px 3px 0px rgba(0,0,0,0.2)',
                                        width: '44px',
                                        height: '44px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <MapPin size={20} strokeWidth={2.5} />
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                                        <span style={{ fontSize: '0.7rem', fontWeight: '900', opacity: 0.7, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '3px' }}>LOCATION</span>
                                        <span style={{ fontWeight: '700', fontSize: '0.95rem', fontFamily: 'Outfit', lineHeight: '1.3' }}>
                                            🌍 Remote / Worldwide
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Links Row */}
                        <div>
                            <h4 style={{ fontFamily: 'Indie Flower', fontWeight: '900', marginBottom: '1rem', fontSize: '1.2rem' }}>STALK ME ON:</h4>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                {[Github, Linkedin, Twitter, Instagram].map((Icon, i) => (
                                    <a key={i} href="#" style={{
                                        background: '#fff',
                                        border: '3px solid black',
                                        padding: '12px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        transition: 'all 0.2s',
                                        boxShadow: '4px 4px 0px #000'
                                    }}
                                        onMouseOver={(e) => { e.currentTarget.style.transform = 'translate(-3px, -3px)'; e.currentTarget.style.boxShadow = '6px 6px 0px #ec4899'; }}
                                        onMouseOut={(e) => { e.currentTarget.style.transform = 'translate(0, 0)'; e.currentTarget.style.boxShadow = '4px 4px 0px #000'; }}
                                    >
                                        <Icon size={24} color="black" />
                                    </a>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            {/* CRAZY CONTACT DECORATIONS */}
            <div className="sticker-tag animate-wiggle sticker-interactive" style={{
                position: 'absolute', top: '15%', right: '15%',
                background: '#ff5f56', color: 'white', transform: 'rotate(10deg)'
            }} >
                URGENT // MAIL ME
            </div>

            {/* HANDWRITTEN NOTE */}
            <div className="handwritten-evidence" style={{ top: '25%', right: '8%', transform: 'rotate(10deg)' }}>
                <span style={{ fontSize: '2rem', lineHeight: 0.5 }}>⤹</span> Responds fast!
            </div>

            <div className="sticker-round animate-float sticker-interactive" style={{
                position: 'absolute', bottom: '10%', left: '5%',
                background: '#3b82f6', color: 'white', transform: 'rotate(-12deg)'
            }} >
                <span>SEND<br />IT!</span>
            </div>

            <div style={{
                position: 'absolute',
                top: '45%',
                left: '2%',
                opacity: 0.2,
                transform: 'rotate(-90deg)',
                fontFamily: 'Indie Flower',
                fontWeight: '900',
                fontSize: '0.8rem'
            }}>
                SMILE :) SMILE :) SMILE :)
            </div>

        </section>
    );
};

export default Contact;
