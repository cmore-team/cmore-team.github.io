/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#07070A',
        panel: '#0E0F15',
        brand: '#2DD4CF',
        iris: '#7C6FF0',
        ember: '#FF7A59',
      },
    },
  },
  plugins: [],
}
