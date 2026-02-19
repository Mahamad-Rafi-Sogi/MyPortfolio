import React from 'react';
import { Briefcase, Calendar, MapPin, Award } from 'lucide-react';

const experiences = [
  {
    title: 'Senior Software Engineer',
    company: 'Coforge Ltd.',
    client: 'Client: Sabre Travel Technologies',
    location: 'Bangalore, Karnataka',
    period: 'March 2025 – Present',
    achievements: [
      'Spearheaded Printing-Gateway Modernization Project, transforming legacy Mainframe systems into Java microservices',
      'Engineered three mission-critical microservices (ptrgw-clear, ptrgw-print, ptrgw-stats) from scratch',
      'Led LMTQ microservices design reviews for a team of 4, mentored junior developers on Spring Boot best practices',
      'Built backend services using Spring Boot, REST APIs, with Google Spanner DB and Redis caching',
      'Automated deployment workflows with Armada on Google Cloud Platform (GCP)',
      'Awarded formal recognition by Coforge & Sabre leadership for outstanding ownership and engineering excellence'
    ],
    isRecent: true
  },
  {
    title: 'Software Development Engineer',
    company: 'Lenskart Solutions Pvt Ltd',
    location: 'Bangalore, Karnataka',
    period: 'March 2021 – March 2025',
    achievements: [
      'Architected and scaled core Java/Spring Boot backend systems powering major business lines',
      'Mentored 3+ junior engineers on microservices design patterns and clean code principles',
      'Designed RESTful APIs driving 40% boost in query performance via Spring Data JPA optimizations',
      'Migrated legacy monolithic codebases to modern microservice ecosystem',
      'Implemented CI/CD with BuildPiper, Docker, and Kubernetes—shortening deployment cycles by 40%',
      'Automated critical production workflows, reducing manual processing by 50%',
      'Deployed and monitored Java/J2EE apps on Apache Tomcat, Kibana, and Coralogix',
      'Drove product success in OMS, IMS, and WMS solutions—impacting operational efficiency (+30%)'
    ],
    isRecent: false
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-darkBg transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-darkText mb-4">
            Professional Experience
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            5+ years of delivering scalable solutions and leading high-performing teams
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-400 to-purple-400"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`mb-12 flex flex-col md:flex-row gap-6 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline dot */}
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6">
                <div className="w-6 h-6 bg-blue-600 dark:bg-blue-400 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"></div>
              </div>

              {/* Content Card */}
              <div className="md:w-1/2 relative">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                  {exp.isRecent && (
                    <div className="absolute -top-3 -right-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-lg">
                      <Award className="w-3 h-3" />
                      Current
                    </div>
                  )}

                  <div className="flex items-start gap-3 mb-4">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                      <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-darkText">
                        {exp.title}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-semibold">
                        {exp.company}
                      </p>
                      {exp.client && (
                        <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                          {exp.client}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 mb-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li
                        key={idx}
                        className="text-gray-700 dark:text-gray-300 text-sm flex items-start gap-2"
                      >
                        <span className="text-blue-600 dark:text-blue-400 mt-1">▸</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block md:w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
