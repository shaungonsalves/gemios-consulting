/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      colors: {
        gemios: {
          navy: '#0f172a',
          slate: '#1e293b',
          accent: '#0d9488',
          accentDark: '#0f766e',
        },
      },
    },
  },
  plugins: [],
};
