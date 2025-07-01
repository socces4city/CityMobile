/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          900: '#1e3a8a',
        },
        mystical: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7c3aed',
          800: '#6b21a8',
          900: '#581c87',
        },
        cosmic: {
          50: '#0f0f23',
          100: '#1a1a3a',
          200: '#252547',
          300: '#30305c',
          400: '#3b3b71',
          500: '#4646a0',
          600: '#5151b8',
          700: '#6666d1',
          800: '#7b7bea',
          900: '#9090ff',
        }
      },
      backgroundImage: {
        'gradient-mystical': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-cosmic': 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
        'gradient-starry': 'radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)',
      },
      fontFamily: {
        'mystical': ['Cinzel', 'serif'],
        'elegant': ['Playfair Display', 'serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        },
        'pulse-glow': {
          '0%': { boxShadow: '0 0 20px rgba(168, 85, 247, 0.5)' },
          '100%': { boxShadow: '0 0 40px rgba(168, 85, 247, 0.8)' }
        }
      }
    },
  },
  plugins: [],
}