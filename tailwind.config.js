/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}', './index.html'],
  theme: {
    extend: {
      colors: {
        ocean: {
          deep: '#0a1628',
          mid: '#1a3a5c',
          surface: '#2e6ea6',
          light: '#4da6d4',
          foam: '#a8d8ea',
        },
        parchment: {
          dark: '#8b6914',
          mid: '#c49a2a',
          light: '#e8d5a3',
          pale: '#f5ecd7',
        },
        crimson: '#8b1a1a',
        gold: '#d4a017',
        wood: '#4a2c0a',
      },
      fontFamily: {
        display: ['"Cinzel Decorative"', 'serif'],
        heading: ['Cinzel', 'serif'],
        body: ['Lato', 'sans-serif'],
      },
      animation: {
        'wave': 'wave 8s ease-in-out infinite',
        'wave-slow': 'wave 12s ease-in-out infinite',
        'wave-fast': 'wave 5s ease-in-out infinite',
        'ship-bob': 'shipBob 4s ease-in-out infinite',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'spin-slower': 'spin 40s linear infinite reverse',
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'ship-sail': 'shipSail 30s linear infinite',
      },
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'translateX(0) translateY(0)' },
          '50%': { transform: 'translateX(-25px) translateY(-10px)' },
        },
        shipBob: {
          '0%, 100%': { transform: 'translateY(0) rotate(-1.5deg)' },
          '50%': { transform: 'translateY(-12px) rotate(1.5deg)' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(212,160,23,0.4)' },
          '50%': { boxShadow: '0 0 60px rgba(212,160,23,0.9)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.2' },
          '50%': { opacity: '1' },
        },
        shipSail: {
          '0%': { transform: 'translateX(-200px)' },
          '100%': { transform: 'translateX(calc(100vw + 200px))' },
        },
      },
    },
  },
  plugins: [],
};
