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
        `,
      }
    },
  },
  plugins: [],
}