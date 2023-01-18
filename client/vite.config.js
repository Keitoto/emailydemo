import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 3000,
    proxy: {
      '/auth/google': {
        target: 'http://localhost:5000',
        secure: false,
      },
      '^/api/.*': {
        target: 'http://localhost:5000',
        secure: false,
      },
    },
  },
});
