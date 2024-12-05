import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        male: 'male/index.html',
        female: 'female/index.html',
        kids: 'kids/index.html',
        login: 'login/index.html',
        register: 'register/index.html',
        carrito: 'carrito/index.html',
        payment: 'payment/index.html',
        // Agrega más páginas según tu estructura
      }
    }
  }
});
