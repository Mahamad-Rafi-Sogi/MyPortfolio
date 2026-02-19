import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import profileImage from '/src/RafiProfile2.jpeg';
import hoverImage from '/src/RafiProfile.jpeg';
import '../styles/animations.css';
import { useTypingEffect } from '../hooks/useTypingEffect';

export function Hero() {
  const [image, setImage] = useState<string>(profileImage);
  const typingText = useTypingEffect([
    'Backend Developer',
    'Cloud Architect', 
    'Problem Solver',
    'GCP Certified Professional'
  ], 100, 50, 2000);

  return (
    <section
      id="about"
      className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-darkBg transition-colors duration-300"
    >
      {/* Announcement Banner */}
      <div className="overflow-hidden relative py-3 bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 border-b-2 border-blue-200 dark:border-blue-900 transition-colors duration-300">
        <p className="text-blue-700 dark:text-blue-300 font-semibold text-sm sm:text-base md:text-lg inline-block whitespace-nowrap pl-full animate-scroll-mobile sm:animate-scroll">
          ✨ Open to Backend Development Opportunities • Immediate Availability • Let's Connect! ✨
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Left Section */}
          <div className="flex-1 space-y-4 sm:space-y-6 w-full">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 dark:text-darkText text-center md:text-left transition-colors duration-300">
              Hi, I'm
              <br />
              <span className="text-blue-600 dark:text-blue-400">Mahamad Rafi Sogi</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                {typingText}
                <span className="animate-pulse">|</span>
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 text-center md:text-left transition-colors duration-300">
              I craft robust and scalable backend systems with 5+ years of experience, ensuring seamless
              functionality, reliability, and performance using modern
              technologies and best practices.
              <br />
              <br />
              In my portfolio, you'll find a range of projects showcasing my
              expertise in backend development, API design, database management,
              and optimizing performance. I'm always exploring new technologies
              and tools to enhance my skills and deliver exceptional results.
              <br />
              <br />
              <strong className="dark:text-white">
                Feel free to explore my portfolio and connect with me on social
                media!
              </strong>
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4">
              <a
                href="/Mahamad_Rafi_Sogi_Resume.pdf"
                download="Mahamad_Rafi_Sogi_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-600 text-white text-sm sm:text-base rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 min-w-[140px] font-medium"
              >
                Download Resume
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://razorpay.me/@mahamadrafisogi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-700 dark:from-purple-700 dark:to-purple-600 text-white text-sm sm:text-base rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 min-w-[140px] font-medium"
              >
                Test Payment
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex-1 mt-8 md:mt-0">
            <img
              src={image}
              alt="Profile"
              className="rounded-full w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 object-cover mx-auto border-4 sm:border-6 md:border-8 border-white dark:border-gray-800 shadow-xl transform transition-all duration-300 md:hover:scale-125"
              onMouseEnter={() => setImage(hoverImage)} 
              onMouseLeave={() => setImage(profileImage)} 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
