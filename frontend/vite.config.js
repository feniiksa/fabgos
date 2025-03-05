import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        page2: path.resolve(__dirname, 'ui.html'),
        page3: path.resolve(__dirname, 'inner.html'),
      },
    },
  },
  resolve: {
    alias: {
      '@img': path.resolve(__dirname, 'src/img'), // Алиас для папки с изображениями
    },
  },
});