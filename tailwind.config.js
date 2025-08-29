/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        'spin-load': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'spin-loader': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
        'spin-loadest': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      },
      animation: {
        'spin-load': 'spin-load 8s linear infinite', 
        'spin-loader': 'spin-loader 12s linear infinite', 
        'spin-loadest': 'spin-loadest 16s linear infinite', 
      }
    },
  },
  plugins: [],
}

