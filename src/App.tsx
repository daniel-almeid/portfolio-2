import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slideAndFade = {
  hidden: { 
    opacity: 0, 
    y: 50,
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const AnimatedSection: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    initial="hidden" 
    whileInView="visible" 
    viewport={{ once: true, amount: 0.1 }} 
    variants={slideAndFade} 
  >
    {children}
  </motion.div>
);

const App: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);


  // Referências para as seções
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  
  const scrollToHome = () => homeRef.current?.scrollIntoView({ behavior: 'smooth' });
  const scrollToAbout = () => aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  const scrollToExperience = () => experienceRef.current?.scrollIntoView({ behavior: 'smooth' });
  const scrollToSkills = () => skillsRef.current?.scrollIntoView({ behavior: 'smooth' });
  const scrollToProjects = () => projectsRef.current?.scrollIntoView({ behavior: 'smooth' });

  const toggleMenu = () => setShowMenu((prevState) => !prevState);

  return (
    <div>
      <Header
        scrollToHome={scrollToHome}
        scrollToAbout={scrollToAbout}
        scrollToExperience={scrollToExperience}
        scrollToSkills={scrollToSkills}
        scrollToProjects={scrollToProjects}
        toggleMenu={toggleMenu}
        showMenu={showMenu}
      />

      <div ref={homeRef}>
        <AnimatedSection>
          <Home
            scrollToAbout={scrollToAbout}
            scrollToExperience={scrollToExperience}
            scrollToSkills={scrollToSkills}
            scrollToProjects={scrollToProjects}
          />
        </AnimatedSection>
      </div>

      <div ref={aboutRef}>
        <AnimatedSection>
          <About />
        </AnimatedSection>
      </div>

      <div ref={experienceRef}>
        <AnimatedSection>
          <Experience />
        </AnimatedSection>
      </div>

      <div ref={skillsRef}>
        <AnimatedSection>
          <Skills />
        </AnimatedSection>
      </div>

      <div ref={projectsRef}>
        <AnimatedSection>
          <Projects />
        </AnimatedSection>
      </div>

      <Footer />
    </div>
  );
};

export default App;
