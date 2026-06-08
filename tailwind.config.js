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
        dribbble: {
          accent: '#D4FF00',
          'accent-hover': '#B8E600',
          canvas: '#030303',
          'surface-1': '#0A0A0A',
          'surface-2': '#141414',
          border: '#1F1F1F',
          text: '#F3F3F3',
          muted: '#7A7A7A',
        }
      },
      fontFamily: {
        sans: ['"Manrope"', 'sans-serif'],
        display: ['"Bricolage Grotesque"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}