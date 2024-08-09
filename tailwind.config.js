/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [    
    './src/app/**/*.{ts,tsx}',
    './src/pages/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
  ],
  theme: {
    fontFamily: {
      'mono': ["Courier New"]
    },
    extend: {
      keyframes:{
        show:{
          "0%":{
            left: "100%"
          },
          "100%":{
            left:"0%"
          }
        },
      },      
      animation:{
        "show-slide":"show 10s infinite"
      },
    },
  },
  plugins: [],
}

