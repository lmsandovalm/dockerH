import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true, // Enable source maps for the build
    rollupOptions: {
      input: {
        main: './src/main.jsx', // Punto de entrada principal
      },
     }, 
  },
  server: {
    sourcemap: true, // Enable source maps for the dev server
  }
});