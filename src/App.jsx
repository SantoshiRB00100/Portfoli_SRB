import React, { useState, useEffect } from 'react';
import './App.css';
import ParticlesBackground from './components/ParticlesBackground';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);

      // Scroll animations
      const elements = document.querySelectorAll('.scroll-animate');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8 && !el.classList.contains('fade-in-up')) {
          el.classList.add('fade-in-up');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      <ParticlesBackground />
      <div className="relative z-10">
        <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />
        <HeroSection scrollToSection={scrollToSection} />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default App;
