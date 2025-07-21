/** @type {import('tailwindcss').Config} */

export default {
  // tailwind.config.js
   content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FFF8F0',
          100: '#FFF0E0',
          200: '#FFE4B5',
          300: '#FFDAB9',
          400: '#FFCC8F',
          500: '#FFB366',
          600: '#FF9A3D',
          700: '#E67E22',
          800: '#CC6619',
          900: '#B34D0F'
        },
        cream: {
          50: '#FFFDF7',
          100: '#FFF8DC',
          200: '#FFF2C7',
          300: '#FFECB3',
          400: '#FFE69E',
          500: '#FFE089'
        }
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Inter', 'sans-serif']
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #FFF8F0 0%, #FFE4B5 50%, #FFDAB9 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #FFFDF7 0%, #FFF8DC 100%)'
      }
    },
  },
  plugins: [],
};