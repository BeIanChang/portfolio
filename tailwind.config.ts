import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0f172a',
        ember: '#f97316',
        lagoon: '#22d3ee',
        parchment: '#f8f4eb'
      },
      fontFamily: {
        sans: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-fraunces)', 'serif']
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(15, 23, 42, 0.08), 0 20px 60px -40px rgba(15, 23, 42, 0.45)'
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' }
        },
        reveal: {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        floaty: 'floaty 8s ease-in-out infinite',
        reveal: 'reveal 0.8s ease-out both'
      }
    }
  },
  plugins: []
};

export default config;
