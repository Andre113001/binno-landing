/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xl': '1440px',
      'tablet': '690px',
      'phone': '250px',      // Custom screen size for phones
      'desktop': '1024px',   // Custom screen size for desktops
      'widescreen': '1440px', // Custom screen size for widescreens
    },
    fontSize: {
      sm: '15px',
      md: '20px',
      'md-lg': '25px',
      lg: '36px',
      xl: '48px',
      '2xl': '96px'
    },
    colors: {
      'primary': "#FF7A00",
      'secondary': "#39A5D0",
      'gray': "#D9D9D9",
      'white': "white"
    },
  },
  plugins: [],
}