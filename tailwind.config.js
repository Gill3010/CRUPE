// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        azulOscuro: '#0b1b2e',
        azulIntermedio: '#1e3a8a',
        azulClaro: '#004aad',
        verdeBoton: '#00c09a',
        blancoTexto: '#ffffff',
        grisClaro: '#d1d5db',
      },
      keyframes: {
        wiggleline: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(4px)' }, // mueve un poquito la línea
        },
      },
      animation: {
        wiggleline: 'wiggleline 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};