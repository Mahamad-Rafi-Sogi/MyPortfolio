import React from 'react';
import { Github, Instagram, Linkedin, Mail, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-lg font-semibold">Mahamad Rafi Sogi</p>
            <p className="text-gray-400">Backend Developer</p>
          </div>
          <div className="flex gap-6">
            <a href="https://github.com/Mahamad-Rafi-Sogi" target="_blank" rel="noopener noreferrer" 
               className="text-gray-400 hover:text-white transition-colors hover:scale-125">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/mdrafisogi/" target="_blank" rel="noopener noreferrer"
               className="text-gray-400 hover:text-white transition-colors hover:scale-125">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/al_buraq_whitebeast/"
               className="text-gray-400 hover:text-white transition-colors hover:scale-125">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="https://x.com/MdRafiSogi"
               className="text-gray-400 hover:text-white transition-colors hover:scale-125">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="mrafisogi@gmail.com"
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