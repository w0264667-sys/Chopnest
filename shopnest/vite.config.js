import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
base: '/Chopnest/', // Nombre exacto de tu repositorio

plugins: [react()],

resolve: {
alias: {
'@': path.resolve(__dirname, './src'),
},
},

build: {
outDir: 'dist',
},
});
