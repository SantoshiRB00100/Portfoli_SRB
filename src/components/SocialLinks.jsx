import React from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';

const SocialLinks = ({ size = 24, className = "" }) => {
  const socialLinks = [
    { 
      href: "https://github.com/SantoshiRB00100", 
      icon: <Github size={size} />,
      hoverColor: "hover:bg-slate-800 hover:shadow-slate-800/80"
    },
    { 
      href: "https://www.linkedin.com/in/santoshi-r-basalingol-21519b2a2", 
      icon: <Linkedin size={size} />,
      hoverColor: "hover:bg-slate-800 hover:shadow-slate-800/80"
    },
    { 
      href: "https://t.co/Mkq7U8ePcA", 
      icon: <Instagram size={size} />,
      hoverColor: "hover:bg-slate-800 hover:shadow-slate-800/80"
    },
    { 
      href: "https://x.com/Santoshi00100", 
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      hoverColor: "hover:bg-slate-800 hover:shadow-slate-800/80"
    }
  ];

  return (
    <div className={`flex gap-4 ${className}`}>
      {socialLinks.map((link, index) => (
        <a 
          key={index}
          href={link.href} 
          target="_blank" 
          rel="noopener noreferrer"
          onClick={(e) => {
            e.stopPropagation();
            window.open(link.href, '_blank');
          }}
          className={`p-3 bg-gray-900 rounded-full ${link.hoverColor} hover:scale-110 transition-all duration-300 shine-icon pulse-glow cursor-pointer`}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;