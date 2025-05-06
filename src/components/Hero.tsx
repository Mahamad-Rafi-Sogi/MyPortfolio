import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import profileImage from '/src/RafiProfile2.jpeg';
import hoverImage from '/src/RafiProfile.jpeg';

export function Hero() {
  const [image, setImage] = useState<string>(profileImage);

  return (
    <section
      id="about"
      className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 bg-gradient-to-b from-gray-50 to-white"
    >
      {/* Scrolling text in red color */}
      <div className="overflow-hidden relative py-2 bg-gray-50">
        <p className="text-red-600 font-bold text-sm sm:text-base md:text-lg inline-block whitespace-nowrap pl-full animate-scroll-mobile sm:animate-scroll">
          Currently seeking new job opportunities in Backend Development. Feel
          free to reach out!!!
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Left Section */}
          <div className="flex-1 space-y-4 sm:space-y-6 w-full">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 text-center md:text-left">
              Hi, I'm
              <br />
              <span className="text-blue-600">Mahamad Rafi Sogi</span>
              <br />
              Backend Developer
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 text-center md:text-left">
              I craft robust and scalable backend systems with 4+ years of experience, ensuring seamless
              functionality, reliability, and performance using modern
              technologies and best practices.
              <br />
              <br />
              In my portfolio, you’ll find a range of projects showcasing my
              expertise in backend development, API design, database management,
              and optimizing performance. I’m always exploring new technologies
              and tools to enhance my skills and deliver exceptional results.
              <br />
              <br />
              <strong>
                Feel free to explore my portfolio and connect with me on social
                media!
              </strong>
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4">
              <a
                href="https://mahamad-rafi-sogi-portfolio.netlify.app/"
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-3 bg-blue-600 text-white text-sm sm:text-base rounded-lg hover:bg-blue-700 transition-colors hover:scale-105 sm:hover:scale-110 min-w-[120px]"
              >
                View My Resume
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-3 border border-gray-300 text-sm sm:text-base rounded-lg hover:border-gray-400 transition-colors hover:scale-105 sm:hover:scale-110 min-w-[120px]"
              >
                Contact Me
              </a>
              <a
                href="https://razorpay.me/@mahamadrafisogi"
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-3 bg-purple-600 text-white text-sm sm:text-base rounded-lg hover:bg-purple-700 transition-colors hover:scale-105 sm:hover:scale-110 min-w-[120px]"
              >
                TestPayment
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex-1 mt-8 md:mt-0">
            <img
              src={image}
              alt="Profile"
              className="rounded-full w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 object-cover mx-auto border-4 sm:border-6 md:border-8 border-white shadow-xl transform transition-transform duration-300 md:hover:scale-125"
              onMouseEnter={() => setImage(hoverImage)} 
              onMouseLeave={() => setImage(profileImage)} 
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// Add the scroll animation using Tailwind's utilities
if (typeof window !== 'undefined') {
  const style = document.createElement('style');
  style.innerHTML = `
    @keyframes scroll {
      0% {
        transform: translateX(100%);
      }
      100% {
        transform: translateX(-100%);
      }
    }

    @keyframes scroll-mobile {
      0% {
        transform: translateX(100%);
      }
      100% {
        transform: translateX(-200%);
      }
    }

    .animate-scroll {
      animation: scroll 25s linear infinite;
    }
    
    .animate-scroll-mobile {
      animation: scroll-mobile 18s linear infinite;
    }
  `;
  document.head.appendChild(style);
}