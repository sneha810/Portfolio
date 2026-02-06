import React from 'react';
import { Terminal, FileCode, GraduationCap, Command, Code2, Globe, Cpu, Trophy } from 'lucide-react';

const SkillWorkspace = () => {
    return (
        <section className="section" style={{ background: '#fcf7ea', paddingTop: '0' }}>
            <div className="container" style={{ position: 'relative' }}>

                {/* Visual Label */}
                <div style={{
                    position: 'absolute',
                    top: '-20px',
                    left: '50%',
                    transform: 'translateX(-50%) rotate(-1deg)',
                    background: 'black',
                    color: 'white',
                    padding: '8px 25px',
                    fontWeight: '900',
                    fontSize: '0.8rem',
                    letterSpacing: '3px',
                    zIndex: 10
                }}>
                    SYSTEM WORKSPACE // SKILLS & EDU
                </div>

                <div className="editor-container">
                    {/* Education Sticky Notes - Overlapping the editor */}
                    <div className="edu-note note-1">
                        <GraduationCap size={20} style={{ marginBottom: '10px' }} />
                        <h4 style={{ fontWeight: '900', fontSize: '1.1rem' }}>B.Tech COMPUTER SCIENCE</h4>
                        <p style={{ fontSize: '0.9rem' }}>• Distinction Holder</p>
                        <p style={{ fontSize: '0.9rem' }}>• 2022 - 2026</p>
                    </div>

                    <div className="edu-note note-2">
                        <Trophy size={20} style={{ marginBottom: '10px' }} />
                        <h4 style={{ fontWeight: '900', fontSize: '1.1rem' }}>SOLO LEARNER</h4>
                        <p style={{ fontSize: '0.9rem' }}>• 500+ LeetCode Beats</p>
                        <p style={{ fontSize: '0.9rem' }}>• Full-Stack Mastery</p>
                    </div>

                    {/* VS Code Header */}
                    <div className="editor-header">
                        <div className="editor-dots">
                            <div className="dot red"></div>
                            <div className="dot yellow"></div>
                            <div className="dot green"></div>
                        </div>
                        <div style={{ color: '#858585', fontSize: '12px' }}>sneha-portfolio — Visual Studio Code</div>
                        <Command size={14} color="#858585" />
                    </div>

                    {/* Active Tab */}
                    <div className="editor-tab">
                        <FileCode size={16} color="#007acc" />
                        Skills.jsx
                    </div>

                    {/* Code Content Area */}
                    <div className="editor-content" style={{ position: 'relative' }}>
                        <div className="line-numbers">
                            {Array.from({ length: 20 }).map((_, i) => (
                                <div key={i}>{i + 1}</div>
                            ))}
                        </div>
                        <div className="code-area">
                            <div style={{ marginBottom: '20px' }}>
                                <span className="code-keyword">const</span> <span className="code-func">TechnicalStack</span> = () ={` > {`}
                            </div>

                            <div style={{ paddingLeft: '20px' }}>
                                <span className="code-keyword">return</span> (
                                <div style={{ paddingLeft: '20px', marginTop: '10px' }}>
                                    {/* Skills rendered as 3D blocks inside code */}
                                    <div className="skill-tag-3d"><Code2 size={12} style={{ marginRight: '5px' }} /> React.js</div>
                                    <div className="skill-tag-3d"><Globe size={12} style={{ marginRight: '5px' }} /> Next.js</div>
                                    <div className="skill-tag-3d"><Cpu size={12} style={{ marginRight: '5px' }} /> Node.js</div>
                                    <div className="skill-tag-3d"><Terminal size={12} style={{ marginRight: '5px' }} /> MongoDB</div>
                                    <div className="skill-tag-3d">TailwindCSS</div>
                                    <div className="skill-tag-3d">TypeScript</div>
                                    <div className="skill-tag-3d">Redux</div>
                                    <div className="skill-tag-3d">AWS</div>
                                </div>
                                );
                            </div>
                            <div>{`}`}</div>

                            <div style={{ marginTop: '30px', color: '#6a9955' }} className="code-comment">
                                // I build scalable web applications with a focus on <br />
                                // performance and pixel-perfect UI.
                            </div>
                        </div>
                    </div>

                    {/* Terminal Section */}
                    <div className="terminal-section">
                        <div style={{ display: 'flex', gap: '20px', marginBottom: '10px', color: '#858585' }}>
                            <span style={{ color: 'white', borderBottom: '1px solid white' }}>TERMINAL</span>
                            <span>OUTPUT</span>
                            <span>DEBUG CONSOLE</span>
                        </div>
                        <div className="terminal-prompt">
                            snehal@MacBook-Pro ~ % <span style={{ color: 'white' }}>npm run build-future</span>
                        </div>
                        <div style={{ color: '#858585', marginTop: '5px' }}>
                            &gt; Building digital excellence... [99%]
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SkillWorkspace;
