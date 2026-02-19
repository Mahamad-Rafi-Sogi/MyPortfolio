import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const projects = [
  {
    title: 'Basely-chat',
    description: 'On-chain AI chatbot that leverages blockchain technology to provide secure and transparent interactions. Built using React for the frontend, Used sepabola for database, and integrates Gemini LLM for intelligent responses. The application ensures data integrity and user privacy through decentralized architecture.',
    image: 'https://framerusercontent.com/images/g0YTRh7uRHpbWQgSZz62bO050.png?width=1378&height=880',
    tech: ['React', 'Sepabola', 'Express', 'Gemini LLM'],
    github: 'https://github.com/Mahamad-Rafi-Sogi/basely',
    live: 'https://basely-chat.netlify.app/'
  },
  {
    title: 'Rafi.ai',
    description: 'My Own AI Chatbot named Rafi.ai built using React for the frontend. It integrates Gemini model to provide intelligent responses to user queries. The application features a user-friendly interface, allowing users to interact with the chatbot seamlessly. It also includes functionalities such as saving chat history and managing conversations.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcpF2xYGfO23IiDMr3Y94n5moK2wbCeFd4TQ&s',
    tech: ['React', 'Express', 'Gemini LLM'],
    github: 'https://github.com/Mahamad-Rafi-Sogi/Rafi.ai',
    live: 'https://rafi-ai.netlify.app/'
  },
  {
    title: 'MyPaymentGateway',
    description: 'MyPaymentGateway is a simple and lightweight payment gateway integration project that leverages a test payment key and secret for simulating real-world payment transactions. It uses a webhook to process and manage transaction updates, making it ideal for developers looking to test and integrate payment functionalities in their applications.',
    image: 'https://corporate.payu.com/wp-content/uploads/2022/02/payment-gateway-generic_990x640.png',
    tech: ['Java', 'SpringBoot', 'RazorPay', 'Webhook'],
    github: 'https://github.com/Mahamad-Rafi-Sogi/MyPaymentGateway',
    live: 'https://razorpay.me/@mahamadrafisogi'
  },
  {
    title: 'MyPortfolio',
    description: 'In my portfolio, you’ll find a range of projects showcasing my expertise in backend development, API design, database management, and optimizing performance. I’m always exploring new technologies and tools to enhance my skills and deliver exceptional results.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4ci0j1CTtckEWHXHgMm5Dcid2qUfQPIBVaQ&s',
    tech: ['React', 'TypeScript', 'Tailwind'],
    github: 'https://github.com/Mahamad-Rafi-Sogi/MyPortfolio',
    live: 'https://mahamad-rafi-portfolio.netlify.app/'
  },
  {
    title: 'MyApplication',
    description: 'MyApplication is a robust and scalable software solution comprising an API Gateway, Job Service, and Candidate Service. Built using Java and Spring WebFlux, it leverages MongoDB for efficient data management. The architecture is designed for high performance and responsiveness.',
    image: 'https://miro.medium.com/v2/resize:fit:688/1*i62PA8JWIWAgEpCAfejiYw.png',
    tech: ['Java', 'SpringBoot', 'MongoDB', 'Nginx'],
    github: 'https://github.com/Mahamad-Rafi-Sogi/MyApplication',
    live: 'https://nginx.org/en/docs/'
  },
  {
    title: 'MykafkaIntegration',
    description: 'MyKafkaIntegration is a project where Kafka was integrated to facilitate messaging between different components of the application. In this project, both a Kafka producer and consumer were created to handle message sending and receiving',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsLpioqB5oHBOSaqjCXGu5unmOL5OmWLrDVQ&s',
    tech: ['Java', 'SpringBoot', 'Kafka'],
    github: 'https://github.com/Mahamad-Rafi-Sogi/MykafkaIntegration',
    live: 'https://kafka.apache.org/documentation/'
  },
  {
    title: 'MyEurekaServer',
    description: 'MyEurekaServer is a Spring Boot-based application that implements Eureka Server for service discovery. This application interacts with a local database. The project leverages Eureka Server to register and discover services, providing fault tolerance and dynamic scaling for distributed systems.',
    image: 'https://i.ytimg.com/vi/ysiN-058g7U/maxresdefault.jpg',
    tech: ['Java', 'SpringBoot', 'Eureka Server'],
    github: 'https://github.com/Mahamad-Rafi-Sogi/MyEurekaServer',
    live: 'https://cloud.spring.io/spring-cloud-netflix/reference/html/'
  },
  {
    title: 'MyJwtAuthIntegration',
    description: 'MyJwtAuthIntegration is a Spring Boot-based application designed to implement JWT (JSON Web Token) authentication.',
    image: 'https://cdn.prod.website-files.com/642bc0503c186417b1329fbc/6517b5bebcd16f92651813e7_SecOps%20Solution%20(49).jpg',
    tech: ['Java', 'SpringBoot'],
    github: 'https://github.com/Mahamad-Rafi-Sogi/MyJwtAuthIntegration',
    live: 'https://developer.box.com/guides/authentication/jwt/'
  },
  {
    title: 'MyConsul',
    description: 'MyConsul is a Spring Boot application demonstrating integration with HashiCorp Consul for fetching configuration key-value pairs.',
    image: 'https://www.devopsschool.com/blog/wp-content/uploads/2022/03/consul-by-hashicorp-vector-logo.png',
    tech: ['Java', 'SpringBoot', 'Consul'],
    github: 'https://github.com/Mahamad-Rafi-Sogi/MyConsul',
    live: 'https://developer.hashicorp.com/consul/docs'
  },
  {
    title: 'MyRabbitMQIntegration',
    description: 'MyRabbitMQIntegration is a project designed to demonstrate the integration of RabbitMQ with a microservices architecture, using Docker Compose to set up RabbitMQ and PostgreSQL along with producer and consumer microservices. The project highlights the use of RabbitMQ as a message broker for inter-service communication and processing in a distributed system, where producer services send messages and consumer services handle them asynchronously.',
    image: 'https://media.licdn.com/dms/image/D4D12AQEZUrzhgTc1PA/article-cover_image-shrink_720_1280/0/1720634187233?e=2147483647&v=beta&t=wxgm_rh-xvn5YUTeoPDtmZFKvzU70kHF5plrdm4agns',
    tech: ['Java', 'Spring Boot', 'RabbitMQ', 'PostgreSQL', 'Dockerfile'],
    github: 'https://github.com/Mahamad-Rafi-Sogi/MyRabbitMQIntegration',
    live: 'https://www.rabbitmq.com/docs'
  },
  {
    title: 'MySwaggerIntegration',
    description: 'MySwaggerIntegration is a project that focuses on integrating Swagger (OpenAPI) with a backend service to provide comprehensive API documentation. This integration allows you to easily expose and document your RESTful APIs, making them more accessible and understandable for both developers and consumers.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Swagger-logo.png',
    tech: ['Java', 'Springboot', 'H2 DataBase'],
    github: 'https://github.com/Mahamad-Rafi-Sogi/MySwaggerIntegration',
    live: 'https://swagger.io/docs/'
  },
  {
    title: 'My-SpringBoot-Docker-Automator',
    description: 'This project contains shell scripts to automate the creation of a Spring Boot project and a Dockerfile setup.',
    image: 'https://bashlogo.com/img/logo/jpg/full_colored_light.jpg',
    tech: ['Bash', 'Docker'],
    github: 'https://github.com/Mahamad-Rafi-Sogi/My-SpringBoot-Docker-Automator',
    live: 'https://github.com/Mahamad-Rafi-Sogi/My-SpringBoot-Docker-Automator'
  },
  {
    title: 'MyResume',
    description: 'MyResume is a simple, static personal resume website built using HTML and CSS',
    image: 'https://images.ctfassets.net/wp1lcwdav1p1/5wmEECloDc1OMWAMEamsQ8/edb1da18b9ce2e661d227312c7d61805/GettyImages-1203940958.jpg?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive',
    tech: ['Html', 'Css', 'JS'],
    github: 'https://github.com/Mahamad-Rafi-Sogi/MyResume',
    live: 'https://mahamad-rafi-sogi-portfolio.netlify.app/'
  },
  {
    title: 'MyFunUi',
    description: 'MyFunUi is a playful and interactive web application built with HTML, CSS, and JavaScript.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTxyr9ngdJ2JUV11US8VdnMxsftY032A2QYA&s',
    tech: ['Html', 'Css', 'JS'],
    github: 'https://github.com/Mahamad-Rafi-Sogi/MyFunUi',
    live: 'https://my-fun-ui.netlify.app/'
  },
  {
    title: 'MyMultiLiftRealTimeAlgo',
    description: 'This project demonstrates a multi-lift scheduling system designed to efficiently handle elevator requests in real-time. It simulates a real-world scenario where multiple elevators operate in a building, responding dynamically to user inputs and optimizing operations.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQdwCBiv_OFvU00T4RT1nwFCAuIb3ls1ZMBg&s',
    tech: ['Java', 'Queue based'],
    github: 'https://github.com/Mahamad-Rafi-Sogi/MyMultiLiftRealTimeAlgo',
    live: 'https://github.com/Mahamad-Rafi-Sogi/MyMultiLiftRealTimeAlgo/blob/main/README.md'
  },
  {
    title: 'MyDsaPractice',
    description: 'The MyDsaPractice project is a collection of algorithms and data structure problems designed to enhance problem-solving skills and understanding of computer science fundamentals. This project contains implementations of various algorithms, such as sorting, searching, dynamic programming, and graph traversal, using the most efficient approaches. It also includes hands-on practice problems from various sources, helping to strengthen theoretical concepts and improve coding efficiency.',
    image: 'https://www.andromedaloans.com/wp-content/uploads/2024/07/Vital-Functions-of-DSA-Loan-Agents-3.jpg',
    tech: ['Java', 'Dsa'],
    github: 'https://github.com/Mahamad-Rafi-Sogi/MyDsaPractice',
    live: 'https://www.geeksforgeeks.org/dsa-tutorial-learn-data-structures-and-algorithms/'
  }
];

export function Projects() {
const [visibleCount, setVisibleCount] = useState(9);
const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 3, projects.length));
};
return (
    <section 
      ref={ref} 
      id="projects" 
      className={`py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-gray-900 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 dark:text-darkText">Featured Projects</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {projects.slice(0, visibleCount).map((project, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-darkCard rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl group perspective-1000"
              style={{
                transform: isVisible ? 'none' : 'translateY(50px)',
                opacity: isVisible ? 1 : 0,
                transitionDelay: `${index * 100}ms`
              }}
              onMouseMove={(e) => {
                const card = e.currentTarget;
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
              }}
            >
              <img src={project.image} alt={project.title} className="w-full h-40 sm:h-48 object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900 dark:text-darkText">{project.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 line-clamp-4 sm:line-clamp-6">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-xs sm:text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        {visibleCount < projects.length && (
        <div className="text-center mt-8 sm:mt-12">
            <button
            onClick={loadMore}
            className="px-5 sm:px-6 py-3 bg-pink-600 dark:bg-pink-700 text-white text-sm sm:text-base rounded-lg hover:bg-pink-700 dark:hover:bg-pink-600 transition-all duration-300 transform hover:scale-105 min-h-[44px] min-w-[200px]"
            >
            Show More Projects...
            </button>
        </div>
        )}
    </div>
    </section>
);
}
