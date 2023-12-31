/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          20:'#fbcfe8',
          50: '#ec4899',
          70:'#be185d',
          90: '#831843',
          100:'#500724'
        },
        indigo: {
          10: '#a5b4fc',
          20: '#4f46e5',
          30: '#3730a3',
          50: '#312e81',
          90: '#1e1b4b',
        },
        teal: {
          50: '#0f766e',
        },
        blue: {
          70: '#3b82f6',
        },
        yellow: {
          50: '#fde047',
        },
      },
      backgroundImage: {
        'bg-img-1': "url('/laptop.jpg')",
        'bg-img-2': "url('/bookbanner.jpeg')",
        'bg-img-3': "url('/foodbanner.jpg')",
        'bg-img-4': "url('/five.jpg')",
        'bg-img-5': "url('/six.jpg')",
        'bg-img-6': "url('/one.jpg')",
        'bg-img-7': "url('/three.jpg')",
        'bg-img-8': "url('/two.jpg')",
        'bg-img-9': "url('/one.jpg')",

        
      },
      screens: {
        xs: '400px',
        '3xl': '1680px',
        '4xl': '2200px',
      },
      maxWidth: {
        '10xl': '1512px',
      },
      borderRadius: {
        '5xl': '40px',
      },
    },
  },
  plugins: [],
};