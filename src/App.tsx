import React, { useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Carousel } from "./components/Carousel";

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
      <Header />
      <main>
        <Hero />
        <Projects />
        <Carousel />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
