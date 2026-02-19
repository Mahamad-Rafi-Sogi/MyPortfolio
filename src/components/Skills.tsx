import React from 'react';
import { Code, Database, Cloud, Server, Wrench, GitBranch } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const skillCategories = [
  {
    title: 'Languages',
    icon: Code,
    skills: ['Java', 'PHP', 'SQL', 'JavaScript', 'TypeScript']
  },
  {
    title: 'Frameworks',
    icon: Server,
    skills: ['Spring Boot', 'Hibernate ORM', 'Spring Core', 'Spring DAO', 'J2EE']
  },
  {
    title: 'Cloud Platforms',
    icon: Cloud,
    skills: ['Google Cloud (GCP)', 'AWS (EC2, S3)', 'Cloud-Native Architecture']
  },
  {
    title: 'Databases',
    icon: Database,
    skills: ['Spanner DB', 'MySQL', 'MongoDB', 'Redis', 'PostgreSQL']
  },
  {
    title: 'DevOps & Tools',
    icon: Wrench,
    skills: ['Docker', 'Kubernetes', 'BuildPiper', 'Maven', 'Apache Tomcat']
  },
  {
    title: 'Monitoring & Version Control',
    icon: GitBranch,
    skills: ['Git', 'Kibana', 'Grafana', 'Coralogix', 'CI/CD']
  }
];

const expertiseSkills = [
  { name: 'Java & Spring Boot', level: 95 },
  { name: 'Microservices Architecture', level: 90 },
  { name: 'Google Cloud Platform', level: 88 },
  { name: 'SQL & Database Design', level: 92 },
  { name: 'Docker & Kubernetes', level: 85 },
  { name: 'RESTful API Design', level: 93 }
];

export function Skills() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });
  return (
    <section 
      id="skills" 
      ref={ref}
      className={`py-20 bg-white dark:bg-darkBg transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-darkText mb-4">
            Technical Proficiency
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            5+ years of expertise in building scalable, cloud-native solutions with modern technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className={`bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-500 hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                    <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-darkText">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm rounded-full border border-blue-200 dark:border-blue-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Expertise Levels */}
        <div className="mt-12 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-xl border border-blue-200 dark:border-blue-800">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-darkText mb-6 text-center">
            Core Expertise Levels
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {expertiseSkills.map((skill, index) => (
              <div 
                key={index}
                className={`transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {skill.name}
                  </span>
                  <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-full rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
                    style={{ 
                      width: isVisible ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 100}ms`
                    }}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Design Patterns */}
        <div className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-xl border border-purple-200 dark:border-purple-800">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-darkText mb-3">
            Design Patterns & Architecture
          </h3>
          <div className="flex flex-wrap gap-2">
            {['Singleton', 'Factory', 'MVC', 'DAO', 'Microservices', 'RESTful APIs', 'Circuit Breaker', 'Saga', 'Outbox'].map((pattern, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-white dark:bg-gray-800 text-purple-700 dark:text-purple-300 text-sm rounded-lg border border-purple-300 dark:border-purple-700 font-medium"
              >
                {pattern}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
