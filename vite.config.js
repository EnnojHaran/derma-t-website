import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Repo name — required so assets resolve on GitHub Pages
  // (https://ennojharan.github.io/derma-t-website/).
  base: '/derma-t-website/',
})
