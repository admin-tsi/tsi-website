/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0B2D36',
        secondary: '#E9C168',
        accent: '#EADA9C',
        accent2: '#F2EFE6',
        neutral: '#1B1F20',
      },
      fontFamily: {
        clash: ['var(--clash-display-font)'],
        cinzel: ['var(--cinzel-font)'],
      },
      fontSize: {
        xxs: '.65rem',
        md: '1rem',
      },
    },
  },
  plugins: [],
};
