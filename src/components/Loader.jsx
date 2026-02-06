import React, { useState, useEffect } from 'react';
import './Loader.css';
import { Power, Info } from 'lucide-react';

const Loader = ({ onEnter }) => {
    const [isTurningOn, setIsTurningOn] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + Math.random() * 5;
            });
        }, 100);
        return () => clearInterval(interval);
    }, []);

    const handlePowerClick = () => {
        if (progress < 100) return;

        // Add a slight delay for the 'click' feel before zooming
        setIsTurningOn(true);

        // The animation in CSS takes 1.5s, we trigger onEnter at the peak
        setTimeout(() => {
            onEnter();
        }, 1200);
    };

    return (
        <div className={`loader-overlay ${isTurningOn ? 'fade-out' : ''}`}>
            <div className="loader-container">
                {/* 3D TV DESIGN */}
                <div className={`tv-wrapper ${isTurningOn ? 'zoom-active' : ''}`}>
                    <div className="tv-case">
                        <div className="tv-vent top-vent"></div>
                        <div className="tv-screen-container">
                            <div className={`tv-screen ${progress >= 100 ? 'glitch-ready' : ''}`}>
                                {progress < 100 ? (
                                    <div className="snow-static-container">
                                        <div className="snow-static"></div>
                                        <div className="inference-bars"></div>
                                    </div>
                                ) : (
                                    <div className="glitch-content">
                                        <div className="glitch-text-loader">SYSTEM_READY</div>
                                        <div className="glitch-line"></div>
                                    </div>
                                )}
                                <div className="crt-lines"></div>
                                <div className="screen-reflection"></div>
                            </div>
                        </div>

                        <div className="tv-controls">
                            <div className="control-knob knob-1"></div>
                            <div className="control-knob knob-2"></div>
                            <button
                                className={`power-btn ${progress >= 100 ? 'pulse-btn' : 'disabled'}`}
                                onClick={handlePowerClick}
                                title={progress >= 100 ? "Power On" : "Loading..."}
                            >
                                <Power size={20} />
                            </button>
                        </div>

                        <div className="tv-brand">SNEHA_VISION_v1</div>
                    </div>
                    <div className="tv-legs">
                        <div className="leg left-leg"></div>
                        <div className="leg right-leg"></div>
                    </div>
                    <div className="tv-shadow"></div>
                </div>

                {/* LOADING INFO */}
                <div className="loader-info">
                    <div className="status-row">
                        <Info size={14} />
                        <span>INITIALIZING_LAB_PROTOCOL...</span>
                    </div>
                    <div className="progress-container">
                        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
                        <div className="progress-text">{Math.floor(progress)}%</div>
                    </div>

                    {progress >= 100 ? (
                        <div className="instruction animate-bounce">
                            CLICK THE RED BUTTON TO INITIALIZE
                        </div>
                    ) : (
                        <div className="instruction" style={{ opacity: 0.5 }}>
                            SYNCHRONIZING_SYSTEM_CACHE...
                        </div>
                    )}
                </div>
            </div>

            {/* Background Texture for Loader */}
            <div className="loader-noise"></div>
        </div>
    );
};

export default Loader;
