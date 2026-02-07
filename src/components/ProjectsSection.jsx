import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

const ProjectsSection = () => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e, index) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    
    card.style.setProperty('--rotate-x', `${rotateX}deg`);
    card.style.setProperty('--rotate-y', `${rotateY}deg`);
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.setProperty('--rotate-x', '0deg');
    card.style.setProperty('--rotate-y', '0deg');
  };

  const projects = [
    {
      title: 'Weather App',
      description: 'A responsive weather application that provides real-time weather information',
      tech: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://lnkd.in/gS8wYmaC'
    },
    {
      title: 'Stone Paper Scissor Game',
      description: 'An interactive game built with vanilla JavaScript featuring smooth animations',
      tech: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://lnkd.in/g7yTAr4p'
    },
    {
      title: 'Amazon Clone',
      description: 'E-commerce platform clone with responsive design and modern UI',
      tech: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://lnkd.in/gTtj-Bcn'
    },
    {
      title: 'Movie App Clone',
      description: 'Movie browsing application with modern React architecture',
      tech: ['React.js', 'Tailwind CSS'],
      link: '#'
    }
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="scroll-animate text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(34,211,238,0.4)]">
          My Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={handleMouseLeave}
              className="scroll-animate tilt-card bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/30 hover:border-cyan-500/60 hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
            >
              <h3 className="text-2xl font-bold mb-4 text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm border border-cyan-500/40">
                    {tech}
                  </span>
                ))}
              </div>
              {project.link !== '#' && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sky-400 hover:text-cyan-300 transition-colors drop-shadow-[0_0_8px_rgba(56,189,248,0.4)]">
                  View Project <ExternalLink size={16} />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;