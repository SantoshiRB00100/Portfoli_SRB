import React, { useState, useEffect } from 'react';
import SocialLinks from './SocialLinks';

const HeroSection = ({ scrollToSection }) => {
  // Replace this URL with your image URL
  const profileImageUrl = "src/assets/santu.jpeg";
  
  const [displayText, setDisplayText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const roles = ['Frontend Developer', 'Learning Java DSA'];
  
  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = 2000;
    
    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < currentRole.length) {
        setDisplayText(currentRole.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayText(currentRole.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((roleIndex + 1) % roles.length);
      }
    }, typingSpeed);
    
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold">
            Hi, I'm <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(34,211,238,0.6)]">Santoshi R Basalingol</span>
          </h1>
          <p className="text-2xl text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)] h-12 flex items-center">
            {displayText}<span className="animate-pulse ml-1">|</span>
          </p>
          <p className="text-gray-300 text-lg">
            Passionate about creating beautiful and functional web applications. Currently pursuing B.E. in Computer Science and specializing in modern web technologies.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-sky-500 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all hover:scale-105"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border-2 border-cyan-500 rounded-full font-semibold hover:bg-cyan-500/10 hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
            >
              Contact Me
            </button>
          </div>
          <SocialLinks className="pt-4" />
        </div>
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-sky-500 rounded-full blur-2xl opacity-50 animate-pulse"></div>
            <div className="relative rounded-full w-80 h-80 bg-gradient-to-br from-cyan-600 to-sky-600 border-4 border-cyan-400 shadow-2xl shadow-cyan-500/50 flex items-center justify-center overflow-hidden">
              {profileImageUrl && profileImageUrl !== "YOUR_IMAGE_URL_HERE" ? (
                <img
                  src={profileImageUrl}
                  alt="Santoshi R Basalingol"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-6xl font-bold text-white drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]">SR</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;