import { defineConfig } from 'vite';

export default defineConfig({
  base: '/dicopsa-corporate-website/',
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['tests/**/*.test.js']
  }
});
