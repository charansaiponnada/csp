/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FBF8F3',
          100: '#F7F2E8',
          200: '#F2EDE4',
          300: '#E8E2D9',
          400: '#D4CFC8',
          500: '#B8B2A8',
          600: '#8A8480',
          700: '#4A443E',
          800: '#2D2824',
          900: '#1A1612',
        },
        ink: {
          DEFAULT: '#1A1612',
          light: '#4A443E',
          lighter: '#8A8480',
        },
        sienna: {
          DEFAULT: '#C4622D',
          light: '#D4784A',
          dark: '#A04E20',
        },
        slate: {
          DEFAULT: '#4A7FA5',
          light: '#6B9FC4',
          dark: '#2E5F82',
        },
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
        display: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '88rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'slide-in': 'slideIn 0.6s ease-out forwards',
        'typewriter': 'typewriter 0.05s steps(1) forwards',
        'blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-16px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
