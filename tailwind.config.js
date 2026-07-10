/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#eef2f8',
          100: '#d6deec',
          200: '#aebdd8',
          300: '#7e93bf',
          400: '#516ca0',
          500: '#3a5286',
          600: '#2c3f6b',
          700: '#1f2d4f',
          800: '#152039',
          900: '#0d1628',
          950: '#070d1a',
        },
        gold: {
          50: '#fdf9ec',
          100: '#faf0cc',
          200: '#f4df95',
          300: '#eec85d',
          400: '#e9b13a',
          500: '#d4952a',
          600: '#b67422',
          700: '#92531f',
          800: '#78421f',
          900: '#66381d',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.7s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #eec85d 0%, #d4952a 50%, #eec85d 100%)',
        'navy-radial': 'radial-gradient(ellipse at top, #152039 0%, #070d1a 70%)',
      },
    },
  },
  plugins: [],
};
