import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import profileImage from '/src/RafiProfile2.jpeg';
import hoverImage from '/src/RafiProfile.jpeg';

export function Hero() {
  const [image, setImage] = useState<string>(profileImage);

  return (
    <section
      id="about"
      className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white"
    >
      {/* Scrolling text in red color */}
      <div className="overflow-hidden relative py-2 bg-gray-50">
        <p className="text-red-600 font-bold text-lg inline-block whitespace-nowrap pl-full animate-scroll">
          Currently seeking new job opportunities in Backend Development. Feel
          free to reach out!!!
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left Section */}
          <div className="flex-1 space-y-6 w-full px-4 sm:px-6">
            <h1 className="text-3xl sm:text-5xl font-bold text-gray-900">
              Hi, I'm
              <br />
              <span className="text-blue-600">Mahamad Rafi Sogi</span>
              <br />
              Backend Developer
            </h1>
            <p className="text-lg sm:text-xl text-gray-600">
              I craft robust and scalable backend systems, ensuring seamless
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
            <div className="flex gap-4">
              <a
                href="https://mahamad-rafi-sogi-portfolio.netlify.app/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors hover:scale-110"
              >
                View My Resume
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors hover:scale-110"
              >
                Contact Me
              </a>
              <a
                href="https://razorpay.me/@mahamadrafisogi"
                className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-600 transition-colors hover:scale-110"
              >
                TestPayment
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex-1">
            <img
              src={image}
              alt="Profile"
              className="rounded-full w-72 h-72 object-cover mx-auto border-8 border-white shadow-xl transform transition-transform duration-300 hover:scale-150"
              onMouseEnter={() => setImage(hoverImage)} // Change image on hover
              onMouseLeave={() => setImage(profileImage)} // Revert to original image on mouse leave
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

    .animate-scroll {
      animation: scroll 25s linear infinite;
    }
  `;
  document.head.appendChild(style);
}