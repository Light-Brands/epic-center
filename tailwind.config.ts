import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Color palette from design tokens
      colors: {
        primary: {
          50: '#f0f7f7',
          100: '#d9ebea',
          200: '#b3d7d5',
          300: '#80bbb8',
          400: '#4d9f9a',
          500: '#2d7a76',
          600: '#1a5a57',
          700: '#1a4a47',
          800: '#1a3a3a', // Main brand color
          900: '#152c2c',
        },
        secondary: {
          50: '#faf8f1',
          100: '#f2edd9',
          200: '#e5dbb3',
          300: '#d4c488',
          400: '#c4a962', // Main accent color (Warm Gold)
          500: '#b39347',
          600: '#9a7a3a',
          700: '#7d6131',
          800: '#674f2d',
          900: '#574329',
        },
        neutral: {
          50: '#fafaf8', // Page background
          100: '#f5f5f2', // Card background
          200: '#e8e8e3',
          300: '#d4d4cd',
          400: '#a8a89e',
          500: '#7a7a70',
          600: '#5c5c54',
          700: '#454540', // Body text
          800: '#2e2e2a',
          900: '#1a1a18', // Headings
        },
        success: {
          50: '#f0fdf4',
          500: '#22c55e',
          700: '#15803d',
        },
        warning: {
          50: '#fffbeb',
          500: '#f59e0b',
          700: '#b45309',
        },
        error: {
          50: '#fef2f2',
          500: '#ef4444',
          700: '#b91c1c',
        },
        info: {
          50: '#eff6ff',
          500: '#3b82f6',
          700: '#1d4ed8',
        },
      },
      // Typography from design tokens
      fontFamily: {
        heading: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        accent: ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1.5' }],
        sm: ['0.875rem', { lineHeight: '1.5' }],
        base: ['1rem', { lineHeight: '1.5' }],
        lg: ['1.125rem', { lineHeight: '1.625' }],
        xl: ['1.25rem', { lineHeight: '1.375' }],
        '2xl': ['1.5rem', { lineHeight: '1.375' }],
        '3xl': ['1.875rem', { lineHeight: '1.25' }],
        '4xl': ['2.25rem', { lineHeight: '1.25' }],
        '5xl': ['3rem', { lineHeight: '1.25' }],
        '6xl': ['3.75rem', { lineHeight: '1.25' }],
      },
      // Container sizes from design tokens
      maxWidth: {
        'container-xs': '320px',
        'container-sm': '640px',
        'container-md': '768px',
        'container-lg': '1024px',
        'container-xl': '1280px',
        'container-2xl': '1440px',
      },
      // Border radius from design tokens
      borderRadius: {
        sm: '2px',
        md: '4px',
        lg: '8px',
        xl: '12px',
        '2xl': '16px',
      },
      // Box shadow for cards
      boxShadow: {
        card: '0 2px 8px rgba(26, 58, 58, 0.08)',
        'card-hover': '0 4px 16px rgba(26, 58, 58, 0.12)',
        nav: '0 1px 3px rgba(26, 58, 58, 0.1)',
      },
      // Animation durations
      transitionDuration: {
        DEFAULT: '200ms',
        fast: '150ms',
        slow: '300ms',
      },
      // Animation easing
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      // Background blur for nav
      backdropBlur: {
        nav: '8px',
      },
    },
  },
  plugins: [],
}

export default config
