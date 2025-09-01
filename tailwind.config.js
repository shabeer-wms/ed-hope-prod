/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#e6f0fa',
          100: '#cce0f5',
          200: '#99c1eb',
          300: '#66a2e1',
          400: '#3383d7',
          500: '#0064cd',
          600: '#005bb7',
          700: '#0052a1',
          800: '#00498b',
          900: '#001d72',
        },
        accent: {
          50: '#e6f7f5',
          100: '#ccefeb',
          200: '#99dfd7',
          300: '#66cfc3',
          400: '#33bfaf',
          500: '#18a999',
          600: '#15968a',
          700: '#12837b',
          800: '#0f706c',
          900: '#0c5d5d',
        },
        neutral: {
          50: '#ffffff',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#333333',
          900: '#262626',
        }
      },
    },
  },
  plugins: [],
};