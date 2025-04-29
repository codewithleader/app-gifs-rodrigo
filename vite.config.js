import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: '/app-gifs-rodrigo/', // Configuración para que funcione en github pages. More info: https://vite.dev/guide/static-deploy.html#github-pages
  plugins: [react()],
});
