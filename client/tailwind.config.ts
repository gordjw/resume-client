import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['nunito', 'raleway', 'sans-serif'],
      serif: ['aleo', 'Merriweather', 'serif'],
    },
    extend: {
      backgroundImage: {
        'hero-background': "url('/images/bg-1.jpg')",
      }
    },
  },
  plugins: [],
} satisfies Config

