import React, { useRef, useState, useEffect } from 'react';
import { RotateCcw, Sparkles, Heart, Aperture } from 'lucide-react';

const SelfieCorner = () => {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [stream, setStream] = useState(null);
    const [capturedImage, setCapturedImage] = useState(null);
    const [error, setError] = useState(null);
    const [countdown, setCountdown] = useState(null);

    useEffect(() => {
        return () => {
            if (stream) {
                stream.getTracks().forEach(track => track.stop());
            }
        };
    }, [stream]);

    const startCamera = async () => {
        try {
            const mediaStream = await navigator.mediaDevices.getUserMedia({
                video: { facingMode: "user" }
            });
            videoRef.current.srcObject = mediaStream;
            setStream(mediaStream);
            setError(null);
        } catch (err) {
            console.error("Error accessing camera:", err);
            setError("Could not access camera. Please allow permissions!");
        }
    };

    const takePhoto = () => {
        setCountdown(3);
        let count = 3;
        const timer = setInterval(() => {
            count--;
            setCountdown(count);
            if (count === 0) {
                clearInterval(timer);
                setCountdown(null);
                capture();
            }
        }, 1000);
    };

    const capture = () => {
        const video = videoRef.current;
        const canvas = canvasRef.current;
        if (video && canvas) {
            const context = canvas.getContext('2d');
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;

            // Flip context horizontally for mirror effect
            context.translate(canvas.width, 0);
            context.scale(-1, 1);

            context.drawImage(video, 0, 0, canvas.width, canvas.height);
            const image = canvas.toDataURL('image/png');
            setCapturedImage(image);
        }
    };

    const resetPhoto = () => {
        setCapturedImage(null);
    };

    return (
        <section id="selfie-corner" className="section selfie-station-section" style={{
            background: '#faf7ec',
            position: 'relative',
            overflow: 'hidden',
            padding: '100px 0'
        }}>
            {/* Scrapbook Background Elements */}
            <div className="selfie-bg-decorations">
                {/* Large Background Text */}
                <div className="bg-text bg-text-1">SMILE!</div>
                <div className="bg-text bg-text-2">KAWAII</div>
                <div className="bg-text bg-text-3">📸</div>

                {/* Hand-drawn Arrows */}
                <div className="doodle-arrow arrow-1">→</div>
                <div className="doodle-arrow arrow-2">↓</div>
                <div className="doodle-arrow arrow-3">←</div>

                {/* Sticky Notes */}
                <div className="sticky-note note-yellow" style={{ top: '15%', left: '8%', transform: 'rotate(-8deg)' }}>
                    <div className="note-content">
                        <p style={{ fontFamily: 'Indie Flower', fontSize: '1rem', margin: 0 }}>
                            Say cheese! 🧀
                        </p>
                    </div>
                </div>

                <div className="sticky-note note-pink" style={{ top: '60%', right: '10%', transform: 'rotate(5deg)' }}>
                    <div className="note-content">
                        <p style={{ fontFamily: 'Indie Flower', fontSize: '0.9rem', margin: 0 }}>
                            Best angle<br />is YOU! ✨
                        </p>
                    </div>
                </div>

                <div className="sticky-note note-blue" style={{ bottom: '15%', left: '12%', transform: 'rotate(-3deg)' }}>
                    <div className="note-content">
                        <p style={{ fontFamily: 'Indie Flower', fontSize: '0.9rem', margin: 0 }}>
                            Memories<br />loading... 💕
                        </p>
                    </div>
                </div>

                {/* Decorative Doodles */}
                <div className="doodle-star" style={{ top: '25%', right: '20%' }}>⭐</div>
                <div className="doodle-heart" style={{ bottom: '30%', right: '15%' }}>💗</div>
                <div className="doodle-sparkle" style={{ top: '40%', left: '15%' }}>✨</div>
            </div>

            <div className="container">

                {/* Decorative Header */}
                <div style={{ textAlign: 'center', marginBottom: '3rem', position: 'relative', zIndex: 10 }}>
                    <div className="sticker-pink animate-wiggle" style={{ position: 'absolute', top: '-20px', right: '20%', transform: 'rotate(15deg)' }}>
                        <Sparkles size={16} /> POPULAR!
                    </div>
                    <h2 className="section-title" style={{ color: '#ec4899', WebkitTextStroke: '2px black', fontSize: '3rem' }}>
                        SELFIE STATION 📸
                    </h2>
                    <p style={{ fontFamily: 'Indie Flower', fontSize: '1.2rem', fontWeight: 'bold' }}>
                        Capture your visit! (Don't worry, it stays in your browser)
                    </p>
                </div>

                <div className="photobooth-container">
                    {/* LEFT: Camera View with Y2K Frame */}
                    <div className="camera-interface-wrapper" style={{ position: 'relative', width: '100%', maxWidth: '500px' }}>
                        {/* The Camera Frame Asset */}
                        <img
                            src="/assets/camera-frame-v3.png"
                            alt="Y2K Camera Frame"
                            style={{ width: '100%', display: 'block', position: 'relative', zIndex: 10, pointerEvents: 'none' }}
                        />

                        {/* Video Layer - z-index 15 to sit ABOVE the frame */}
                        <div className="digital-screen-area" style={{
                            position: 'absolute',
                            top: '30%',
                            left: '7.5%',
                            width: '64%',
                            height: '46%',
                            zIndex: 15,
                            background: '#000',
                            borderRadius: '4px',
                            overflow: 'hidden'
                        }}>
                            <div className="camera-ui-header" style={{ fontSize: '0.6rem', padding: '5px' }}>
                                <span className="rec-dot"></span> REC
                                <span style={{ marginLeft: 'auto' }}>1080p</span>
                            </div>

                            {!stream && !capturedImage && (
                                <div className="camera-placeholder" style={{ background: 'transparent' }}>
                                    <Aperture size={40} style={{ marginBottom: '1rem', opacity: 0.5 }} />
                                    <button onClick={startCamera} className="booth-btn start-btn" style={{ padding: '5px 15px', fontSize: '0.8rem' }}>
                                        START
                                    </button>
                                </div>
                            )}

                            <video
                                ref={videoRef}
                                autoPlay
                                playsInline
                                className="camera-feed"
                                style={{ display: stream && !capturedImage ? 'block' : 'none', transform: 'scaleX(-1)' }}
                            />

                            {countdown && (
                                <div className="countdown-overlay" style={{ fontSize: '5rem' }}>
                                    {countdown}
                                </div>
                            )}
                        </div>

                        {/* Interactive invisible buttons - z-index 20 (still on top) */}
                        {stream && !capturedImage && (
                            <>
                                {/* Center OK Button */}
                                <button
                                    onClick={takePhoto}
                                    style={{
                                        position: 'absolute',
                                        top: '49%',
                                        right: '12%',
                                        width: '14%',
                                        height: '24%',
                                        borderRadius: '50%',
                                        background: 'rgba(255,255,255,0.01)',
                                        border: 'none',
                                        cursor: 'pointer',
                                        zIndex: 20
                                    }}
                                    aria-label="Take Photo"
                                />
                                {/* Label for user guidance */}
                                <div style={{
                                    position: 'absolute',
                                    right: '-10px',
                                    top: '40%',
                                    transform: 'translateX(100%)',
                                    background: 'white',
                                    padding: '5px 10px',
                                    border: '2px solid black',
                                    borderRadius: '4px',
                                    fontSize: '0.7rem',
                                    fontWeight: 'bold',
                                    whiteSpace: 'nowrap',
                                    zIndex: 20
                                }}>
                                    ← CLICK BUTTON!
                                </div>
                            </>
                        )}

                        {error && <div className="error-msg" style={{ position: 'absolute', bottom: '-40px', color: 'red', fontWeight: 'bold' }}>{error}</div>}

                        {/* Hidden canvas for capture */}
                        <canvas ref={canvasRef} style={{ display: 'none' }} />
                    </div>

                    {/* RIGHT: Polaroid Result */}
                    <div className="result-area">
                        {capturedImage ? (
                            <div className="polaroid-result animate-fade-in">
                                <div className="polaroid-film">
                                    <img src={capturedImage} alt="Your Selfie" />
                                    <div className="polaroid-decorations">
                                        <Heart size={24} fill="#ec4899" color="#ec4899" style={{ position: 'absolute', top: '10px', right: '10px' }} />
                                        <div style={{ position: 'absolute', bottom: '15px', left: '15px', fontFamily: '"Dancing Script"', fontSize: '1.5rem', color: '#333' }}>
                                            kawaii✨
                                        </div>
                                        <div style={{ position: 'absolute', bottom: '15px', right: '15px', fontSize: '0.8rem', color: '#999', fontFamily: 'monospace' }}>
                                            {new Date().toLocaleDateString()}
                                        </div>
                                    </div>
                                </div>
                                <div className="tape-strip"></div>

                                <button onClick={resetPhoto} className="booth-btn redo-btn">
                                    <RotateCcw size={18} /> RETAKE
                                </button>
                            </div>
                        ) : (
                            <div className="placeholder-polaroid">
                                <div className="polaroid-film empty" style={{ width: '280px', height: '320px' }}>
                                    <span style={{ opacity: 0.5 }}>PHOTO APPEARS HERE</span>
                                </div>
                                <div className="tape-strip"></div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Decorations */}
                <div className="sticker sticker-yellow" style={{ bottom: '10%', left: '5%', transform: 'rotate(-10deg)' }}>
                    KAWAII!! (◕‿◕)
                </div>
                <div className="sticker sticker-blue" style={{ top: '20%', right: '5%', transform: 'rotate(10deg)' }}>
                    MEMORY UNLOCKED
                </div>

            </div>
        </section >
    );
};

export default SelfieCorner;
