import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        male: 'male/index.html',
        // Agrega más páginas según tu estructura
      }
    }
  }
});
