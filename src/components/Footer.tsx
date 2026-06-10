import React from 'react';
import { Github, Instagram, Linkedin, Mail, Twitter } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function Footer() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-12 border-t-4 border-blue-600">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-4 sm:px-6 ${isVisible ? 'will-reveal animate-fade-up' : 'opacity-0'}`}
      >
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <p className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Mahamad Rafi Sogi</p>
            <p className="text-gray-400 mt-1">Backend Developer • Java • Spring Boot • GCP</p>
          </div>
          <div className="flex gap-6">
            <a href="https://github.com/Mahamad-Rafi-Sogi" target="_blank" rel="noopener noreferrer"
               aria-label="GitHub profile"
               className="text-gray-400 hover:text-white transition-colors hover:scale-125">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/mdrafisogi/" target="_blank" rel="noopener noreferrer"
               aria-label="LinkedIn profile"
               className="text-gray-400 hover:text-white transition-colors hover:scale-125">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/al_buraq_whitebeast/" target="_blank" rel="noopener noreferrer"
               aria-label="Instagram profile"
               className="text-gray-400 hover:text-white transition-colors hover:scale-125">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="https://x.com/MdRafiSogi" target="_blank" rel="noopener noreferrer"
               aria-label="X (Twitter) profile"
               className="text-gray-400 hover:text-white transition-colors hover:scale-125">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="mailto:mrafisogi@gmail.com"
               aria-label="Send an email"
               className="text-gray-400 hover:text-white transition-colors hover:scale-125">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Mahamad Rafi Sogi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}