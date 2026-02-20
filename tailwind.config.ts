import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          cyan: '#2DF7FF',
          violet: '#8A6DFF',
          mint: '#40FFB4'
        }
      },
      boxShadow: {
        glow: '0 0 24px rgba(45,247,255,0.25)'
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(45,247,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(45,247,255,0.08) 1px, transparent 1px)'
      }
    }
  },
  plugins: []
};

export default config;
