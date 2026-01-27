import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // ═══════════════════════════════════════════════════════════════════════════
      // "Refined Sanctuary" Color Palette
      // Clinical Precision meets Organic Luxury
      // ═══════════════════════════════════════════════════════════════════════════
      colors: {
        // Canvas colors - The breathing room
        canvas: {
          DEFAULT: '#FDFBF7',
          subtle: '#F9F6F0',
          muted: '#F3EDE3',
          emphasis: '#EBE4D6',
        },

        // Primary - Deep Botanical Green (Authority + Nature)
        primary: {
          50: '#f2f7f5',
          100: '#e0ede8',
          200: '#c2dcd1',
          300: '#94c4b0',
          400: '#5fa586',
          500: '#3d8b6b',
          600: '#2d7056',
          700: '#265a47',
          800: '#1F483A', // Main brand color
          900: '#1a3c30',
          950: '#0d211a',
        },

        // Accent - Terracotta Copper (Warmth + Mexican Modernism)
        accent: {
          50: '#fdf6f3',
          100: '#faebe4',
          200: '#f5d5c8',
          300: '#edb9a3',
          400: '#e29574',
          500: '#D4724D', // Primary accent
          600: '#c25a36',
          700: '#a1472c',
          800: '#843c29',
          900: '#6d3526',
          950: '#3a1912',
        },

        // Secondary - Warm Gold (Luxury + Investment)
        secondary: {
          50: '#fdfbf3',
          100: '#faf4e1',
          200: '#f3e6bf',
          300: '#ebd393',
          400: '#e0bc5f',
          500: '#D4A63B', // Investment gold
          600: '#bc8c2d',
          700: '#9c6f27',
          800: '#7f5926',
          900: '#694a23',
          950: '#3c2811',
        },

        // Neutral - Warm Gray Scale
        neutral: {
          50: '#faf9f7',
          100: '#f5f3f0',
          200: '#e8e5e0',
          300: '#d6d2cb',
          400: '#b5afa5',
          500: '#9a9389',
          600: '#7d766c',
          700: '#5f5a52',
          800: '#423e38',
          900: '#2A2722', // Primary text
          950: '#171613',
        },

        // Status colors
        success: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
        },
        warning: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
        },
        error: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
        },
        info: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
      },

      // ═══════════════════════════════════════════════════════════════════════════
      // Typography - Distinctive font stack
      // ═══════════════════════════════════════════════════════════════════════════
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        heading: ['"Libre Baskerville"', 'Georgia', 'serif'],
        body: ['"Source Sans 3"', 'system-ui', 'sans-serif'],
        accent: ['"DM Sans"', 'Arial', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Consolas', 'monospace'],
      },

      fontSize: {
        xs: ['0.75rem', { lineHeight: '1.5' }],
        sm: ['0.875rem', { lineHeight: '1.5' }],
        base: ['1rem', { lineHeight: '1.625' }],
        lg: ['1.125rem', { lineHeight: '1.7' }],
        xl: ['1.25rem', { lineHeight: '1.5' }],
        '2xl': ['1.5rem', { lineHeight: '1.4' }],
        '3xl': ['1.875rem', { lineHeight: '1.3' }],
        '4xl': ['2.25rem', { lineHeight: '1.2' }],
        '5xl': ['3rem', { lineHeight: '1.15' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
        '7xl': ['4.5rem', { lineHeight: '1.05' }],
        '8xl': ['6rem', { lineHeight: '1' }],
      },

      // ═══════════════════════════════════════════════════════════════════════════
      // Container widths
      // ═══════════════════════════════════════════════════════════════════════════
      maxWidth: {
        'container-xs': '320px',
        'container-sm': '640px',
        'container-md': '768px',
        'container-lg': '1024px',
        'container-xl': '1280px',
        'container-2xl': '1440px',
        'container-70vw': '70vw', // Consistent site-wide container (non-mobile)
      },
      width: {
        'container-70vw': '70vw', // For use with w- prefix
      },

      // ═══════════════════════════════════════════════════════════════════════════
      // Border radius - Refined, organic edges
      // ═══════════════════════════════════════════════════════════════════════════
      borderRadius: {
        sm: '0.25rem',
        DEFAULT: '0.5rem',
        md: '0.5rem',
        lg: '0.75rem',
        xl: '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },

      // ═══════════════════════════════════════════════════════════════════════════
      // Shadows - Warm-tinted for organic feel
      // ═══════════════════════════════════════════════════════════════════════════
      boxShadow: {
        'xs': '0 1px 2px rgba(42, 39, 34, 0.04)',
        'sm': '0 2px 4px rgba(42, 39, 34, 0.06)',
        'card': '0 4px 8px -2px rgba(42, 39, 34, 0.08), 0 2px 4px -1px rgba(42, 39, 34, 0.04)',
        'card-hover': '0 12px 24px -4px rgba(42, 39, 34, 0.10), 0 4px 8px -2px rgba(42, 39, 34, 0.04)',
        'lg': '0 12px 24px -4px rgba(42, 39, 34, 0.10), 0 4px 8px -2px rgba(42, 39, 34, 0.04)',
        'xl': '0 20px 40px -8px rgba(42, 39, 34, 0.12), 0 8px 16px -4px rgba(42, 39, 34, 0.06)',
        '2xl': '0 32px 64px -12px rgba(42, 39, 34, 0.16), 0 12px 24px -6px rgba(42, 39, 34, 0.08)',
        'inner-sm': 'inset 0 1px 2px rgba(42, 39, 34, 0.06)',
        'inner': 'inset 0 2px 4px rgba(42, 39, 34, 0.08)',
        'glow-primary': '0 0 24px -4px rgba(31, 72, 58, 0.25)',
        'glow-accent': '0 0 24px -4px rgba(212, 114, 77, 0.25)',
        'glow-gold': '0 0 24px -4px rgba(212, 166, 59, 0.25)',
        'nav': '0 1px 3px rgba(42, 39, 34, 0.08)',
      },

      // ═══════════════════════════════════════════════════════════════════════════
      // Animation - Botanical timing
      // ═══════════════════════════════════════════════════════════════════════════
      transitionDuration: {
        DEFAULT: '200ms',
        '75': '75ms',
        '100': '100ms',
        '150': '150ms',
        '200': '200ms',
        '300': '300ms',
        '500': '500ms',
        '700': '700ms',
        '1000': '1000ms',
      },

      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'out-quart': 'cubic-bezier(0.25, 1, 0.5, 1)',
        'in-out-quart': 'cubic-bezier(0.76, 0, 0.24, 1)',
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },

      animation: {
        'fade-in': 'fadeIn 0.5s ease-out-expo',
        'slide-up': 'slideUp 0.6s ease-out-expo',
        'slide-down': 'slideDown 0.6s ease-out-expo',
        'slide-in-left': 'slideInLeft 0.6s ease-out-expo',
        'slide-in-right': 'slideInRight 0.6s ease-out-expo',
        'scale-in': 'scaleIn 0.4s ease-out-expo',
        'shimmer': 'shimmer 2s linear infinite',
        'pulse-subtle': 'pulse-subtle 3s ease-in-out infinite',
        'float': 'float 4s ease-in-out infinite',
      },

      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          from: { opacity: '0', transform: 'translateY(-24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          from: { opacity: '0', transform: 'translateX(-24px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          from: { opacity: '0', transform: 'translateX(24px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          from: { opacity: '0', transform: 'scale(0.95)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },

      // ═══════════════════════════════════════════════════════════════════════════
      // Background
      // ═══════════════════════════════════════════════════════════════════════════
      backgroundImage: {
        'gradient-warm-glow': 'radial-gradient(ellipse at 50% 0%, rgba(212, 166, 59, 0.08) 0%, transparent 60%)',
        'gradient-card-shine': 'linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 60%)',
        'paper-texture': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
      },

      backdropBlur: {
        nav: '12px',
        'glass': '16px',
      },
    },
  },
  plugins: [],
}

export default config
