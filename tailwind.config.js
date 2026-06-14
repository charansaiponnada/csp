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
        portfolio: {
          beige: '#F2EDE4',
          'beige-2': '#E8E2D9',
          ink: '#1A1612',
          'ink-2': '#4A443E',
          'ink-3': '#8A8480',
          sienna: '#C4622D',
          slate: '#4A7FA5',
          rule: '#D4CFC8',
        }
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}