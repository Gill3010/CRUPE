import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/_events/',
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000, // aumenta a 1000kb para menos warnings
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'; // agrupa todas las libs externas en 'vendor.js'
          }
        }
      }
    }
  }
});
