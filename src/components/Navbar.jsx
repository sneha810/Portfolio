import React, { useState } from 'react';
import { Github, Linkedin, Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className={`navbar ${isMenuOpen ? 'menu-open' : ''}`}>
            <div className="container nav-content">
                <div className="logo-text">PORTFOLIO.</div>

                {/* Desktop Menu */}
                <div className="nav-links">
                    <a href="#hero">Home</a>
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </div>

                <div className="nav-actions">
                    <div className="social-links d-none-mobile">
                        <a href="#" aria-label="GitHub"><Github size={20} /></a>
                        <a href="#" style={{ marginLeft: '1rem' }} aria-label="LinkedIn"><Linkedin size={20} /></a>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="mobile-toggle"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle Menu"
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="nav-links-mobile">
                    <a href="#hero" onClick={() => setIsMenuOpen(false)}>Home</a>
                    <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
                    <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
                    <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
