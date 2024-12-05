import React from 'react';
import { Github, Instagram, Linkedin, Mail, Twitter } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
        <nav className="flex items-center justify-between">
          <a href="#" className="text-2xl font-bold text-gray-900">
            Welcome To Rafi's Portfolio
          </a>
          <div className="flex items-center gap-6">
            <a href="#about" className="text-gray-600 hover:text-gray-900 hover:scale-125">About</a>
            <a href="#projects" className="text-gray-600 hover:text-gray-900 hover:scale-125">Projects</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 hover:scale-125">Contact</a>
          </div>
          <div className="flex items-center gap-4">
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
            <a href="mrafisogi@gmail.com" className="text-gray-600 hover:text-gray-900 hover:scale-125">
              <Mail className="w-5 h-5" />
            </a>
            
          </div>
        </nav>
      </div>
    </header>
  );
}