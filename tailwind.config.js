/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-sidebar': `
          inset 0 0 0px 0px #a855f7,
          inset 0 0 0px #a855f7,
          inset 0 0 0px #a855f7,
          inset 0 0 0px #0ff,
          5px 0 500px #a855f7,
          -50px 0 500px #10b981
        `
      },
      keyframes: {
        'text-legendary': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        'text-legendary': 'text-legendary 6s infinite',
      },
      fontFamily: {
        montserrat: ['montserrat', 'sans-serif'],
        supercell: ['supercell-magic'],
        cubano: ['cubano'],
        modak: ['Modak'],
        walsheim: ['gt walsheim pro']
      },
      screens: {
        'fullscreen': { 'raw': '(min-width: 1920px) and (min-height: 1080px)' },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.unset-all': {
          all: 'unset',
        }
      }
      addUtilities(newUtilities)
    },

  ],
}