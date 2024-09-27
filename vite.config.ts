import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vitest/config';
import * as path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {},
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
  },
});
