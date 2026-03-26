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
        cream: '#e4e4e7',
        charcoal: '#101012',
        'charcoal-light': '#161618',
        'charcoal-elevated': '#1c1c1f',
        accent: '#38bdf8',
        'accent-hover': '#7dd3fc',
        'accent-deep': '#0ea5e9',
        rule: '#2a2a2e',
        'text-secondary': '#8b8b94',
        'text-muted': '#5a5a63',
      },
      fontFamily: {
        serif: ['var(--font-dm-serif)', 'serif'],
        sans: ['var(--font-outfit)', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      fontSize: {
        'display-xl': ['clamp(3.5rem, 12vw, 10rem)', { lineHeight: '0.9', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(2rem, 6vw, 5.5rem)', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(1.5rem, 4vw, 3.5rem)', { lineHeight: '1.05', letterSpacing: '-0.01em' }],
        'display-sm': ['clamp(1.25rem, 2.5vw, 2rem)', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
      },
      animation: {
        'scroll-hint': 'scroll-hint 2s ease-in-out infinite',
      },
      keyframes: {
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
