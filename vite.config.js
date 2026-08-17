import { defineConfig } from 'vite';
export default defineConfig({
  base: '/tower-rise/',
  build: { outDir: 'dist' },
  server: { port: 5173 }
});
