import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  
  // AJOUTEZ CE BLOC ICI pour corriger l'erreur Vercel :
  build: {
    outDir: 'build', // Force Vite à créer un dossier 'build' au lieu de 'dist'
  },

  // On garde vos configurations actuelles pour le JSX
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.[jt]sx?$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
})