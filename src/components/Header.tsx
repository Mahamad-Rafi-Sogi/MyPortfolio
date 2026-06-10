import React, { useState } from 'react';
import { Github, Instagram, Linkedin, Mail, Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { useScrollSpy } from '../hooks/useScrollSpy';

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const sectionIds = navLinks.map((l) => l.id);

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeId = useScrollSpy(sectionIds);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 w-full bg-white/80 dark:bg-darkBg/90 backdrop-blur-md z-50 transition-colors duration-200 border-b border-gray-200 dark:border-gray-700 shadow-sm">
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
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`relative font-medium transition-all hover:scale-110 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:rounded-full after:bg-gradient-to-r after:from-blue-500 after:to-purple-500 after:transition-all after:duration-300 ${
                  activeId === link.id
                    ? 'text-blue-600 dark:text-blue-400 after:w-full'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white after:w-0 hover:after:w-full'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
          
          {/* Desktop Social Icons and Theme Toggle */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="https://github.com/Mahamad-Rafi-Sogi" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="GitHub profile"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:scale-125 transition-all"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/mdrafisogi/" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LinkedIn profile"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:scale-125 transition-all"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://www.instagram.com/al_buraq_whitebeast/"
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Instagram profile"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:scale-125 transition-all"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="mailto:mrafisogi@gmail.com"
              aria-label="Send an email"
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
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setIsMenuOpen(false)}
                  className={`border-l-2 pl-3 transition-colors ${
                    activeId === link.id
                      ? 'border-blue-500 text-blue-600 dark:text-blue-400 font-semibold'
                      : 'border-transparent text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center gap-4 pt-2">
                <a href="https://github.com/Mahamad-Rafi-Sogi" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/mdrafisogi/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/al_buraq_whitebeast/" target="_blank" rel="noopener noreferrer" aria-label="Instagram profile" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="mailto:mrafisogi@gmail.com" aria-label="Send an email" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
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
