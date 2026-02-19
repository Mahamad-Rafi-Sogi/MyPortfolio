import React, { useState, useEffect, useRef } from 'react';
import { Code, Briefcase, Award, Users } from 'lucide-react';

const stats = [
  {
    icon: Briefcase,
    value: 5,
    suffix: '+',
    label: 'Years Experience',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Code,
    value: 12,
    suffix: '+',
    label: 'Projects Completed',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Award,
    value: 3,
    suffix: '',
    label: 'GCP Certifications',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Users,
    value: 4,
    suffix: '+',
    label: 'Team Members Mentored',
    color: 'from-orange-500 to-red-500'
  }
];

export function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState(stats.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (isVisible) {
      stats.forEach((stat, index) => {
        let current = 0;
        const increment = stat.value / 50;
        const timer = setInterval(() => {
          current += increment;
          if (current >= stat.value) {
            current = stat.value;
            clearInterval(timer);
          }
          setCounters((prev) => {
            const newCounters = [...prev];
            newCounters[index] = Math.floor(current);
            return newCounters;
          });
        }, 30);
      });
    }
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-blue-600 to-purple-600 dark:from-blue-900 dark:to-purple-900"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Career Highlights
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Delivering excellence through technical leadership and innovation
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 text-center"
              >
                <div className={`inline-flex p-4 bg-gradient-to-br ${stat.color} rounded-full mb-4`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">
                  {counters[index]}{stat.suffix}
                </div>
                <div className="text-blue-100 font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
