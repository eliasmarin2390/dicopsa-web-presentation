import { defineConfig } from 'vite';

export default defineConfig({
  base: '/casa-pellas-website/',
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['tests/**/*.test.js']
  }
});
