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
      return "Hello! 👋 I'm here to help you learn more about Rafi. Feel free to ask about his skills, projects, or experience!";
    }
    
    // Who is Rafi / About
    if (message.includes('who') && (message.includes('rafi') || message.includes('he') || message.includes('you'))) {
      return "Rafi is Mahamad Rafi Sogi, a skilled Backend Developer specializing in Java, Spring Boot, Python, and cloud technologies. He's passionate about building scalable applications and currently seeking new opportunities in Backend Development. Feel free to ask about his specific skills or projects!";
    }
    
    // Skills
    if (message.includes('skill') || message.includes('technology') || message.includes('tech stack') || 
        message.includes('what does he know') || message.includes('what can he do') || 
        message.includes('expertise') || message.includes('programming')) {
      return "Rafi specializes in Backend Development with expertise in:\n• Java & Spring Boot\n• Python\n• SQL & Databases\n• AWS Cloud Services\n• Docker & Containerization\n• RESTful APIs\n• Microservices Architecture";
    }
    
    // Projects
    if (message.includes('project') || message.includes('portfolio') || message.includes('work sample') || 
        message.includes('what has he built') || message.includes('examples')) {
      return "Rafi has worked on several impressive projects! Check out the Projects section above to see his work, including full-stack applications and backend systems. His projects showcase his expertise in Spring Boot, microservices, and cloud deployment.";
    }
    
    // Experience / Work
    if (message.includes('experience') || message.includes('work history') || message.includes('job') || 
        message.includes('career') || message.includes('background')) {
      return "Rafi is currently seeking new opportunities in Backend Development. He has hands-on experience building scalable applications, working with modern tech stacks, and implementing best practices in software development. For detailed work history, feel free to check his resume or LinkedIn!";
    }
    
    // Contact
    if (message.includes('contact') || message.includes('reach') || message.includes('email') || 
        message.includes('phone') || message.includes('linkedin') || message.includes('connect') || 
        message.includes('get in touch') || message.includes('hire')) {
      return "You can reach Rafi through the Contact section above! He's available via:\n• Email\n• LinkedIn\n• GitHub\nFeel free to fill out the contact form or connect directly through social media. He's actively looking for opportunities!";
    }
    
    // Education
    if (message.includes('education') || message.includes('degree') || message.includes('study') || 
        message.includes('university') || message.includes('college')) {
      return "You can find information about Rafi's educational background in the About section. Feel free to scroll up to learn more about his academic journey!";
    }
    
    // Location / Availability
    if (message.includes('location') || message.includes('where') || message.includes('relocate')) {
      return "For location and availability details, please check the Contact section or reach out directly through the contact form. Rafi is open to discussing opportunities!";
    }
    
    // Notice Period / Availability
    if (message.includes('notice') || message.includes('join') || message.includes('start') || 
        message.includes('available') || message.includes('when can') || message.includes('availability')) {
      return "Rafi is immediately available to join! He has no notice period and can start right away. Feel free to reach out through the Contact section to discuss opportunities!";
    }
    
    // Thanks
    if (message.includes('thanks') || message.includes('thank you') || message.includes('appreciate')) {
      return "You're welcome! Feel free to ask if you have any other questions. 😊";
    }
    
    // Goodbye
    if (message.includes('bye') || message.includes('goodbye') || message.includes('see you')) {
      return "Goodbye! Thanks for visiting Rafi's portfolio. Feel free to reach out anytime! 👋";
    }
    
    // Default
    return "I'm here to help! You can ask me about:\n• Rafi's skills and technologies\n• His projects and work\n• Professional experience\n• How to contact him\n• Education background\n\nWhat would you like to know?";
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
