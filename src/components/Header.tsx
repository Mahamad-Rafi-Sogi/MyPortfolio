import React, { useState } from 'react';
import { Github, Instagram, Linkedin, Mail, Twitter, Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 w-full bg-white/80 dark:bg-darkBg/90 backdrop-blur-sm z-50 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo/Brand */}
          <div className="flex items-center gap-4">
            <a href="#" className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-darkText pr-4">
              Rafi's Portfolio
            </a>
          </div>
          
          {/* Theme toggle and hamburger menu for mobile */}
          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />
            <button 
              onClick={toggleMenu}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:scale-125 transition-all">About</a>
            <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:scale-125 transition-all">Projects</a>
            <a href="#carousel" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:scale-125 transition-all">Hobbies</a>
            <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:scale-125 transition-all">Contact</a>
          </div>
          
          {/* Desktop Social Icons and Theme Toggle */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="https://github.com/Mahamad-Rafi-Sogi" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:scale-125 transition-all"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/mdrafisogi/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:scale-125 transition-all"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://www.instagram.com/al_buraq_whitebeast/"
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:scale-125 transition-all"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="mailto:mrafisogi@gmail.com"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:scale-125 transition-all"
            >
              <Mail className="w-5 h-5" />
            </a>
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col gap-4">
              <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">About</a>
              <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Projects</a>
              <a href="#carousel" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Hobbies</a>
              <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Contact</a>
              <div className="flex items-center gap-4 pt-2">
                <a href="https://github.com/Mahamad-Rafi-Sogi" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/mdrafisogi/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/al_buraq_whitebeast/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="mailto:mrafisogi@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
