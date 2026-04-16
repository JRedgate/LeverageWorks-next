import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0F172A',
          slate: '#334155',
          gold: '#CA8A04',
          surface: '#F8FAFC',
          text: '#020617',
          graphite: '#0F172A',
          ash: '#334155',
          white: '#FFFFFF',
          teal: '#CA8A04',
          copper: '#CA8A04',
          beige: '#F1F5F9',
        },
      },
      fontFamily: {
        sans: ['"Source Sans 3"', 'sans-serif'],
        display: ['"Lexend"', 'sans-serif'],
        serif: ['"Lexend"', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'progress': 'progress 2s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        progress: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
