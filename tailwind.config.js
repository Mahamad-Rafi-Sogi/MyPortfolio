/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        darkBg: '#121212',
        darkCard: '#1e1e1e',
        darkText: '#e0e0e0',
        darkBorder: '#333333',
      },
    },
  },
  plugins: [],
};
