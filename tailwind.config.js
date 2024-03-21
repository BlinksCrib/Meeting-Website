/** @type {import('tailwindcss').Config} */
export default {
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
        black: '#181818',
        white: '#F2F2F2',
      },
      screens: {
        fd: [{ max: '320px' }],
        lmd: [{ max: '768px' }],
        llg: [{ max: '992px' }],
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        '2xl': '1440px',
      },
      fontFamily: {
        'Ubuntu': ['Ubuntu', 'sans-serif'],
      }
    },
  },
  plugins: [],
}