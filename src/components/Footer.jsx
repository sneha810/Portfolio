import React from 'react';
import { Heart, Github, Linkedin, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-receipt">
                    {/* Hand-written Label */}
                    <div className="receipt-annotation">THANK YOU!</div>

                    <div className="receipt-header">
                        <h3>SNEHA PORTFOLIO</h3>
                        <p style={{ fontSize: '0.7rem', opacity: 0.6 }}>TERMINAL: 002 // TRACE: #2026</p>
                    </div>

                    <div className="receipt-body">
                        <div className="receipt-line">
                            <span>UI/UX DESIGN</span>
                            <span>$ PREMIUM</span>
                        </div>
                        <div className="receipt-line">
                            <span>FULLSTACK DEV</span>
                            <span>$ ELITE</span>
                        </div>
                        <div className="receipt-line">
                            <span>PIXEL PERFECTION</span>
                            <span>$ FREE</span>
                        </div>
                        <div className="receipt-line">
                            <span>LATE NIGHT COFFEE</span>
                            <span>$ 999+</span>
                        </div>

                        <div className="receipt-total">
                            <span>TOTAL VIBE</span>
                            <span>100%</span>
                        </div>
                    </div>

                    <div style={{ marginTop: '2rem', textAlign: 'center', fontSize: '0.65rem', opacity: 0.5, lineHeight: '1.4' }}>
                        ******************************************<br />
                        MADE WITH <Heart size={10} fill="black" style={{ verticalAlign: 'middle' }} /> BY SNEHA <br />
                        COPYRIGHT © {currentYear} ALL RIGHTS RESERVED<br />
                        ******************************************
                    </div>

                </div>

                <div className="footer-social-receipt">
                    <a href="#" aria-label="GitHub">GITHUB</a>
                    <a href="#" aria-label="LinkedIn">LINKEDIN</a>
                    <a href="#" aria-label="Twitter">TWITTER</a>
                    <a href="#" aria-label="Instagram">INSTAGRAM</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
