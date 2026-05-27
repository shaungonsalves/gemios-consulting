/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Noto Sans"',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'sans-serif',
        ],
        serif: [
          '"Noto Serif"',
          'ui-serif',
          'Georgia',
          'serif',
        ],
      },
      colors: {
        gemios: {
          navy: '#0c2340',
          slate: '#1a365d',
          cream: '#FAF8F5',
          accent: '#c5a880',
          accentDark: '#ab8a5f',
        },
      },
    },
  },
  plugins: [],
};
