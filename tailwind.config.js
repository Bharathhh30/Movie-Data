/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}","./components/**/*.{js,jsx,ts,tsx}"],
  // this is done becuz , /app matrame unde appudu only app folder lo unna js ts jsx tsx files ki matrame tailwind apply avtad
  // adhe ippudu components folder ni include chesamu so ikkada kuda apply avtad (very important) , always remeber
  
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors : {
        primary : '#030014',
        secondary : '#151312',
        light : {
          100 : '#D6C6FF',
          200 : '#A8B5DB',
          300 : '#9CA4AB',
        },
        dark : {
          100 : '#221F3D',
          200 : '#0F0d23'
        },
        accent : '#AB8BFF',
      }
    },
  },
  plugins: [],
}