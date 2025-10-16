/** @type {import('tailwindcss').Config} */
export default {
  corePlugins: {
    preflight: false, //  Esto evita que Tailwind borre los estilos de Bootstrap
  },
  content: [
    ".MIVI.jsx",
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}



