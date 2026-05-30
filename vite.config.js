import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages project site: https://bilalshabbir31.github.io/Portfolio/
  base: process.env.GITHUB_PAGES === 'true' ? '/Portfolio/' : '/',
})

