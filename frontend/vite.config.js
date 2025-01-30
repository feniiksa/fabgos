import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        page2: path.resolve(__dirname, 'ui.html'),
        page3: path.resolve(__dirname, 'inner.html'),
        page4: path.resolve(__dirname, 'home.html'),

      },
    },
  },
});