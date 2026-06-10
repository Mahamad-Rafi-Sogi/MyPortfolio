import React, { useEffect, Suspense } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Certifications } from './components/Certifications';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ChatAssistant } from './components/ChatAssistant';
import { BackToTop } from './components/BackToTop';
import { SnakeGame } from './components/SnakeGame';
import { KonamiCode } from './components/KonamiCode';
import { LoadingScreen } from './components/LoadingScreen';
import { SocialProof } from './components/SocialProof';
import { ScrollProgress } from './components/ScrollProgress';

const Carousel = React.lazy(() =>
  import('./components/Carousel').then((m) => ({ default: m.Carousel }))
);

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
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <Stats />
        <Skills />
        <SocialProof />
        <Experience />
        <Certifications />
        <Projects />
        <Suspense
          fallback={
            <div className="py-20 text-center text-gray-400">Loading…</div>
          }
        >
          <Carousel />
        </Suspense>
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
