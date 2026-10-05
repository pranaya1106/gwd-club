/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand palette
        gwd: {
          black: '#000000',
          'black-soft': '#0a0a0a',
          'black-elevated': '#111111',
          'black-card': '#161616',
          'black-border': '#1e1e1e',
          'black-hover': '#1a1a1a',
        },
        red: {
          DEFAULT: '#ff2a2a',
          50: '#fff0f0',
          100: '#ffe0e0',
          200: '#ffb8b8',
          300: '#ff8a8a',
          400: '#ff5a5a',
          500: '#ff2a2a',
          600: '#e51e1e',
          700: '#cc1818',
          800: '#991212',
          900: '#660c0c',
        },
        green: {
          DEFAULT: '#00ff88',
          50: '#e6fff5',
          100: '#ccffe8',
          200: '#99ffd1',
          300: '#66ffba',
          400: '#33ffa1',
          500: '#00ff88',
          600: '#00cc6e',
          700: '#009955',
          800: '#006638',
          900: '#00331c',
        },
        // Neutral tones
        ink: {
          50: '#f5f5f5',
          100: '#e0e0e0',
          200: '#c0c0c0',
          300: '#a0a0a0',
          400: '#808080',
          500: '#606060',
          600: '#484848',
          700: '#333333',
          800: '#222222',
          900: '#111111',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      fontSize: {
        'giant': ['clamp(3rem, 12vw, 11rem)', { lineHeight: '0.9', letterSpacing: '-0.04em' }],
        'mega': ['clamp(2.5rem, 8vw, 7rem)', { lineHeight: '0.95', letterSpacing: '-0.03em' }],
        'hero': ['clamp(2rem, 5vw, 4rem)', { lineHeight: '1', letterSpacing: '-0.02em' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'pulse-red': 'pulseRed 2s ease-in-out infinite',
        'pulse-green': 'pulseGreen 2s ease-in-out infinite',
        'scan-line': 'scanLine 4s linear infinite',
        'glow-red': 'glowRed 3s ease-in-out infinite',
        'glow-green': 'glowGreen 3s ease-in-out infinite',
        'gradient-shift': 'gradientShift 6s ease infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseRed: {
          '0%, 100%': { opacity: '0.4', boxShadow: '0 0 0 0 rgba(255,42,42,0.3)' },
          '50%': { opacity: '1', boxShadow: '0 0 20px 4px rgba(255,42,42,0.15)' },
        },
        pulseGreen: {
          '0%, 100%': { opacity: '0.4', boxShadow: '0 0 0 0 rgba(0,255,136,0.3)' },
          '50%': { opacity: '1', boxShadow: '0 0 20px 4px rgba(0,255,136,0.15)' },
        },
        scanLine: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        glowRed: {
          '0%, 100%': { textShadow: '0 0 20px rgba(255,42,42,0.3)' },
          '50%': { textShadow: '0 0 40px rgba(255,42,42,0.6), 0 0 80px rgba(255,42,42,0.2)' },
        },
        glowGreen: {
          '0%, 100%': { textShadow: '0 0 20px rgba(0,255,136,0.3)' },
          '50%': { textShadow: '0 0 40px rgba(0,255,136,0.6), 0 0 80px rgba(0,255,136,0.2)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
};
