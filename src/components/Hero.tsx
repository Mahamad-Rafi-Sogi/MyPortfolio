import React from 'react';
import { ArrowRight } from 'lucide-react';
import profileImage from '/src/RafiProfile.jpeg';

export function Hero() {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="text-5xl font-bold text-gray-900">
              Hi, I'm 
              <br />
              <span className="text-blue-600">Mahamad Rafi Sogi</span>
              <br />
              Backend Developer
            </h1>
            <p className="text-xl text-gray-600">
            I craft robust and scalable backend systems, ensuring seamless functionality, reliability, and performance using modern technologies and best practices.
            <br /><br />
            In my portfolio, you’ll find a range of projects showcasing my expertise in backend development, API design, database management, and optimizing performance. I’m always exploring new technologies and tools to enhance my skills and deliver exceptional results.
            <br /><br />
            <strong>Feel free to explore my portfolio and connect with me on social media!</strong>
            </p>
            <div className="flex gap-4">
              <a href="https://mahamad-rafi-sogi-portfolio.netlify.app/" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                View My Resume
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors">
                Contact Me
              </a>
            </div>
          </div>
          <div className="flex-1">
            <img 
              src={profileImage}
              alt="Profile" 
              className="rounded-full w-72 h-72 object-cover mx-auto border-8 border-white shadow-xl transform transition-transform duration-300 hover:scale-150"
            />
          </div>
        </div>
      </div>
    </section>
  );
}