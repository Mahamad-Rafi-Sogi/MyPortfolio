import React, { useState, useEffect } from 'react';
import { Code2, Loader2 } from 'lucide-react';

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [bootText, setBootText] = useState<string[]>([]);

  const bootSequence = [
    'Initializing Portfolio System...',
    'Loading React Components... ✓',
    'Configuring Dark Mode... ✓',
    'Loading Projects Database... ✓',
    'Establishing Chat Assistant... ✓',
    'Booting Snake Game Engine... ✓',
    'System Ready!',
  ];

  useEffect(() => {
    let textIndex = 0;
    let progressValue = 0;

    const textInterval = setInterval(() => {
      if (textIndex < bootSequence.length) {
        setBootText((prev) => [...prev, bootSequence[textIndex]]);
        textIndex++;
      }
    }, 300);

    const progressInterval = setInterval(() => {
      progressValue += 2;
      setProgress(progressValue);
      if (progressValue >= 100) {
        clearInterval(progressInterval);
        setTimeout(() => setLoading(false), 500);
      }
    }, 30);

    return () => {
      clearInterval(textInterval);
      clearInterval(progressInterval);
    };
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 z-[9999] flex items-center justify-center">
      <div className="text-center max-w-2xl px-4">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <Code2 className="w-20 h-20 text-blue-500 animate-pulse" />
            <Loader2 className="w-20 h-20 text-blue-400 animate-spin absolute top-0 left-0" />
          </div>
        </div>

        <h1 className="text-4xl font-bold text-white mb-8 font-mono">
          <span className="text-blue-500">Rafi</span>.dev
        </h1>

        <div className="bg-black/50 rounded-lg p-6 mb-6 border border-blue-500/30 backdrop-blur-sm">
          <div className="text-left space-y-2 font-mono text-sm">
            {bootText.map((text, index) => (
              <div
                key={index}
                className="text-green-400 animate-fadeIn"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {'>'} {text}
              </div>
            ))}
          </div>
        </div>

        <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden border border-blue-500/30">
          <div
            className="bg-gradient-to-r from-blue-500 to-purple-500 h-full transition-all duration-300 rounded-full"
            style={{ width: `${progress}%` }}
          >
            <div className="w-full h-full bg-white/20 animate-pulse"></div>
          </div>
        </div>
        <p className="text-blue-400 mt-2 font-mono">{progress}%</p>
      </div>
    </div>
  );
}
