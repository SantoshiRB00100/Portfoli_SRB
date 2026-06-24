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
  title: 'Chat Application',
  description: 'A real-time chat application built with the MERN stack, enabling users to exchange messages instantly through a modern and responsive interface. Features user authentication, online status tracking, and seamless communication.',
  tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io'],
  link: 'https://chat-app-frontend-five-taupe.vercel.app/',
},

{
  title: 'Clinic Management System',
  description: 'A full-stack clinic management platform designed for patients, doctors, and administrators. Features appointment booking, patient record management, doctor dashboards, and role-based access control for efficient healthcare operations.',
  tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT Authentication'],
  link: 'https://clinic-management-frontend-alpha.vercel.app/',
},

{
  title: 'Blog Website (CRUD)',
  description: 'MERN stack blog application that allows users to create, read, update, and delete blog posts with a responsive UI.',
  tech: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'],
  link: 'https://blog-frontend-q9r3.vercel.app/',
  
},
{
  title: 'Expense Tracker',
  description: 'A MERN stack expense tracker that helps users manage and track their daily expenses with a clean interface.',
  tech: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'],
  link: 'https://expense-frontend-peach.vercel.app/'
},

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