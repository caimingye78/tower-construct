import { defineConfig } from 'vite';
export default defineConfig({
  base: '/tower-construct/',
  build: { outDir: 'dist' },
  server: { port: 5173 }
});
