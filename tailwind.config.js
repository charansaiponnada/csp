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
        apple: {
          blue: '#0066cc',
          'blue-focus': '#0071e3',
          'blue-dark': '#2997ff',
          ink: '#1d1d1f',
          'ink-muted': '#7a7a7a',
          canvas: '#ffffff',
          parchment: '#f5f5f7',
          'tile-1': '#272729',
          'tile-2': '#2a2a2c',
          black: '#000000',
          hairline: '#e0e0e0',
        }
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"SF Pro Text"', 'sans-serif'],
        display: ['-apple-system', 'BlinkMacSystemFont', '"SF Pro Display"', 'sans-serif'],
      },
      fontSize: {
        'apple-body': ['17px', '1.47'],
      }
    },
  },
  plugins: [],
}