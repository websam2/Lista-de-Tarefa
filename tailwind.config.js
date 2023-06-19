/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      lora:"'Lora', sans-serif",
      mono: ['DM Mono', 'Roboto', 'sans-serif'],  
      
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#1e1f2e',
      'red': '#CA1517',

      //PALHETA
      'azulEscuro':'#2190A3',
      'azulMedio': '#66E8FF',
      'azulClaro': '#48D6F0',
      'laranjaEscuro': '#A35310',
      'laranjaMedio': '#F09448',
    },
    variants: {
      display: ['group-focus'],
      opacity: ['group-focus'],
      inset: ['group-focus'],
    },
  },
    
  plugins: [require("daisyui")],
}
