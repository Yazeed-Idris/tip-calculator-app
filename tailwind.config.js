/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  mode: process.env.NODE_ENV? 'jit' : undefined,
  theme: {
    extend: {
      colors: {
        'Button-Active': '#9fe2e8',
        'Strong-Cyan': 'hsl(172, 67%, 45%)',
        'Very-Dark-Cyan': 'hsl(183, 100%, 15%)',
        'Dark-Grayish-Cyan': 'hsl(186, 14%, 43%)',
        'Grayish-Cyan': 'hsl(184, 14%, 56%)',
        'Light-Grayish-Cyan': 'hsl(185, 41%, 84%)',
        'Very-Light-Grayish-Cyan': 'hsl(189, 41%, 97%)',
        'White': 'hsl(0, 0%, 100%)',
      }
    },
  },
  plugins: [],
}
