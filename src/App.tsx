import React, { useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Certifications } from './components/Certifications';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Carousel } from "./components/Carousel";
import { ChatAssistant } from './components/ChatAssistant';
import { BackToTop } from './components/BackToTop';
import { SnakeGame } from './components/SnakeGame';
import { KonamiCode } from './components/KonamiCode';
import { LoadingScreen } from './components/LoadingScreen';
import { SocialProof } from './components/SocialProof';

function App() {
  // Initialize theme from localStorage or system preference on mount
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-darkBg dark:text-darkText transition-colors duration-200">
      <LoadingScreen />
      <Header />
      <main>
        <Hero />
        <Stats />
        <Skills />
        <SocialProof />
        <Experience />
        <Certifications />
        <Projects />
        <Carousel />
        <Contact />
      </main>
      <Footer />
      <ChatAssistant />
      <BackToTop />
      <SnakeGame />
      <KonamiCode />
    </div>
  );
}

export default App;
