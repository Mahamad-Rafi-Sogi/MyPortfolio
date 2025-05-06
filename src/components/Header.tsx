import React, { useState } from 'react';
import { Github, Instagram, Linkedin, Mail, Twitter, Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo/Title - responsive size */}
          <a href="#" className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 pr-4">
            Welcome To Rafi's Portfolio
          </a>
          
          {/* Hamburger menu button for mobile */}
          <button 
            onClick={toggleMenu}
            className="block md:hidden text-gray-600 hover:text-gray-900 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#about" className="text-gray-600 hover:text-gray-900 hover:scale-125">About</a>
            <a href="#projects" className="text-gray-600 hover:text-gray-900 hover:scale-125">Projects</a>
            <a href="#carousel" className="text-gray-600 hover:text-gray-900 hover:scale-125">Hobbies</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 hover:scale-125">Contact</a>
          </div>
          
          {/* Desktop Social Icons */}
          <div className="hidden md:flex items-center gap-4">
            <a href="https://github.com/Mahamad-Rafi-Sogi" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 hover:scale-125">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/mdrafisogi/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 hover:scale-125">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/al_buraq_whitebeast/" className="text-gray-600 hover:text-gray-900 hover:scale-125">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://x.com/MdRafiSogi" className="text-gray-600 hover:text-gray-900 hover:scale-125">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="mailto:mrafisogi@gmail.com" className="text-gray-600 hover:text-gray-900 hover:scale-125">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </nav>
        
        {/* Mobile Menu (collapsible) */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-3 border-t border-gray-200 animate-fadeIn">
            <div className="flex flex-col space-y-3 py-2">
              <a href="#about" className="text-gray-600 hover:text-gray-900 px-2 py-1 rounded-md" onClick={toggleMenu}>About</a>
              <a href="#projects" className="text-gray-600 hover:text-gray-900 px-2 py-1 rounded-md" onClick={toggleMenu}>Projects</a>
              <a href="#carousel" className="text-gray-600 hover:text-gray-900 px-2 py-1 rounded-md" onClick={toggleMenu}>Hobbies</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 px-2 py-1 rounded-md" onClick={toggleMenu}>Contact</a>
            </div>
            
            <div className="flex justify-center gap-6 mt-4 pt-3 border-t border-gray-100">
              <a href="https://github.com/Mahamad-Rafi-Sogi" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/mdrafisogi/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/al_buraq_whitebeast/" className="text-gray-600 hover:text-gray-900">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://x.com/MdRafiSogi" className="text-gray-600 hover:text-gray-900">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="mailto:mrafisogi@gmail.com" className="text-gray-600 hover:text-gray-900">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}