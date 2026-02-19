import { useEffect, useState } from 'react';

const KONAMI_CODE = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
];

export function KonamiCode() {
  const [activated, setActivated] = useState(false);
  const [keySequence, setKeySequence] = useState<string[]>([]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const newSequence = [...keySequence, e.key].slice(-10);
      setKeySequence(newSequence);

      if (JSON.stringify(newSequence) === JSON.stringify(KONAMI_CODE)) {
        setActivated(true);
        triggerEasterEgg();
        setKeySequence([]);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [keySequence]);

  const triggerEasterEgg = () => {
    // Create confetti effect
    const colors = ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b', '#ef4444'];
    const confettiCount = 150;

    for (let i = 0; i < confettiCount; i++) {
      createConfetti(colors[Math.floor(Math.random() * colors.length)]);
    }

    // Show achievement notification
    const notification = document.createElement('div');
    notification.innerHTML = `
      <div style="
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 2rem 3rem;
        border-radius: 1rem;
        font-size: 1.5rem;
        font-weight: bold;
        z-index: 10000;
        box-shadow: 0 20px 60px rgba(0,0,0,0.3);
        text-align: center;
      ">
        🎮 Achievement Unlocked! 🎮
        <div style="font-size: 1rem; margin-top: 0.5rem; opacity: 0.9;">
          You discovered the secret Konami Code!
        </div>
      </div>
    `;
    document.body.appendChild(notification);

    setTimeout(() => {
      notification.style.transition = 'opacity 0.5s';
      notification.style.opacity = '0';
      setTimeout(() => notification.remove(), 500);
    }, 3000);
  };

  const createConfetti = (color: string) => {
    const confetti = document.createElement('div');
    const size = Math.random() * 10 + 5;
    const startX = Math.random() * window.innerWidth;
    const startY = -20;
    const endX = startX + (Math.random() - 0.5) * 300;
    const endY = window.innerHeight + 20;
    const duration = Math.random() * 3 + 2;
    const rotation = Math.random() * 360;

    confetti.style.cssText = `
      position: fixed;
      width: ${size}px;
      height: ${size}px;
      background: ${color};
      left: ${startX}px;
      top: ${startY}px;
      z-index: 9999;
      pointer-events: none;
      border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
      animation: fall ${duration}s linear;
      transform: rotate(${rotation}deg);
    `;

    const style = document.createElement('style');
    style.textContent = `
      @keyframes fall {
        to {
          transform: translate(${endX - startX}px, ${endY - startY}px) rotate(${rotation + 720}deg);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
    document.body.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
      style.remove();
    }, duration * 1000);
  };

  return null;
}
