import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Gamepad2, X, RotateCcw, Trophy, ChevronUp, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';
type Position = { x: number; y: number };

const GRID_SIZE = 20;
const CELL_SIZE = 20;
const INITIAL_SNAKE = [{ x: 10, y: 10 }];
const INITIAL_DIRECTION: Direction = 'RIGHT';
const GAME_SPEED = 150;

export function SnakeGame() {
  const [isOpen, setIsOpen] = useState(false);
  const [snake, setSnake] = useState<Position[]>(INITIAL_SNAKE);
  const [food, setFood] = useState<Position>({ x: 15, y: 15 });
  const [bigFood, setBigFood] = useState<Position | null>(null);
  const [bigFoodValue, setBigFoodValue] = useState(5);
  const [direction, setDirection] = useState<Direction>(INITIAL_DIRECTION);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [foodCount, setFoodCount] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const directionRef = useRef<Direction>(INITIAL_DIRECTION);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const savedHighScore = localStorage.getItem('snakeHighScore');
    if (savedHighScore) {
      setHighScore(parseInt(savedHighScore));
    }
  }, []);

  const generateFood = useCallback((currentSnake: Position[]): Position => {
    let newFood: Position;
    do {
      newFood = {
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE),
      };
    } while (currentSnake.some(segment => segment.x === newFood.x && segment.y === newFood.y));
    return newFood;
  }, []);

  const resetGame = useCallback(() => {
    setSnake(INITIAL_SNAKE);
    setFood({ x: 15, y: 15 });
    setBigFood(null);
    setBigFoodValue(5);
    setDirection(INITIAL_DIRECTION);
    directionRef.current = INITIAL_DIRECTION;
    setGameOver(false);
    setScore(0);
    setFoodCount(0);
    setIsPlaying(false);
  }, []);

  const moveSnake = useCallback(() => {
    if (gameOver || !isPlaying) return;

    setSnake(prevSnake => {
      const head = prevSnake[0];
      let newHead: Position;

      switch (directionRef.current) {
        case 'UP':
          newHead = { x: head.x, y: head.y - 1 };
          break;
        case 'DOWN':
          newHead = { x: head.x, y: head.y + 1 };
          break;
        case 'LEFT':
          newHead = { x: head.x - 1, y: head.y };
          break;
        case 'RIGHT':
          newHead = { x: head.x + 1, y: head.y };
          break;
      }

      // Check wall collision
      if (newHead.x < 0 || newHead.x >= GRID_SIZE || newHead.y < 0 || newHead.y >= GRID_SIZE) {
        setGameOver(true);
        setIsPlaying(false);
        return prevSnake;
      }

      // Check self collision
      if (prevSnake.some(segment => segment.x === newHead.x && segment.y === newHead.y)) {
        setGameOver(true);
        setIsPlaying(false);
        return prevSnake;
      }

      const newSnake = [newHead, ...prevSnake];

      // Check regular food collision
      if (newHead.x === food.x && newHead.y === food.y) {
        setScore(prev => {
          const newScore = prev + 1;
          if (newScore > highScore) {
            setHighScore(newScore);
            localStorage.setItem('snakeHighScore', newScore.toString());
          }
          return newScore;
        });
        setFoodCount(prev => {
          const newCount = prev + 1;
          if (newCount === 5) {
            // Generate big food after 5 regular foods
            setBigFood(generateFood(newSnake));
            setBigFoodValue(5);
            return 0;
          }
          return newCount;
        });
        setFood(generateFood(newSnake));
        return newSnake;
      }

      // Check big food collision
      if (bigFood && newHead.x === bigFood.x && newHead.y === bigFood.y) {
        setScore(prev => {
          const newScore = prev + bigFoodValue;
          if (newScore > highScore) {
            setHighScore(newScore);
            localStorage.setItem('snakeHighScore', newScore.toString());
          }
          return newScore;
        });
        setBigFood(null);
        setBigFoodValue(5);
        setFood(generateFood(newSnake));
        // Don't grow the snake for big food, just remove the tail
        newSnake.pop();
        return newSnake;
      }

      newSnake.pop();
      return newSnake;
    });
  }, [gameOver, isPlaying, food, bigFood, bigFoodValue, highScore, generateFood]);

  useEffect(() => {
    if (!isPlaying || gameOver) return;

    const interval = setInterval(moveSnake, GAME_SPEED);
    return () => clearInterval(interval);
  }, [isPlaying, gameOver, moveSnake]);

  // Decrease bonus food value over time
  useEffect(() => {
    if (!isPlaying || gameOver || !bigFood || bigFoodValue <= 1) return;

    const decreaseInterval = setInterval(() => {
      setBigFoodValue(prev => {
        if (prev <= 1) {
          setBigFood(null);
          return 5;
        }
        return prev - 1;
      });
    }, 2000); // Decrease every 2 seconds

    return () => clearInterval(decreaseInterval);
  }, [isPlaying, gameOver, bigFood, bigFoodValue]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!isPlaying || gameOver) return;

      const key = e.key.toLowerCase();
      const currentDirection = directionRef.current;

      if ((key === 'arrowup' || key === 'w') && currentDirection !== 'DOWN') {
        directionRef.current = 'UP';
        setDirection('UP');
      } else if ((key === 'arrowdown' || key === 's') && currentDirection !== 'UP') {
        directionRef.current = 'DOWN';
        setDirection('DOWN');
      } else if ((key === 'arrowleft' || key === 'a') && currentDirection !== 'RIGHT') {
        directionRef.current = 'LEFT';
        setDirection('LEFT');
      } else if ((key === 'arrowright' || key === 'd') && currentDirection !== 'LEFT') {
        directionRef.current = 'RIGHT';
        setDirection('RIGHT');
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isPlaying, gameOver]);
// Touch/Swipe controls for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    touchStartRef.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartRef.current || !isPlaying || gameOver) return;

    const touch = e.changedTouches[0];
    const deltaX = touch.clientX - touchStartRef.current.x;
    const deltaY = touch.clientY - touchStartRef.current.y;
    const currentDirection = directionRef.current;

    // Determine swipe direction (minimum 30px swipe)
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 30) {
      if (deltaX > 0 && currentDirection !== 'LEFT') {
        directionRef.current = 'RIGHT';
        setDirection('RIGHT');
      } else if (deltaX < 0 && currentDirection !== 'RIGHT') {
        directionRef.current = 'LEFT';
        setDirection('LEFT');
      }
    } else if (Math.abs(deltaY) > 30) {
      if (deltaY > 0 && currentDirection !== 'UP') {
        directionRef.current = 'DOWN';
        setDirection('DOWN');
      } else if (deltaY < 0 && currentDirection !== 'DOWN') {
        directionRef.current = 'UP';
        setDirection('UP');
      }
    }

    touchStartRef.current = null;
  };

  const handleDirectionClick = (newDirection: Direction) => {
    if (!isPlaying || gameOver) return;
    const currentDirection = directionRef.current;

    if (
      (newDirection === 'UP' && currentDirection !== 'DOWN') ||
      (newDirection === 'DOWN' && currentDirection !== 'UP') ||
      (newDirection === 'LEFT' && currentDirection !== 'RIGHT') ||
      (newDirection === 'RIGHT' && currentDirection !== 'LEFT')
    ) {
      directionRef.current = newDirection;
      setDirection(newDirection);
    }
  };

  
  const startGame = () => {
    resetGame();
    setIsPlaying(true);
  };

  return (
    <>
      {/* Game Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-full p-3 sm:p-4 shadow-lg transition-all duration-300 hover:scale-110 z-50"
          aria-label="Play Snake Game"
        >
          <Gamepad2 size={24} className="sm:w-7 sm:h-7" />
        </button>
      )}

      {/* Game Window */}
      {isOpen && (
        <div className="fixed bottom-2 left-2 right-2 sm:bottom-6 sm:left-6 sm:right-auto bg-white dark:bg-gray-800 rounded-lg shadow-2xl transition-all duration-300 z-50 sm:w-[440px] max-h-[95vh] overflow-y-auto">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-3 sm:p-4 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center gap-2 sm:gap-3">
              <Gamepad2 size={20} className="sm:w-6 sm:h-6" />
              <div>
                <h3 className="font-semibold text-sm sm:text-base">Snake Game</h3>
                <p className="text-xs text-green-100 hidden sm:block">Arrow Keys / WASD / Swipe</p>
                <p className="text-xs text-green-100 sm:hidden">Swipe or tap buttons</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-green-700 p-1 rounded transition-colors"
              aria-label="Close game"
            >
              <X size={18} />
            </button>
          </div>

          {/* Score Board */}
          <div className="bg-gray-100 dark:bg-gray-700 p-2 sm:p-3 flex justify-between items-center border-b border-gray-200 dark:border-gray-600">
            <div className="flex gap-3 sm:gap-6">
              <div>
                <p className="text-xs text-gray-600 dark:text-gray-400">Score</p>
                <p className="text-lg sm:text-xl font-bold text-green-600 dark:text-green-400">{score}</p>
              </div>
              <div className="flex items-center gap-1">
                <Trophy size={14} className="sm:w-4 sm:h-4 text-yellow-500" />
                <div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Best</p>
                  <p className="text-lg sm:text-xl font-bold text-yellow-600 dark:text-yellow-400">{highScore}</p>
                </div>
              </div>
            </div>
            <button
              onClick={startGame}
              className="flex items-center gap-1 sm:gap-2 bg-green-600 hover:bg-green-700 text-white px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors"
            >
              <RotateCcw size={14} className="sm:w-4 sm:h-4" />
              {isPlaying ? 'Restart' : 'Start'}
            </button>
          </div>

          {/* Game Board */}
          <div className="p-2 sm:p-4 bg-gray-50 dark:bg-gray-900 flex flex-col items-center">
            <div
              className="relative bg-gray-200 dark:bg-gray-800 border-2 sm:border-4 border-gray-300 dark:border-gray-700 touch-none"
              style={{ width: GRID_SIZE * CELL_SIZE, height: GRID_SIZE * CELL_SIZE }}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {/* Snake */}
              {snake.map((segment, index) => (
                <div
                  key={index}
                  className={`absolute transition-all ${
                    index === 0
                      ? 'bg-gradient-to-br from-green-400 to-emerald-600 rounded-md shadow-lg border-2 border-green-300'
                      : 'bg-gradient-to-br from-green-500 to-green-600 rounded-sm shadow'
                  }`}
                  style={{
                    width: CELL_SIZE - 2,
                    height: CELL_SIZE - 2,
                    left: segment.x * CELL_SIZE,
                    top: segment.y * CELL_SIZE,
                  }}
                >
                  {index === 0 && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-1 h-1 bg-white rounded-full mr-1"></div>
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                    </div>
                  )}
                </div>
              ))}

              {/* Regular Food */}
              <div
                className="absolute bg-gradient-to-br from-red-500 to-pink-600 rounded-full animate-pulse shadow-lg"
                style={{
                  width: CELL_SIZE - 6,
                  height: CELL_SIZE - 6,
                  left: food.x * CELL_SIZE + 3,
                  top: food.y * CELL_SIZE + 3,
                }}
              />

              {/* Big Food (Bonus) */}
              {bigFood && (
                <div
                  className="absolute bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-pulse shadow-xl border-2 border-yellow-300"
                  style={{
                    width: CELL_SIZE + 4,
                    height: CELL_SIZE + 4,
                    left: bigFood.x * CELL_SIZE - 2,
                    top: bigFood.y * CELL_SIZE - 2,
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xs">
                    +{bigFoodValue}
                  </div>
                </div>
              )}

              {/* Game Over Overlay */}
              {gameOver && (
                <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                  <div className="text-center text-white">
                    <p className="text-2xl font-bold mb-2">Game Over!</p>
                    <p className="text-lg mb-4">Score: {score}</p>
                    <button
                      onClick={startGame}
                      className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded-lg font-medium transition-colors"
                    >
                      Play Again
                    </button>
                  </div>
                </div>
              )}

              {/* Start Game Overlay */}
              {!isPlaying && !gameOver && (
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Gamepad2 size={48} className="mx-auto mb-4" />
                    <p className="text-xl font-bold mb-4">Ready to Play?</p>
                    <button
                      onClick={startGame}
                      className="bg-green-600 hover:bg-green-700 px-8 py-3 rounded-lg font-medium transition-colors text-lg"
                    >
                      Start Game
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Controls */}
            <div className="block sm:hidden mt-3 w-full">
              <div className="flex flex-col items-center gap-2">
                <button
                  onClick={() => handleDirectionClick('UP')}
                  className="bg-green-600 hover:bg-green-700 active:bg-green-800 text-white rounded-lg p-3 transition-colors touch-manipulation shadow-md"
                  aria-label="Move up"
                >
                  <ChevronUp size={28} strokeWidth={3} />
                </button>
                <div className="flex gap-2 justify-center">
                  <button
                    onClick={() => handleDirectionClick('LEFT')}
                    className="bg-green-600 hover:bg-green-700 active:bg-green-800 text-white rounded-lg p-3 transition-colors touch-manipulation shadow-md"
                    aria-label="Move left"
                  >
                    <ChevronLeft size={28} strokeWidth={3} />
                  </button>
                  <button
                    onClick={() => handleDirectionClick('DOWN')}
                    className="bg-green-600 hover:bg-green-700 active:bg-green-800 text-white rounded-lg p-3 transition-colors touch-manipulation shadow-md"
                    aria-label="Move down"
                  >
                    <ChevronDown size={28} strokeWidth={3} />
                  </button>
                  <button
                    onClick={() => handleDirectionClick('RIGHT')}
                    className="bg-green-600 hover:bg-green-700 active:bg-green-800 text-white rounded-lg p-3 transition-colors touch-manipulation shadow-md"
                    aria-label="Move right"
                  >
                    <ChevronRight size={28} strokeWidth={3} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
