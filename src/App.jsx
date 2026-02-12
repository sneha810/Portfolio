import React, { useEffect, useState } from 'react';
import './App.css';
import './hero_extra.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import SnehasDesk from './components/SnehasDesk';
import Projects from './components/Projects';
import SelfieCorner from './components/SelfieCorner';
import SkillWorkspace from './components/SkillWorkspace';
import Contact from './components/Contact';
import Footer from './components/Footer';

import Loader from './components/Loader';
import Lenis from 'lenis';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Lock scroll when loading
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      lenis.destroy();
      document.body.style.overflow = 'auto';
    };
  }, [loading]);

  return (
    <div className="app">
      {loading && <Loader onEnter={() => setLoading(false)} />}
      <div className={`main-ui ${loading ? 'hidden-ui' : 'visible-ui'}`}>
        <Navbar />
        <div className="scroll-content">
          <Hero />
          <About />
          <SnehasDesk />
          <Projects />
          <SelfieCorner />
          <SkillWorkspace />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
