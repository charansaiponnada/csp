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
        claude: {
          primary: '#cc785c',
          'primary-active': '#a9583e',
          ink: '#141413',
          body: '#3d3d3a',
          muted: '#6c6a64',
          canvas: '#faf9f5',
          'surface-card': '#efe9de',
          'surface-dark': '#181715',
          'surface-dark-soft': '#1f1e1b',
          'surface-dark-elevated': '#252320',
          'on-dark': '#faf9f5',
          hairline: '#e6dfd8',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['"Cormorant Garamond"', 'EB Garamond', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}