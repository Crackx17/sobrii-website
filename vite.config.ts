import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    // Exclure uniquement si lucide-react pose un problème
    exclude: ['lucide-react'],
  },
  resolve: {
    alias: {
      '@': '/src', // Utilisez '@' comme alias pour 'src'
    },
  },
  server: {
    port: 3002, // Changez le port du serveur si nécessaire
    open: true, // Ouvre automatiquement le navigateur à l'exécution
  },
  build: {
    outDir: 'dist', // Dossier de sortie de production
  },
});
