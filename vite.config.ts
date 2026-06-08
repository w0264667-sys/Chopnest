import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/appshopp.co.cu/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
