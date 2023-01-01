/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'surface-color-dark-mode': 'rgba(255, 255, 255, 0.1)',
        'stroke-color-dark-mode': 'rgba(255, 255, 255, 0.5)',
        'surface-color-dark-mode-hover': 'rgba(255, 255, 255, 0.05)',
        'highlight-color-dark-mode': 'rgba(255, 255, 255, 0.2)',
        'highlight-color-light-mode': 'rgba(0, 0, 0, 0.1)',
        'surface-color-light-mode': 'rgba(0, 0, 0, 0.05)',
        'stroke-color-light-mode': 'rgba(0, 0, 0, 0.5)',
        'surface-color-light-mode-hover': 'rgba(0, 0, 0, 0.02)'
      }
    },
  },
  plugins: [],
}
