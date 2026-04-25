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
          DEFAULT: '#2D5BFF',
          glow: 'rgba(45, 91, 255, 0.4)',
        },
        secondary: {
          DEFAULT: '#10B981',
          glow: 'rgba(16, 185, 129, 0.4)',
        },
        accent: {
          DEFAULT: '#F59E0B',
          glow: 'rgba(245, 158, 11, 0.4)',
        },
        background: {
          main: '#0B0E14',
        },
        surface: {
          card: '#151A23',
          hover: '#1A202C',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
      },
      boxShadow: {
        'glow-primary': '0 0 40px rgba(45, 91, 255, 0.15)',
        'glow-secondary': '0 0 40px rgba(16, 185, 129, 0.15)',
        'glow-accent': '0 0 40px rgba(245, 158, 11, 0.15)',
        'strong': '0 25px 50px rgba(0,0,0,0.5)',
      }
    },
  },
  plugins: [],
}
