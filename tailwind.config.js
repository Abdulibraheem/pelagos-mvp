/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pelatrade: {
          900: '#1A3C34', // Deep Forest Green (Primary)
          800: '#2F4F4F',
          700: '#3D5C5C',
          500: '#556B2F', // Warm Green
          100: '#F0F4F4', // Lightest Green/Grey
        },
        amber: {
          900: '#78350F',
          500: '#D4AF37', // Gold/Amber (Secondary)
          400: '#E6C200',
          100: '#FFFBE6',
        },
        sand: {
          50: '#FAF9F6', // Off-white
          100: '#F5F5DC', // Beige
          200: '#E8E4C9',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'], // Changing body to sans for UI readability, serif for body content if needed
        display: ['"Playfair Display"', 'serif'],
        body: ['"Lora"', 'serif'], // Per requirements: Serif for body text
      },
    },
  },
  plugins: [],
}
