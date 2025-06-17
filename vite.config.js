import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/film-app/', // ajoute ici ton nom de repo
  plugins: [react()],
});
