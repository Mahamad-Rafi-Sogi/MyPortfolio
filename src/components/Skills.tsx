import React from 'react';
import { Code, Database, Cloud, Server, Wrench, GitBranch } from 'lucide-react';

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

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-darkBg transition-colors duration-300">
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
                className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:scale-105"
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
