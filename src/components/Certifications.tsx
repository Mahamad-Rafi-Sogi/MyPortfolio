import React from 'react';
import { Award, CheckCircle } from 'lucide-react';

const certifications = [
  {
    title: 'Google Cloud Certified – Associate Cloud Engineer',
    provider: 'Google Cloud',
    code: 'GCP ACE',
    description: 'Demonstrates proficiency in deploying applications, monitoring operations, and managing enterprise solutions on Google Cloud Platform.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Google Cloud Certified – Professional Cloud Developer',
    provider: 'Google Cloud',
    code: 'GCP PCD',
    description: 'Advanced certification showcasing expertise in designing, building, and deploying scalable cloud applications using Google Cloud technologies.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Google Cloud – Generative AI Leader',
    provider: 'Google Cloud',
    code: 'GCP Gen AI',
    description: 'Recognition of expertise in leading and implementing Generative AI solutions using Google Cloud AI/ML technologies and best practices.',
    color: 'from-emerald-500 to-teal-500'
  }
];

export function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-white dark:bg-darkBg transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-darkText mb-4">
            Certifications
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Google Cloud Certified Professional with expertise in cloud-native architecture and Generative AI
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="relative bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden group hover:scale-105"
            >
              {/* Gradient overlay */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${cert.color} opacity-10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500`}></div>
              
              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3 bg-gradient-to-br ${cert.color} rounded-xl shadow-lg`}>
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className={`inline-block px-3 py-1 bg-gradient-to-r ${cert.color} text-white text-xs font-bold rounded-full mb-2`}>
                      {cert.code}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-darkText mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold flex items-center gap-1">
                      <CheckCircle className="w-4 h-4" />
                      {cert.provider}
                    </p>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {cert.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div className="mt-12 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-xl border border-gray-200 dark:border-gray-700">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-600 dark:bg-blue-700 rounded-xl">
              <Award className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-darkText mb-2">
                Bachelor of Engineering (Electronics and Communication)
              </h3>
              <p className="text-blue-600 dark:text-blue-400 font-semibold mb-1">
                Visvesvaraya Technological University (VTU)
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Hassan, Karnataka • 2016 – 2020
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
