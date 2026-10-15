import { defineConfig } from 'vite';

export default defineConfig({
  base: '/dicopsa-web-presentation/',
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['tests/**/*.test.js']
  }
});
