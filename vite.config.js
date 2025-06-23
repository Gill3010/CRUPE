// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/_events/', // Aquí defines el base path de producción
  plugins: [react()],
});