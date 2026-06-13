import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#B0252B',
          50: '#FBEAEB',
          100: '#F4C7C9',
          200: '#E89095',
          300: '#DC5961',
          400: '#C93C44',
          500: '#B0252B',
          600: '#8E1E22',
          700: '#6B161A',
          800: '#480F11',
          900: '#250709',
        },
        ink: {
          DEFAULT: '#0B1220',
          soft: '#1A2233',
          muted: '#4A5468',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      container: {
        center: true,
        padding: { DEFAULT: '1rem', md: '2rem', lg: '3rem' },
        screens: { '2xl': '1280px' },
      },
      boxShadow: {
        card: '0 4px 24px -8px rgba(11, 18, 32, 0.12)',
        'card-hover': '0 12px 40px -12px rgba(11, 18, 32, 0.25)',
      },
    },
  },
  plugins: [],
};

export default config;
