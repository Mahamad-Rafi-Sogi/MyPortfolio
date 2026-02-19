import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Minimize2 } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm Rafi's virtual assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase().trim();
    
    // Greetings
    if (message.match(/^(hello|hi|hey|greetings|good morning|good afternoon|good evening)$/i) || 
        message.includes('hello') || message.includes('hi ') || message.includes('hey ')) {
      return "Hello! 👋 I'm here to help you learn more about Rafi. Feel free to ask about his skills, experience, notice period, salary expectations, or anything else!";
    }
    
    // Who is Rafi / About
    if (message.includes('who') && (message.includes('rafi') || message.includes('he') || message.includes('you'))) {
      return "Rafi is Mahamad Rafi Sogi, a skilled Backend Developer with 5+ years of experience in Java, Spring Boot, Microservices, and Cloud technologies. He's GCP certified and has worked with companies like Coforge and Lenskart. Currently seeking new opportunities in Backend Development!";
    }
    
    // Experience / Years
    if (message.includes('experience') || message.includes('years') || message.includes('work history') || 
        message.includes('career') || message.includes('background') || message.includes('how long')) {
      return "Rafi has 5+ years of professional experience:\n\n🏢 Coforge (March 2025 - Present)\n• Senior Software Engineer\n• Working on enterprise solutions\n\n🏢 Lenskart (March 2021 - March 2025)\n• 4 years as Software Engineer\n• Built scalable microservices\n• Worked with Java, Spring Boot, GCP\n• Optimized systems for better performance\n\nHe specializes in Backend Development, Microservices, and Cloud Architecture.";
    }
    
    // Skills
    if (message.includes('skill') || message.includes('technology') || message.includes('tech stack') || 
        message.includes('what does he know') || message.includes('what can he do') || 
        message.includes('expertise') || message.includes('programming')) {
      return "Rafi's Technical Skills:\n\n💻 Languages: Java (95%), Python, SQL\n🚀 Frameworks: Spring Boot, Microservices\n☁️ Cloud: GCP (88%), AWS\n🗄️ Databases: SQL, NoSQL, PostgreSQL\n🐳 DevOps: Docker, Kubernetes, CI/CD\n📊 Monitoring: ELK, Prometheus, Grafana\n🎯 Design Patterns: Singleton, Factory, Circuit Breaker, Saga\n\nHe's also GCP certified (ACE, PCD, Gen AI Leader)!";
    }
    
    // Certifications
    if (message.includes('certif') || message.includes('credential') || message.includes('gcp') || 
        message.includes('google cloud')) {
      return "Rafi holds 3 Google Cloud certifications:\n\n🎓 GCP Associate Cloud Engineer\n🎓 GCP Professional Cloud Developer\n🎓 GCP Generative AI Leader\n\nThese validate his expertise in cloud architecture, development, and AI technologies!";
    }
    
    // Projects
    if (message.includes('project') || message.includes('portfolio') || message.includes('work sample') || 
        message.includes('what has he built') || message.includes('examples')) {
      return "Rafi has built 12+ impressive projects including:\n\n🎯 Microservices architectures with Spring Boot\n🛒 E-commerce platforms\n☁️ Cloud-native applications on GCP\n🔧 REST APIs and backend systems\n📊 Data processing pipelines\n\nCheck out the Projects section above to see detailed examples with live demos and source code!";
    }
    
    // Notice Period / Joining / Availability
    if (message.includes('notice') || message.includes('join') || message.includes('start') || 
        message.includes('available') || message.includes('when can') || message.includes('availability') ||
        message.includes('immediately') || message.includes('how soon')) {
      return "✅ Rafi is IMMEDIATELY AVAILABLE to join!\n\n• No notice period required\n• Can start right away\n• Ready for immediate onboarding\n• Flexible with joining dates\n\nFeel free to reach out through the Contact section to discuss start dates!";
    }
    
    // Salary / Compensation / CTC
    if (message.includes('salary') || message.includes('ctc') || message.includes('compensation') || 
        message.includes('expectation') || message.includes('package') || message.includes('pay') ||
        message.includes('current ctc') || message.includes('expected ctc')) {
      return "💰 Salary Expectations:\n\n• Current CTC: As per market standards\n• Expected CTC: Open to discussion based on role and responsibilities\n• Negotiable: Yes, depending on the opportunity\n• Location: Flexible (Remote/Hybrid/Onsite)\n\nFor detailed compensation discussion, please reach out through the Contact section. Rafi is open to fair offers matching his experience and skills!";
    }
    
    // Location / Relocation
    if (message.includes('location') || message.includes('where') || message.includes('relocate') || 
        message.includes('willing to move') || message.includes('remote') || message.includes('work from')) {
      return "📍 Location & Work Preference:\n\n• Open to Remote, Hybrid, or Onsite roles\n• Willing to relocate for the right opportunity\n• Currently based in India\n• Flexible with work arrangements\n\nPreference can be discussed based on the role and company culture!";
    }
    
    // Job Type / Role
    if (message.includes('looking for') || message.includes('job type') || message.includes('role') || 
        message.includes('position') || message.includes('opportunity')) {
      return "🎯 Seeking Roles:\n\n• Backend Developer / Engineer\n• Senior Software Engineer\n• Microservices Developer\n• Cloud Engineer\n• Full Stack Developer (Backend heavy)\n\nPreferred: Backend-focused roles with Java, Spring Boot, Microservices, and Cloud technologies.";
    }
    
    // Strengths / USP
    if (message.includes('strength') || message.includes('best at') || message.includes('good at') || 
        message.includes('standout') || message.includes('unique')) {
      return "💪 Rafi's Key Strengths:\n\n✅ 5+ years of hands-on Backend development\n✅ Strong Microservices architecture expertise\n✅ GCP certified (3 certifications)\n✅ Proven track record at Coforge & Lenskart\n✅ Problem-solving mindset\n✅ Mentored 4+ junior developers\n✅ Performance optimization specialist\n✅ Quick learner and adaptable";
    }
    
    // Contact
    if (message.includes('contact') || message.includes('reach') || message.includes('email') || 
        message.includes('phone') || message.includes('linkedin') || message.includes('connect') || 
        message.includes('get in touch') || message.includes('hire')) {
      return "📧 Let's Connect!\n\nYou can reach Rafi through:\n• Email: Via the Contact form above\n• LinkedIn: Check the footer for link\n• GitHub: See his projects and code\n\nFeel free to fill out the contact form or connect directly through social media. He typically responds within 24 hours!";
    }
    
    // Education
    if (message.includes('education') || message.includes('degree') || message.includes('study') || 
        message.includes('university') || message.includes('college')) {
      return "🎓 Education:\n\n• Bachelor of Engineering (B.E.)\n• Visvesvaraya Technological University (VTU)\n• 2016-2020\n\nHis strong foundation in computer science combined with industry experience makes him well-rounded!";
    }
    
    // Achievements
    if (message.includes('achievement') || message.includes('award') || message.includes('recognition')) {
      return "🏆 Achievements:\n\n• 3 GCP Certifications\n• 5+ years professional experience\n• Delivered 12+ successful projects\n• Mentored 4+ junior developers\n• Performance optimization expert\n• Built scalable systems serving thousands of users";
    }
    
    // Resume / CV
    if (message.includes('resume') || message.includes('cv') || message.includes('download')) {
      return "📄 You can download Rafi's resume using the 'Download Resume' button in the Hero section at the top of the page! It contains detailed information about his experience, skills, projects, and certifications.";
    }
    
    // Thanks
    if (message.includes('thanks') || message.includes('thank you') || message.includes('appreciate')) {
      return "You're very welcome! 😊 Feel free to ask anything else about Rafi's experience, skills, availability, or how to connect with him!";
    }
    
    // Goodbye
    if (message.includes('bye') || message.includes('goodbye') || message.includes('see you')) {
      return "Goodbye! Thanks for visiting Rafi's portfolio. Don't hesitate to reach out if you'd like to discuss opportunities! 👋";
    }
    
    // Default
    return "I'm here to help! You can ask me about:\n\n• 💼 Experience & Work History\n• 💰 Salary Expectations\n• ⏰ Notice Period (Immediate!)\n• 🛠️ Skills & Technologies\n• 🎓 Certifications\n• 📂 Projects & Portfolio\n• 📍 Location & Relocation\n• 📧 Contact Information\n\nWhat would you like to know?";
  };

  const handleSend = () => {
    if (inputValue.trim() === '') return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botMessage: Message = {
        id: messages.length + 2,
        text: getResponse(inputValue),
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 z-50 animate-bounce"
          aria-label="Open chat"
        >
          <MessageCircle size={28} />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div
          className={`fixed bottom-6 right-6 bg-white dark:bg-gray-800 rounded-lg shadow-2xl transition-all duration-300 z-50 flex flex-col ${
            isMinimized ? 'h-14' : 'h-[500px]'
          } w-[350px] sm:w-[400px]`}
        >
          {/* Header */}
          <div className="bg-blue-600 dark:bg-blue-700 text-white p-4 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <h3 className="font-semibold">Chat Assistant</h3>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="hover:bg-blue-700 dark:hover:bg-blue-800 p-1 rounded transition-colors"
                aria-label="Minimize"
              >
                <Minimize2 size={18} />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-blue-700 dark:hover:bg-blue-800 p-1 rounded transition-colors"
                aria-label="Close chat"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Messages */}
          {!isMinimized && (
            <>
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-gray-900">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.sender === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg ${
                        message.sender === 'user'
                          ? 'bg-blue-600 text-white rounded-br-none'
                          : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-bl-none shadow'
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <span className="text-xs opacity-70 mt-1 block">
                        {message.timestamp.toLocaleTimeString([], {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </span>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-lg rounded-bl-none shadow">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white text-sm"
                  />
                  <button
                    onClick={handleSend}
                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={inputValue.trim() === ''}
                    aria-label="Send message"
                  >
                    <Send size={20} />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
