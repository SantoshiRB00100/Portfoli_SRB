import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = ({ activeSection, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md z-50 border-b border-cyan-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
            Santoshi RB
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {['home', 'about', 'skills', 'projects', 'contact'].map(item => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize font-bold transition-all relative ${
                  activeSection === item 
                    ? 'text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]' 
                    : 'text-gray-300 hover:text-cyan-400'
                } after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black border-t border-cyan-500/30">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {['home', 'about', 'skills', 'projects', 'contact'].map(item => (
              <button
                key={item}
                onClick={() => {
                  scrollToSection(item);
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 capitalize font-bold text-gray-300 hover:text-cyan-400 hover:bg-gray-900 rounded transition-all"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;