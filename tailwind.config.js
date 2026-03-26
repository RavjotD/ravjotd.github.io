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
        cream: '#f4f4f5',
        charcoal: '#09090b',
        'charcoal-light': '#111114',
        'charcoal-elevated': '#18181b',
        accent: '#38bdf8',
        'accent-hover': '#7dd3fc',
        'accent-deep': '#0284c7',
        rule: '#27272a',
        'text-secondary': '#a1a1aa',
        'text-muted': '#52525b',
      },
      fontFamily: {
        serif: ['var(--font-dm-serif)', 'serif'],
        sans: ['var(--font-outfit)', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      fontSize: {
        'display-xl': ['clamp(3rem, 15vw, 12rem)', { lineHeight: '0.9', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(2rem, 8vw, 7rem)', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(1.5rem, 5vw, 4rem)', { lineHeight: '1', letterSpacing: '-0.01em' }],
      },
      animation: {
        'grain': 'grain 8s steps(10) infinite',
        'scroll-hint': 'scroll-hint 2s ease-in-out infinite',
      },
      keyframes: {
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-5%, -10%)' },
          '20%': { transform: 'translate(-15%, 5%)' },
          '30%': { transform: 'translate(7%, -25%)' },
          '40%': { transform: 'translate(-5%, 25%)' },
          '50%': { transform: 'translate(-15%, 10%)' },
          '60%': { transform: 'translate(15%, 0%)' },
          '70%': { transform: 'translate(0%, 15%)' },
          '80%': { transform: 'translate(3%, 35%)' },
          '90%': { transform: 'translate(-10%, 10%)' },
        },
        'scroll-hint': {
          '0%': { opacity: '0', transform: 'translateY(-8px)' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0', transform: 'translateY(8px)' },
        },
      },
    },
  },
  plugins: [],
}
